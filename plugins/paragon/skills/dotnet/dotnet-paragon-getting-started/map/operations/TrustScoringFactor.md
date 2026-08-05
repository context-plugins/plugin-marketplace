# TrustScoringFactor — operations

Accessor: `client.TrustScoringFactor` · Source: `Api/TrustScoringFactor.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ScoreServiceCreateFactor
- **HTTP**: `POST /trust/api/v1/orgs/{orgId}/scoring/factors` (Default)
- **Signature**: `ScoreServiceCreateFactor(string orgId, ScoreServiceCreateFactorBody body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ScoreCreateFactorResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ScoreServiceDeleteFactor
- **HTTP**: `DELETE /trust/api/v1/orgs/{orgId}/scoring/factors/{id}` (Default)
- **Signature**: `ScoreServiceDeleteFactor(string orgId, string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ScoreServiceListFactors
- **HTTP**: `GET /trust/api/v1/orgs/{orgId}/scoring/factors` (Default)
- **Signature**: `ScoreServiceListFactors(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ScoreListFactorsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ScoreServiceReadFactor
- **HTTP**: `GET /trust/api/v1/orgs/{orgId}/scoring/factors/{id}` (Default)
- **Signature**: `ScoreServiceReadFactor(string orgId, string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ScoreReadFactorResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
