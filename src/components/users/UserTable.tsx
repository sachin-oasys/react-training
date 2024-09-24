import { User } from "./User";

interface UserTableProps{
    users:User[];
}
const UserTable:React.FC<UserTableProps>=({users})=>{
    return <>
    <table>
        <tr>
            <th>Sl No</th>
            <th>Name</th>
            <th>Email</th>
        </tr>
        {
            users.map((user, key)=>
            <tr key={key}>
                <td>{++key}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
            </tr>
            )
        }
    </table>
    </>
}
export default UserTable;