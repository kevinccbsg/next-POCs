import Link from 'next/link'
import Layout from '../comp/MyLayout'


// The only requirement for components placed inside a Link
// is they should accept an onClick prop.

const Index = () => (
  <Layout>
    <p>Hello world</p>
  </Layout>
);

export default Index;
