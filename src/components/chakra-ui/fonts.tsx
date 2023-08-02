import { Global } from '@emotion/react'

const Fonts = () => (
    <Global
        styles={`
      @font-face {
        font-family: 'yekan';
        font-style: normal;
        src: url('/fonts/yekan.eot') format('eot'), 
        url('/fonts/yekan.woff') format('woff'), 
        url('/fonts/yekan.ttf') format('ttf');
      }}
      `}
    />
)

export default Fonts