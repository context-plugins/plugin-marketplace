# VerifyV2Bucket — operations

Accessor: `client.VerifyV2Bucket` · Source: `Api/VerifyV2Bucket.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateBucket
- **HTTP**: `POST /v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets` (Default3 (verify))
- **Notes**: Create a new Bucket for a Rate Limit
- **Signature**: `CreateBucket(string serviceSid, string rateLimitSid, int max, int interval, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Max` ← `max`, `Interval` ← `interval`
- **Returns**: `VerifyV2ServiceRateLimitBucket`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteBucket
- **HTTP**: `DELETE /v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets/{Sid}` (Default3 (verify))
- **Notes**: Delete a specific Bucket.
- **Signature**: `DeleteBucket(string serviceSid, string rateLimitSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchBucket
- **HTTP**: `GET /v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets/{Sid}` (Default3 (verify))
- **Notes**: Fetch a specific Bucket.
- **Signature**: `FetchBucket(string serviceSid, string rateLimitSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `VerifyV2ServiceRateLimitBucket`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListBucket
- **HTTP**: `GET /v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets` (Default3 (verify))
- **Notes**: Retrieve a list of all Buckets for a Rate Limit.
- **Signature**: `ListBucket(string serviceSid, string rateLimitSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListBucketResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateBucket
- **HTTP**: `POST /v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets/{Sid}` (Default3 (verify))
- **Notes**: Update a specific Bucket.
- **Signature**: `UpdateBucket(string serviceSid, string rateLimitSid, string sid, int? max, int? interval, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `max` — nullable, no default → **must pass explicitly**
  - `interval` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Max` ← `max`, `Interval` ← `interval`
- **Returns**: `VerifyV2ServiceRateLimitBucket`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
