import React, { useState, useEffect} from 'react'
import Card, { CardVariant } from './components/Card'
import UseList from './components/UseList'
import { IUser } from './types/types'
import axios from 'axios'
const App = () => {
  const [users, setUsers]  = useState<IUser[]>([])

  useEffect(()=> {
    fetchUsers()
  }, [])
  async function fetchUsers() {
    try{
      const res = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(res.data)
    } catch(err) {
      alert(err)
    }
  }
  return (
    <div className=''>
      <Card
        variant={CardVariant.success}
        width='200px'
        height='200px'
        onCLick={(num)=> console.log('click', num)}
      > 
          <button>
             click me
          </button>
      </Card>
    <UseList
        users={users}
    />
    </div>
  )
}

export default App