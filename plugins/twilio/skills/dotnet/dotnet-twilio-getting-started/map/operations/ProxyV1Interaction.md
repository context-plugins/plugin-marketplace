# ProxyV1Interaction — operations

Accessor: `client.ProxyV1Interaction` · Source: `Api/ProxyV1Interaction.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteInteraction
- **HTTP**: `DELETE /v1/Services/{ServiceSid}/Sessions/{SessionSid}/Interactions/{Sid}` (Default10 (proxy))
- **Notes**: Delete a specific Interaction.
- **Signature**: `DeleteInteraction(string serviceSid, string sessionSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchInteraction
- **HTTP**: `GET /v1/Services/{ServiceSid}/Sessions/{SessionSid}/Interactions/{Sid}` (Default10 (proxy))
- **Notes**: Retrieve a list of Interactions for a given Session .
- **Signature**: `FetchInteraction(string serviceSid, string sessionSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ProxyV1ServiceSessionInteraction`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListInteraction
- **HTTP**: `GET /v1/Services/{ServiceSid}/Sessions/{SessionSid}/Interactions` (Default10 (proxy))
- **Notes**: Retrieve a list of all Interactions for a Session. A maximum of 100 records will be returned per page.
- **Signature**: `ListInteraction(string serviceSid, string sessionSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListInteractionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
