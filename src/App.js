import React from 'react';
import BookList from './components/BookList';
import './styles/App.css';

function App() {
  return (
    <div className="app-container">
      {/* Hero Header */}
      <header className="app-header">
        <h1>📚 MyPustak</h1>
        <p className="tagline">Discover Your Next Great Read – for Free or at Minimal Cost</p>
        <button className="cta-button">Explore Books</button>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Featured Books */}
        <section className="section">
          {/* <h2>📘 Featured Books</h2> */}
          <BookList />
        </section>

        {/* About Us */}
        <section className="section about-section">
          <h2>🧾 About MyPustak</h2>
          <p>
            MyPustak is India’s pioneering platform that provides free books to those who need them. 
            Our goal is to bridge the education gap by promoting the reuse of books and spreading the joy of reading.
          </p>
        </section>

        {/* Testimonials */}
        <section className="section testimonials-section">
          <h2>💬 What Our Readers Say</h2>
          <div className="testimonial">
            <p>
              “Thanks to MyPustak, I got all my UPSC prep books at no cost. Truly a game-changer!” <br />
              <strong>- Priya S., Delhi</strong>
            </p>
          </div>
          <div className="testimonial">
            <p>
              “A noble initiative that’s spreading knowledge and love for reading. Highly recommended.” <br />
              <strong>- Rahul T., Pune</strong>
            </p>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="section newsletter-section">
          <h2>📬 Subscribe to Our Newsletter</h2>
          <p>Stay updated on new arrivals, donation drives, and more!</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </section>

        {/* Contact */}
        <section className="section contact-section">
          <h2>📞 Contact Us</h2>
          <p>Email: <a href="mailto:support@mypustak.com">sarang2452@gmail.com</a></p>
          <p>Phone: +91-7999862117</p>
          <p>Address: 256 Knowledge Street, Book City, Indore</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Use</a>
          <a href="#contact">Contact</a>
        </div>
        <p>© {new Date().getFullYear()} MyPustak. Empowering Minds Through Books.</p>
      </footer>
    </div>
  );
}

export default App;

// import React, { useState } from 'react';
// import BookList from './components/BookList';
// import './styles/App.css';

// function App() {
//   const [email, setEmail] = useState('');

//   const handleSubscribe = (e) => {
//     e.preventDefault();
//     if (email) {
//       alert('Thank you for subscribing to MyPustak newsletter!');
//       setEmail('');
//     }
//   };

//   return (
//     <div className="app-container">
//       {/* Hero Header */}
//       <header className="app-header">
//         <h1>📖 MyPustak</h1>
//         <p className="tagline">Discover Your Next Great Read – for Free or at Minimal Cost</p>
//         <button className="cta-button">Explore Books</button>
//       </header>

//       {/* Main Content */}
//       <main className="main-content">
//         {/* Featured Books */}
//         <section className="section">
//           {/* <h2>📚 Featured Books</h2> */}
//           <BookList />
//         </section>

//         {/* How It Works */}
//         <section className="section how-it-works-section">
//           <h2>🔄 How MyPustak Works</h2>
//           <div className="steps">
//             <div className="step">
//               <h3>📝 Step 1: Browse</h3>
//               <p>Search through our vast collection of donated books across various categories.</p>
//             </div>
//             <div className="step">
//               <h3>💰 Step 2: Choose</h3>
//               <p>Pick books that are free or available at minimal cost (just shipping charges).</p>
//             </div>
//             <div className="step">
//               <h3>📦 Step 3: Receive</h3>
//               <p>Get your books delivered to your doorstep and start your reading journey!</p>
//             </div>
//             <div className="step">
//               <h3>🎁 Step 4: Share</h3>
//               <p>After reading, donate your books back to help other readers in the community.</p>
//             </div>
//           </div>
//         </section>

//         {/* About Us */}
//         <section className="section about-section">
//           <h2>🌟 About MyPustak</h2>
//           <p>
//             MyPustak is India's pioneering platform that provides free books to those who need them. 
//             Our goal is to bridge the education gap by promoting the reuse of books and spreading the joy of reading.
//           </p>
//           <p>
//             Founded with the vision of making education accessible to everyone, we believe that knowledge should not be limited by financial constraints. 
//             Join thousands of readers who have already benefited from our community-driven book sharing initiative.
//           </p>
//         </section>

//         {/* Book Categories */}
//         <section className="section categories-section">
//           <h2>📚 Book Categories</h2>
//           <div className="categories">
//             <div className="category">
//               <h3>🎓 Academic Books</h3>
//               <p>NCERT, CBSE, ICSE textbooks and reference materials</p>
//             </div>
//             <div className="category">
//               <h3>📋 Competitive Exams</h3>
//               <p>UPSC, SSC, Banking, Railway, and other exam preparations</p>
//             </div>
//             <div className="category">
//               <h3>💻 Technical Books</h3>
//               <p>Programming, Engineering, Medical, and professional courses</p>
//             </div>
//             <div className="category">
//               <h3>📖 General Reading</h3>
//               <p>Fiction, non-fiction, self-help, and recreational books</p>
//             </div>
//           </div>
//         </section>

