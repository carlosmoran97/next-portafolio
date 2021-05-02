import Layout from '../components/Layout';

const Error = ({ statusCode }) => {
  return (
    <Layout title="error">
      {statusCode ? `Could not load your user data: Status code ${statusCode}` : `Couldn't get that page, sorry!`}
    </Layout>
  );
};

export default Error;
