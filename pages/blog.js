import Layout from '../components/Layout'
import Link from 'next/link'

const PostLink = ({ slag, title }) => (
  <li>
    <Link as={`/${slag}`} href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
)

export default () => (
  <Layout>
    <ul>
      <PostLink slag="react-post" title="React Post" />
      <PostLink slag="angular-post" title="Angular Post" />
      <PostLink slag="vue-post" title="Vue Post" />
    </ul>
  </Layout>
)