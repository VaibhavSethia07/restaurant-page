const renderHomePage = () => {
  const bodyDIV = document.querySelector("body");
  const homeHTML = `<main id="home-page">
    <div class="advertisement-container">
        <div class="quote-container">
            <div class="catchy-line">Eat today<br><span class="catchy-line-2">Live another day</span></div>
            <p class="quote-text">Great teams eat together and grow together.</p>
            <p class="quote-text">Our high-quality, family-style meals are designed to foster authentic connection and team synergy.</p>
            <button class="btn order-btn">Order Now</button>
        </div>
        <div class="location-container">
            <div class="address">
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height="30px" width="30px"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192H384z"/></svg>
                </div>
                <div class="address-text">
                    Two Horizon Center, Golf Course Rd, DLF Phase 5,<br> Sector 43, Gurugram, Haryana 122002
                </div>
            </div>
            <div class="time">
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="30px" width="30px"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M232 120C232 106.7 242.7 96 256 96C269.3 96 280 106.7 280 120V243.2L365.3 300C376.3 307.4 379.3 322.3 371.1 333.3C364.6 344.3 349.7 347.3 338.7 339.1L242.7 275.1C236 271.5 232 264 232 255.1L232 120zM256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48C141.1 48 48 141.1 48 256z"/></svg>
                </div>
                <div class="time-text">
                    <div class="day-time-container">
                        <div class="day">
                            Monday:    
                        </div>
                        <div class="day-time">
                            9am-11pm
                        </div>
                    </div>
                    <div class="day-time-container">
                        <div class="day">
                            Tuesday:    
                        </div>
                        <div class="day-time">
                            9am-11pm
                        </div>
                    </div>
                    <div class="day-time-container">
                        <div class="day">
                            Wednesday:    
                        </div>
                        <div class="day-time">
                            9am-11pm
                        </div>
                    </div>
                    <div class="day-time-container">
                        <div class="day">
                            Thursday:    
                        </div>
                        <div class="day-time">
                            9am-11pm
                        </div>
                    </div>
                    <div class="day-time-container">
                        <div class="day">
                            Friday:    
                        </div>
                        <div class="day-time">
                            9am-11pm
                        </div>
                    </div>
                    <div class="day-time-container">
                        <div class="day">
                            Saturday:    
                        </div>
                        <div class="day-time">
                            12pm-12am
                        </div>
                    </div>
                    <div class="day-time-container">
                        <div class="day">
                            Sunday:    
                        </div>
                        <div class="day-time">
                            12pm-12am
                        </div>
                    </div>
                </div>
                </div>
        </div>
    </div>
</main>
`;

  bodyDIV.innerHTML += homeHTML;
};

export default renderHomePage;
