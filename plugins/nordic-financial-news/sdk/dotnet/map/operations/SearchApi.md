<!-- Generated file — do not edit; regenerated with the SDK. -->

# SearchApi — operations

Accessor: `client.SearchApi` · Source: `src/NordicFinancialNews/Api/SearchApi.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetApiV1Search

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1Search(GetApiV1SearchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Q`
- **Query params (wire ← C#)**: `q` ← `Q`, `type` ← `Type`, `limit` ← `Limit`
- **Returns**: `SearchResult`
- **Error**: `ApiException<GetApiV1SearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1SearchRequest` | `src/NordicFinancialNews/Requests/SearchApi/GetApiV1SearchRequest.cs` |
| `SearchResult` | `src/NordicFinancialNews/Models/SearchResult.cs` |
| `GetApiV1SearchError` | `src/NordicFinancialNews/Errors/GetApiV1SearchError.cs` |
| `ProblemDetails` | `src/NordicFinancialNews/Models/ProblemDetails.cs` |

