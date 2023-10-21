import { css } from "@emotion/react";
import styled from "@emotion/styled";

/**
 * @jsxImportSource @emotion/react
 */

const Hello = styled.h2`
color: ${props => (props.blue ? "blue" : "red")};
`
//css={css`CSSを書く`}
const EmotionComponent = () => {
	const largeFont = css`
	font-size: 54px;
	`
//まとめるパターン(継承)
	const fontRed = css`
	color: red;
	${largeFont}
	`
	return (<>
		<h2 css={css`color: red;`}>Emotionのテスト</h2>
		{/* <h2 css={[fontRed, largeFont]}>Hello, World</h2> */}
		<h2 css={[fontRed]}>継承のテスト</h2>
		<Hello blue>Emotion</Hello>
	</>);
}

export default EmotionComponent;
