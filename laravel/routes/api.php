<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/welcome', function () {
    return Response::json(['message' => 'Hello World!'], 200);
});

Route::post('/answer', function (Request $request) {
    Log::info($request);
    return Response::json(['message' => 'Answer received']);
});