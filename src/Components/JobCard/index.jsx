import styles from "./JobCard.module.sass";
import jobs from "../../Services/data.json";

import { useContext } from "react";
import { FilterContext } from "../../Hooks/Context/FilterContext";

export default function JobCard() {
  const { selectedFilters, addFilter } = useContext(FilterContext);

  console.log(selectedFilters.toString());
  console.log(selectedFilters.map((selectedFilter) => selectedFilter));

  const filteredJobs =
    selectedFilters.length === 0
      ? jobs
      : jobs.filter((job) =>
          selectedFilters.every((filter) => job.languages.includes(filter) || job.tools.includes(filter))
        );
  return (
    <section className={styles.cardContainer}>
      {filteredJobs.map((job) => (
        <div className={styles.card} key={job.id}>
          <div className={styles.cardSubContainer1}>
            <img className={styles.logo} src={`${job.logo}`} alt="Company Logo" />
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
              {job.languages.map((language) => (
                <li onClick={() => addFilter(language)} key={language}>
                  {language}
                </li>
              ))}
              {job.tools.map((tool) => (
                <li onClick={() => addFilter(tool)} key={tool}>
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}
