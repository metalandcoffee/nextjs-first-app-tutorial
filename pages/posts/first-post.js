import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function FirstPost() {
	return (
		<Layout>
			<Head>
				<title>First Post Ever</title>
			</Head>
			<h1>First Post</h1>
			<Link href="/">Return to Home</Link>
		</Layout>
	)
}