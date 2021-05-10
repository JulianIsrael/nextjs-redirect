import Link from 'next/link'

const Home = () => <>
  Home
  <br />
  <Link href="/page-1">Page1</Link>
  <br />
  <Link href="/blog">External Rewrite</Link>
  <br />
  <Link href="/operation">Operation Rewrite</Link>
</>

export default Home
