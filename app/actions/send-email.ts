"use server"

export interface ContactFormState {
  success: boolean
  error: string | null
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

export async function sendContactEmail(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = (formData.get("name") as string)?.trim()
  const phone = (formData.get("phone") as string)?.trim()
  const email = (formData.get("email") as string)?.trim()
  const message = (formData.get("message") as string)?.trim()

  if (!name || !phone || !message) {
    return { success: false, error: "Proszę wypełnić wszystkie wymagane pola." }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return { success: false, error: "Błąd konfiguracji serwera. Spróbuj ponownie później." }
  }

  const contactEmail = process.env.CONTACT_EMAIL
  if (!contactEmail) {
    return { success: false, error: "Błąd konfiguracji serwera. Spróbuj ponownie później." }
  }

  const safeName = escapeHtml(name)
  const safePhone = escapeHtml(phone)
  const safeEmail = escapeHtml(email || "Nie podano")
  const safeMessage = escapeHtml(message)

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Fura Piany <onboarding@resend.dev>",
        to: [contactEmail],
        subject: `Nowe zapytanie od ${name}`,
        reply_to: email ? email : undefined,
        html: `
          <h2 style="color: #0a9bd7;">Nowa wiadomość z formularza kontaktowego</h2>
          <table style="border-collapse: collapse; width: 100%; max-width: 600px; font-family: sans-serif;">
            <tr>
              <td style="padding: 10px 14px; font-weight: bold; border-bottom: 1px solid #eee;">Imię:</td>
              <td style="padding: 10px 14px; border-bottom: 1px solid #eee;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 14px; font-weight: bold; border-bottom: 1px solid #eee;">Telefon:</td>
              <td style="padding: 10px 14px; border-bottom: 1px solid #eee;">${safePhone}</td>
            </tr>
            <tr>
              <td style="padding: 10px 14px; font-weight: bold; border-bottom: 1px solid #eee;">E-mail:</td>
              <td style="padding: 10px 14px; border-bottom: 1px solid #eee;">${safeEmail}</td>
            </tr>
          </table>
          <h3 style="margin-top: 20px;">Wiadomość:</h3>
          <p style="background: #f5f5f5; padding: 16px; border-radius: 8px; white-space: pre-wrap; font-family: sans-serif;">${safeMessage}</p>
          <p style="color: #999; font-size: 12px; margin-top: 24px;">Wysłano z formularza na stronie furapiany.pl</p>
        `,
      }),
    })

        if (!res.ok) {
      // DODAJ TEN KOD:
      const errorText = await res.text();
      console.log("Resend error response:", errorText);
      console.log("Resend status:", res.status);
      
      return { success: false, error: "Nie udało się wysłać wiadomości. Spróbuj ponownie." }
    }

    return { success: true, error: null }
  } catch (error) {
    // ZMIENIAMY TEŻ TEN CATCH:
    console.log("Fetch error:", error);
    return { success: false, error: "Nie udało się wysłać wiadomości. Spróbuj ponownie później." }
  }
}
