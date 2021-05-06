import React, { useState } from 'react';
import useFetchJobs from './useFetchJobs'
import { Container, Spinner } from 'react-bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Job from './Job'
import JobsPagination from './JobsPagination';
import SearchForm from './SearchForm';

function App() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page)
    const footer= {
      position: "fixed",
      left: "0",
      right: "0",
      marginTop:"100px",
      zIndex:"9999",
      bottom: "0",
      width: "100%",
      backgroundColor:"#23049d",
      color:"white",
      fontWeight: "bold",
      textAlign: "center",
  };
 function handleParamChange(e) {
    const param = e.target.name
    const value = e.target.value
    setPage(1)
    setParams(prevParams => {
      return { ...prevParams, [param]: value }
    })
  };

return (                                                                                                                                                                                       
    <Container className="my-4 ">

      <h1 className="mb-4 text-white "><span role="img" aria-label="">🤙</span>GitHub Jobs Search Made Easy with job search web app<span role="img" aria-label="">🤙</span></h1>
      <SearchForm params={params} onParamChange={handleParamChange} />
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      {loading && <Spinner className="mb-3 mt-2" id="spinner " animation="grow" style={{color:"white"}} role="status">
  <span className="sr-only ml-5">Loading...</span>
</Spinner>} 
      {error && <h3 className="text-white mb-4 ">Error. Try Refreshing your page, Check your internet connection. <span role="img" aria-label="" > 👈</span> </h3>}
      {jobs.map(job => {
        return <Job key={job.id} job={job} />
      })}
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      <div style={{marginTop: "100px"}}>
      </div>

      <div style={footer}>
        <p>Develop and design by Adarsh Tripathi<span role="img" aria-label=""> 👇</span></p>
        <p>My Github Profile link <span role="img" aria-label=""> 👉</span>
         <a target="blank"href="https://github.com/adarshtiwari1998">https://github.com/adarshtiwari1998</a> </p>
        </div>
    </Container>
  )
}

export default App;