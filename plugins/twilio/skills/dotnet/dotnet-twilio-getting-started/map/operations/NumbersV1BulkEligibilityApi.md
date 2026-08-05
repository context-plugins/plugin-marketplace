# NumbersV1BulkEligibilityApi — operations

Accessor: `client.NumbersV1BulkEligibilityApi` · Source: `Api/NumbersV1BulkEligibilityApi.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateBulkEligibility
- **HTTP**: `POST /v1/HostedNumber/Eligibility/Bulk` (Default7 (numbers))
- **Notes**: Create a bulk eligibility check for a set of numbers that you want to host in Twilio.
- **Signature**: `CreateBulkEligibility(object? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `NumbersV1BulkEligibility`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchBulkEligibility
- **HTTP**: `GET /v1/HostedNumber/Eligibility/Bulk/{RequestId}` (Default7 (numbers))
- **Notes**: Fetch an eligibility bulk check that you requested to host in Twilio.
- **Signature**: `FetchBulkEligibility(string requestId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `NumbersV1BulkEligibility`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
