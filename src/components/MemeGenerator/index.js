import {Component} from 'react'
import {
  Heading,
  Paragraph,
  MainContainer,
  Input,
  ImgContainer,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    display: false,
    Url: '',
    TopText: '',
    BottomText: '',
    FontSize: fontSizesOptionsList[0].displayText,
  }

  renderMeme = () => {
    const {Url, TopText, BottomText, FontSize} = this.state
    console.log(typeof FontSize)

    return (
      <div>
        <ImgContainer data-testid="meme" url={Url}>
          <Paragraph fontSize={FontSize}>{TopText}</Paragraph>
          <Paragraph fontSize={FontSize}>{BottomText}</Paragraph>
        </ImgContainer>
      </div>
    )
  }

  onClickImg = event => {
    event.preventDefault()
    this.setState({display: true})
  }

  imageUrl = event => {
    this.setState({Url: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({TopText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({BottomText: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({FontSize: event.target.value})
  }

  renderForm = () => (
    <form onSubmit={this.onClickImg}>
      <label htmlFor="img">Image URL</label>
      <br />
      <Input
        type="text"
        id="img"
        placeholder="Enter the Image Url"
        onChange={this.imageUrl}
      />
      <br />
      <label htmlFor="top">Top Text</label>
      <br />
      <Input
        type="text"
        id="top"
        placeholder="Enter the Top Text"
        onChange={this.onChangeTopText}
      />
      <br />
      <label htmlFor="bottom">Bottom Text</label>
      <br />
      <Input
        type="text"
        id="bottom"
        placeholder="Enter the Bottom Text"
        onChange={this.onChangeBottomText}
      />
      <br />
      <label htmlFor="size">Font Size</label>
      <br />
      <select id="size" onChange={this.onChangeFontSize}>
        {fontSizesOptionsList.map(eachList => (
          <option key={eachList.optionId}>{eachList.displayText}</option>
        ))}
      </select>
      <br />
      <button type="submit">Generate</button>
    </form>
  )

  render() {
    const {display} = this.state
    return (
      <MainContainer>
        <div>
          <Heading>Meme Generator</Heading>
          {this.renderForm()}
        </div>
        <div>{display ? this.renderMeme() : null}</div>
      </MainContainer>
    )
  }
}

export default MemeGenerator
