# TrusthubV1CustomerProfilesEvaluations — operations

Accessor: `client.TrusthubV1CustomerProfilesEvaluations` · Source: `Api/TrusthubV1CustomerProfilesEvaluations.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateCustomerProfileEvaluation
- **HTTP**: `POST /v1/CustomerProfiles/{CustomerProfileSid}/Evaluations` (Default9 (trusthub))
- **Notes**: Create a new Evaluation
- **Signature**: `CreateCustomerProfileEvaluation(string customerProfileSid, string policySid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PolicySid` ← `policySid`
- **Returns**: `TrusthubV1CustomerProfileCustomerProfileEvaluation`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchCustomerProfileEvaluation
- **HTTP**: `GET /v1/CustomerProfiles/{CustomerProfileSid}/Evaluations/{Sid}` (Default9 (trusthub))
- **Notes**: Fetch specific Evaluation Instance.
- **Signature**: `FetchCustomerProfileEvaluation(string customerProfileSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TrusthubV1CustomerProfileCustomerProfileEvaluation`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListCustomerProfileEvaluation
- **HTTP**: `GET /v1/CustomerProfiles/{CustomerProfileSid}/Evaluations` (Default9 (trusthub))
- **Notes**: Retrieve a list of Evaluations associated to the customer_profile resource.
- **Signature**: `ListCustomerProfileEvaluation(string customerProfileSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListCustomerProfileEvaluationResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
