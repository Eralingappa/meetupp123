import Header from '../Header'

import RegisterContext from '../Context/RegisterContext'
import {
  RegisterContainer,
  RegisterImg,
  From,
  RegisterHeading,
  InputContainer,
  Label,
  Input,
  Select,
  RegisterButton,
  ErrorMsg,
} from './style'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = props => (
  <RegisterContext.Consumer>
    {value => {
      const {name, topic, changeName, showError, registerName, updateError} =
        value

      const submiitRegistration = event => {
        event.preventDefault()

        if (name !== '' && topic !== '') {
          const {history} = props
          history.replace('/')
          registerName()
        } else {
          updateError()
        }
      }
      const onChangeName = event => {
        changeName(event.target.value)
      }

      const onChangeTopic = event => {
        onChangeTopic(event.target.value)
      }

      return (
        <div>
          <Header />
          <div>
            <RegisterContainer>
              <RegisterImg
                src='https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png'
                alt='website register'
              />

              <From onSubmit={submiitRegistration}>
                <RegisterHeading>Let us join</RegisterHeading>
                <Label htmlFor='name'>NAME</Label>
                <InputContainer>
                  <Input
                    id='name'
                    value={name}
                    type='text'
                    onChange={onChangeName}
                    placeholder='your name'
                  />
                </InputContainer>
                <InputContainer>
                  <Label htmlFor='topic'>Topic</Label>
                  <Select id='topic' value={topic} onChange={onChangeTopic}>
                    {topicsList.map(each => (
                      <option value={each.id} key={each.id}>
                        {each.displayText}
                      </option>
                    ))}
                  </Select>
                </InputContainer>
                <RegisterButton type='submit'>Register Now</RegisterButton>
                {showError === true ? (
                  <ErrorMsg> please enter your name</ErrorMsg>
                ) : (
                  ''
                )}
              </From>
            </RegisterContainer>
          </div>
        </div>
      )
    }}
  </RegisterContext.Consumer>
)
export default Register
