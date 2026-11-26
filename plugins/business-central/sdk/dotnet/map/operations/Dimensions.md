<!-- Generated file — do not edit; regenerated with the SDK. -->

# Dimensions — operations

Accessor: `client.Dimensions` · Source: `src/Dynamics365BusinessCentral/Api/Dimensions.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListDimensions

- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `ListDimensions(ListDimensionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`
- **Query params (wire ← C#)**: `$top` ← `Top`, `$skip` ← `Skip`, `$filter` ← `Filter`, `$select` ← `Select`
- **Returns**: `CompaniesApiDimensionsResponse`
- **Error**: `ApiException<ListDimensionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListDimensionsRequest` | `src/Dynamics365BusinessCentral/Requests/Dimensions/ListDimensionsRequest.cs` |
| `CompaniesApiDimensionsResponse` | `src/Dynamics365BusinessCentral/Models/CompaniesApiDimensionsResponse.cs` |
| `ListDimensionsError` | `src/Dynamics365BusinessCentral/Errors/ListDimensionsError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

