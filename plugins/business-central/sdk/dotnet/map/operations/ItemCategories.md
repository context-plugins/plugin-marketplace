<!-- Generated file — do not edit; regenerated with the SDK. -->

# ItemCategories — operations

Accessor: `client.ItemCategories` · Source: `src/Dynamics365BusinessCentral/Api/ItemCategories.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListItemCategories

- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `ListItemCategories(ListItemCategoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`
- **Query params (wire ← C#)**: `$top` ← `Top`, `$skip` ← `Skip`, `$filter` ← `Filter`, `$select` ← `Select`
- **Returns**: `CompaniesApiItemCategoriesResponse`
- **Error**: `ApiException<ListItemCategoriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListItemCategoriesRequest` | `src/Dynamics365BusinessCentral/Requests/ItemCategories/ListItemCategoriesRequest.cs` |
| `CompaniesApiItemCategoriesResponse` | `src/Dynamics365BusinessCentral/Models/CompaniesApiItemCategoriesResponse.cs` |
| `ListItemCategoriesError` | `src/Dynamics365BusinessCentral/Errors/ListItemCategoriesError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

