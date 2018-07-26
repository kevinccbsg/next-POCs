import Layout from '../comp/MyLayout'
import PostLink from '../comp/PostLink'

// The only requirement for components placed inside a Link
// is they should accept an onClick prop.

const Index = () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink title="Hello Next.js"/>
      <PostLink title="Learn Next.js is awesome"/>
      <PostLink title="Deploy apps with Zeit"/>
    </ul>
  </Layout>
);

export default Index;
