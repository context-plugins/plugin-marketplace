# TrustConfiguration — operations

Accessor: `client.TrustConfiguration` · Source: `Api/TrustConfiguration.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ConfigServiceRead
- **HTTP**: `GET /trust/api/v1/orgs/{orgId}/config` (Default)
- **Signature**: `ConfigServiceRead(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ConfigReadResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ConfigServiceReadKey
- **HTTP**: `GET /trust/api/v1/orgs/{orgId}/config/{key}` (Default)
- **Signature**: `ConfigServiceReadKey(string orgId, string key, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ConfigReadKeyResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ConfigServiceUpdate
- **HTTP**: `PUT /trust/api/v1/orgs/{orgId}/config` (Default)
- **Signature**: `ConfigServiceUpdate(string orgId, ConfigConfigServiceUpdateBody body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ConfigUpdateResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
