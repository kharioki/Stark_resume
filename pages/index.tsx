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

  const { bio, positions } = data;
  return (
    <>
      <Head>
        <title>Stark's Resume</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <h1>{bio.name}</h1>
        <h2>{bio.tagline}</h2>
      </header>

      <div className={styles.split}>
        <div className={styles.left}>
          <h2>Contact</h2>
          <p>
            <strong>Email:</strong>{' '}
            <a href={`mailto:${bio.email}`}>{bio.email}</a>
          </p>
          <p>
            <strong>Website:</strong>{' '}
            <a href={bio.website}>{new URL(bio.website).host}</a>
          </p>
          <p>
            <strong>Github:</strong>{' '}
            <a href={bio.github}>{bio.github.replace('https://', '')}</a>
          </p>
          <p>
            <strong>Linkedin:</strong>{' '}
            <a href={bio.linkedin}>{bio.linkedin.replace('https://', '')}</a>
          </p>
        </div>
        <div className={styles.right}>right</div>
      </div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
