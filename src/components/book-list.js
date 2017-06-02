import Book from "./book";
import React from 'react';
import ReactDOM from 'react-dom';
// const BookList = ({books}) => {
//   const zebraClass = index => index % 2 ? 'even': 'odd';
//
//   //browser sees this but usually written as JSX
//       return (
//         <ul className="book-list">
//           {books.map((book, index)  => {
//             return <Book key={book.id} zebraClass={zebraClass(index)} {...book} />
//           })}
//         </ul>
//       );
// };

//same as above but STATE
//takes the initial list then makes changes to it as the APP develops
// e.g. add new books, delete books, etc...
class BookList extends React.Component {
  constructor(props){
    //react monitors state for changes during lifecycle of component
    super(props);
    this.state = {books: this.props.books}
  }

  zebraClass(index){
    return index % 2 ? 'even': 'odd';
  }

  //before component is mounted nothing in DOM here
  // all HTML is present at this point only so must be used for Jquery plugins
  componentWillMount(){
    debugger;
  }

  //after component is mounted
  componentDidMount(){
    debugger;
  }
  componentWillUnmount(){
    debugger;
  }
  componentWillReceiveProps(){

  }
  componentWillUpdate(){

  }
  componentDidUpdate(prevProps, prevState){


  }
  //if this method returns false any update operation on the component will not be done
  shouldComponentUpdate(){

  }
  render() {
      const { books } = this.props;
      return (
        <ul className="book-list">
          {books.map((book, index)  => {
            return <Book key={book.id} zebraClass={this.zebraClass(index)} {...book} />
          })}
        </ul>
      );
  }
}

BookList.propTypes = {
  books: React.PropTypes.arrayOf(React.PropTypes.object)
}

BookList.defaultProps = {
  books: []
}

export default BookList;
