# EmsSitesShell — operations

Accessor: `client.EmsSitesShell` · Source: `Api/EmsSitesShell.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateDeviceShellSession
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_uuid}/shell` (Default)
- **Signature**: `CreateDeviceShellSession(string siteId, string deviceUuid, string? xCsrftoken, string? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xCsrftoken` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
