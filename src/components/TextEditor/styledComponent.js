import styled from 'styled-components'

export const TextEditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #25262c;
`

export const TextEditorCard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 80vw;
  height: 80vh;
  background-color: #1b1c22;
  border-radius: 10px;
`
export const TextEditorHeading = styled.h1`
  color: #f8fafc;
  font-size: 30px;
`
export const TextEditorImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 40vw;
  background-color: transparent;
`

export const TextEditorImage = styled.img`
  width: 25vw;
  height: 50vh;
`
export const TextEditorInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 35vw;
  height: 70vh;
  background-color: #25262c;
  border-radius: 10px;
`

export const ButtonsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 35vw;
  height: 10vh;
  padding: 5px;
  border: 1px solid #cbd5e1;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  list-style-type: none;
  margin-top: 0px;
`
export const ButtonListItem = styled.li`
  background-color: none;
`
export const Button = styled.button`
  padding: 6px;
  border-radius: 6px;
  border: none;
  height: 30px;
  width: 60px;
  background-color: transparent;
  color: ${props => (props.isActive ? ' #faff00' : '#f1f5f9')};
`
export const TextArea = styled.textarea`
  background-color: transparent;
  border: none;
  color: #f8fafc;
  outline: none;
  font-weight: ${props => (props.isBoldActive ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalicActive ? 'italic' : 'normal')};
  text-decoration: ${props =>
    props.isUnderlineActive ? 'underline' : 'normal'};
`
