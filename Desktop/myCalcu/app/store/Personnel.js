Ext.define('calcu.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'calcu.model.Personnel',

    data: { items: [
        { intento: '1', resultado: "eanluc.picard@enterprise.com" },
        { intento: '2',     resultado: "worf.moghsson@enterprise.com"},
        { intento: '3',   resultado: "deanna.troi@enterprise.com"},
        { intento: '4',     resultado: "mr.data@enterprise.com"}
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
