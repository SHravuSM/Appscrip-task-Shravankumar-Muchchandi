import { Heart } from 'lucide-react';
import { useProducts } from '../context/ProductContext';

export default function Products({ favorites, setSelectedFilters, selectedFilters, toggleFavorite }) {
    const { products } = useProducts();
    return (
        <main style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '2rem 1rem'
        }}>
            <section style={{
                textAlign: 'center',
                marginBottom: '3rem'
            }}>
                <h1 style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                    color: '#333'
                }}>DISCOVER OUR PRODUCTS</h1>
                <p style={{
                    fontSize: '1rem',
                    color: '#666',
                    maxWidth: '600px',
                    margin: '0 auto',
                    lineHeight: '1.6'
                }}>
                    Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
                    scelerisque. Dolor integer scelerisque nibh ante vel in elementum dolor.
                </p>
            </section>

            <div style={{
                display: 'flex',
                gap: '2rem'
            }} className="main-content">
                <aside style={{
                    width: '250px',
                    flexShrink: 0
                }} className="filters-sidebar">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '1.5rem'
                    }}>
                        <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 'bold' }}>3425 ITEMS</h3>
                        <button style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            textDecoration: 'underline',
                            color: '#666'
                        }}>HIDE FILTER</button>
                    </div>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginBottom: '2rem'
                    }}>
                        <input
                            type="checkbox"
                            id="customizable"
                            checked={selectedFilters.customizable}
                            onChange={(e) => setSelectedFilters({ ...selectedFilters, customizable: e.target.checked })}
                        />
                        <label htmlFor="customizable" style={{ fontSize: '0.9rem' }}>CUSTOMIZABLE</label>
                    </div>

                    {[
                        { title: 'IDEAL FOR', key: 'dealForAll', options: ['All', 'Men', 'Women', 'Baby & Kids'] },
                        { title: 'OCCASION', key: 'occasion', options: ['All', 'Casual', 'Formal', 'Party'] },
                        { title: 'WORK', key: 'work', options: ['All', 'Office', 'Remote', 'Field'] },
                        { title: 'FABRIC', key: 'fabric', options: ['All', 'Cotton', 'Silk', 'Wool'] },
                        { title: 'SEGMENT', key: 'segment', options: ['All', 'Premium', 'Regular', 'Budget'] },
                        { title: 'SUITABLE FOR', key: 'suitableFor', options: ['All', 'Summer', 'Winter', 'Monsoon'] },
                        { title: 'RAW MATERIALS', key: 'rawMaterials', options: ['All', 'Organic', 'Synthetic', 'Blended'] },
                        { title: 'PATTERN', key: 'pattern', options: ['All', 'Solid', 'Striped', 'Printed'] }
                    ].map((filterGroup) => (
                        <div key={filterGroup.key} style={{ marginBottom: '2rem' }}>
                            <h4 style={{
                                fontSize: '0.9rem',
                                fontWeight: 'bold',
                                marginBottom: '1rem',
                                color: '#333'
                            }}>{filterGroup.title}</h4>
                            <select
                                value={selectedFilters[filterGroup.key]}
                                onChange={(e) => setSelectedFilters({ ...selectedFilters, [filterGroup.key]: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: '0.5rem',
                                    border: '1px solid #ddd',
                                    borderRadius: '1px',
                                    fontSize: '0.9rem'
                                }}
                            >
                                {filterGroup.options.map(option => (
                                    <option key={option} value={option}>{option}</option>
                                ))}
                            </select>
                        </div>
                    ))}
                </aside>

                <section style={{ flex: 1 }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '2rem'
                    }}>
                        <span style={{ fontSize: '0.9rem', color: '#666' }}>
                            Showing {products?.length} products
                        </span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <span style={{ fontSize: '0.9rem' }}>RECOMMENDED</span>
                            <select style={{
                                padding: '0.5rem',
                                border: '1px solid #ddd',
                                borderRadius: '2px',
                                fontSize: '0.9rem'
                            }}>
                                <option>RECOMMENDED</option>
                                <option>PRICE: LOW TO HIGH</option>
                                <option>PRICE: HIGH TO LOW</option>
                                <option>NEWEST FIRST</option>
                            </select>
                        </div>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                        gap: '2rem'
                    }} className="products-grid">
                        {products !== null && products.map((product) => {
                            return <div key={product.id} style={{
                                border: '1px solid #e0e0e0',
                                borderRadius: '2px',
                                overflow: 'hidden',
                                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                                cursor: 'pointer',
                                position: 'relative'
                            }}
                                className="product-card"
                            >
                                <div style={{
                                    position: 'relative',
                                    paddingBottom: '100%',
                                    // backgroundColor: '#f5f5f5'
                                }}>
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '0.8rem',
                                        color: '#999'
                                    }}>
                                        <img
                                            src={product.image}
                                            style={{
                                                width: '100%',
                                                height: '200px',
                                                objectFit: 'scale-down',
                                                objectPosition: 'center'
                                            }}
                                            alt={product.name}
                                        />
                                    </div>

                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleFavorite(product.id);
                                        }}
                                        style={{
                                            position: 'absolute',
                                            top: '10px',
                                            right: '10px',
                                            background: 'white',
                                            border: 'none',
                                            borderRadius: '50%',
                                            width: '32px',
                                            height: '32px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'pointer',
                                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                                        }}
                                    >
                                        <Heart
                                            size={16}
                                            fill={favorites.has(product.id) ? '#ff4444' : 'none'}
                                            color={favorites.has(product.id) ? '#ff4444' : '#666'}
                                        />
                                    </button>
                                </div>

                                <div style={{ padding: '1rem' }}>
                                    <h3 style={{
                                        fontSize: '0.9rem',
                                        fontWeight: 'bold',
                                        marginBottom: '0.5rem',
                                        color: '#333'
                                    }}>{product.title}</h3>
                                    <p style={{
                                        fontSize: '0.8rem',
                                        color: '#666',
                                        marginBottom: '0.5rem',
                                        lineHeight: '1.4'
                                    }}>
                                        Sign in or Create an account to see pricing
                                    </p>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem'
                                    }}>
                                        <Heart size={14} color="#ccc" />
                                        <span style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#333' }}>
                                            ${product.price}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </section>
            </div>
        </main>
    )
}
