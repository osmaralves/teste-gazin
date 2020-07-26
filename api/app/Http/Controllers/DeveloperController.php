<?php

namespace App\Http\Controllers;

use App\Developer;
use Illuminate\Http\Request;

class DeveloperController extends Controller
{
    public function index(Request $request)
    {
        return Developer::query()
            ->filterFromRequest($request)
            ->byName()
            ->paginate(min([100, $request->query('perPage', 10)]));
    }

    public function store(Request $request)
    {
    }

    public function show(Developer $developer)
    {
    }

    public function update(Request $request, Developer $developer)
    {
    }

    public function destroy(Developer $developer)
    {
    }
}
