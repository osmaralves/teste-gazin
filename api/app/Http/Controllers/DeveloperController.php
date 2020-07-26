<?php

namespace App\Http\Controllers;

use App\Developer;
use App\Http\Requests\DeveloperStoreRequest;
use App\Http\Requests\DeveloperUpdateRequest;
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

    public function store(DeveloperStoreRequest $request)
    {
        Developer::create($request->all());

        return response()->noContent(201);
    }

    public function show(Developer $developer)
    {
        return $developer;
    }

    public function update(DeveloperUpdateRequest $request, Developer $developer)
    {
        $developer->fill($request->all())->save();

        return $developer;
    }

    public function destroy(Developer $developer)
    {
    }
}
