<!-- Generated file — do not edit; regenerated with the SDK. -->

# Watchlist — operations

Accessor: `client.Watchlist` · Source: `src/Compabase/Api/Watchlist.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteWatchlistKrsByKrs

- **Auth**: `options.ApiKeyAuth` OR `options.BearerAuth`
- **Signature**: `DeleteWatchlistKrsByKrs(DeleteWatchlistKrsByKrsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Krs`
- **Query params (wire ← C#)**: `dry_run` ← `DryRun`
- **Returns**: `object`
- **Error**: `ApiException<DeleteWatchlistKrsByKrsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteWatchlistKrsByKrsRequest` | `src/Compabase/Requests/Watchlist/DeleteWatchlistKrsByKrsRequest.cs` |
| `DeleteWatchlistKrsByKrsError` | `src/Compabase/Errors/DeleteWatchlistKrsByKrsError.cs` |
| `ErrorResponseModel` | `src/Compabase/Models/ErrorResponseModel.cs` |

### GetWatchlist

- **Auth**: `options.ApiKeyAuth` OR `options.BearerAuth`
- **Signature**: `GetWatchlist(GetWatchlistRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `object`
- **Error**: `ApiException<GetWatchlistError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 403, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWatchlistRequest` | `src/Compabase/Requests/Watchlist/GetWatchlistRequest.cs` |
| `GetWatchlistError` | `src/Compabase/Errors/GetWatchlistError.cs` |
| `ErrorResponseModel` | `src/Compabase/Models/ErrorResponseModel.cs` |

### PostWatchlistKrsByKrs

- **Auth**: `options.ApiKeyAuth` OR `options.BearerAuth`
- **Signature**: `PostWatchlistKrsByKrs(PostWatchlistKrsByKrsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Krs`
- **Query params (wire ← C#)**: `dry_run` ← `DryRun`
- **Returns**: `WatchlistAddResponse`
- **Error**: `ApiException<PostWatchlistKrsByKrsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostWatchlistKrsByKrsRequest` | `src/Compabase/Requests/Watchlist/PostWatchlistKrsByKrsRequest.cs` |
| `WatchlistAddResponse` | `src/Compabase/Models/WatchlistAddResponse.cs` |
| `PostWatchlistKrsByKrsError` | `src/Compabase/Errors/PostWatchlistKrsByKrsError.cs` |
| `ErrorResponseModel` | `src/Compabase/Models/ErrorResponseModel.cs` |

