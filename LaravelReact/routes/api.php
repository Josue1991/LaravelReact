<?php

use Illuminate\Http\Request;
use App\Producto;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('productos', function () {
    return response(Producto::all(),200);
});
 
Route::get('productos/{producto}', function ($productId) {
    return response(Producto::find($productId), 200);
});
  
 
Route::post('productos', function(Request $request) {
   $resp = Producto::create($request->all());
    return $resp;
 
});
 
Route::put('update/{producto}', function(Request $request, $productId) {
    $product = Producto::findOrFail($productId);
    $product->update($request->all());
    return $product;
});
 
Route::get('borrar/{producto}',function($producto) {
    Producto::destroy($producto);
    return 'User  deleted';
});