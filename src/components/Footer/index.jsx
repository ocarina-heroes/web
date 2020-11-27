import styled from 'styled-components'

const Footer = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    margin-left: 0.5rem;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export default () => (
  <Footer>
    <a
      href="https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by <img src="/zeit.svg" alt="ZEIT Logo" />
    </a>
  </Footer>
)
