import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // private _http=Inject(HttpClient)
  constructor(
    private _http:HttpClient,
  ) { }
  private baseUrl = 'http://localhost:3000/products'; 
  newProduct(product:any):Observable<any>{
    return this._http.post('http://localhost:3000/products',product)
  }
   // Método para obtener todos los productos
   getAllProducts(): Observable<any> {
    return this._http.get(`${this.baseUrl}`);
  }

  // Método para obtener un producto por su ID
  getProductById(productId: string): Observable<any> {
    return this._http.get(`${this.baseUrl}/${productId}`);
  }

  // Método para eliminar un producto por su ID
  deleteProduct(productId: string): Observable<any> {
    return this._http.delete(`${this.baseUrl}/${productId}`);
  }

  // Método para actualizar un producto
  updateProduct(productId: string, productData: any): Observable<any> {
    return this._http.put(`${this.baseUrl}/${productId}`, productData);
  }
}
