# MultivendoremsGnmideprecated — operations

Accessor: `client.MultivendoremsGnmideprecated` · Source: `Api/MultivendoremsGnmideprecated.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GnmiRestServiceCapabilities2
- **HTTP**: `GET /mems/api/v1.1alpha/{org-id}/gnmi/{deviceId}/capabilities` (Default)
- **Signature**: `GnmiRestServiceCapabilities2(string orgId, string deviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GnmiCapabilityResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GnmiRestServiceGet2
- **HTTP**: `POST /mems/api/v1.1alpha/{org-id}/gnmi/{deviceId}/configurations/query` (Default)
- **Signature**: `GnmiRestServiceGet2(string orgId, string deviceId, GnmiRestServiceGetBody body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GnmiGetResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GnmiRestServiceSet2
- **HTTP**: `POST /mems/api/v1.1alpha/{org-id}/gnmi/{deviceId}/configurations` (Default)
- **Signature**: `GnmiRestServiceSet2(string orgId, string deviceId, GnmiRestServiceSetBody body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GnmiSetResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
