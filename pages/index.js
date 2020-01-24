import Link from 'next/link'

const Index = () => (
  <div>
    <h1>Home</h1>

    <Link href="/about">
      <a>go to About</a>
    </Link>

    <div>Welcome to the home page</div>
  </div>
)

export default Index;