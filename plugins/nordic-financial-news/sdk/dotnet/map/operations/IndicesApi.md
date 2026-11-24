<!-- Generated file — do not edit; regenerated with the SDK. -->

# IndicesApi — operations

Accessor: `client.IndicesApi` · Source: `src/NordicFinancialNews/Api/IndicesApi.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetApiV1Indices

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1Indices(GetApiV1IndicesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `cursor` ← `Cursor`, `exchange` ← `Exchange`, `fields` ← `Fields`
- **Returns**: `ApiV1IndicesResponse`
- **Error**: `ApiException<GetApiV1IndicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1IndicesRequest` | `src/NordicFinancialNews/Requests/IndicesApi/GetApiV1IndicesRequest.cs` |
| `ApiV1IndicesResponse` | `src/NordicFinancialNews/Models/ApiV1IndicesResponse.cs` |
| `GetApiV1IndicesError` | `src/NordicFinancialNews/Errors/GetApiV1IndicesError.cs` |
| `ProblemDetails` | `src/NordicFinancialNews/Models/ProblemDetails.cs` |

### GetApiV1IndicesByIdentifier

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1IndicesByIdentifier(GetApiV1IndicesByIdentifierRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Identifier`
- **Returns**: `ApiV1IndicesResponse1`
- **Error**: `ApiException<GetApiV1IndicesByIdentifierError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1IndicesByIdentifierRequest` | `src/NordicFinancialNews/Requests/IndicesApi/GetApiV1IndicesByIdentifierRequest.cs` |
| `ApiV1IndicesResponse1` | `src/NordicFinancialNews/Models/ApiV1IndicesResponse1.cs` |
| `GetApiV1IndicesByIdentifierError` | `src/NordicFinancialNews/Errors/GetApiV1IndicesByIdentifierError.cs` |
| `ProblemDetails` | `src/NordicFinancialNews/Models/ProblemDetails.cs` |

### GetApiV1IndicesByIdentifierCompanies

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1IndicesByIdentifierCompanies(GetApiV1IndicesByIdentifierCompaniesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Identifier`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `cursor` ← `Cursor`
- **Returns**: `ApiV1IndicesCompaniesResponse`
- **Error**: `ApiException<GetApiV1IndicesByIdentifierCompaniesError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1IndicesByIdentifierCompaniesRequest` | `src/NordicFinancialNews/Requests/IndicesApi/GetApiV1IndicesByIdentifierCompaniesRequest.cs` |
| `ApiV1IndicesCompaniesResponse` | `src/NordicFinancialNews/Models/ApiV1IndicesCompaniesResponse.cs` |
| `GetApiV1IndicesByIdentifierCompaniesError` | `src/NordicFinancialNews/Errors/GetApiV1IndicesByIdentifierCompaniesError.cs` |
| `ProblemDetails` | `src/NordicFinancialNews/Models/ProblemDetails.cs` |

