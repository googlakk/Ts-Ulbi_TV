import React,{FC} from 'react'
import { IUser } from '../types/types'


interface UserItemsProps {
    user: IUser;
}
const UserItem:FC<UserItemsProps> = ({user}) => {
  return (
    <div>
        {user.name} живет по адрессу {user.address.city} по улице {user.address.street}
    </div>
  )
}

export default UserItem