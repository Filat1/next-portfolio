import Link from 'next/link'
import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'
import { Component } from 'react'


export default class About extends Component {

  static async getInitialProps() {
    const res = await fetch("https://api.github.com/users/Filat1");
    const data = await res.json();

    return { user: data }
  }

  render() {
    const { user } = this.props
    console.log(user)
    return (
      <Layout title="About">
        <p>{user.name}</p>
        <p>{user.login}</p>
        <img src="user.avatar_url" alt="Me" height="50px" />
        <p>A JavaScript programmer</p>
        <img src="/static/javascript-logo.png" alt="JavaScript Logo" height="100px" />
      </Layout>
    )
  }
}
