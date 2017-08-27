function DictionaryModel() {    
    this.getWordMeaning = new Event(this);
};

DictionaryModel.prototype = {
    addWords: function (word, meaning) {
        this.wordMeanings.push({
            word: word,
            meaning: meaning
        });        
    },
    getMeaning: function (selectedWord){
        this.getWordMeaning.notify();
    }    
};