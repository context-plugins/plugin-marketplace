# SnmptrapsExternalEndpoint — operations

Accessor: `client.SnmptrapsExternalEndpoint` · Source: `Api/SnmptrapsExternalEndpoint.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ExternalEndpointServiceCreate
- **HTTP**: `POST /snmptraps/api/v1/orgs/{org-id}/externalendpoints` (Default)
- **Signature**: `ExternalEndpointServiceCreate(string orgId, ExternalendpointExternalEndpointServiceCreateBody body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ExternalendpointCreateResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ExternalEndpointServiceDelete
- **HTTP**: `DELETE /snmptraps/api/v1/orgs/{org-id}/externalendpoints/{uuid}` (Default)
- **Signature**: `ExternalEndpointServiceDelete(string orgId, string uuid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ExternalEndpointServiceList
- **HTTP**: `GET /snmptraps/api/v1/orgs/{org-id}/externalendpoints` (Default)
- **Signature**: `ExternalEndpointServiceList(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ExternalendpointListResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ExternalEndpointServiceRead
- **HTTP**: `GET /snmptraps/api/v1/orgs/{org-id}/externalendpoints/{uuid}` (Default)
- **Signature**: `ExternalEndpointServiceRead(string orgId, string uuid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ExternalendpointReadResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ExternalEndpointServiceUpdate
- **HTTP**: `PUT /snmptraps/api/v1/orgs/{org-id}/externalendpoints/{uuid}` (Default)
- **Signature**: `ExternalEndpointServiceUpdate(string orgId, string uuid, ExternalendpointExternalEndpointServiceUpdateBody body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ExternalendpointUpdateResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
