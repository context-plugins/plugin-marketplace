<!-- Generated file — do not edit; regenerated with the SDK. -->

# Sources — operations

Accessor: `client.Sources` · Source: `src/NordicFinancialNews/Api/Sources.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetApiV1Sources

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1Sources(GetApiV1SourcesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `cursor` ← `Cursor`, `fields` ← `Fields`
- **Returns**: `ApiV1SourcesResponse`
- **Error**: `ApiException<GetApiV1SourcesError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1SourcesRequest` | `src/NordicFinancialNews/Requests/Sources/GetApiV1SourcesRequest.cs` |
| `ApiV1SourcesResponse` | `src/NordicFinancialNews/Models/ApiV1SourcesResponse.cs` |
| `GetApiV1SourcesError` | `src/NordicFinancialNews/Errors/GetApiV1SourcesError.cs` |
| `ProblemDetails` | `src/NordicFinancialNews/Models/ProblemDetails.cs` |

