import React from 'react'
import './footer.scss'
import { LogoKebayan,ICDiscord,ICFacebook,ICGithub,ICInstagram,ICTelegram,ICTwitter} from '../../../assets'

const Icon = ({img}) => {
    return(
        <div className="icon-wrapper">
            <img className="icon-medsos" src={img} alt="icon"/>
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div>
                    < img className="logo" src={LogoKebayan} alt="logo"/>
                </div>
                <div className="social-wrapper">
                    <Icon img={ICTwitter} />
                    <Icon img={ICFacebook} />
                    <Icon img={ICInstagram} />
                    <Icon img={ICTelegram} />
                    <Icon img={ICDiscord} />
                    <Icon img={ICGithub} />
                </div>
            </div>
            <div className="copyright">
                <p>Copyright</p>
            </div>
        </div>
    )
}

export default Footer
