import React from 'react'

const Header = () => {
    return (
        <nav>
            <div className='container mx-auto'>
                <div className='px-4 py-10'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <a href="#">3000Words</a>
                        </div>
                        <div>
                            <ul className='flex gap-4'>
                                <li><a href="#about">About</a></li>
                                <li><a href="#content">Main</a></li>
                                <li><a href="#contact">Contact Us</a></li>
                                <li><a href="#donate">Buy me a Coffee 💖</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header