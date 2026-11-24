<!-- Generated file — do not edit; regenerated with the SDK. -->

# CurrencyApi — operations

Accessor: `client.CurrencyApi` · Source: `src/MicrosoftDynamicsNav/Api/CurrencyApi.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListCurrencies

- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `ListCurrencies(ListCurrenciesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`
- **Query params (wire ← C#)**: `$top` ← `Top`, `$skip` ← `Skip`, `$filter` ← `Filter`, `$select` ← `Select`
- **Returns**: `CompaniesApiCurrenciesResponse`
- **Error**: `ApiException<ListCurrenciesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCurrenciesRequest` | `src/MicrosoftDynamicsNav/Requests/CurrencyApi/ListCurrenciesRequest.cs` |
| `CompaniesApiCurrenciesResponse` | `src/MicrosoftDynamicsNav/Models/CompaniesApiCurrenciesResponse.cs` |
| `ListCurrenciesError` | `src/MicrosoftDynamicsNav/Errors/ListCurrenciesError.cs` |
| `ErrorResponseModel` | `src/MicrosoftDynamicsNav/Models/ErrorResponseModel.cs` |

