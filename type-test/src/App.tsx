import { useEffect, useState } from 'react';
import { ListItem } from './components/ListItem';

import type { User } from './types/user';

export const App = () => {
  //ユーザのデータ（User型の配列）
  const [users, setUsers] = useState<User[]>([]);

  const userData: User[] = [
    {id: 1, name: "satosi", age: 10, personalColor: "black"},
    {id: 2, name: "satosi", age: 10, personalColor: "red"},
    {id: 3, name: "satosi", age: 10, personalColor: "blue"},
    {id: 4, name: "satosi", age: 10, personalColor: "black"},
  ];

  useEffect(() => {
    setUsers(userData);
  }, []);

  return (
    <div className="App">
      {users.map(user => (
        <ListItem id={user.id} name={user.name} age={user.age} personalColor={user.personalColor} />
      ))}
    </div>
  );
}
