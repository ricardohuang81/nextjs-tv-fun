import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
  <Layout>
    <h1>Jessica Jones (Marvel)</h1>
    <ul>
      {props.cast.map((character, index) => (
        <li key={index + 1}>
          <Link as={`/character/${character.id}`} href={`/post?id=${character.id}`}>
            <a>{character.name}</a>
          </Link>
          <style>{`
            li {
              list-style: none;
              margin: 5px 0;
            }

            a {
              text-decoration: none;
              color: #FF1493;
              font-family: monospace;
            }

            a:hover {
              opacity: 0.6;
            }
          `}</style>
        </li>
      ))}
    </ul>
    <style jsx>{`
      h1 {
        font-family: monospace;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }
    `}</style>
  </Layout>
)

Index.getInitialProps = async function () {
  const res = await fetch('https://api.tvmaze.com/shows/1370/cast')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    cast: data.map(entry => entry.character)
  }
}

export default Index
