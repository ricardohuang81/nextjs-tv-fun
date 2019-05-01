import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '2px solid #40E0D0'
}

export default function Layout(props) {
  return (
    <div style={layoutStyle}>
      <Header />
      {props.children}
    </div>
  )
}