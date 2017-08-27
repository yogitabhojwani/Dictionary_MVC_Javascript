function DictionaryView(model) {
    this.model = model;    
    this.getWordMeaning = new Event(this);    

    this.init();
};

DictionaryView.prototype = {
    init: function () {
        this.getElements()
            .setUpHandlers()
             .enable();
    },
    getElements: function () {
        this.meaningInputBox = document.getElementById("MeaningBox");
        return this;
    },
    setUpHandlers: function () {

        this.wordSelectionHandler = this.wordSelect.bind(this);       
        this.getWordMeaningHandler = this.getMeaning.bind(this);        
        return this;
    },
    enable: function () {

        document.onmouseup = this.wordSelectionHandler;
        this.model.getWordMeaning.attach(this.getWordMeaningHandler);        
        return this
    },
    wordSelect: function () {
        this.getWordMeaning.notify({selectedWord: "precious"});        
    },
    getMeaning: function () {
        this.mydata = JSON.parse(data);
        this.meaningInputBox.value = "";       
        var selectedWord = window.getSelection().toString().trim();
        if (selectedWord != "") {
            this.wordMeaning = this.mydata.find((function findMeanings(data) { return data.word.toLowerCase() === selectedWord.toLowerCase() }));            
            if (this.wordMeaning != null)
                this.meaningInputBox.value = this.wordMeaning.meaning;
        }
    },
    findMeanings: function(data) {
        var selectedWord = window.getSelection().toString().trim();
        return data.word.toLowerCase() === selectedWord.toLowerCase();
    }
   
};