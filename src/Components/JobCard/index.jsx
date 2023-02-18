import React from 'react'
import styles from './JobCard.module.sass'
import jobs from '../../Services/data.json'

export default function JobCard() {
  return (
    <section className={styles.cardContainer}>
      {jobs.map(job => 
      <div className={styles.card}>
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
            <p>{job.postedAt}</p>
            <p>{job.contract}</p>
            <p>{job.location}</p>
          </div>
        </div>
      </div>
      )}
    </section>
  )
}
