import React from 'react';

import { convertToUSD } from "../util";

const Book = ({title, price, zebraClass}) => {
    return (
      <li className={`one-book ${zebraClass}`}>
      {title}... {convertToUSD(price)}
      </li>
    );
}

//strong typecasting for development purposes only
Book.propTypes = {
  zebraClass: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  price: React.PropTypes.number.isRequired
}

export default Book;
