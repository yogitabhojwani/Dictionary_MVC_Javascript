$(function () {
    var model = new DictionaryModel(),
        view = new DictionaryView(model),
        controller = new DictionaryController(model, view);
});