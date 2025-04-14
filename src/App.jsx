import ContactUs from './components/contactUS/contactus'
import Login from './components/signin/Login'
import Signup from './components/signup/Signup'
import Upload from './components/Upload/Upload'
import LeaderBoard from './components/LeaderBoard'
const App = () => {
  return (
    <div>
      <Login/>
      <Signup/>
      <ContactUs/>
      <Upload/>
      <LeaderBoard/>
    </div>
    
  )
}
export default App