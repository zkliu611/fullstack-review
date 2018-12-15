import React from 'react';
import Repo from './Repo.jsx';

const RepoList = ({repos}) => (
  <div>
    <h4> Repo List Component </h4>
    <div>There are {repos.length} repos.</div>
    <table>
      <tr>
        <th>Repo ID</th>
        <th>Owner</th>
        <th>Name</th>
        <th>Watch</th>
        <th>Created At</th>
        <th>Updated At</th>
        <th>Link</th>
      </tr>
      {repos.map((repo) => <Repo repo={repo}/>)}
    </table>
  </div>
)

export default RepoList;