<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
   /* Add the fillable property into the Product Model */
 
protected $fillable = ['title', 'descripcion', 'precio', 'disponibilidad'];
}
