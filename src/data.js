import React, { Component } from 'react';
import { bake_cookie, read_cookie } from 'sfcookies';

// se youtube-vid
/* state = read_cookie('items');
bake_cookie('items', items); */


class data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/image/random/10")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )

  }
  render() {
    const { error, isLoaded, items } = this.state;
    console.table(items)

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li>
              {items.message}
            </li>
          ))}
        </ul>
      );
    }
  }
}
export default data;


/* export default [
  {
    answers: ['Sweden', 'USA', 'France', 'Italy'],
    correct: 3,
    coordinates: { lat: 48.858289, lng: 2.294261 }
  },
  {
    answers: ['Italy', 'Sweden', 'USA', 'China'],
    correct: 2,
    coordinates: { lat: 59.3470962, lng: 18.0724084 }
  },
  {
    answers: ['Spain', 'Canada', 'U.S.A.', 'Norway'],
    correct: 3,
    coordinates: { lat: 40.689806, lng: -74.044483 }
  },
  {
    answers: ['Greece', 'Cyprus', 'Italy', 'Croatia'],
    correct: 3,
    coordinates: { lat: 41.89, lng: 12.491944 }
  },
  {
    answers: ['India', 'Bali', 'Japan', 'Thailand'],
    correct: 1,
    coordinates: { lat: 27.174, lng: 78.0421 }
  },
  {
    answers: ['Denmark', 'Indonesia', 'Taiwan', 'China'],
    correct: 4,
    coordinates: { lat: 39.916667, lng: 116.396973 }
  },
  {
    answers: ['Denmark', 'Vatican City State', 'Moldavia', 'China'],
    correct: 2,
    coordinates: { lat: 41.901944, lng: 12.456944 }
  },
  {
    answers: ['Australia', 'Indonesia', 'Taiwan', 'China'],
    correct: 1,
    coordinates: { lat: -33.857197, lng: 151.21514 }
  },
  {
    answers: ['Denmark', 'Peru', 'Taiwan', 'China'],
    correct: 2,
    coordinates: { lat: -13.163056, lng: -72.545556 }
  },
  {
    answers: ['India', 'China', 'Egypt', 'Croatia'],
    correct: 3,
    coordinates: { lat: 29.979175, lng: 31.134358 }
  }
];
 */