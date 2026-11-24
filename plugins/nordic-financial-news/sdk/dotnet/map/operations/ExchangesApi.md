<!-- Generated file — do not edit; regenerated with the SDK. -->

# ExchangesApi — operations

Accessor: `client.ExchangesApi` · Source: `src/NordicFinancialNews/Api/ExchangesApi.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetApiV1Exchanges

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1Exchanges(GetApiV1ExchangesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `cursor` ← `Cursor`, `country` ← `Country`, `fields` ← `Fields`
- **Returns**: `ApiV1ExchangesResponse`
- **Error**: `ApiException<GetApiV1ExchangesError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1ExchangesRequest` | `src/NordicFinancialNews/Requests/ExchangesApi/GetApiV1ExchangesRequest.cs` |
| `ApiV1ExchangesResponse` | `src/NordicFinancialNews/Models/ApiV1ExchangesResponse.cs` |
| `GetApiV1ExchangesError` | `src/NordicFinancialNews/Errors/GetApiV1ExchangesError.cs` |
| `ProblemDetails` | `src/NordicFinancialNews/Models/ProblemDetails.cs` |

### GetApiV1ExchangesByIdentifier

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1ExchangesByIdentifier(GetApiV1ExchangesByIdentifierRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Identifier`
- **Returns**: `ApiV1ExchangesResponse1`
- **Error**: `ApiException<GetApiV1ExchangesByIdentifierError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1ExchangesByIdentifierRequest` | `src/NordicFinancialNews/Requests/ExchangesApi/GetApiV1ExchangesByIdentifierRequest.cs` |
| `ApiV1ExchangesResponse1` | `src/NordicFinancialNews/Models/ApiV1ExchangesResponse1.cs` |
| `GetApiV1ExchangesByIdentifierError` | `src/NordicFinancialNews/Errors/GetApiV1ExchangesByIdentifierError.cs` |
| `ProblemDetails` | `src/NordicFinancialNews/Models/ProblemDetails.cs` |

### GetApiV1ExchangesByIdentifierCompanies

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1ExchangesByIdentifierCompanies(GetApiV1ExchangesByIdentifierCompaniesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Identifier`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `cursor` ← `Cursor`
- **Returns**: `ApiV1ExchangesCompaniesResponse`
- **Error**: `ApiException<GetApiV1ExchangesByIdentifierCompaniesError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1ExchangesByIdentifierCompaniesRequest` | `src/NordicFinancialNews/Requests/ExchangesApi/GetApiV1ExchangesByIdentifierCompaniesRequest.cs` |
| `ApiV1ExchangesCompaniesResponse` | `src/NordicFinancialNews/Models/ApiV1ExchangesCompaniesResponse.cs` |
| `GetApiV1ExchangesByIdentifierCompaniesError` | `src/NordicFinancialNews/Errors/GetApiV1ExchangesByIdentifierCompaniesError.cs` |
| `ProblemDetails` | `src/NordicFinancialNews/Models/ProblemDetails.cs` |

