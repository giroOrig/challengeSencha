Ext.define(
	'calcu.model.localstorage.resultadoModel',
	{
		extend: 'Ext.data.Model',
		fields:
			[
				{
					name:'id',
					type:'int'
				},
				{
					name:'resultado',
					type:'int'
				}
			]		
	}	
);