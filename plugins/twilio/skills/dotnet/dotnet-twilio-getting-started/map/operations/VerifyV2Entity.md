# VerifyV2Entity — operations

Accessor: `client.VerifyV2Entity` · Source: `Api/VerifyV2Entity.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateEntity
- **HTTP**: `POST /v2/Services/{ServiceSid}/Entities` (Default13 (verify))
- **Notes**: Create a new Entity for the Service
- **Signature**: `CreateEntity(string serviceSid, string identity, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Identity` ← `identity`
- **Returns**: `VerifyV2ServiceEntity`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteEntity
- **HTTP**: `DELETE /v2/Services/{ServiceSid}/Entities/{Identity}` (Default13 (verify))
- **Notes**: Delete a specific Entity.
- **Signature**: `DeleteEntity(string serviceSid, string identity, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchEntity
- **HTTP**: `GET /v2/Services/{ServiceSid}/Entities/{Identity}` (Default13 (verify))
- **Notes**: Fetch a specific Entity.
- **Signature**: `FetchEntity(string serviceSid, string identity, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `VerifyV2ServiceEntity`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListEntity
- **HTTP**: `GET /v2/Services/{ServiceSid}/Entities` (Default13 (verify))
- **Notes**: Retrieve a list of all Entities for a Service.
- **Signature**: `ListEntity(string serviceSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListEntityResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
