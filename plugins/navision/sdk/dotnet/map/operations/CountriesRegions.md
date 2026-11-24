<!-- Generated file — do not edit; regenerated with the SDK. -->

# CountriesRegions — operations

Accessor: `client.CountriesRegions` · Source: `src/MicrosoftDynamicsNav/Api/CountriesRegions.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListCountriesRegions

- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `ListCountriesRegions(ListCountriesRegionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`
- **Query params (wire ← C#)**: `$top` ← `Top`, `$skip` ← `Skip`, `$filter` ← `Filter`, `$select` ← `Select`
- **Returns**: `CompaniesApiCountriesRegionsResponse`
- **Error**: `ApiException<ListCountriesRegionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCountriesRegionsRequest` | `src/MicrosoftDynamicsNav/Requests/CountriesRegions/ListCountriesRegionsRequest.cs` |
| `CompaniesApiCountriesRegionsResponse` | `src/MicrosoftDynamicsNav/Models/CompaniesApiCountriesRegionsResponse.cs` |
| `ListCountriesRegionsError` | `src/MicrosoftDynamicsNav/Errors/ListCountriesRegionsError.cs` |
| `ErrorResponseModel` | `src/MicrosoftDynamicsNav/Models/ErrorResponseModel.cs` |

