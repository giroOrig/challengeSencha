Ext.define(
	'calcu.store.localstorage.resultadoStore',
	{
		extend: 'Ext.data.Store',
		model: 'calcu.model.localstorage.resultadoModel',
		alias: 'store.resultado',
		proxy: {
			type: 'localstorage',
        	id  : 'resultadostore'
		},
		autoLoad: true,
		autoSync: true
	}
);