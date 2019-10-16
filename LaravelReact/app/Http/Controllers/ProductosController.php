<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductosController extends Controller
{
    public function index()
    {
        return Producto::all();
    }
 
    public function show(Producto $product)
    {
        return $product;
    }
    public function update(Request $request, Producto $product)
    {
        $product->update($request->all());
 
        return response()->json($product, 200);
    }
 
    public function delete(Producto $product)
    {
        $product->delete();
 
        return response()->json(null, 204);
    }
    public function store(Request $request)
    {
        $this->validate($request, [
        'title' => 'required|unique:products|max:255',
        'description' => 'required',
        'precio' => 'integer',
        'disponibilidad' => 'boolean',
    ]);
        $product = Producto::create($request->all());
 
        return response()->json($product, 201);
    }
}
