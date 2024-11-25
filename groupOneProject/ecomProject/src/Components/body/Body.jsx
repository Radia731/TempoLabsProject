import './Body.css';

function Body() {
    return (
        <>
            <div className="body-bg">
                
            <div class="sprinkle-container">
                    <div class="sprinkle-1"></div>
                    <div class="sprinkle-2"></div>
            </div>

                    <div className="body-description">
                        <p>FIND CLOTHES THAT MATCHES YOUR STYLE</p>
                        <h3>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</h3>
                    </div>

                    <div className="body-btn">
                        <button className="button-arounder">Sign Up</button>
                    </div>

                    <div className="info-barContainer">
                        <div className="info-item">
                            <p className="info-number">200+</p>
                            <p className="info-label">International Brands</p>
                        </div>
                        <div className="divider"></div>
                        <div className="info-item">
                            <p className="info-number">2,000+</p>
                            <p className="info-label">High-Quality Products</p>
                        </div>
                        <div className="divider"></div>
                        <div className="info-item">
                            <p className="info-number">30,000+</p>
                            <p className="info-label">Happy Customers</p>
                        </div>
                    </div>
                </div>
            

            <div className="brand-bar"> 
                    <li className="versace-logo"></li>
                    <li className="zara-logo"></li>
                    <li className="gucci-logo"></li>
                    <li className="prada-logo"></li>
                    <li className="ck-logo"></li>
            </div>
        </>
    );
}

export default Body;
