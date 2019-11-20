import React from 'react'

class BookSelect extends React.Component {
  constructor() {
    super()
    this.state = {
      inputValue: '',
      selectItem: []
    }
  }
  handleSelect(inputValue) {
    fetch('http://localhost:8000/book', { method: 'get' })
      .then(res => res.json())
      .then(res => {
        res.map(item => {
          if (item.name === inputValue) {
            this.setState({
              selectItem: item
            })
          }
        })
      })
  }

  render() {
    const { inputValue, selectItem } = this.state
    return (
      <div>
        <input placeholder='请输入书名' value={inputValue} onChange={e => { this.setState({ inputValue: e.target.value }) }} />
        <button onClick={() => this.handleSelect(inputValue)}>查询</button>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>书名</th>
              <th>作者</th>
              <th>价格</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{selectItem.id}</td>
              <td>{selectItem.name}</td>
              <td>{selectItem.author}</td>
              <td>{selectItem.price}</td>
            </tr>
          </tbody>
        </table>
      </div >
    )
  }
}

export default BookSelect