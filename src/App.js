import React, { useState } from 'react';
import useFetchJobs from './useFetchJobs'
import { Container, Spinner } from 'react-bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Job from './Job'
import JobsPagination from './JobsPagination';
import SearchForm from './SearchForm';
import "./App.css";

function App() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page)
    const footer = {
      position: "fixed",
      left: "0",
      right: "0",
      zIndex:"9999",
      padding: "1.25rem",
      overFlow: "hidden",
      lineHeight:"1.2",
      bottom: "-18px",
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
      <h1 className="mb-4 text-white homefirstheading"><span role="img" aria-label="">🤙</span>GitHub Jobs Search Made  Easy with Git job search web apps<span role="img" aria-label="">🤙</span></h1>
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
      <div style={{marginTop: "120px"}}>
      </div>

      <div style={footer}>
        <p><span role="img" aria-label="">👉</span> Develop and design by Adarsh Tripathi</p>
        <p>My Github Profile link <span role="img" aria-label="">👇</span>
         <a target="blank"href="https://github.com/adarshtiwari1998">https://github.com/adarshtiwari1998</a> </p>
         <p>Check out My Website <span role="img" aria-label="">👇</span>
         <a target="blank"href="https://marketitup.in">https://marketitup.in</a> </p>
        </div>
    </Container>
  )
}

export default App;