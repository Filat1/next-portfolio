import Link from 'next/link'

export default () => (
  <div>
    <h1>About</h1>
    <Link href='/'>
      <a>Go to home using Link component</a>
    </Link>
    <div>
      <a href="/">Home using a href</a>
    </div>

    <p>A JavaScript programmer</p>
    <img src="/static/javascript-logo.png" alt="JavaScript Logo" height="100px" />
  </div>
)
