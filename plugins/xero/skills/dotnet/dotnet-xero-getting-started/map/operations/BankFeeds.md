# BankFeeds — operations

Accessor: `client.BankFeeds` · Source: `Api/BankFeeds.cs` · 7 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateFeedConnections
- **HTTP**: `POST /FeedConnections` (Default3 (api))
- **Notes**: By passing in the FeedConnections array object in the body, you can create one or more new feed connections
- **Signature**: `CreateFeedConnections(string xeroTenantId, string? idempotencyKey, FeedConnections body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `FeedConnections`
- **Error**: `SdkException<CreateFeedConnectionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetFeedConnections(out FeedConnections)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateStatements
- **HTTP**: `POST /Statements` (Default3 (api))
- **Signature**: `CreateStatements(string xeroTenantId, string? idempotencyKey, Statements body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Statements`
- **Error**: `SdkException<CreateStatementsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 403, 409, 413, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteFeedConnections
- **HTTP**: `POST /FeedConnections/DeleteRequests` (Default3 (api))
- **Notes**: By passing in FeedConnections array object in the body, you can delete a feed connection.
- **Signature**: `DeleteFeedConnections(string xeroTenantId, string? idempotencyKey, FeedConnections body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `FeedConnections`
- **Error**: `SdkException<DeleteFeedConnectionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetFeedConnection
- **HTTP**: `GET /FeedConnections/{id}` (Default3 (api))
- **Notes**: By passing in a FeedConnection Id options, you can search for matching feed connections
- **Signature**: `GetFeedConnection(Guid id, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `FeedConnection`
- **Error**: `SdkException<GetFeedConnectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetFeedConnections
- **HTTP**: `GET /FeedConnections` (Default3 (api))
- **Notes**: By passing in the appropriate options, you can search for available feed connections in the system.
- **Signature**: `GetFeedConnections(int? page, int? pageSize, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `pageSize` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `pageSize` ← `pageSize`
- **Returns**: `FeedConnections`
- **Error**: `SdkException<GetFeedConnectionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetStatement
- **HTTP**: `GET /Statements/{statementId}` (Default3 (api))
- **Notes**: By passing in a statement id, you can search for matching statements
- **Signature**: `GetStatement(Guid statementId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Statement`
- **Error**: `SdkException<GetStatementError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetStatements
- **HTTP**: `GET /Statements` (Default3 (api))
- **Notes**: By passing in parameters, you can search for matching statements
- **Signature**: `GetStatements(int? page, int? pageSize, string xeroTenantId, string? xeroApplicationId = "00000000-0000-0000-0000-0000000010000", string? xeroUserId = "00000000-0000-0000-0000-0000030000000", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `pageSize` — nullable, no default → **must pass explicitly**
  - defaults: `xeroApplicationId` = "00000000-0000-0000-0000-0000000010000", `xeroUserId` = "00000000-0000-0000-0000-0000030000000", `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `pageSize` ← `pageSize`
- **Returns**: `Statements`
- **Error**: `SdkException<GetStatementsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
