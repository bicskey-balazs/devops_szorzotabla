<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MultiplicationController extends Controller
{
    public function getTable($number)
    {
        // Validálás: csak 1 és 5 közötti számot fogadunk el
        if ($number < 1 || $number > 5) {
            return response()->json(['error' => 'Kérlek, 1 és 5 közötti számot válassz!'], 400);
        }

        $results = [];
        for ($i = 1; $i <= 10; $i++) {
            $results[] = [
                'multiplier' => $i,
                'result' => $number * $i
            ];
        }

        return response()->json([
            'base_number' => $number,
            'table' => $results
        ]);
    }
}