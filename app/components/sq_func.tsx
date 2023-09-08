import React from 'react';

export default function sq_func() {

  function square (number: number): number {
    return number * number;
  }

  const num = 6;
  const result = square(num)

  return (
    <div>{result}</div>
  )
}