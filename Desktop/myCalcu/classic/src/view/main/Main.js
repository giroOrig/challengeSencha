/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('calcu.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'calcu.view.localstorage.resultadoGrid',
        'calcu.view.localstorage.resultadoForm',
        'calcu.view.main.MainController',
        'calcu.view.main.MainModel',
        'calcu.view.main.List'
    ],
    
    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Usar Calculadora',
        iconCls: 'fas fa-calculator',
        // The following grid shares a store with the classic version's grid as well!
        
        items: [{
            xtype: 'displayfield',
            layout: 'card',
            cls: 'btn-green',
            bind: { 
                value: '{display}'
            },
            height: 60,
            width:300,
            padding: 0,
            id:'displayResultado',
            style: 'border: solid 1px black;'

        },
            {   xtype:'button',
                text: 'C',
                colspan: 2,
                width: 100,
                cls: 'btn-green',
                handler: 'onClickClear'
            },
            {
                xtype:'button',
                text: '+/-',
                cls: 'btn-green',
                handler: 'onClickChangeSign',
                colspan: 1,
                width: 100
            },
            {
                xtype:'button',
                text: '&divide;',
                cls: 'btn-orange',
                handler: 'onClickOp',
                width:100
            },
            {
                xtype:'container'
            },
            {
                xtype:'button',
                text: '+',
                cls: 'btn-orange',
                handler: 'onClickOp',
                width:100
            },
            {
                xtype:'button',
                text: '&times;',
                cls: 'btn-orange',
                handler: 'onClickOp',
                width:100
            },
            {
                xtype:'button',
                text: '-',
                cls: 'btn-orange',
                handler: 'onClickOp',
                handler:'onClickNumber',
                width:100
            },
            {
                xtype:'container'    
            },
            {
                xtype:'button',
                text: '7',
                handler:'onClickNumber',
                width:100
            },
            {   
                xtype:'button',
                text: '8',
                handler:'onClickNumber',
                width:100
            },
            {   
                xtype:'button',
                text: '9',
                handler:'onClickNumber',
                width:100
            },
            {
                xtype:'container'
            },
            {
                xtype:'button',
                text: '4',
                handler:'onClickNumber',
                width:100
            },
            {
                xtype:'button',
                text: '5',
                handler:'onClickNumber',
                width:100
            },
            {
                xtype:'button',
                text: '6',
                handler:'onClickNumber',
                width:100
            },
            {
                xtype:'container'
            },
            {
                xtype:'button',
                text: '1',
                handler:'onClickNumber',
                width:100
            },
            {
                xtype:'button',
                text: '2',
                handler:'onClickNumber',
                width:100
            },
            {
                xtype:'button',
                text: '3',
                handler:'onClickNumber',
                width:100
            },
            {
                xtype:'container'
            },            
            {
                xtype:'button',
                text: '0',
                width: 100
            },
            {
                xtype:'button',
                text: '.',
                handler: 'onClickDot',
                width:100
            },
            {
                xtype:'button',
                text: '=',
                cls: 'btn-orange',
                handler: 'onClickOp',
                width:100                
            },
            {
                xtype:'container'
            },
            {
                xtype:'button',
                text:'GUARDAR RESULTADO',
                cls: 'btn-orange',
                handler: 'guardarAlumno',
                width:300
            }
        ]
    }, {
        title: 'Historial de resultados',
        iconCls: 'fas fa-history',
        items: [
            {
                xtype: 'localresultadogrid',
                itemId:'localresultadogrid',
                region:'center'
            }	        
        ]
    },
    
]
});
