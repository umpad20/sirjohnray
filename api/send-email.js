import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required form fields.' });
    }

    try {
      const { data, error } = await resend.emails.send({
        from: 'onboarding@resend.dev', // IMPORTANT: Replace with your verified domain from Resend
        to: ['your-email@example.com'], // IMPORTANT: Replace with the email you want to receive messages at
        subject: `New message from ${name} via your portfolio`,
        html: `<p>You have a new message from your portfolio contact form.</p>
               <p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong></p>
               <p>${message}</p>`,
      });

      if (error) {
        console.error('Resend API Error:', error);
        return res.status(400).json({ error: error.message });
      }

      return res.status(200).json({ message: 'Email sent successfully!' });
    } catch (e) {
      console.error('Server Error:', e);
      return res.status(500).json({ error: 'Something went wrong.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
};
