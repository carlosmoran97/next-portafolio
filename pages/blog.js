import Link from "next/link";
import Layout from "../components/Layout";

const PostLink = ({ title, slug }) => {
  return (
    <li>
      <Link as={`/${slug}`} href={`/post?title=${title}`}>
        <a>{title}</a>
      </Link>
    </li>
  );
};

const Blog = () => {
  return (
    <Layout title="blog">
      <ul>
        <PostLink slug="react-post" title="React Post" />
        <PostLink slug="angular-post" title="Angular Post" />
        <PostLink slug="vue-post" title="Vue Post" />
      </ul>
    </Layout>
  );
};

export default Blog;
