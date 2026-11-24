<!-- Generated file — do not edit; regenerated with the SDK. -->

# Food — operations

Accessor: `client.food` · Source: `api_verve/apis/food.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.food.cocktail

- **Route**: `GET /v1/cocktail`
- **Auth**: `api_key`
- **Signature**: `def cocktail(name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `name`
- **Params**: `name` — query
- **Returns (parsed)**: `V1CocktailResponse`
- **Returns (raw)**: `ApiResult[V1CocktailResponse, CocktailErrorBody]`
- **Error**: `CocktailErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1CocktailResponse` | `api_verve/models/v1_cocktail_response.py` |
| `CocktailErrorBody` | `api_verve/errors/cocktail_error.py` |

### client.food.nutrition

- **Route**: `GET /v1/nutrition`
- **Auth**: `api_key`
- **Signature**: `def nutrition(food: str, *, grams: float | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `food`
- **Params**: `food` — query · `grams` — query
- **Returns (parsed)**: `V1NutritionResponse`
- **Returns (raw)**: `ApiResult[V1NutritionResponse, NutritionErrorBody]`
- **Error**: `NutritionErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1NutritionResponse` | `api_verve/models/v1_nutrition_response.py` |
| `NutritionErrorBody` | `api_verve/errors/nutrition_error.py` |

### client.food.recipe

- **Route**: `GET /v1/recipe`
- **Auth**: `api_key`
- **Signature**: `def recipe(name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `name`
- **Params**: `name` — query
- **Returns (parsed)**: `V1RecipeResponse`
- **Returns (raw)**: `ApiResult[V1RecipeResponse, RecipeErrorBody]`
- **Error**: `RecipeErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1RecipeResponse` | `api_verve/models/v1_recipe_response.py` |
| `RecipeErrorBody` | `api_verve/errors/recipe_error.py` |

