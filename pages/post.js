import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'

const imgSize = {
  width: 400
}

const Post = props => (
  <Layout>
    <h1>{props.character.name}</h1>
    <img style={imgSize} src={props.character.image.original} />
    <style jsx>{`
      h1 {
        font-family: monospace;
      }
    `}</style>
  </Layout>
)

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/characters/${id}`)
  const character = await res.json()

  console.log(`Fetched Character: ${character.name}`)

  return { character }
}

export default Post