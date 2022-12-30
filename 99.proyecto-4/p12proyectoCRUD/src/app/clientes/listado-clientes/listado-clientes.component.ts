import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {

  clientes: any;

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.cargarClientes(); 
  }

  cargarClientes() {
    this.clientesService.getClientes()
                        .subscribe({
                              next: (res: any) => {
                                  this.clientes = res;
                              },
                              error: (err: any) => {
                                  console.log(err);
                              }
                            })
  }

  eliminarCliente(cif) {
    this.clientesService.deleteClientes(cif)
                        .subscribe({
                          next: (res: any) => {
                            this.cargarClientes();
                          },
                          error: (err: any) => {
                              console.log(err);
                          }
                        })
  }

}
