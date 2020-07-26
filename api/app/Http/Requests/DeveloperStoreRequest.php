<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DeveloperStoreRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => ['required'],
            'gender' => ['required', 'in:F,M'],
            'birth_date' => ['required', 'date_format:Y-m-d'],
            'hobby' => ['nullable'],
        ];
    }

    public function attributes(): array
    {
        return [
            'name' => 'nome',
            'gender' => 'sexo',
            'birth_date' => 'data de nascimento',
        ];
    }
}
