// Class to represent a row in the seat reservations grid
function AnotaPedidos(name, initialMeal) 
{
    var self = this;
    self.nome = name;
    self.prato = ko.observable(initialMeal);

    self.precoFormatado = ko.computed(function() {
    	var preco = self.prato().valor;
    	return preco ? "R$ " + preco.toFixed(2) : "None";
    });
}

// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function IndexViewModel() 
{
    this.tituloModal = ko.observable("Janela Model");
    this.textoModal = ko.observable("Texto exibido na janela modal...");

	// Tabelas
    this.clienteCabecalhoNome = ko.observable("Cliente");
    this.clienteCabecalhoPrato = ko.observable("Refeição");
    this.clienteCabecalhoValor = ko.observable("Preço");

    // Non-editable catalog data - would come from the server
    this.pratos = [
        { nome: "Standard (sandwich)", valor: 0 },
        { nome: "Premium (lagosta)", valor: 34.95 },
        { nome: "Ultimate (zebra)", valor: 290 }
    ];

    // Editable data
    this.pedidos = ko.observableArray([
        new AnotaPedidos("Rodrigo", this.pratos[0]),
        new AnotaPedidos("Lilia", this.pratos[1]),
        new AnotaPedidos("Natalia", this.pratos[2])
    ]);

    //this.fullName = ko.computed(function() {
        //return this.firstName() + " " + this.lastName();
    //}, this);
    
    //this.capitalizeLastName = function() {
        //var currentVal = this.lastName(); // Read the current value
        //this.lastName(currentVal.toUpperCase()); // Write back a modified value - Como o lastName é do tipo observable, pode ser chamado como uma função.
    //};
}

// Activates knockout.js
ko.applyBindings(new IndexViewModel());