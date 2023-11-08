const Footer = () => {
    const hours = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hours >= openHour && hours <= closeHour;
    return (
        <footer className='footer'>
            {isOpen ? (
                <div className='order'>
                    <p>we are open until {closeHour}:00. Come visit us or order online.</p>
                    <button className='btn'>Order Now</button>
                </div>
            ) : (
                <p>
                    We are happy to welcome you between {openHour}:00 and {closeHour}:00
                </p>
            )}
        </footer>
    );
};

export default Footer;
