<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/', function() {
    return [
        'version' => '1.0.0',
        'message' => 'API para o Teste da Gazin.',
    ];
});
