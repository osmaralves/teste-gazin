<?php

use App\Developer;
use Illuminate\Database\Seeder;

class DeveloperSeeder extends Seeder
{
    public function run()
    {
        factory(Developer::class, 50)->create();
    }
}
