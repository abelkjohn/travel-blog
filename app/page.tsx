import Nav from './components/Nav'
import Main from './components/Main'
import Button from './components/Button'
import AddNew from './components/AddNew'

export default function Home() {
  return (
  <div className='mt-8 p-10 shadow-lg '>
    <Nav />
    <Main />
    <Button />
    <AddNew />
  </div>
  )
}
