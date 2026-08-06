# TrusthubV1TrustProductsEvaluations — operations

Accessor: `client.TrusthubV1TrustProductsEvaluations` · Source: `Api/TrusthubV1TrustProductsEvaluations.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateTrustProductEvaluation
- **HTTP**: `POST /v1/TrustProducts/{TrustProductSid}/Evaluations` (Default9 (trusthub))
- **Notes**: Create a new Evaluation
- **Signature**: `CreateTrustProductEvaluation(string trustProductSid, string policySid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PolicySid` ← `policySid`
- **Returns**: `TrusthubV1TrustProductTrustProductEvaluation`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchTrustProductEvaluation
- **HTTP**: `GET /v1/TrustProducts/{TrustProductSid}/Evaluations/{Sid}` (Default9 (trusthub))
- **Notes**: Fetch specific Evaluation Instance.
- **Signature**: `FetchTrustProductEvaluation(string trustProductSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TrusthubV1TrustProductTrustProductEvaluation`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListTrustProductEvaluation
- **HTTP**: `GET /v1/TrustProducts/{TrustProductSid}/Evaluations` (Default9 (trusthub))
- **Notes**: Retrieve a list of Evaluations associated to the trust_product resource.
- **Signature**: `ListTrustProductEvaluation(string trustProductSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListTrustProductEvaluationResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
