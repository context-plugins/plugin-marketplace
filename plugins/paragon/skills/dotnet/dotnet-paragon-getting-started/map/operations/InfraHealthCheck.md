# InfraHealthCheck — operations

Accessor: `client.InfraHealthCheck` · Source: `Api/InfraHealthCheck.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### HealthCheckHistoryDetailGet
- **HTTP**: `GET /api/v1/infra/healthcheck/history/{session_id}/` (Default)
- **Notes**: Retrieve detailed health check results for a specific session ID or timestamp. Either session_id in URL path or timestamp query parameter is required. Requires authentication.
- **Signature**: `HealthCheckHistoryDetailGet(string sessionId, DateTimeOffset? timestamp, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `timestamp` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`
- **Returns**: `HistoryDetailResponse`
- **Error**: `SdkException<HealthCheckHistoryDetailGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1OrgsDataPublishStreamingConfigs403Error1(out ApiV1OrgsDataPublishStreamingConfigs403Error1)` [400, 401, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### HealthCheckHistoryGet
- **HTTP**: `GET /api/v1/infra/healthcheck/history/` (Default)
- **Notes**: Retrieve historical health check data from the last N completed runs. Supports both summary and full detail levels. Requires authentication.
- **Signature**: `HealthCheckHistoryGet(Detail? detail, DateTimeOffset? timestamp, int? limit = 5, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `detail` — nullable, no default → **must pass explicitly**
  - `timestamp` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 5, `requestOptions` = null
- **Query params (wire ← C#)**: `detail` ← `detail`, `limit` ← `limit`, `timestamp` ← `timestamp`
- **Returns**: `HistoryResponse`
- **Error**: `SdkException<HealthCheckHistoryGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1OrgsDataPublishStreamingConfigs403Error1(out ApiV1OrgsDataPublishStreamingConfigs403Error1)` [400, 401, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### HealthCheckProgressGet
- **HTTP**: `GET /api/v1/infra/healthcheck/progress/` (Default)
- **Notes**: Retrieve the current progress of an ongoing health check session or information about the most recent session within the last 2 hours. Requires authentication.
- **Signature**: `HealthCheckProgressGet(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ProgressResponse`
- **Error**: `SdkException<HealthCheckProgressGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1OrgsDataPublishStreamingConfigs403Error1(out ApiV1OrgsDataPublishStreamingConfigs403Error1)` [401, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### HealthCheckGet
- **HTTP**: `GET /api/v1/infra/healthcheck/` (Default)
- **Notes**: Retrieve the latest health check result. Returns IN_PROGRESS status if a health check is currently running, otherwise returns the latest completed health check result. Requires authentication.
- **Signature**: `HealthCheckGet(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `HealthCheckResponse`
- **Error**: `SdkException<HealthCheckGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1OrgsDataPublishStreamingConfigs403Error1(out ApiV1OrgsDataPublishStreamingConfigs403Error1)` [401, 404, 500, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
