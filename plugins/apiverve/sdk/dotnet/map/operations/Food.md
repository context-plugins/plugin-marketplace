<!-- Generated file — do not edit; regenerated with the SDK. -->

# Food — operations

Accessor: `client.Food` · Source: `src/ApiVerve/Api/Food.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Cocktail

- **Auth**: `options.ApiKey`
- **Signature**: `Cocktail(CocktailRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Name`
- **Query params (wire ← C#)**: `name` ← `Name`
- **Returns**: `V1CocktailResponse`
- **Error**: `ApiException<CocktailError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CocktailRequest` | `src/ApiVerve/Requests/Food/CocktailRequest.cs` |
| `V1CocktailResponse` | `src/ApiVerve/Models/V1CocktailResponse.cs` |
| `CocktailError` | `src/ApiVerve/Errors/CocktailError.cs` |

### Nutrition

- **Auth**: `options.ApiKey`
- **Signature**: `Nutrition(NutritionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Food`
- **Query params (wire ← C#)**: `food` ← `Food`, `grams` ← `Grams`
- **Returns**: `V1NutritionResponse`
- **Error**: `ApiException<NutritionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `NutritionRequest` | `src/ApiVerve/Requests/Food/NutritionRequest.cs` |
| `V1NutritionResponse` | `src/ApiVerve/Models/V1NutritionResponse.cs` |
| `NutritionError` | `src/ApiVerve/Errors/NutritionError.cs` |

### Recipe

- **Auth**: `options.ApiKey`
- **Signature**: `Recipe(RecipeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Name`
- **Query params (wire ← C#)**: `name` ← `Name`
- **Returns**: `V1RecipeResponse`
- **Error**: `ApiException<RecipeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RecipeRequest` | `src/ApiVerve/Requests/Food/RecipeRequest.cs` |
| `V1RecipeResponse` | `src/ApiVerve/Models/V1RecipeResponse.cs` |
| `RecipeError` | `src/ApiVerve/Errors/RecipeError.cs` |

