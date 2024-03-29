import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1vw;
  align-items: center;
`
const Img = styled.img`
  height: 3vw;
  width: 3vw;
`
const Name = styled.h3`
  font-size: 1vw;
`

function Other({skill}){
  return(
    <Container>
      <Img src={skill.imageUrl} alt={skill.name} />
      <Name>{skill.name}</Name>
    </Container>
  )
}
export default Other;