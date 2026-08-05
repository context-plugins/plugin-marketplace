# VerifyV2RateLimit — operations

Accessor: `client.VerifyV2RateLimit` · Source: `Api/VerifyV2RateLimit.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateRateLimit
- **HTTP**: `POST /v2/Services/{ServiceSid}/RateLimits` (Default13 (verify))
- **Notes**: Create a new Rate Limit for a Service
- **Signature**: `CreateRateLimit(string serviceSid, string uniqueName, string? description, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `description` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `UniqueName` ← `uniqueName`, `Description` ← `description`
- **Returns**: `VerifyV2ServiceRateLimit`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteRateLimit
- **HTTP**: `DELETE /v2/Services/{ServiceSid}/RateLimits/{Sid}` (Default13 (verify))
- **Notes**: Delete a specific Rate Limit.
- **Signature**: `DeleteRateLimit(string serviceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchRateLimit
- **HTTP**: `GET /v2/Services/{ServiceSid}/RateLimits/{Sid}` (Default13 (verify))
- **Notes**: Fetch a specific Rate Limit.
- **Signature**: `FetchRateLimit(string serviceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `VerifyV2ServiceRateLimit`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListRateLimit
- **HTTP**: `GET /v2/Services/{ServiceSid}/RateLimits` (Default13 (verify))
- **Notes**: Retrieve a list of all Rate Limits for a service.
- **Signature**: `ListRateLimit(string serviceSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListRateLimitResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateRateLimit
- **HTTP**: `POST /v2/Services/{ServiceSid}/RateLimits/{Sid}` (Default13 (verify))
- **Notes**: Update a specific Rate Limit.
- **Signature**: `UpdateRateLimit(string serviceSid, string sid, string? description, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `description` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Description` ← `description`
- **Returns**: `VerifyV2ServiceRateLimit`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
