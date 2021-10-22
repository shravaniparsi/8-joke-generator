export const GENERATE_JOKE = "GENERATE_JOKE";
export const SET_LOADING = "SET_LOADING";

export const generate_joke = val => {
  return {
    type: GENERATE_JOKE,
    payload: val
  };
};

export const generate_joke_async = val => {
  return dispatch => {
    fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json"
      }
    })
      .then(function(response) {
        /* convert Stringified JSON response to Javascript Object */
        return response.json();
      })
      .then(function(data) {
        /* replace innerText of .joke-text with data.joke */
        // extract the joke text
        const joke = data.joke;
        dispatch(generate_joke(joke));
      })
      .catch(function(error) {
        // if some error occured
        // jokeText.innerText = 'Oops! Some error happened :(';
        // removes the old href from .tweet-btn if found any
        // tweetBtn.removeAttribute('href');
        // console log the error
        console.log(error);
      });
  };
};

export const set_loading = val => {
  return {
    type: SET_LOADING,
    payload: val
  };
};
