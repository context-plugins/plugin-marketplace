<!-- Generated file — do not edit; regenerated with the SDK. -->

# Watchlists — operations

Accessor: `client.Watchlists` · Source: `src/NordicFinancialNews/Api/Watchlists.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetApiV1Watchlists

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1Watchlists(GetApiV1WatchlistsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1WatchlistsResponse`
- **Error**: `ApiException<GetApiV1WatchlistsError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1WatchlistsRequest` | `src/NordicFinancialNews/Requests/Watchlists/GetApiV1WatchlistsRequest.cs` |
| `ApiV1WatchlistsResponse` | `src/NordicFinancialNews/Models/ApiV1WatchlistsResponse.cs` |
| `GetApiV1WatchlistsError` | `src/NordicFinancialNews/Errors/GetApiV1WatchlistsError.cs` |
| `ProblemDetails` | `src/NordicFinancialNews/Models/ProblemDetails.cs` |

### GetApiV1WatchlistsById

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1WatchlistsById(GetApiV1WatchlistsByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `cursor` ← `Cursor`
- **Returns**: `ApiV1WatchlistsResponse1`
- **Error**: `ApiException<GetApiV1WatchlistsByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1WatchlistsByIdRequest` | `src/NordicFinancialNews/Requests/Watchlists/GetApiV1WatchlistsByIdRequest.cs` |
| `ApiV1WatchlistsResponse1` | `src/NordicFinancialNews/Models/ApiV1WatchlistsResponse1.cs` |
| `GetApiV1WatchlistsByIdError` | `src/NordicFinancialNews/Errors/GetApiV1WatchlistsByIdError.cs` |
| `ProblemDetails` | `src/NordicFinancialNews/Models/ProblemDetails.cs` |

