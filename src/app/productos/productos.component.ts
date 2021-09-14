import { Component, OnInit } from '@angular/core';
import { Producto } from './productos';



@Component({
  selector: 'productos-c',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  tituloPagina: string='Lista de Productos';
  mostrarImagenes:boolean=false;

  private _filtrarProductos:string='';
  get filtrarProductos(): string{
    return this._filtrarProductos;
  }

  set filtrarProductos(value:string){
    this._filtrarProductos=value;
    console.log(value);
    this.productosFiltrados=this.filtroProductos(value);

    console.log(this.productosFiltrados);
  }

  productosFiltrados: Producto[]=[];



/*la profe agregó un png de caja para representar el data binding*/
  productos: Producto[]=[
  {
    id:1 ,
    nombre: "Audifonos inalámbricos bluetooth",
    codigo:"Tws A7s",
    disponibilidad: false,
    precio:139.2,    
    rating:4.2,
    imgenURL:'../assets/adudiblue.png'
    /*imagenURL: 'caja.png'*/
  },
  {
    id:2 ,
    nombre: "Audifonos Inalámbricos Sony",
    codigo:"WH-CH510/L",
    disponibilidad: false,
    precio:919.68,    
    rating:3.2,
    imgenURL:'../assets/audisony.png'
  },
  {
    id:3 ,
    nombre: "IPhone XS",
    codigo:"IPHONE-CS398",
    disponibilidad: false,
    precio:10599.00,    
    rating:4.2,
    imgenURL:'../assets/iphoneXs.png'
  },
  {
    id:4 ,
    nombre: "MacBook Pro",
    codigo:"Mac-MVVJ2E/A",
    disponibilidad: false,
    precio:63066.91,    
    rating:4.2,
    imgenURL:'../assets/macbookpro.png'
  },
  {
    id:5 ,
    nombre: "Smartphone Samsung A21s Negro",
    codigo:"Samsung-A21s",
    disponibilidad: false,
    precio:5523.18,    
    rating:4.2,
    imgenURL:'../assets/samsunga21s.png'
  },
  {
    id: 6 ,
    nombre: "Laptop Lenovo IdeaPad",
    codigo:"Lenovo-Ideapad-L340",
    disponibilidad: false,
    precio:20868.17,    
    rating:4.2,
    imgenURL:'../assets/laplenovoideapad.png'
  }
  ]
  constructor() { }

  filtroProductos(filtrarPor:string):Producto[]{
    filtrarPor= filtrarPor.toLocaleLowerCase();
    return this.productos.filter((product:Producto)=> product.nombre.toLocaleLowerCase().includes(filtrarPor));
  }

  toggleImagenes(): void{
    this.mostrarImagenes=!this.mostrarImagenes;
  }

  ngOnInit(): void {
    this.filtrarProductos='';
  }

}
