/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('calcu.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        display: 0.0,
        name: 'Calculadora',

        loremIpsum: 'hola',
    }

    //TODO - add data, formulas and/or methods to support your view
});
