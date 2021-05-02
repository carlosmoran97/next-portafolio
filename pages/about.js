import Link from 'next/link';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout title="About">
      <Link href="/">
        <a>Go to home</a>
      </Link>
      <p>A JavaScript programmer</p>
      <img src="/javascript-logo.png" alt="Javascript" height="200px" />
    </Layout>
  );
};

export default About;
