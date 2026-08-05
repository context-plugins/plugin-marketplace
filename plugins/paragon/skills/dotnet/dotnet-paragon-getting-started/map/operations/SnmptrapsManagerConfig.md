# SnmptrapsManagerConfig — operations

Accessor: `client.SnmptrapsManagerConfig` · Source: `Api/SnmptrapsManagerConfig.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ManagerConfigServiceCreate
- **HTTP**: `POST /snmptraps/api/v1/orgs/{org-id}/managerconfigs` (Default)
- **Signature**: `ManagerConfigServiceCreate(string orgId, ManagerconfigManagerConfigServiceCreateBody body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ManagerconfigCreateResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ManagerConfigServiceDelete
- **HTTP**: `DELETE /snmptraps/api/v1/orgs/{org-id}/managerconfigs/{uuid}` (Default)
- **Signature**: `ManagerConfigServiceDelete(string orgId, string uuid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ManagerConfigServiceList
- **HTTP**: `GET /snmptraps/api/v1/orgs/{org-id}/managerconfigs` (Default)
- **Signature**: `ManagerConfigServiceList(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ManagerconfigListResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ManagerConfigServiceRead
- **HTTP**: `GET /snmptraps/api/v1/orgs/{org-id}/managerconfigs/{uuid}` (Default)
- **Signature**: `ManagerConfigServiceRead(string orgId, string uuid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ManagerconfigReadResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ManagerConfigServiceUpdate
- **HTTP**: `PUT /snmptraps/api/v1/orgs/{org-id}/managerconfigs/{uuid}` (Default)
- **Signature**: `ManagerConfigServiceUpdate(string orgId, string uuid, ManagerconfigManagerConfigServiceUpdateBody body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ManagerconfigUpdateResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
