Ext.define('calcu.controller.localstorage.resultadoController', {
	extend : 'Ext.app.ViewController',

	alias : 'controller.resultado',
	'nuevoResultado' : function(button, e, eOpts) {
		var form = button.up('#displayResultado');
		form.reset();
		var tab = button.up('#localresultadotab');
		var grid = tab.down('#localresultadogrid');
		try {
			grid.getStore().load();
			grid.getView().refresh();
			grid.getSelectionModel().deselectAll();
		} catch(ex) {
		}

	},
	'guardarResultado' : function(button, e, eOpts) {
		var form = button.up('#displayResultado');
		var tab = button.up('#localresultadotab');
		var grid = tab.down('#localresultadogrid');
		if (form.isValid()) { 
			var values = form.getValues();
			var record = null;
			try{
				record = grid.getStore().findRecord('id', values['id']);
			}catch(ex){}
			if(record==null){
				grid.getStore().add(form.getValues());
			}else{
				record.set(form.getValues());
			}	
			grid.getStore().sync();		
			try {
				grid.getStore().load();
				grid.getView().refresh();
				grid.getSelectionModel().deselectAll();
			} catch(ex) {
			}

			Ext.Msg.alert('Exito', 'Datos guardados exitosamente.');
			try {
				form.reset();
			} catch(ex) {
			}			
		}
		return;
	}
});
