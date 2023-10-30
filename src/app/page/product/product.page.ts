import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductI } from './product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  products: ProductI[] = []; // Aquí deberías definir la estructura de tus productos
  mostrarForm = false;
  
  constructor(
    private _productSvc:ProductService,
    private _fb: FormBuilder
  ) { }

  ngOnInit() {
    this.getAllProducts()
  }

  productForm = this._fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    price: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
  });
   
  getAllProducts(){
    this._productSvc.getAllProducts().subscribe((res:any)=>{
      console.log(res);
      this.products=res
    })
  }
  onSaveProduct(){
    console.log("Producto guardado")
  }
  verDetalle(productId: string) {
    // Implementa la lógica para ver los detalles de un producto
  }
  mostrarFormulario() {
    this.mostrarForm = true;
  }
  crearProducto() {
    if (this.productForm.valid) {
      // Si el formulario es válido, crea un nuevo producto usando el servicio
      const formData = this.productForm.value;
      this._productSvc.newProduct(formData).subscribe((result) => {
        // Aquí puedes manejar la respuesta del servicio, por ejemplo, actualizar la lista de productos
        this.products.push(result);
        this.productForm.reset(); // Limpia el formulario después de crear el producto
        this.mostrarForm = false; // Oculta el formulario
      });
    }
  }
  
}
