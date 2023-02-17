import React from 'react'
import styles from './JobCard.module.sass'
import jobs from '../../Services/data.json'

export default function JobCard() {
  return (
    <section className={styles.cardContainer}>
      {jobs.map(job => <div className={styles.card}>{job.id}</div>)}
    </section>
  )
}
