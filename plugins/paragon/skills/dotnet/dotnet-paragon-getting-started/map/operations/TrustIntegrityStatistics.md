# TrustIntegrityStatistics — operations

Accessor: `client.TrustIntegrityStatistics` · Source: `Api/TrustIntegrityStatistics.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### IntegrityServiceCreateHistoricalStatistics
- **HTTP**: `POST /trust/api/v1/orgs/{orgId}/integrity/statistics/historical` (Default)
- **Signature**: `IntegrityServiceCreateHistoricalStatistics(string orgId, object body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IntegrityCreateHistoricalStatisticsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### IntegrityServiceCurrentStatistics
- **HTTP**: `GET /trust/api/v1/orgs/{orgId}/integrity/statistics/current` (Default)
- **Signature**: `IntegrityServiceCurrentStatistics(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IntegrityCurrentStatisticsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### IntegrityServiceListHistoricalStatistics
- **HTTP**: `GET /trust/api/v1/orgs/{orgId}/integrity/statistics/historical` (Default)
- **Signature**: `IntegrityServiceListHistoricalStatistics(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IntegrityListHistoricalStatisticsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
