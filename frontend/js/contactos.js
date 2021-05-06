function operateFormatter(value, row, index) {
  return [
    '<a class="like" href="javascript:void(0)" title="Like">',
    '<i class="fa fa-heart"></i>',
    '</a>  ',
    '<a class="remove" href="javascript:void(0)" title="Remove">',
    '<i class="fa fa-trash"></i>',
    '</a>'
  ].join('')
}

window.operateEvents = {
  'click .like': function (e, value, row, index) {
    alert('You click like action, row: ' + JSON.stringify(row))
  },
  'click .remove': function (e, value, row, index) {
    $table.bootstrapTable('remove', {
      field: 'id',
      values: [row.id]
    })
  }
}

// Inicializar tabla
var data = [
  {
    'id': 1,
    'contact': 'Contacto 1',
    'region': 'Region 1',
    'company': 'Compañía 1',
    'position': 'Cargo 1',
    'channel': 'Canal 1'
  }
]
let $table = $('#table');
$table.bootstrapTable({
  data: data,
  locale: 'es-AR',
  columns: [
    {
      field: 'selection',
      checkbox: true,
      align: 'center',
      valign: 'middle'
    }, {
      title: 'Contacto',
      field: 'contact',
      align: 'center',
      valign: 'middle',
      sortable: true
    }, {
      title: 'País/Region',
      field: 'region',
      align: 'center',
      valign: 'middle',
      sortable: true
    }, {
      title: 'Compañía',
      field: 'company',
      align: 'center',
      valign: 'middle',
      sortable: true
    }, {
      title: 'Cargo',
      field: 'position',
      align: 'center',
      valign: 'middle',
      sortable: true
    }, {
      title: 'Canal preferido',
      field: 'channel',
      align: 'center',
      valign: 'middle'
    }, {
      title: 'Interés',
      field: 'interet',
      align: 'center',
      valign: 'middle',
      sortable: true
    }, {
      field: 'operate',
      title: 'Acciones',
      align: 'center',
      clickToSelect: false,
      events: window.operateEvents,
      formatter: operateFormatter
    }
  ]
});

// Función para actualizar los datos
const updateTable = data => {
  $table.bootstrapTable('load', data);
}



