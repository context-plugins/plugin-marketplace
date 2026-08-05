# TrustScoringPlan — operations

Accessor: `client.TrustScoringPlan` · Source: `Api/TrustScoringPlan.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ScoreServiceCreatePlan
- **HTTP**: `POST /trust/api/v1/orgs/{orgId}/scoring/plans` (Default)
- **Signature**: `ScoreServiceCreatePlan(string orgId, ScoreServiceCreatePlanBody body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ScoreCreatePlanResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ScoreServiceDeletePlan
- **HTTP**: `DELETE /trust/api/v1/orgs/{orgId}/scoring/plans/{id}` (Default)
- **Signature**: `ScoreServiceDeletePlan(string orgId, string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ScoreServiceListPlans
- **HTTP**: `GET /trust/api/v1/orgs/{orgId}/scoring/plans` (Default)
- **Signature**: `ScoreServiceListPlans(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ScoreListPlansResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ScoreServiceReadPlan
- **HTTP**: `GET /trust/api/v1/orgs/{orgId}/scoring/plans/{id}` (Default)
- **Signature**: `ScoreServiceReadPlan(string orgId, string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ScoreReadPlanResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
