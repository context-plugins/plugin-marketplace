<!-- Generated file — do not edit; regenerated with the SDK. -->

# Categories — operations

Accessor: `client.Categories` · Source: `src/NordicFinancialNews/Api/Categories.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetApiV1Categories

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1Categories(GetApiV1CategoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `cursor` ← `Cursor`, `fields` ← `Fields`
- **Returns**: `ApiV1CategoriesResponse`
- **Error**: `ApiException<GetApiV1CategoriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1CategoriesRequest` | `src/NordicFinancialNews/Requests/Categories/GetApiV1CategoriesRequest.cs` |
| `ApiV1CategoriesResponse` | `src/NordicFinancialNews/Models/ApiV1CategoriesResponse.cs` |
| `GetApiV1CategoriesError` | `src/NordicFinancialNews/Errors/GetApiV1CategoriesError.cs` |
| `ProblemDetails` | `src/NordicFinancialNews/Models/ProblemDetails.cs` |

