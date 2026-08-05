# SnmptrapsExternalEndpointDeprecated — operations

Accessor: `client.SnmptrapsExternalEndpointDeprecated` · Source: `Api/SnmptrapsExternalEndpointDeprecated.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ExternalEndpointServiceCreate2
- **HTTP**: `POST /snmptraps/api/v1.1alpha/{org-id}/externalendpoints` (Default)
- **Signature**: `ExternalEndpointServiceCreate2(string orgId, ExternalendpointExternalEndpointServiceCreateBody body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ExternalendpointCreateResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ExternalEndpointServiceDelete2
- **HTTP**: `DELETE /snmptraps/api/v1.1alpha/{org-id}/externalendpoints/{uuid}` (Default)
- **Signature**: `ExternalEndpointServiceDelete2(string orgId, string uuid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ExternalEndpointServiceList2
- **HTTP**: `GET /snmptraps/api/v1.1alpha/{org-id}/externalendpoints` (Default)
- **Signature**: `ExternalEndpointServiceList2(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ExternalendpointListResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ExternalEndpointServiceRead2
- **HTTP**: `GET /snmptraps/api/v1.1alpha/{org-id}/externalendpoints/{uuid}` (Default)
- **Signature**: `ExternalEndpointServiceRead2(string orgId, string uuid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ExternalendpointReadResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ExternalEndpointServiceUpdate2
- **HTTP**: `PUT /snmptraps/api/v1.1alpha/{org-id}/externalendpoints/{uuid}` (Default)
- **Signature**: `ExternalEndpointServiceUpdate2(string orgId, string uuid, ExternalendpointExternalEndpointServiceUpdateBody body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ExternalendpointUpdateResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
