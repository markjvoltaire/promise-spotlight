/**
 * TODO:
 */

export function fetchPinBalls() {
  const pinBalls = fetch(`https://ponball.herokuapp.com/api/v1/machines`)
    .then((data) => data.json())
    .then((newData) => {
      console.log(newData);
      return newData;
    });

  return pinBalls;
}

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */
