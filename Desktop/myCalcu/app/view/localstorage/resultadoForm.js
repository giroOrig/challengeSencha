Ext.define('calcu.view.localstorage.resultadoForm', {
    extend: 'Ext.form.Panel',
    requires:[
    	'calcu.controller.localstorage.resultadoController'
    ],
    xtype: 'localresultadoform',
    title: 'Tabla de Resultados',
    bodyPadding: 10,
    controller: 'resultado',
    frame: true,
    items: [
        {
            xtype: 'hiddenfield',
            name: 'id',
            fieldLabel: 'Id',
            labelWidth: 100,
            msgTarget: 'side',
            allowBlank: true,
            anchor: '100%'
        },
        {
        	xtype: 'fieldcontainer',
        	anchor: '100%',
        	layout: 'hbox',
        	bodyPadding:10,
        	items:[
		        {
		            xtype: 'textfield',
		            name: 'resultado',
		            fieldLabel: 'Resultado',
		            labelWidth: 100,
		            msgTarget: 'side',
		            allowBlank: false,
		            flex: 1
		        }
        	]
        	
        }
    ]

});