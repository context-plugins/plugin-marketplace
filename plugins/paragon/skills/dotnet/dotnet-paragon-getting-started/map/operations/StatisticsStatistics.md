# StatisticsStatistics — operations

Accessor: `client.StatisticsStatistics` · Source: `Api/StatisticsStatistics.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### PostApiV1OrgsOrgIdTopoIdStatisticsInterfacesBulk
- **HTTP**: `POST /topology/api/v1/orgs/{org_id}/{topo_id}/statistics/interfaces/bulk` (Default)
- **Signature**: `PostApiV1OrgsOrgIdTopoIdStatisticsInterfacesBulk(string orgId, string topoId, InterfaceBulkRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `InterfaceBulkResponse`
- **Error**: `SdkException<PostApiV1OrgsOrgIdTopoIdStatisticsInterfacesBulkError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponse1(out ErrorResponse1)` [400, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostApiV1OrgsOrgIdTopoIdStatisticsInterfacesBulkdelay
- **HTTP**: `POST /topology/api/v1/orgs/{org_id}/{topo_id}/statistics/interfaces/bulkdelay` (Default)
- **Signature**: `PostApiV1OrgsOrgIdTopoIdStatisticsInterfacesBulkdelay(string orgId, string topoId, InterfaceBulkDelayRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `InterfaceBulkDelayResponse`
- **Error**: `SdkException<PostApiV1OrgsOrgIdTopoIdStatisticsInterfacesBulkdelayError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponse1(out ErrorResponse1)` [400, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostApiV1OrgsOrgIdTopoIdStatisticsTeLspsBulk
- **HTTP**: `POST /topology/api/v1/orgs/{org_id}/{topo_id}/statistics/te-lsps/bulk` (Default)
- **Signature**: `PostApiV1OrgsOrgIdTopoIdStatisticsTeLspsBulk(string orgId, string topoId, LspbulkRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `LspbulkResponse`
- **Error**: `SdkException<PostApiV1OrgsOrgIdTopoIdStatisticsTeLspsBulkError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponse1(out ErrorResponse1)` [400, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostApiV1OrgsOrgIdTopoIdStatisticsTeLspsBulkdelay
- **HTTP**: `POST /topology/api/v1/orgs/{org_id}/{topo_id}/statistics/te-lsps/bulkdelay` (Default)
- **Signature**: `PostApiV1OrgsOrgIdTopoIdStatisticsTeLspsBulkdelay(string orgId, string topoId, LspbulkDelayRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `LspbulkDelayResponse`
- **Error**: `SdkException<PostApiV1OrgsOrgIdTopoIdStatisticsTeLspsBulkdelayError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponse1(out ErrorResponse1)` [400, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
