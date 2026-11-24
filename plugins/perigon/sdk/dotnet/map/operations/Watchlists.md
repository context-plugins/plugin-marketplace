<!-- Generated file — do not edit; regenerated with the SDK. -->

# Watchlists — operations

Accessor: `client.Watchlists` · Source: `src/Perigon/Api/Watchlists.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateWatchlist

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `CreateWatchlist(CreateWatchlistRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `WatchlistResult`
- **Error**: `ApiException<CreateWatchlistError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateWatchlistRequest` | `src/Perigon/Requests/Watchlists/CreateWatchlistRequest.cs` |
| `CreateWatchlistParams` | `src/Perigon/Models/CreateWatchlistParams.cs` |
| `WatchlistResult` | `src/Perigon/Models/WatchlistResult.cs` |
| `CreateWatchlistError` | `src/Perigon/Errors/CreateWatchlistError.cs` |
| `ErrorResponseModel` | `src/Perigon/Models/ErrorResponseModel.cs` |

### DeleteWatchlist

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `DeleteWatchlist(DeleteWatchlistRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `WatchlistResult`
- **Error**: `ApiException<DeleteWatchlistError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteWatchlistRequest` | `src/Perigon/Requests/Watchlists/DeleteWatchlistRequest.cs` |
| `WatchlistResult` | `src/Perigon/Models/WatchlistResult.cs` |
| `DeleteWatchlistError` | `src/Perigon/Errors/DeleteWatchlistError.cs` |
| `ErrorResponseModel` | `src/Perigon/Models/ErrorResponseModel.cs` |

### GetWatchlist

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetWatchlist(GetWatchlistRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `WatchlistResult`
- **Error**: `ApiException<GetWatchlistError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWatchlistRequest` | `src/Perigon/Requests/Watchlists/GetWatchlistRequest.cs` |
| `WatchlistResult` | `src/Perigon/Models/WatchlistResult.cs` |
| `GetWatchlistError` | `src/Perigon/Errors/GetWatchlistError.cs` |
| `ErrorResponseModel` | `src/Perigon/Models/ErrorResponseModel.cs` |

### ListWatchlists

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `ListWatchlists(ListWatchlistsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SortBy`, `SortOrder`
- **Query params (wire ← C#)**: `sortBy` ← `SortBy`, `sortOrder` ← `SortOrder`, `name` ← `Name`, `page` ← `Page`, `size` ← `Size`, `nulls` ← `Nulls`
- **Returns**: `WatchlistListResult`
- **Error**: `ApiException<ListWatchlistsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListWatchlistsRequest` | `src/Perigon/Requests/Watchlists/ListWatchlistsRequest.cs` |
| `WatchlistSortBy` | `src/Perigon/Models/Enums/WatchlistSortBy.cs` |
| `SortOrder` | `src/Perigon/Models/Enums/SortOrder.cs` |
| `Nulls` | `src/Perigon/Models/Enums/Nulls.cs` |
| `WatchlistListResult` | `src/Perigon/Models/WatchlistListResult.cs` |
| `ListWatchlistsError` | `src/Perigon/Errors/ListWatchlistsError.cs` |
| `ErrorResponseModel` | `src/Perigon/Models/ErrorResponseModel.cs` |

### ResolveWatchlists

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `ResolveWatchlists(ResolveWatchlistsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `name` ← `Name`
- **Returns**: `WatchlistResolveResult`
- **Error**: `ApiException<ResolveWatchlistsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ResolveWatchlistsRequest` | `src/Perigon/Requests/Watchlists/ResolveWatchlistsRequest.cs` |
| `WatchlistResolveResult` | `src/Perigon/Models/WatchlistResolveResult.cs` |
| `ResolveWatchlistsError` | `src/Perigon/Errors/ResolveWatchlistsError.cs` |
| `ErrorResponseModel` | `src/Perigon/Models/ErrorResponseModel.cs` |

### UpdateWatchlist

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `UpdateWatchlist(UpdateWatchlistRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `WatchlistResult`
- **Error**: `ApiException<UpdateWatchlistError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateWatchlistRequest` | `src/Perigon/Requests/Watchlists/UpdateWatchlistRequest.cs` |
| `UpdateWatchlistParams` | `src/Perigon/Models/UpdateWatchlistParams.cs` |
| `WatchlistResult` | `src/Perigon/Models/WatchlistResult.cs` |
| `UpdateWatchlistError` | `src/Perigon/Errors/UpdateWatchlistError.cs` |
| `ErrorResponseModel` | `src/Perigon/Models/ErrorResponseModel.cs` |

