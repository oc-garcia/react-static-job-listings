import React, { useState } from 'react'
import styles from './JobCard.module.sass'
import jobs from '../../Services/data.json'

export default function JobCard() {
   const [selectedFilter, setSelectedFilter] = useState(null)

   const handleFilterClick = (filter) => {
    setSelectedFilter(filter)
   }

   const filteredJobs = selectedFilter
    ? jobs.filter(
        (job) => job.languages.includes(selectedFilter) || job.tools.includes(selectedFilter)
      )
    : jobs
  return (
    <section className={styles.cardContainer}>
      {filteredJobs.map(job => 
      <div className={styles.card} key={job.id}>
        <div className={styles.cardSubContainer1}>
          <img className={styles.logo} src={`${job.logo}`} alt='Company Logo'/>
          <div className={styles.jobSpecsContainer}>
            <div className={styles.jobInformationContainer}>
              <p className={styles.companyName}>{job.company}</p>
              {job.new && <p className={styles.new}>NEW!</p>}
              {job.featured && <p className={styles.featured}>FEATURED</p>}
            </div>
            <div className={styles.jobNameContainer}>
              <p className={styles.jobPosition}>{job.position}</p>
            </div>
            <div className={styles.jobDescriptonContainer}>
              <p className={styles.postedAt}>{job.postedAt}</p>
              <div className={styles.dot}></div>
              <p className={styles.contract}>{job.contract}</p>
              <div className={styles.dot}></div>
              <p className={styles.location}>{job.location}</p>
            </div>
          </div>
        </div>
        <div className={styles.cardSubContainer2}>
          <ul>
            {job.languages.map((language) => <li onClick={() => handleFilterClick(language)} key={language}>{language}</li>)}
            {job.tools.map((tool) => <li onClick={() => handleFilterClick(tool)} key={tool}>{tool}</li>)}
          </ul>
        </div>
      </div>
      )}
      
    </section>
  )
}
