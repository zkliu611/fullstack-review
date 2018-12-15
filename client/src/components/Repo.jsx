import React from 'react';

const Repo = ({repo}) => (
    <tr>
        <td>{repo.id}</td>
        <td>{repo.owner}</td>
        <td>{repo.name}</td>
        <td>{repo.watch}</td>
        <td>{repo.createdAt}</td>
        <td>{repo.updatedAt}</td>
        <td>{repo.url}</td>
    </tr>
    
  )

export default Repo;
