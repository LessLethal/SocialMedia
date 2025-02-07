import "../terms.css";
import { Link } from "react-router-dom";

function Terms() {
  return (
    <>
      <div class="termsOfService">
        <button >
          <Link to="/signup" className="buttonTerms">Back to SignUp</Link>
        </button>

        <h1>Last Updated: 2024-12-06</h1>
        <p>
          Welcome to Omeglo. By using our services, you agree to comply with and
          be bound by the following Terms of Service ("Terms"). These Terms
          outline the rules and guidelines for your use of our website and
          services and are in compliance with the General Data Protection
          Regulation (GDPR), so no worries—your data is safe with us. Seriously,
          we got your back. Please read these Terms carefully. If you do not
          agree to them, do not use our services.
        </p>

        <h1>1. Acceptance of Terms</h1>
        <p>
          By accessing or using Omeglo, you agree to comply with these Terms and
          any applicable laws and regulations. If you disagree with any part of
          these Terms, you are not allowed to access or use our services.
        </p>

        <h1>2. Changes to the Terms</h1>
        <p>
          We may update our Terms from time to time. When we do, we’ll post the
          updated version on this page and update the "Last Updated" date at the
          top of this document. You’re responsible for reviewing the Terms
          regularly, but we promise not to make them harder to read than a
          bedtime story. If you continue to use our services after changes are
          made, it means you agree to the new Terms. No small print tricks here.
        </p>

        <h1>3. Account Creation and Responsibilities</h1>
        <p>
          To use certain features of our website or app, you might need to
          create an account. When doing so, you agree to:
        </p>
        <ul>
          <li>Provide accurate, complete, and current information.</li>
          <li>Keep your account information secure.</li>
          <li>
            Keep your password to yourself—sharing it with your pet turtle is
            not a good idea.
          </li>
          <li>Notify us of any unauthorized use of your account.</li>
        </ul>

        <h1>4. User Conduct</h1>
        <p>
          You agree to use Oemeglo responsibly and in accordance with applicable
          laws. Please don’t do anything like:
        </p>
        <ul>
          <li>Hacking, phishing, or any illegal activities.</li>
          <li>Uploading harmful content (viruses, malware, bad vibes).</li>
          <li>
            Spamming other users or being rude (be a nice human, or robot if
            you’re one of those).
          </li>
        </ul>

        <h1>5. Privacy and Data Protection</h1>
        <p>
          Under the GDPR, we take your privacy seriously. Here’s a quick
          breakdown of what we do with your data:
        </p>
        <ul>
          <li>
            What we collect: Your personal data (name, email, etc.) to provide
            our services and improve your experience.
          </li>
          <li>
            Why we collect it: So we can deliver the best user experience, and
            because, well, we need it to make things work.
          </li>
          <li>
            How we protect it: With the latest and greatest security measures,
            because you deserve the best.
          </li>
          <li>
            Who we share it with: We don’t sell your data. Ever. But we may
            share it with trusted service providers to help us provide our
            services (they’re all about keeping things legit).
          </li>
        </ul>

        <h1>6. Cookies</h1>
        <p>
          We use cookies to enhance your experience on our site. By continuing
          to browse, you agree to our use of cookies. We promise, they’re not
          the kind you eat, but they help make your experience better.
        </p>

        <h1>7. Intellectual Property</h1>
        <p>
          All content, logos, designs, text, graphics, and other materials
          available through Omeglo are our property or the property of our
          licensors. You may not use any of this without our permission. No
          stealing, okay?
        </p>

        <h1>8. Termination of Service</h1>
        <p>
          We can suspend or terminate your access to our services if you break
          the rules (e.g., by being rude or using our service for malicious
          purposes). But don’t worry, we’ll try to give you a heads-up first. We
          believe in second chances (unless you’re a robot from the future here
          to take over the world).
        </p>

        <h1>9. Limitation of Liability</h1>
        <p>
          We’re doing our best to keep everything running smoothly, but
          sometimes stuff happens (like internet gremlins or unexpected
          maintenance). We’re not liable for any loss of data, damage to your
          device, or anything else that might go wrong while using our services.
        </p>

        <h1>10. Dispute Resolution</h1>
        <p>
          If something goes wrong, we’ll try to resolve it amicably. If we
          can’t, we may need to use a dispute resolution method that you’ll find
          in our separate Dispute Resolution Policy (it’s there for a reason!).
          Let’s hope we don’t get to that point—there are more fun things to do!
        </p>

        <h1>11. Third-Party Links</h1>
        <p>
          We might have links to other websites or services that we think you’d
          enjoy. However, we’re not responsible for the content of those
          third-party sites. If you decide to click on them, you’re leaving our
          site, and that’s on you!
        </p>

        <h1>12. Disclaimer</h1>
        <p>
          We don’t make any promises about the accuracy of the content, uptime,
          or whether the service will meet your needs. We’re only human (or
          code), after all. Use at your own risk, and if you encounter a
          problem, let us know—we’ll fix it ASAP!
        </p>

        <h1>13. Contact Us</h1>
        <p>
          If you have any questions about these Terms, your data, or need help
          with anything else, feel free to reach out to us at:
        </p>
        <ul>
          <li>Email: myemail@gmail.com</li>
          <li>Phone: 072-503-88-96</li>
        </ul>
        <p>
          Fun Stuff (because, why not?): By using our service, you acknowledge
          that we might occasionally sprinkle in a few quirky updates, like a
          new cat gif in the newsletter or a randomly generated joke about
          unicorns. Don’t worry; these are just for fun and won’t affect your
          experience. Unless you’re into unicorns… then it might be a bonus.
        </p>
      </div>
    </>
  );
}

export default Terms;