//         {/* Impact Statistics */}
//         <section className="section stats-section">
//           <h2>📊 Our Impact</h2>
//           <div className="stats">
//             <div className="stat">
//               <h3>25,000+</h3>
//               <p>Books Donated</p>
//             </div>
//             <div className="stat">
//               <h3>15,000+</h3>
//               <p>Happy Readers</p>
//             </div>
//             <div className="stat">
//               <h3>500+</h3>
//               <p>Cities Covered</p>
//             </div>
//             <div className="stat">
//               <h3>₹50 Lakh+</h3>
//               <p>Money Saved by Students</p>
//             </div>
//           </div>
//         </section>

//         {/* Testimonials */}
//         <section className="section testimonials-section">
//           <h2>💬 What Our Readers Say</h2>
//           <div className="testimonial">
//             <p>
//               "Thanks to MyPustak, I got all my UPSC prep books at no cost. Truly a game-changer!" <br />
//               <strong>- Priya S., Delhi</strong>
//             </p>
//           </div>
//           <div className="testimonial">
//             <p>
//               "A noble initiative that's spreading knowledge and love for reading. Highly recommended." <br />
//               <strong>- Rahul T., Pune</strong>
//             </p>
//           </div>
//           <div className="testimonial">
//             <p>
//               "I donated my old engineering books and they reached students who really needed them. Feel great to contribute!" <br />
//               <strong>- Ankit M., Bangalore</strong>
//             </p>
//           </div>
//           <div className="testimonial">
//             <p>
//               "MyPustak helped me complete my entire medical entrance preparation without spending thousands on books." <br />
//               <strong>- Sneha K., Mumbai</strong>
//             </p>
//           </div>
//         </section>

//         {/* Donation Call to Action */}
//         <section className="section donation-section">
//           <h2>🤲 Donate Your Books</h2>
//           <p>
//             Have books you no longer need? Don't let them gather dust! Donate them to MyPustak and help fellow learners 
//             achieve their dreams. Every book you donate can change someone's life.
//           </p>
//           <button className="cta-button">Donate Books Now</button>
//         </section>

//         {/* Newsletter Signup */}
//         <section className="section newsletter-section">
//           <h2>📬 Subscribe to Our Newsletter</h2>
//           <p>Stay updated on new arrivals, donation drives, success stories, and exclusive offers!</p>
//           <div className="newsletter-form">
//             <input 
//               type="email" 
//               placeholder="Enter your email" 
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required 
//             />
//             <button onClick={handleSubscribe}>Subscribe</button>
//           </div>
//         </section>

//         {/* FAQ Section */}
//         <section className="section faq-section">
//           <h2>❓ Frequently Asked Questions</h2>
//           <div className="faq">
//             <div className="faq-item">
//               <h3>Is MyPustak really free?</h3>
//               <p>Yes! Most books are completely free. For some books, you might need to pay minimal shipping charges (₹20-50).</p>
//             </div>
//             <div className="faq-item">
//               <h3>How long does delivery take?</h3>
//               <p>Delivery typically takes 3-7 business days depending on your location and book availability.</p>
//             </div>
//             <div className="faq-item">
//               <h3>Can I donate books from any subject?</h3>
//               <p>Absolutely! We accept academic books, novels, competitive exam materials, and professional books in good condition.</p>
//             </div>
//           </div>
//         </section>

//         {/* Contact */}
//         <section className="section contact-section">
//           <h2>📞 Contact Us</h2>
//           <p>Email: <a href="mailto:sarang2452@gmail.com">sarang2452@gmail.com</a></p>
//           <p>Phone: +91-7999862117</p>
//           <p>Address: 256 Knowledge Street, Book City, Indore, MP 452001</p>
//           <p>WhatsApp Support: <a href="https://wa.me/917999862117">+91-7999862117</a></p>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="app-footer">
//         <div className="footer-links">
//           <a href="#about">About</a>
//           <a href="#donate">Donate Books</a>
//           <a href="#privacy">Privacy Policy</a>
//           <a href="#terms">Terms of Use</a>
//           <a href="#faq">FAQ</a>
//           <a href="#contact">Contact</a>
//         </div>
//         <div className="social-links">
//           <a href="#facebook">📘 Facebook</a>
//           <a href="#instagram">📷 Instagram</a>
//           <a href="#twitter">🐦 Twitter</a>
//           <a href="#linkedin">💼 LinkedIn</a>
//         </div>
//         <p>© {new Date().getFullYear()} MyPustak. Empowering Minds Through Books. 🇮🇳</p>
//         <p className="tagline-footer">📚 Knowledge Should Be Free • Education Should Be Accessible • Dreams Should Be Achievable 🌟</p>
//       </footer>
//     </div>
//   );
// }

// export default App;