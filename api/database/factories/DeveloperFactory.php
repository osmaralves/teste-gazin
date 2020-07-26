<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Developer;
use Faker\Generator as Faker;

$factory->define(Developer::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'gender' => $faker->randomElement(['M', 'F']),
        'birth_date' => $faker->dateTimeThisCentury->format('Y-m-d'),
        'hobby' => $faker->word,
    ];
});
