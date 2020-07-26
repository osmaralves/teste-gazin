<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DeveloperUpdateRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => ['sometimes', 'required'],
            'gender' => ['sometimes', 'required', 'in:F,M'],
            'birth_date' => ['sometimes', 'required', 'date_format:Y-m-d'],
            'hobby' => ['sometimes', 'nullable'],
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
