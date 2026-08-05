# InfraInternalHealthCheck — operations

Accessor: `client.InfraInternalHealthCheck` · Source: `Api/InfraInternalHealthCheck.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### InternalHealthCheckHistoryDetailGet
- **HTTP**: `GET /api/v1/infra/internal/healthcheck/history/{session_id}/` (Default)
- **Notes**: Internal endpoint - No authentication required. Retrieve detailed health check results for a specific session ID or timestamp. Either session_id in URL path or timestamp query parameter is required. Designed for monitoring tools and automated systems.
- **Signature**: `InternalHealthCheckHistoryDetailGet(string sessionId, DateTimeOffset? timestamp, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `timestamp` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`
- **Returns**: `HistoryDetailResponse`
- **Error**: `SdkException<InternalHealthCheckHistoryDetailGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1OrgsDataPublishStreamingConfigs403Error1(out ApiV1OrgsDataPublishStreamingConfigs403Error1)` [400, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### InternalHealthCheckHistoryGet
- **HTTP**: `GET /api/v1/infra/internal/healthcheck/history/` (Default)
- **Notes**: Internal endpoint - No authentication required. Retrieve historical health check data from the last N completed runs. Supports both summary and full detail levels. Designed for monitoring tools and automated systems.
- **Signature**: `InternalHealthCheckHistoryGet(Detail? detail, DateTimeOffset? timestamp, int? limit = 5, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `detail` — nullable, no default → **must pass explicitly**
  - `timestamp` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 5, `requestOptions` = null
- **Query params (wire ← C#)**: `detail` ← `detail`, `limit` ← `limit`, `timestamp` ← `timestamp`
- **Returns**: `HistoryResponse`
- **Error**: `SdkException<InternalHealthCheckHistoryGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1OrgsDataPublishStreamingConfigs403Error1(out ApiV1OrgsDataPublishStreamingConfigs403Error1)` [400, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### InternalHealthCheckProgressGet
- **HTTP**: `GET /api/v1/infra/internal/healthcheck/progress/` (Default)
- **Notes**: Internal endpoint - No authentication required. Retrieve the current progress of an ongoing health check session or information about the most recent session within the last 2 hours. Designed for monitoring tools and automated systems.
- **Signature**: `InternalHealthCheckProgressGet(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ProgressResponse`
- **Error**: `SdkException<InternalHealthCheckProgressGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1OrgsDataPublishStreamingConfigs403Error1(out ApiV1OrgsDataPublishStreamingConfigs403Error1)` [404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### InternalHealthCheckGet
- **HTTP**: `GET /api/v1/infra/internal/healthcheck/` (Default)
- **Notes**: Internal endpoint - No authentication required. Retrieve the latest health check result. Returns IN_PROGRESS status if a health check is currently running, otherwise returns the latest completed health check result. Designed for monitoring tools and automated systems.
- **Signature**: `InternalHealthCheckGet(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `HealthCheckResponse`
- **Error**: `SdkException<InternalHealthCheckGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1OrgsDataPublishStreamingConfigs403Error1(out ApiV1OrgsDataPublishStreamingConfigs403Error1)` [404, 500, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
