// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
import React from 'react';

export function EvenOrOdd(props: { n: number }): string {
    if (props.n % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

