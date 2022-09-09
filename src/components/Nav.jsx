import logo from '../assets/insta_logo_main_735145cfe0a4.png'

const Nav = () => {
    return(
            <nav>
                <button className="logo">
                    <img src={logo} alt="logo" />
                </button>
                <input type="text" className="search" placeholder="search" />
                <span className='nav-links'>
                    <button>
                        <i className="fas fa-home" />
                    </button>

                    <button>
                        <i className="fas fa-comment-alt" />
                    </button>

                    <button>
                        <i className="fas fa-compass" />
                    </button>

                    <button>
                        <i className="fas fa-heart" />
                    </button>
                </span>
            </nav>
    )
}
export default Nav;