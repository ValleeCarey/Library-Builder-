//create class Media 
class Media {
  //constructor passes in title
  constructor(title) {
    //return title, ischeckedout, and ratings
   this._title = title;
   this._isCheckedOut = false;
   this._ratings = []; 
  }
//getter methods for each and setter methods for ischeckedout 
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }
  //check if value is true or not 
toggleCheckOutStatus() {
  this._isCheckedOut = !this._isCheckedOut;
}

//gets average rating sum of by using reduce method and adding accumular to rating

getAverageRating() {
  let ratingSum = this.ratings.reduce((accumulator, rating) => accumulator + rating);
  return ratingSum / this.ratings.length;
}
//push in balue to add the rating to get average rating 
addRating(value) {
  this.ratings.push(value);
}
};

//new class that extends from parent class Media 

class Book extends Media {
//pass in Book arguments in constructor 
  constructor(author, title, pages) {
    //parent class 'title' is passed in 
  super(title);
  this._author = author;
  this._pages = pages;
  }

  // getter methods for book
get author() {
  return this._author;
}
get pages() {
  return this._pages;
}
}

//new CLASS MOVIE 

class Movie extends Media {
//arguments passed in for Movie 
  constructor(director, title, runTime) {
    //super title passed in to parent class 
    super(title);
    this._director = director;
    this._runTime = runTime; 
  }

  //getter methods for Movie 
   get director() {
     return this._director; 
   }

   get runTime() {
     return this._runTime;
   }

}

//book instance to fill in arguments in constructor

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

historyOfEverything.toggleCheckOutStatus()
//log true to console 
console.log(historyOfEverything.isCheckedOut)
//add rating numbers 
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
//get average rating 
console.log(historyOfEverything.getAverageRating())
//
const speed = new Movie('Jan de Bont', 'Speed', 116);

speed.toggleCheckOutStatus()

console.log(speed.isCheckedOut)

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(speed.getAverageRating())
