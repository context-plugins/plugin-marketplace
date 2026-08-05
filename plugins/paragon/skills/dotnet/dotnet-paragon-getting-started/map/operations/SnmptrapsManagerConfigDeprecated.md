# SnmptrapsManagerConfigDeprecated — operations

Accessor: `client.SnmptrapsManagerConfigDeprecated` · Source: `Api/SnmptrapsManagerConfigDeprecated.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ManagerConfigServiceCreate2
- **HTTP**: `POST /snmptraps/api/v1.1alpha/{org-id}/managerconfigs` (Default)
- **Signature**: `ManagerConfigServiceCreate2(string orgId, ManagerconfigManagerConfigServiceCreateBody body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ManagerconfigCreateResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ManagerConfigServiceDelete2
- **HTTP**: `DELETE /snmptraps/api/v1.1alpha/{org-id}/managerconfigs/{uuid}` (Default)
- **Signature**: `ManagerConfigServiceDelete2(string orgId, string uuid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ManagerConfigServiceList2
- **HTTP**: `GET /snmptraps/api/v1.1alpha/{org-id}/managerconfigs` (Default)
- **Signature**: `ManagerConfigServiceList2(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ManagerconfigListResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ManagerConfigServiceRead2
- **HTTP**: `GET /snmptraps/api/v1.1alpha/{org-id}/managerconfigs/{uuid}` (Default)
- **Signature**: `ManagerConfigServiceRead2(string orgId, string uuid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ManagerconfigReadResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ManagerConfigServiceUpdate2
- **HTTP**: `PUT /snmptraps/api/v1.1alpha/{org-id}/managerconfigs/{uuid}` (Default)
- **Signature**: `ManagerConfigServiceUpdate2(string orgId, string uuid, ManagerconfigManagerConfigServiceUpdateBody body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ManagerconfigUpdateResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
