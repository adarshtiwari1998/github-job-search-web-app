import React, { useState } from 'react'
import { Card, Badge, Button, Collapse } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown';



export default function Job({ job }) {
  const [open, setOpen] = useState(false)
  var well={
    boxShadow: " 0 3px 10px rgba(60, 72, 88, 0.15)",
    borderradius:"30px"
}
const avatarImage = {
  boxShadow: "0 .125rem .25rem  #9E9E9E",
  borderRadius:"10px",
};


  return (
    <Card className="mb-3">
      <Card.Body style={well}>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title as="h4" >
              {job.title} - <span className="text-muted font-weight-light">{job.company}</span>
            </Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              {new Date(job.created_at).toLocaleDateString()}
            </Card.Subtitle>
            <Badge variant="secondary" className="mr-2">{job.type}</Badge>
            <Badge variant="secondary" className="mr-2">{job.location}</Badge>
            <Badge variant="secondary" className="mr-2">{job.company}</Badge>
            <div style={{ wordBreak: 'break-all' }}>
              <h5 className="mt-2 urlclass">Website</h5><ReactMarkdown source={job.company_url} />
            </div>
            <div style={{ wordBreak: 'break-all' }}>
            <h5 className="applyclass">Apply Here</h5>
              <ReactMarkdown source={job.how_to_apply} />
            </div>
            <div style={{ wordBreak: 'break-all' }}>
            <h5 className="gitjobclass">Github Job link</h5>
              <ReactMarkdown source={job.url} />
            </div>
          </div>
          <img className="d-none d-md-block "border="primary" style={avatarImage} height="50" alt={job.company} src={job.company_logo} />
        </div>
        <Card.Text>
          <Button
            onClick={() => setOpen(prevOpen => !prevOpen)}
            variant="danger"
          >
            {open ? 'Hide Details' : 'View Details'}
          </Button>
        </Card.Text>
        <Collapse in={open}>
          <div className="mt-4">
            <ReactMarkdown source={job.description} />
            <div style={{ wordBreak: 'break-all' }}>
              <h5 className="mt-2 urlclass">Website</h5><ReactMarkdown source={job.company_url} />
            </div>
            <div style={{ wordBreak: 'break-all' }}>
            <h5 className="applyclass">Apply Here</h5>
              <ReactMarkdown source={job.how_to_apply} />
            </div>
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  )
}