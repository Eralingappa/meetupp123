import {Link} from 'react-router-dom'
import Header from '../Header'
import RegisterContext from '../Context/RegisterContext'

import {
  HomeContainer,
  HomeHeading,
  HomePara,
  Button,
  Image,
  Name,
  Topic,
} from './style'

const Home = props => {
  const OnRegister = () => {
    const {history} = props
    history.replace('/register')
  }
  return (
    <RegisterContext.Consumer>
      {value => {
        const {isRegistered, name, topic} = value
        console.log(isRegistered)

        return (
          <div>
            <Header />
            {isRegistered === true ? (
              <HomeContainer>
                <Name>Hello</Name>
                <Topic> Name to</Topic>
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </HomeContainer>
            ) : (
              <HomeContainer>
                <HomeHeading>Welocme to Meetup</HomeHeading>
                <HomePara>Please register for topic </HomePara>
                <Link to="/register">
                  <Button onClick={OnRegister}>Register</Button>
                </Link>
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </HomeContainer>
            )}
          </div>
        )
      }}
    </RegisterContext.Consumer>
  )
}
export default Home
