# EmsOrgReplace — operations

Accessor: `client.EmsOrgReplace` · Source: `Api/EmsOrgReplace.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ReplaceConfig
- **HTTP**: `PUT /api/v1/orgs/{org_id}/devices/{device_uuid}/replace` (Default)
- **Signature**: `ReplaceConfig(string orgId, string deviceUuid, string? xCsrftoken, object? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xCsrftoken` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
