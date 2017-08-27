function DictionaryController(model,view) {
    this.model = model;
    this.view = view;

    this.init();
};

DictionaryController.prototype = {

    init: function () {
        this.getElements()
            .setupHandlers()
            .enable();
    },

    getElements: function () {
        // no need to create children inside the controller
        // this is a job for the view
        // you could all as well leave this function out
        return this;
    },

    setupHandlers: function () {

        this.getWordMeaningHandler = this.getMeaning.bind(this);        
        return this;
    },

    enable: function () {

        this.view.getWordMeaning.attach(this.getWordMeaningHandler);        
        return this;
    },


    getMeaning: function (sender, args) {
        this.model.getMeaning(args.selectedWord);
    }    

};