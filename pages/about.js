import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import Error from "./_error";

const About = ({ user, statusCode }) => {

  if (statusCode) {
    return <Error statusCode={statusCode} />;
  }

  return (
    <Layout title="About">
      <p>{user?.name}</p>
      <p>{user?.bio}</p>
      <img src={user?.avatar_url} alt="Carlos Morán" height="200px" />
    </Layout>
  );
};

About.getInitialProps = async () => {
  const res = await fetch("https://api.github.com/users/carlosmoran97");
  const statusCode = res.status > 200 ? res.status : false;
  const data = await res.json();
  return {
    user: data,
    statusCode
  };
};

export default About;
