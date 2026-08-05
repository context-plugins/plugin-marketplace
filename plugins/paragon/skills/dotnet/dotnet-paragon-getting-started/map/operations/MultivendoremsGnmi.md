# MultivendoremsGnmi — operations

Accessor: `client.MultivendoremsGnmi` · Source: `Api/MultivendoremsGnmi.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GnmiRestServiceCapabilities
- **HTTP**: `GET /mems/api/v1/orgs/{org-id}/gnmi/{deviceId}/capabilities` (Default)
- **Signature**: `GnmiRestServiceCapabilities(string orgId, string deviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GnmiCapabilityResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GnmiRestServiceGet
- **HTTP**: `POST /mems/api/v1/orgs/{org-id}/gnmi/{deviceId}/configurations/query` (Default)
- **Signature**: `GnmiRestServiceGet(string orgId, string deviceId, GnmiRestServiceGetBody body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GnmiGetResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GnmiRestServiceSet
- **HTTP**: `POST /mems/api/v1/orgs/{org-id}/gnmi/{deviceId}/configurations` (Default)
- **Signature**: `GnmiRestServiceSet(string orgId, string deviceId, GnmiRestServiceSetBody body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GnmiSetResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
