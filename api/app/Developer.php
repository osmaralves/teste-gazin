<?php

namespace App;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class Developer extends Model
{
    protected $fillable = [
        'name',
        'gender',
        'birth_date',
        'hobby',
    ];

    protected $casts = [
        'birth_date' => 'date:Y-m-d',
    ];

    protected $appends = [
        'age',
    ];

    public function getAgeAttribute()
    {
        return $this->birth_date->age;
    }

    public function scopeByName(Builder $query): Builder
    {
        return $query->orderBy('name');
    }

    public function scopeSearch(Builder $query, string $term): Builder
    {
        return $query->orWhere(function ($query) use ($term) {
            $query->where('name', 'like', "%{$term}%");
            $query->orWhere('hobby', 'like', "%{$term}%");
        });
    }

    public function scopeFilterFromRequest(Builder $query, Request $request): Builder
    {
        if ($request->filled('search')) {
            $query->search($request->search);
        }

        if ($request->filled('gender') && in_array($request->gender, ['F', 'M'])) {
            $query->where('gender', $request->gender);
        }

        return $query;
    }
}
