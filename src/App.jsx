import ContactUs from './components/contactUS/contactus'
import Login from './components/signin/Login'
import Signup from './components/signup/Signup'
import Upload from './components/Upload/Upload'
const App = () => {
  return (
    <div>
      <Login/>
      <Signup/>
      <ContactUs/>
      <Upload/>
    </div>
    
  )
}
export default App