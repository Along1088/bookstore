import React from 'react'
class BookEdit extends React.Component {
  constructor(props) {
    super(props)
    const { name, author, price } = this.props.location.state.book
    this.state = {
      form: {
        name: {
          value: name,
          valid: true,
          error: ''
        },
        author: {
          value: author,
          valid: true,
          error: ''
        },
        price: {
          value: price,
          valid: true,
          error: ''
        }
      }
    }
  }
  handleValueChange(field, value, type = 'string') {
    if (type === 'number') {
      value = +value
    }
    const newFieldObj = { value, valid: true, error: '' }

    switch (field) {
      case ('name'): {
        if (value.length > 5) {
          newFieldObj.error = '最多五个字符'
          newFieldObj.valid = false
        } else if (value.length === 0) {
          newFieldObj.error = '书名不能为空'
          newFieldObj.valid = false
        }
        break
      }
      case ('author'): {
        if (value.length > 5) {
          newFieldObj.error = '最多五个字符'
          newFieldObj.valid = false
        } else if (value.length === 0) {
          newFieldObj.error = '作者不能为空'
          newFieldObj.valid = false
        }
        break
      }
      case ('price'): {
        if (!value) {
          newFieldObj.error = '请填写价格'
          newFieldObj.valid = false
        }
        break
      }
      default:
    }
    this.setState({
      form: {
        ...this.state.form,
        [field]: newFieldObj
      }
    })
  }
  handleSubmit(e) {
    const { form: { name, author, price } } = this.state
    e.preventDefault()
    if (!name.valid || !author.valid || !price.valid) {
      alert('请填写正确信息后重试')
      return
    }

    fetch('http://localhost:8000/book/' + this.props.location.state.book.id, {
      method: 'put',
      body: JSON.stringify({
        name: name.value,
        author: author.value,
        price: price.value
      }),
      headers: {
        "Content-Type": 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => {
        if (res.id) {
          alert('修改成功')
          this.props.history.push('/book/booklist')
        } else {
          alert('修改失败')
        }
      })
      .catch(err => console.error(err));
  }

  render() {
    const { form: { name, author, price } } = this.state
    return (
      <div>
        <header>
          <h1>修改图书</h1>
        </header>

        <main>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <label>名称:</label>
            <input
              type="text"
              value={name.value}
              onChange={(e) => this.handleValueChange('name', e.target.value)} />
            {!name.valid && name.error}
            <br />
            <label>作者:</label>
            <input
              type="text"
              value={author.value}
              onChange={(e) => this.handleValueChange('author', e.target.value)} />
            {!author.valid && author.error}
            <br />
            <label>价格:</label>
            <input
              type="number"
              value={price.value}
              onChange={(e) => this.handleValueChange('price', e.target.value, 'number')} />
            {!price.valid && price.error}
            <br />
            <br />
            <input type="submit" value="提交" />
          </form>
        </main>
      </div>
    )
  }
}
export default BookEdit