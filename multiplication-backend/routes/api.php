<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MultiplicationController;

Route::get('/multiplication/{number}', [MultiplicationController::class, 'getTable']);