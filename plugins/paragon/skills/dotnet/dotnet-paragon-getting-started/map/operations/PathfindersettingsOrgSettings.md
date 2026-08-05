# PathfindersettingsOrgSettings — operations

Accessor: `client.PathfindersettingsOrgSettings` · Source: `Api/PathfindersettingsOrgSettings.cs` · 22 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### OrgAnalyticsDelete
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/settings/analytics` (Default)
- **Notes**: PathFinder telemetry based analytics features specific run time parameters
- **Signature**: `OrgAnalyticsDelete(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<OrgAnalyticsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrgAnalyticsGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/settings/analytics` (Default)
- **Notes**: PathFinder telemetry based analytics features specific run time parameters
- **Signature**: `OrgAnalyticsGet(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<OrgAnalyticsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrgAnalyticsPut
- **HTTP**: `PUT /topology/api/v1/orgs/{org_id}/settings/analytics` (Default)
- **Notes**: PathFinder telemetry based analytics features specific run time parameters
- **Signature**: `OrgAnalyticsPut(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<OrgAnalyticsPutError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrgBandwidthSizingDelete
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/settings/bandwidth-sizing` (Default)
- **Notes**: Bandwidth Sizing task run time parameters
- **Signature**: `OrgBandwidthSizingDelete(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<OrgBandwidthSizingDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrgBandwidthSizingGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/settings/bandwidth-sizing` (Default)
- **Notes**: Bandwidth Sizing task run time parameters
- **Signature**: `OrgBandwidthSizingGet(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<OrgBandwidthSizingGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrgBandwidthSizingPut
- **HTTP**: `PUT /topology/api/v1/orgs/{org_id}/settings/bandwidth-sizing` (Default)
- **Notes**: Bandwidth Sizing task run time parameters
- **Signature**: `OrgBandwidthSizingPut(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<OrgBandwidthSizingPutError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrgContainerLspnormalizationDelete
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/settings/container-lsp-normalization` (Default)
- **Notes**: Container LSP Normalization task run time parameters
- **Signature**: `OrgContainerLspnormalizationDelete(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<OrgContainerLspnormalizationDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrgContainerLspnormalizationGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/settings/container-lsp-normalization` (Default)
- **Notes**: Container LSP Normalization task run time parameters
- **Signature**: `OrgContainerLspnormalizationGet(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<OrgContainerLspnormalizationGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrgContainerLspnormalizationPut
- **HTTP**: `PUT /topology/api/v1/orgs/{org_id}/settings/container-lsp-normalization` (Default)
- **Notes**: Container LSP Normalization task run time parameters
- **Signature**: `OrgContainerLspnormalizationPut(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<OrgContainerLspnormalizationPutError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrgPathComputationServerDelete
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/settings/path-computation-server` (Default)
- **Notes**: Path computation server run time parameters
- **Signature**: `OrgPathComputationServerDelete(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<OrgPathComputationServerDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrgPathComputationServerGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/settings/path-computation-server` (Default)
- **Notes**: Path computation server run time parameters
- **Signature**: `OrgPathComputationServerGet(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<OrgPathComputationServerGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrgPathComputationServerPut
- **HTTP**: `PUT /topology/api/v1/orgs/{org_id}/settings/path-computation-server` (Default)
- **Notes**: Path computation server run time parameters
- **Signature**: `OrgPathComputationServerPut(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<OrgPathComputationServerPutError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrgPruneDbDelete
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/settings/prune-db` (Default)
- **Notes**: prune-db run time parameters
- **Signature**: `OrgPruneDbDelete(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<OrgPruneDbDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrgPruneDbGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/settings/prune-db` (Default)
- **Notes**: prune-db run time parameters
- **Signature**: `OrgPruneDbGet(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<OrgPruneDbGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrgPruneDbPut
- **HTTP**: `PUT /topology/api/v1/orgs/{org_id}/settings/prune-db` (Default)
- **Notes**: prune-db run time parameters
- **Signature**: `OrgPruneDbPut(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<OrgPruneDbPutError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrgThresholdServiceDelete
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/settings/threshold-service` (Default)
- **Notes**: threshold-service run time parameters
- **Signature**: `OrgThresholdServiceDelete(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<OrgThresholdServiceDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrgThresholdServiceGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/settings/threshold-service` (Default)
- **Notes**: threshold-service run time parameters
- **Signature**: `OrgThresholdServiceGet(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<OrgThresholdServiceGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrgThresholdServicePut
- **HTTP**: `PUT /topology/api/v1/orgs/{org_id}/settings/threshold-service` (Default)
- **Notes**: threshold-service run time parameters
- **Signature**: `OrgThresholdServicePut(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<OrgThresholdServicePutError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrgTopologyParseDelete
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/settings/topology-parse` (Default)
- **Notes**: topology-parse run time parameters
- **Signature**: `OrgTopologyParseDelete(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<OrgTopologyParseDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrgTopologyParseGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/settings/topology-parse` (Default)
- **Notes**: topology-parse run time parameters
- **Signature**: `OrgTopologyParseGet(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<OrgTopologyParseGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrgTopologyParsePut
- **HTTP**: `PUT /topology/api/v1/orgs/{org_id}/settings/topology-parse` (Default)
- **Notes**: topology-parse run time parameters
- **Signature**: `OrgTopologyParsePut(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<OrgTopologyParsePutError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrgGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/settings` (Default)
- **Notes**: Contains the configuration of pathfinder components on EOP
- **Signature**: `OrgGet(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<OrgGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
