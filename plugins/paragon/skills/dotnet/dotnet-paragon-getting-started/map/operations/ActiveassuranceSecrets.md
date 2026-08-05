# ActiveassuranceSecrets — operations

Accessor: `client.ActiveassuranceSecrets` · Source: `Api/ActiveassuranceSecrets.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### SecretServiceCreateSecret
- **HTTP**: `POST /active-assurance/api/v2/orgs/{org_id}/secrets` (Default)
- **Signature**: `SecretServiceCreateSecret(string orgId, bool? validateOnly, Secret secret, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `validateOnly` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `validate_only` ← `validateOnly`
- **Returns**: `Secret`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SecretServiceDeleteSecret
- **HTTP**: `DELETE /active-assurance/api/v2/orgs/{org_id}/secrets/{secret_id}` (Default)
- **Signature**: `SecretServiceDeleteSecret(string orgId, string secretId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SecretServiceGetSecret
- **HTTP**: `GET /active-assurance/api/v2/orgs/{org_id}/secrets/{secret_id}` (Default)
- **Signature**: `SecretServiceGetSecret(string orgId, string secretId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Secret`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SecretServiceListSecrets
- **HTTP**: `GET /active-assurance/api/v2/orgs/{org_id}/secrets` (Default)
- **Signature**: `SecretServiceListSecrets(string orgId, int? page, int? limit, string? filter, string? orderBy, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`page` … `orderBy`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`, `filter` ← `filter`, `order_by` ← `orderBy`
- **Returns**: `ListSecretsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### SecretServiceUpdateSecret
- **HTTP**: `PATCH /active-assurance/api/v2/orgs/{org_id}/secrets/{secret_id}` (Default)
- **Signature**: `SecretServiceUpdateSecret(string orgId, string secretId, string? updateMask, bool? validateOnly, Secret secret, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `updateMask` — nullable, no default → **must pass explicitly**
  - `validateOnly` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `update_mask` ← `updateMask`, `validate_only` ← `validateOnly`
- **Returns**: `Secret`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
