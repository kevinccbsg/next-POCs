import Layout from '../comp/MyLayout'
import PostLink from '../comp/PostLink'

// The only requirement for components placed inside a Link
// is they should accept an onClick prop.


const Index = () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink id="hello-nextjs" title="Hello Next.js"/>
      <PostLink id="learn-nextjs" title="Learn Next.js is awesome"/>
      <PostLink id="deploy-nextjs" title="Deploy apps with Zeit"/>
    </ul>
  </Layout>
);

export default Index;
