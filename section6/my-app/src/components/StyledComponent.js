import styled from 'styled-components'

const StyledComponent = () => {
	return (<>
	<Wrapper>
		<Title>ここに文字が入ります</Title>
	</Wrapper>
	</>)
}

const Wrapper = styled.div`
border: 1px solid red;
`
const BaseTitle = styled.h1`
color:blue;
`

const Title = styled(BaseTitle)`
background-color:lightgray;
`

export default StyledComponent
