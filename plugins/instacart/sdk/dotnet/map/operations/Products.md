<!-- Generated file — do not edit; regenerated with the SDK. -->

# Products — operations

Accessor: `client.Products` · Source: `src/Instacart/Api/Products.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateRecipePage

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `CreateRecipePage(CreateRecipePageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ProductsLinkResponse`
- **Error**: `ApiException<CreateRecipePageError>` — **Case A (typed)**
- **Error accessors**: `TryGetError2([NotNullWhen(true)] out Error2? value)` [400, 401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateRecipePageRequest` | `src/Instacart/Requests/Products/CreateRecipePageRequest.cs` |
| `RecipeRequest` | `src/Instacart/Models/RecipeRequest.cs` |
| `ProductsLinkResponse` | `src/Instacart/Models/ProductsLinkResponse.cs` |
| `CreateRecipePageError` | `src/Instacart/Errors/CreateRecipePageError.cs` |
| `Error2` | `src/Instacart/Models/Error2.cs` |

### CreateShoppingListPage

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `CreateShoppingListPage(CreateShoppingListPageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ProductsLinkResponse`
- **Error**: `ApiException<CreateShoppingListPageError>` — **Case A (typed)**
- **Error accessors**: `TryGetError2([NotNullWhen(true)] out Error2? value)` [400, 401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateShoppingListPageRequest` | `src/Instacart/Requests/Products/CreateShoppingListPageRequest.cs` |
| `ShoppingListRequest` | `src/Instacart/Models/ShoppingListRequest.cs` |
| `ProductsLinkResponse` | `src/Instacart/Models/ProductsLinkResponse.cs` |
| `CreateShoppingListPageError` | `src/Instacart/Errors/CreateShoppingListPageError.cs` |
| `Error2` | `src/Instacart/Models/Error2.cs` |

### SubmitProducts

- **Auth**: `options.BearerAuth`
- **Signature**: `SubmitProducts(SubmitProductsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `SubmissionResponse`
- **Error**: `ApiException<SubmitProductsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SubmitProductsRequest` | `src/Instacart/Requests/Products/SubmitProductsRequest.cs` |
| `ProductSubmissionRequest` | `src/Instacart/Models/ProductSubmissionRequest.cs` |
| `SubmissionResponse` | `src/Instacart/Models/SubmissionResponse.cs` |
| `SubmitProductsError` | `src/Instacart/Errors/SubmitProductsError.cs` |
| `Error` | `src/Instacart/Models/Error.cs` |

