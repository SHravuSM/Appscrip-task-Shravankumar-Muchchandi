import cards from '../images/cards.png';
import L_IN from '../images/linkedin.png'
import IN from '../images/instagram.png'
import { useState } from 'react';

export default function Footer() {
    const [email, setEmail] = useState('');
    const handleEmailSubmit = () => {
    if (email.includes('@')) {
      alert(`Subscribed with email: ${email}`);
      setEmail('');
    } else {
      alert('Please enter a valid email address');
    }
  };
    return (
        <footer style={{
            backgroundColor: '#000',
            color: '#fff',
            marginTop: '4rem'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '3rem 1rem'
            }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem',
                    marginBottom: '2rem'
                }}>
                    <div>
                        <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>BE THE FIRST TO KNOW</h3>
                        <p style={{ fontSize: '0.9rem', color: '#ccc', marginBottom: '1rem' }}>
                            Sign up for updates from mettā muse.
                        </p>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your e-mail..."
                                style={{
                                    flex: 1,
                                    padding: '0.75rem',
                                    border: '1px solid #333',
                                    borderRadius: '4px',
                                    backgroundColor: '#fff',
                                    fontSize: '0.9rem'
                                }}
                            />
                            <button
                                onClick={handleEmailSubmit}
                                style={{
                                    padding: '0.75rem 1.5rem',
                                    backgroundColor: '#fff',
                                    color: '#000',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    fontSize: '0.9rem',
                                    fontWeight: 'bold'
                                }}>
                                SUBSCRIBE
                            </button>
                        </div>
                    </div>

                    <div>
                        <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>CONTACT US</h3>
                        <p style={{ fontSize: '0.9rem', color: '#ccc', marginBottom: '0.5rem' }}>
                            +44 221 133 5360
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#ccc', marginBottom: '1rem' }}>
                            customercare@mettamuse.com
                        </p>

                        <h4 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>CURRENCY</h4>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                            <span style={{ fontSize: '0.9rem' }}>USD</span>
                        </div>
                        <p style={{ fontSize: '0.8rem', color: '#888' }}>
                            Transactions will be completed in Euros and a currency reference is available on hover.
                        </p>
                    </div>
                </div>

                <hr style={{ border: 'none', borderTop: '1px solid #333', margin: '2rem 0' }} />

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '2rem'
                }}>
                    <div>
                        <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>mettā muse</h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {['About Us', 'Stories', 'Artisans', 'Boutiques', 'Contact Us', 'EU Compliances Docs'].map(item => (
                                <li key={item} style={{ marginBottom: '0.5rem' }}>
                                    <a href="#" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.9rem' }}>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>QUICK LINKS</h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {['Orders & Shipping', 'Join/Login as a Seller', 'Payment & Pricing', 'Return & Refunds', 'FAQs', 'Privacy Policy', 'Terms & Conditions'].map(item => (
                                <li key={item} style={{ marginBottom: '0.5rem' }}>
                                    <a href="#" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.9rem' }}>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>FOLLOW US</h3>
                        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                            <div style={{
                                width: '32px',
                                height: '32px',
                                backgroundColor: '#333',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer'
                            }}>
                                <img style={{
                                    height: "40px",
                                    backgroundColor: 'white',
                                    borderRadius: '100%'

                                }} src={IN} alt="" />
                            </div>
                            <div style={{
                                width: '32px',
                                height: '32px',
                                backgroundColor: '#333',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer'
                            }}>
                                <img style={{
                                    height: "40px",
                                    backgroundColor: 'white',
                                    borderRadius: '100%'

                                }} src={L_IN} alt="" />
                            </div>
                        </div>

                        <h4 style={{ marginBottom: '1rem', fontSize: '1rem' }}>mettā muse ACCEPTS</h4>
                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                            {/* {['GPay', 'Mastercard', 'Paypal', 'Amex', 'Apple Pay', 'Shop Pay'].map(payment => (
                  <div key={payment} style={{
                    padding: '0.25rem 0.5rem',
                    backgroundColor: '#333',
                    borderRadius: '4px',
                    fontSize: '0.7rem',
                    color: '#ccc'
                  }}>
                    {payment}
                  </div>
                ))} */}

                            <img style={{
                                height: "30px"
                            }} src={cards} alt="" />

                        </div>
                    </div>
                </div>

                <hr style={{ border: 'none', borderTop: '1px solid #333', margin: '2rem 0' }} />

                <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#888', margin: 0 }}>
                    Copyright © 2023 mettamuse. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
