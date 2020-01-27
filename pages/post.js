import Layout from '../components/Layout'
import { withRouter } from 'next/router'

const Post = ({ router }) => (
  <Layout title={router.query.title} >
    <p> Lorem ipsum dolor, sit amet consectetur adipisicing
     elit. Necessitatibus, ab. Quibusdam at debitis voluptatum
      consectetur laborum officiis accusamus deleniti, ducimus
      assumenda eligendi voluptas harum expedita ut minima eum
      veniam? Voluptatibus?</p>
  </Layout>
)

export default withRouter(Post)