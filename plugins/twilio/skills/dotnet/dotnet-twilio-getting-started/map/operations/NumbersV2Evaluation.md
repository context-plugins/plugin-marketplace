# NumbersV2Evaluation — operations

Accessor: `client.NumbersV2Evaluation` · Source: `Api/NumbersV2Evaluation.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateEvaluation
- **HTTP**: `POST /v2/RegulatoryCompliance/Bundles/{BundleSid}/Evaluations` (Default7 (numbers))
- **Notes**: Creates an evaluation for a bundle
- **Signature**: `CreateEvaluation(string bundleSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `NumbersV2RegulatoryComplianceBundleEvaluation`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchEvaluation
- **HTTP**: `GET /v2/RegulatoryCompliance/Bundles/{BundleSid}/Evaluations/{Sid}` (Default7 (numbers))
- **Notes**: Fetch specific Evaluation Instance.
- **Signature**: `FetchEvaluation(string bundleSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `NumbersV2RegulatoryComplianceBundleEvaluation`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListEvaluation
- **HTTP**: `GET /v2/RegulatoryCompliance/Bundles/{BundleSid}/Evaluations` (Default7 (numbers))
- **Notes**: Retrieve a list of Evaluations associated to the Bundle resource.
- **Signature**: `ListEvaluation(string bundleSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListEvaluationResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
