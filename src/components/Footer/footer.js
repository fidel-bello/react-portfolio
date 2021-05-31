import React from 'react'
import './footer.css'
function  Footer() {
    return (
<footer>
      <div className="container">
        <div className="row">
          <div className="footer-logo">Bello</div>
          <div className="social-link">
            <a target="_blank" href="https://www.facebook.com/fidel.bello.5/"><i class="fa fa-facebook"></i></a>
            <a target="_blank" href="https://www.linkedin.com/in/fidel-bello-a2733b79"><i
                className="fa fa-linkedin"></i></a>
            <a target="_blank" href="https://github.com/fidel-bello"><i class="fa fa-github"></i></a>
          </div>
        </div>
      </div>
    </footer>
    )
    
}

export default Footer;