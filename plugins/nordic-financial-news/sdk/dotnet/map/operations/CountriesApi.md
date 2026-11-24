<!-- Generated file — do not edit; regenerated with the SDK. -->

# CountriesApi — operations

Accessor: `client.CountriesApi` · Source: `src/NordicFinancialNews/Api/CountriesApi.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetApiV1Countries

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1Countries(GetApiV1CountriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `cursor` ← `Cursor`, `fields` ← `Fields`
- **Returns**: `ApiV1CountriesResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetApiV1CountriesRequest` | `src/NordicFinancialNews/Requests/CountriesApi/GetApiV1CountriesRequest.cs` |
| `ApiV1CountriesResponse` | `src/NordicFinancialNews/Models/ApiV1CountriesResponse.cs` |

### GetApiV1CountriesByIdentifier

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1CountriesByIdentifier(GetApiV1CountriesByIdentifierRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Identifier`
- **Returns**: `ApiV1CountriesResponse1`
- **Error**: `ApiException<GetApiV1CountriesByIdentifierError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1CountriesByIdentifierRequest` | `src/NordicFinancialNews/Requests/CountriesApi/GetApiV1CountriesByIdentifierRequest.cs` |
| `ApiV1CountriesResponse1` | `src/NordicFinancialNews/Models/ApiV1CountriesResponse1.cs` |
| `GetApiV1CountriesByIdentifierError` | `src/NordicFinancialNews/Errors/GetApiV1CountriesByIdentifierError.cs` |
| `ProblemDetails` | `src/NordicFinancialNews/Models/ProblemDetails.cs` |

