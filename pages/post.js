import { useRouter } from 'next/router';
import Layout from "../components/Layout";

const Post = () => {
  const router = useRouter();
  const { title } = router.query;
  return (
    <Layout title={title}>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
        porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
        purus lectus malesuada libero, sit amet commodo magna eros quis urna.
      </p>
    </Layout>
  );
};

export default Post;
