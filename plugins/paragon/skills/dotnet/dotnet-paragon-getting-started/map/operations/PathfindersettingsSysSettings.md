# PathfindersettingsSysSettings — operations

Accessor: `client.PathfindersettingsSysSettings` · Source: `Api/PathfindersettingsSysSettings.cs` · 22 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### SysBandwidthSizingDelete
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/system-settings/bandwidth-sizing` (Default)
- **Notes**: System wide Bandwidth Sizing tasks run time parameters
- **Signature**: `SysBandwidthSizingDelete(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<SysBandwidthSizingDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SysBandwidthSizingGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/system-settings/bandwidth-sizing` (Default)
- **Notes**: System wide Bandwidth Sizing tasks run time parameters
- **Signature**: `SysBandwidthSizingGet(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<SysBandwidthSizingGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SysBandwidthSizingPut
- **HTTP**: `PUT /topology/api/v1/orgs/{org_id}/system-settings/bandwidth-sizing` (Default)
- **Notes**: System wide Bandwidth Sizing tasks run time parameters
- **Signature**: `SysBandwidthSizingPut(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<SysBandwidthSizingPutError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SysContainerLspNormalizationDelete
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/system-settings/container-lsp-normalization` (Default)
- **Notes**: System wide Container LSP Normalization tasks run time parameters
- **Signature**: `SysContainerLspNormalizationDelete(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<SysContainerLspNormalizationDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SysContainerLspNormalizationGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/system-settings/container-lsp-normalization` (Default)
- **Notes**: System wide Container LSP Normalization tasks run time parameters
- **Signature**: `SysContainerLspNormalizationGet(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<SysContainerLspNormalizationGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SysContainerLspNormalizationPut
- **HTTP**: `PUT /topology/api/v1/orgs/{org_id}/system-settings/container-lsp-normalization` (Default)
- **Notes**: System wide Container LSP Normalization tasks run time parameters
- **Signature**: `SysContainerLspNormalizationPut(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<SysContainerLspNormalizationPutError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SysPathComputationServerDelete
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/system-settings/path-computation-server` (Default)
- **Notes**: system-wide path computation server run time parameters
- **Signature**: `SysPathComputationServerDelete(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<SysPathComputationServerDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SysPathComputationServerGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/system-settings/path-computation-server` (Default)
- **Notes**: system-wide path computation server run time parameters
- **Signature**: `SysPathComputationServerGet(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<SysPathComputationServerGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SysPathComputationServerPut
- **HTTP**: `PUT /topology/api/v1/orgs/{org_id}/system-settings/path-computation-server` (Default)
- **Notes**: system-wide path computation server run time parameters
- **Signature**: `SysPathComputationServerPut(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<SysPathComputationServerPutError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SysPruneDbDelete
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/system-settings/prune-db` (Default)
- **Notes**: system-wide prune-db run time parameters
- **Signature**: `SysPruneDbDelete(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<SysPruneDbDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SysPruneDbGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/system-settings/prune-db` (Default)
- **Notes**: system-wide prune-db run time parameters
- **Signature**: `SysPruneDbGet(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<SysPruneDbGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SysPruneDbPut
- **HTTP**: `PUT /topology/api/v1/orgs/{org_id}/system-settings/prune-db` (Default)
- **Notes**: system-wide prune-db run time parameters
- **Signature**: `SysPruneDbPut(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<SysPruneDbPutError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SysThresholdServiceDelete
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/system-settings/threshold-service` (Default)
- **Notes**: threshold-service run time parameters
- **Signature**: `SysThresholdServiceDelete(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<SysThresholdServiceDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SysThresholdServiceGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/system-settings/threshold-service` (Default)
- **Notes**: threshold-service run time parameters
- **Signature**: `SysThresholdServiceGet(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<SysThresholdServiceGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SysThresholdServicePut
- **HTTP**: `PUT /topology/api/v1/orgs/{org_id}/system-settings/threshold-service` (Default)
- **Notes**: threshold-service run time parameters
- **Signature**: `SysThresholdServicePut(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<SysThresholdServicePutError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SysVictoriaMetricsDbDelete
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/system-settings/victoria-metric-db` (Default)
- **Notes**: System wide Victoria Metric request related run time parameters
- **Signature**: `SysVictoriaMetricsDbDelete(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<SysVictoriaMetricsDbDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SysVictoriaMetricsDbGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/system-settings/victoria-metric-db` (Default)
- **Notes**: System wide Victoria Metric request related run time parameters
- **Signature**: `SysVictoriaMetricsDbGet(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<SysVictoriaMetricsDbGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SysVictoriaMetricsDbPut
- **HTTP**: `PUT /topology/api/v1/orgs/{org_id}/system-settings/victoria-metric-db` (Default)
- **Notes**: System wide Victoria Metric request related run time parameters
- **Signature**: `SysVictoriaMetricsDbPut(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<SysVictoriaMetricsDbPutError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SysGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/system-settings` (Default)
- **Notes**: Contains system-wide config of pathfinder components on EOP
- **Signature**: `SysGet(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<SysGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreatesOrUpdatesPathfinderSystemAnalyticsAnalytics
- **HTTP**: `PUT /topology/api/v1/orgs/{org_id}/system-settings/analytics` (Default)
- **Notes**: analytics run time parameters
- **Signature**: `CreatesOrUpdatesPathfinderSystemAnalyticsAnalytics(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<CreatesOrUpdatesPathfinderSystemAnalyticsAnalyticsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RemovesPathfinderSystemAnalyticsAnalytics
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/system-settings/analytics` (Default)
- **Notes**: analytics run time parameters
- **Signature**: `RemovesPathfinderSystemAnalyticsAnalytics(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RemovesPathfinderSystemAnalyticsAnalyticsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReturnsPathfinderSystemAnalyticsAnalytics
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/system-settings/analytics` (Default)
- **Notes**: analytics run time parameters
- **Signature**: `ReturnsPathfinderSystemAnalyticsAnalytics(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<ReturnsPathfinderSystemAnalyticsAnalyticsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
