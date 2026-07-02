"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="form-panel form-success" role="status">
        <div className="form-success-icon" aria-hidden="true">
          ✓
        </div>
        <h3>Message received</h3>
        <p>Thank you for reaching out. We&apos;ll respond within 1–2 business days.</p>
        <button type="button" className="btn btn-outline" onClick={() => setSubmitted(false)}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="form-panel contact-form" onSubmit={handleSubmit}>
      <h3 className="form-title">Send a message</h3>
      <div className="form-row">
        <label className="field">
          <span>Name</span>
          <input type="text" name="name" required autoComplete="name" placeholder="Your name" />
        </label>
        <label className="field">
          <span>Email</span>
          <input type="email" name="email" required autoComplete="email" placeholder="you@example.com" />
        </label>
      </div>
      <label className="field">
        <span>Message</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us about your inquiry or custom design idea..."
        />
      </label>
      <button type="submit" className="btn btn-primary">
        Send Message
      </button>
    </form>
  );
}
