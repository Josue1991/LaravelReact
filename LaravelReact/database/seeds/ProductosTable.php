<?php

use Illuminate\Database\Seeder;
use App\Producto;

class ProductosTable extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();
 
        // Create 50 product records
        for ($i = 0; $i < 50; $i++) {
            Producto::create([
                'title' => $faker->title,
                'descripcion' => $faker->paragraph,
                'precio' => $faker->randomNumber(2),
                'disponibilidad' => $faker->boolean(50)
            ]);
        }
    }
}
