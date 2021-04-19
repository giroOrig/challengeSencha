Ext.define('calcu.view.localstorage.resultadoGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'localresultadogrid',

    requires: [
    	'calcu.controller.localstorage.resultadoController',
        'calcu.store.localstorage.resultadoStore'
    ],

    title: 'Resultados',
    
    controller: 'resultado',

    store: {
        type: 'resultado'
    },

    columns: [
        { 
        	text: 'Id',  
        	dataIndex: 'id' 
        },
        { 
        	text: 'Resultado', 
        	dataIndex: 'resultado', 
        	flex: 1 
        }
    ]
});
