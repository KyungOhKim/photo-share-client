import React from "react";
import { Query } from "react-apollo";
import { ROOT_QUERY } from "./App";

const Users = () => (
  <Query query={ROOT_QUERY}>
    {({ data, loading, refetch }) =>
      loading ? (
        <p>사용자 불러오는 중...</p>
      ) : (
        <UserList
          count={data.totalUsers}
          users={data.allUsers}
          refetch={refetch}
        />
      )
    }
  </Query>
);

const UserList = ({ count, users, refetch }) => (
  <div>
    <p>{count} Users</p>
    <button onClick={() => refetch()}>다시 가져오기</button>
    <ul>
      {users.map(user => (
        <UserListItem
          key={user.githubLogin}
          name={user.name}
          avatar={user.avatar}
        />
      ))}
    </ul>
  </div>
);

const UserListItem = ({ name, avatar }) => (
  <li>
    <img src={avatar} width={48} height={48} alt="" />
    {name}
  </li>
);

export default Users;
