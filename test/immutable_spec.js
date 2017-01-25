import chai, {expect} from 'chai';
import chaiImmutable from 'chai-immutable';
import {List, Map} from 'immutable';
chai.use(chaiImmutable);

describe('Immutability', () => {

  describe('A List', () => {

    function addTask(currentState, task) {
      return currentState.push(task);
    }

    it('is immutable', () => {
      let state = List.of('Go Grocery Shopping', 'Wash the Car');
      let nextState = addTask(state, 'Mow the Lawn');

      expect(nextState).to.equal(List.of(
        'Go Grocery Shopping',
        'Wash the Car',
        'Mow the Lawn'
      ));
      expect(state).to.equal(List.of( 'Go Grocery Shopping', 'Wash the Car'));
    });

  }); //Lists

  describe('A Tree', () => {

    function addMovie(currentState, movie) {
      return currentState.update('movies', movies => movies.push(movie));
    }

    it('is immutable', () => {
      let state = new Map({
        movies: List.of('Trainspotting', '28 Days Later')
      });
      let nextState = addMovie(state, 'Sunshine');

      expect(nextState).to.equal(Map({
        movies: List.of( 'Trainspotting', '28 Days Later', 'Sunshine')
      }));
      expect(state).to.equal(Map({
        movies: List.of( 'Trainspotting', '28 Days Later')
      }));
    });

  }); // A Tree

}); // immutability
