# AlertmanagerAlertGroups — operations

Accessor: `client.AlertmanagerAlertGroups` · Source: `Api/AlertmanagerAlertGroups.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AlertManagerCreateAlertGroup
- **HTTP**: `POST /alert-manager/api/v1/orgs/{org_id}/groups` (Default)
- **Signature**: `AlertManagerCreateAlertGroup(string orgId, AlertManagerCreateAlertGroupBody body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `V1AlertGroup`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AlertManagerDeleteAlertGroup
- **HTTP**: `DELETE /alert-manager/api/v1/orgs/{org_id}/groups/{group_id}` (Default)
- **Signature**: `AlertManagerDeleteAlertGroup(string orgId, string groupId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AlertManagerGetAlertGroup
- **HTTP**: `GET /alert-manager/api/v1/orgs/{org_id}/groups/{group_id}` (Default)
- **Signature**: `AlertManagerGetAlertGroup(string orgId, string groupId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `V1AlertGroup`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AlertManagerListAlertGroups
- **HTTP**: `GET /alert-manager/api/v1/orgs/{org_id}/groups` (Default)
- **Signature**: `AlertManagerListAlertGroups(string orgId, long? page, long? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `AlertGroupsListResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### AlertManagerUpdateAlertGroup
- **HTTP**: `PUT /alert-manager/api/v1/orgs/{org_id}/groups/{group_id}` (Default)
- **Signature**: `AlertManagerUpdateAlertGroup(string orgId, string groupId, AlertManagerUpdateAlertGroupBody body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `V1AlertGroup`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
