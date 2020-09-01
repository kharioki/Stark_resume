import Head from 'next/head';
import { useQuery, gql } from '@apollo/client';
import styles from '../styles/Home.module.css';

const ResumeQuery = gql`
  query TonyStark {
    bio {
      name
      tagline
      email
      github
      website
      linkedin
      objective
    }
    positions {
      id
      title
      company
      location
      startDate
      endDate
      employmentType
      years
      months
      achievements
    }
  }
`;

export default function Home() {
  const { data, error, loading } = useQuery(ResumeQuery);

  if (error) {
    return <span>Error... looks like one of the semicolons got loose!</span>;
  }

  if (loading) {
    return (
      <header className={styles.header}>
        <h1>Tony Stark</h1>
        <h2>loading...</h2>
      </header>
    );
  }
  return (
    <>
      <Head>
        <title>Stark's Resume</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
