import { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [data, setData] = useState([])

  const getUsers = async () => {
    try {
      const res = await axios.get("https://api.github.com/users")
      const users = await res.data;
      setData(users.slice(0, 10))
    } catch (error) {
      console.log(error)
    }
  }

  const resetUsers = () => {
    setData([])
  }

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-danger">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <div class="navbar-brand nav-link text-white active" aria-current="page">Github Profiles</div>
              </li>
            </ul>
          </div>
          <div className="navbar-nav me-auto mb-2 mb-lg-0">
            <button
              className="btn btn-success"
              onClick={getUsers}
            >
              Get Profiles
            </button>
            <button
              className="btn btn-primary ms-2"
              onClick={resetUsers}
            >
              Reset Table
            </button>
          </div>
        </div>
      </nav>
      <div className="container mt-5">
        <table class="table table-success table-striped">
          <thead>
            {
              data.length !==0 ?
                <>
                  <tr>
                    <th scope="col">User Name</th>
                    <th scope="col">Profile Picture</th>
                    <th scope="col">Github Profile</th>
                  </tr>
                </>
                :
                <></>
            }
          </thead>
          <tbody>
            {
              data.map(val => {
                return (
                  <>
                    <tr>
                      <th scope="row" className='text-info'>{val.login}</th>
                      <td ><a href={val.avatar_url} className="text-danger" style={{ textDecoration: 'none' }}>Click here To View</a></td>
                      <td><a href={val.html_url} style={{ textDecoration: 'none' }}>Click here To View</a></td>
                    </tr>
                  </>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App