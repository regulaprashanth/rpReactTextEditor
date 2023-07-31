import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  TextEditorContainer,
  TextEditorCard,
  TextEditorHeading,
  TextEditorImageContainer,
  TextEditorImage,
  TextArea,
  TextEditorInputContainer,
  ButtonsContainer,
  ButtonListItem,
  Button,
} from './styledComponent'

class TextEditor extends Component {
  state = {isBoldActive: false, isItalicActive: false, isUnderlineActive: false}

  onClickBoldButton = () => {
    this.setState(prevState => ({isBoldActive: !prevState.isBoldActive}))
  }

  onClickItalicButton = () => {
    this.setState(prevState => ({isItalicActive: !prevState.isItalicActive}))
  }

  onClickUnderlineButton = () => {
    this.setState(prevState => ({
      isUnderlineActive: !prevState.isUnderlineActive,
    }))
  }

  render() {
    const {isBoldActive, isItalicActive, isUnderlineActive} = this.state
    return (
      <TextEditorContainer>
        <TextEditorCard>
          <TextEditorImageContainer>
            <TextEditorHeading>Text Editor</TextEditorHeading>
            <TextEditorImage
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </TextEditorImageContainer>
          <TextEditorInputContainer>
            <ButtonsContainer>
              <ButtonListItem>
                <Button
                  data-testid="bold"
                  isActive={isBoldActive}
                  type="button"
                  onClick={this.onClickBoldButton}
                >
                  <VscBold size={25} />
                </Button>
              </ButtonListItem>
              <ButtonListItem>
                <Button
                  data-testid="italic"
                  isActive={isItalicActive}
                  type="button"
                  onClick={this.onClickItalicButton}
                >
                  <GoItalic size={25} />
                </Button>
              </ButtonListItem>
              <ButtonListItem>
                <Button
                  data-testid="underline"
                  isActive={isUnderlineActive}
                  type="button"
                  onClick={this.onClickUnderlineButton}
                >
                  <AiOutlineUnderline size={25} />
                </Button>
              </ButtonListItem>
            </ButtonsContainer>
            <TextArea
              isBoldActive={isBoldActive}
              isItalicActive={isItalicActive}
              isUnderlineActive={isUnderlineActive}
              rows={58}
              cols={58}
            />
          </TextEditorInputContainer>
        </TextEditorCard>
      </TextEditorContainer>
    )
  }
}

export default TextEditor
