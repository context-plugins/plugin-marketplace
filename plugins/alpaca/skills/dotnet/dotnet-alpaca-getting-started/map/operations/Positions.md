# Positions — operations

Accessor: `client.Positions` · Source: `Api/Positions.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteAllOpenPositions
- **HTTP**: `DELETE /v2/positions` (Default (paper-api))
- **Notes**: Closes (liquidates) all of the account’s open long and short positions. A response will be provided for each order that is attempted to be cancelled. If an order is no longer cancelable, the server will respond with status 500 and reject the request.
- **Signature**: `DeleteAllOpenPositions(bool? cancelOrders, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `cancelOrders` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `cancel_orders` ← `cancelOrders`
- **Returns**: `IReadOnlyList<PositionClosedReponse>`
- **Error**: `SdkException<DeleteAllOpenPositionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOpenPosition
- **HTTP**: `DELETE /v2/positions/{symbol_or_asset_id}` (Default (paper-api))
- **Notes**: Closes (liquidates) the account’s open position for the given symbol. Works for both long and short positions.
- **Signature**: `DeleteOpenPosition(string symbolOrAssetId, double? qty, double? percentage, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `qty` — nullable, no default → **must pass explicitly**
  - `percentage` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `qty` ← `qty`, `percentage` ← `percentage`
- **Returns**: `Order`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetAllOpenPositions
- **HTTP**: `GET /v2/positions` (Default (paper-api))
- **Notes**: The positions API provides information about an account’s current open positions. The response will include information such as cost basis, shares traded, and market value, which will be updated live as price information is updated. Once a position is closed, it will no longer be queryable through this API Retrieves a list of the account’s open positions
- **Signature**: `GetAllOpenPositions(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Position>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetOpenPosition
- **HTTP**: `GET /v2/positions/{symbol_or_asset_id}` (Default (paper-api))
- **Notes**: Retrieves the account’s open position for the given symbol or assetId.
- **Signature**: `GetOpenPosition(string symbolOrAssetId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Position`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
