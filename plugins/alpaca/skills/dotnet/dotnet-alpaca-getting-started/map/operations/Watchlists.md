# Watchlists — operations

Accessor: `client.Watchlists` · Source: `Api/Watchlists.cs` · 11 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AddAssetToWatchlist
- **HTTP**: `POST /v2/watchlists/{watchlist_id}` (Default (paper-api))
- **Notes**: Append an asset for the symbol to the end of watchlist asset list
- **Signature**: `AddAssetToWatchlist(Guid watchlistId, AddAssetToWatchlistRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Watchlist`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AddAssetToWatchlistByName
- **HTTP**: `POST /v2/watchlists:by_name` (Default (paper-api))
- **Notes**: Append an asset for the symbol to the end of watchlist asset list
- **Signature**: `AddAssetToWatchlistByName(string name, AddAssetToWatchlistRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `name` ← `name`
- **Returns**: `Watchlist`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteWatchlistById
- **HTTP**: `DELETE /v2/watchlists/{watchlist_id}` (Default (paper-api))
- **Notes**: Delete a watchlist. This is a permanent deletion.
- **Signature**: `DeleteWatchlistById(Guid watchlistId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteWatchlistByName
- **HTTP**: `DELETE /v2/watchlists:by_name` (Default (paper-api))
- **Notes**: Delete a watchlist. This is a permanent deletion.
- **Signature**: `DeleteWatchlistByName(string name, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `name` ← `name`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetWatchlistById
- **HTTP**: `GET /v2/watchlists/{watchlist_id}` (Default (paper-api))
- **Notes**: Returns a watchlist identified by the ID.
- **Signature**: `GetWatchlistById(Guid watchlistId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Watchlist`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetWatchlistByName
- **HTTP**: `GET /v2/watchlists:by_name` (Default (paper-api))
- **Notes**: Returns a watchlist by name
- **Signature**: `GetWatchlistByName(string name, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `name` ← `name`
- **Returns**: `Watchlist`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetWatchlists
- **HTTP**: `GET /v2/watchlists` (Default (paper-api))
- **Notes**: Returns the list of watchlists registered under the account.
- **Signature**: `GetWatchlists(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Watchlist>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PostWatchlist
- **HTTP**: `POST /v2/watchlists` (Default (paper-api))
- **Notes**: Create a new watchlist with initial set of assets.
- **Signature**: `PostWatchlist(PostWatchlistRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Watchlist`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RemoveAssetFromWatchlist
- **HTTP**: `DELETE /v2/watchlists/{watchlist_id}/{symbol}` (Default (paper-api))
- **Notes**: Delete one entry for an asset by symbol name
- **Signature**: `RemoveAssetFromWatchlist(Guid watchlistId, string symbol, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Watchlist`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateWatchlistById
- **HTTP**: `PUT /v2/watchlists/{watchlist_id}` (Default (paper-api))
- **Notes**: Update the name and/or content of watchlist
- **Signature**: `UpdateWatchlistById(Guid watchlistId, PostWatchlistRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Watchlist`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateWatchlistByName
- **HTTP**: `PUT /v2/watchlists:by_name` (Default (paper-api))
- **Notes**: Update the name and/or content of watchlist
- **Signature**: `UpdateWatchlistByName(string name, PostWatchlistRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `name` ← `name`
- **Returns**: `Watchlist`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
