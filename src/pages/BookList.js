import React from 'react'


class BookList extends React.Component {
  constructor() {
    super()
    this.state = {
      bookList: []
    }
  }

  handleDel(book) {
    const confirmed = window.confirm(`确认要删除${book.name}吗?`)
    if (confirmed) {
      fetch('http://localhost:8000/book/' + book.id,
        {
          method: 'delete',
        })
        .then(res => res.json())
        .then(res => {
          this.setState({
            bookList: this.state.bookList.filter(item => item.id !== book.id)
          })
          alert('删除成功')
        })
        .catch(err => {
          console.error(err)
          alert('删除失败')
        })
    }
  }


  UNSAFE_componentWillMount() {
    fetch('http://localhost:8000/book')
      .then(res => res.json())
      .then(res => {
        this.setState({
          bookList: res
        })
      })
  }
  render() {
    const { bookList } = this.state
    return (
      <div>
        <header>
          <h1>书籍列表</h1>
        </header>
        <main>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>书名</th>
                <th>作者</th>
                <th>价格</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              {
                bookList.map(book => {
                  return (
                    <tr key={book.id}>
                      <td>{book.id}</td>
                      <td>{book.name}</td>
                      <td>{book.author}</td>
                      <td>{book.price}</td>
                      <td>
                        <button onClick={() => this.props.history.push({ pathname: '/book/bookedit', state: { book } })}>修改</button>
                        <button onClick={() => this.handleDel(book)}>删除</button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </main>
      </div>
    )
  }
}
export default BookList

