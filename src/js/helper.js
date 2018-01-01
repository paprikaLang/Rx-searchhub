import Rx from 'rx';

const SEARCH_REPOS = 'https://api.github.com/search/repositories?sort=stars&order=desc&q=';

// 创建一个 ajax 的 promise
const getReposPromise = (query) => {
  return $.ajax({
  	type: "GET",
    url: `${SEARCH_REPOS}${query}`,
  }).promise();
};
// 通过 fromPromise 创建一个 Observable
export const getRepos = (query) => {
  const promise = getReposPromise(query);
  return Rx.Observable.fromPromise(promise);
};