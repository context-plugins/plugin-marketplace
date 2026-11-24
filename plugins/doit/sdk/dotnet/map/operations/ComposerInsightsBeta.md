<!-- Generated file — do not edit; regenerated with the SDK. -->

# ComposerInsightsBeta — operations

Accessor: `client.ComposerInsightsBeta` · Source: `src/DoiT/Api/ComposerInsightsBeta.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListComposerRecipeResults

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListComposerRecipeResults(ListComposerRecipeResultsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RecipeId`
- **Query params (wire ← C#)**: `maxResults` ← `MaxResults`, `pageToken` ← `PageToken`, `sortBy` ← `SortBy`, `sortOrder` ← `SortOrder`, `filter` ← `Filter`
- **Returns**: `ComposerRecipeResultList`
- **Error**: `ApiException<ListComposerRecipeResultsError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 404, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListComposerRecipeResultsRequest` | `src/DoiT/Requests/ComposerInsightsBeta/ListComposerRecipeResultsRequest.cs` |
| `SortBy1` | `src/DoiT/Models/Enums/SortBy1.cs` |
| `SortOrder` | `src/DoiT/Models/Enums/SortOrder.cs` |
| `ComposerRecipeResultList` | `src/DoiT/Models/ComposerRecipeResultList.cs` |
| `ListComposerRecipeResultsError` | `src/DoiT/Errors/ListComposerRecipeResultsError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |

### ListComposerRecipes

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListComposerRecipes(ListComposerRecipesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `maxResults` ← `MaxResults`, `pageToken` ← `PageToken`, `sortBy` ← `SortBy`, `sortOrder` ← `SortOrder`, `filter` ← `Filter`
- **Returns**: `ComposerRecipeList`
- **Error**: `ApiException<ListComposerRecipesError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 404, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListComposerRecipesRequest` | `src/DoiT/Requests/ComposerInsightsBeta/ListComposerRecipesRequest.cs` |
| `SortByDoiTComposerInsightsBetaApi` | `src/DoiT/Models/Enums/SortByDoiTComposerInsightsBetaApi.cs` |
| `SortOrder` | `src/DoiT/Models/Enums/SortOrder.cs` |
| `ComposerRecipeList` | `src/DoiT/Models/ComposerRecipeList.cs` |
| `ListComposerRecipesError` | `src/DoiT/Errors/ListComposerRecipesError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |

