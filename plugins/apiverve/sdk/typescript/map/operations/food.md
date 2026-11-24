<!-- Generated file — do not edit; regenerated with the SDK. -->

# Food — operations

Accessor: `client.food` · Source: `src/resources/food.ts` · 3 operations · Request and error types: namespace `Food`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apiverve`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### cocktail

- **Signature**: `cocktail(request: Food.CocktailRequest, options?: RequestOptions): ApiPromise<V1CocktailResponse, Food.CocktailError>`
- **Wire**: `GET /v1/cocktail`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1CocktailResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Food.CocktailError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Food.CocktailRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `name` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1CocktailResponse` | `v1CocktailResponseSchema` | `src/models/v1-cocktail-response.ts` |

### nutrition

- **Signature**: `nutrition(request: Food.NutritionRequest, options?: RequestOptions): ApiPromise<V1NutritionResponse, Food.NutritionError>`
- **Wire**: `GET /v1/nutrition`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1NutritionResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Food.NutritionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Food.NutritionRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `food` | `query` | `string` | yes |
| `grams` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1NutritionResponse` | `v1NutritionResponseSchema` | `src/models/v1-nutrition-response.ts` |

### recipe

- **Signature**: `recipe(request: Food.RecipeRequest, options?: RequestOptions): ApiPromise<V1RecipeResponse, Food.RecipeError>`
- **Wire**: `GET /v1/recipe`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1RecipeResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Food.RecipeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Food.RecipeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `name` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1RecipeResponse` | `v1RecipeResponseSchema` | `src/models/v1-recipe-response.ts` |

