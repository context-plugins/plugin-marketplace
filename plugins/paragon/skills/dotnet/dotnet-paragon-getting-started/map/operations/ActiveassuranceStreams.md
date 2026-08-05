# ActiveassuranceStreams — operations

Accessor: `client.ActiveassuranceStreams` · Source: `Api/ActiveassuranceStreams.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### StreamServiceBatchGetStreams
- **HTTP**: `POST /active-assurance/api/v2/orgs/{org_id}/streams:batchGet` (Default)
- **Signature**: `StreamServiceBatchGetStreams(string orgId, BatchGetStreamsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BatchGetStreamsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### StreamServiceGetStream
- **HTTP**: `GET /active-assurance/api/v2/orgs/{org_id}/streams/{stream_id}` (Default)
- **Signature**: `StreamServiceGetStream(string orgId, string streamId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `StreamModel`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### StreamServiceListStreams
- **HTTP**: `GET /active-assurance/api/v2/orgs/{org_id}/streams` (Default)
- **Signature**: `StreamServiceListStreams(string orgId, int? page, int? limit, string? filter, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - `filter` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`, `filter` ← `filter`
- **Returns**: `ListStreamsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
