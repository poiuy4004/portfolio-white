import styled from "styled-components";

const Container = styled.div`
  display: flex;
  column-gap: 3vw;
  align-items: center;
`
const Img = styled.img`
  height: 3vw;
  width: 3vw;
`
const Name = styled.h3`
  font-size: 1vw;
`

function Skill({skill}){
  return(
    <Container>
      <Img src={skill.imageUrl} alt={skill.name} />
      <Name>{skill.name}</Name>
    </Container>
  ) 
}
export default Skill;