import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';
import Logo from '../images/Logo.png'

export default function Header({ setIsMobileMenuOpen, isMobileMenuOpen }) {
    return (
        <header style={{
            backgroundColor: '#ffffff',
            borderBottom: '1px',
            position: 'sticky',
            top: 0,
            zIndex: 1000
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '1rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                        display: 'none',
                        cursor: 'pointer'
                    }}
                        className="mobile-menu-toggle"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </div>
                    <img src={Logo} style={{
                        height:'25px'
                    }} alt="" />
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>LOGO</div>
                </div>
                <nav style={{ display: 'flex', gap: '2rem', fontWeight: 'bold' }} className="desktop-nav">
                    <a href="#" style={{ textDecoration: 'none', color: '#333'}}>SHOP</a>
                    <a href="#" style={{ textDecoration: 'none', color: '#333'}}>SKILLS</a>
                    <a href="#" style={{ textDecoration: 'none', color: '#333'}}>STORIES</a>
                    <a href="#" style={{ textDecoration: 'none', color: '#333'}}>ABOUT</a>
                    <a href="#" style={{ textDecoration: 'none', color: '#333'}}>CONTACT US</a>
                </nav>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <Search size={20} style={{ cursor: 'pointer' }} />
                    <User size={20} style={{ cursor: 'pointer' }} />
                    <ShoppingBag size={20} style={{ cursor: 'pointer' }} />
                    <span style={{ fontSize: '0.9rem' }}>ENG</span>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    backgroundColor: '#ffffff',
                    borderBottom: '1px solid #e0e0e0',
                    padding: '1rem'
                }} className="mobile-nav">
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <a href="#" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>SHOP</a>
                        <a href="#" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>SKILLS</a>
                        <a href="#" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>STORIES</a>
                        <a href="#" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>ABOUT</a>
                        <a href="#" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>CONTACT US</a>
                    </nav>
                </div>
            )}
        </header>
    )
}
