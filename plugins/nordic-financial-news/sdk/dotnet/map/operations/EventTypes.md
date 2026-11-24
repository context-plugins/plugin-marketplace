<!-- Generated file — do not edit; regenerated with the SDK. -->

# EventTypes — operations

Accessor: `client.EventTypes` · Source: `src/NordicFinancialNews/Api/EventTypes.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetApiV1EventTypes

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1EventTypes(GetApiV1EventTypesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `fields` ← `Fields`
- **Returns**: `ApiV1EventTypesResponse`
- **Error**: `ApiException<GetApiV1EventTypesError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1EventTypesRequest` | `src/NordicFinancialNews/Requests/EventTypes/GetApiV1EventTypesRequest.cs` |
| `ApiV1EventTypesResponse` | `src/NordicFinancialNews/Models/ApiV1EventTypesResponse.cs` |
| `GetApiV1EventTypesError` | `src/NordicFinancialNews/Errors/GetApiV1EventTypesError.cs` |
| `ProblemDetails` | `src/NordicFinancialNews/Models/ProblemDetails.cs` |

