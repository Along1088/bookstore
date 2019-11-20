import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <h1>Welcome</h1>
                </header>

                <main>
                    <Link to='/'>Home</Link>
                    <br />
                    <Link to='/book/add'>添加书籍</Link>
                    <br />
                    <Link to='/book/booklist'>书籍列表</Link>
                    <br />
                    <Link to='/book/select'>查找</Link>
                </main>
            </div>
        )
    }
}
export default Home