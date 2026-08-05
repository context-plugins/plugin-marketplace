# ObservabilityRecommendations — operations

Accessor: `client.ObservabilityRecommendations` · Source: `Api/ObservabilityRecommendations.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### RecommendationServiceGetRecommendedRules
- **HTTP**: `GET /insights/api/v1/orgs/{org_id}/devices/{device_id}/recommendations/rules` (Default)
- **Notes**: Returns the full recommendation record for a single device, including all rules, their variables, and current approval/deployment status.
- **Signature**: `RecommendationServiceGetRecommendedRules(string orgId, string deviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `OreRecommendationRecord`
- **Error**: `SdkException<RecommendationServiceGetRecommendedRulesError>` — **Case A (typed)**
- **Error accessors**: `TryGetDetailStatus(out DetailStatus)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RecommendationServiceListRecommendedRules
- **HTTP**: `GET /insights/api/v1/orgs/{org_id}/recommendations/rules` (Default)
- **Notes**: Returns a paginated list of recommendation records (one per device) for the given organization. Supports server-side pagination, sorting, and filtering using the `selection.*` query parameter family.
- **Signature**: `RecommendationServiceListRecommendedRules(string orgId, string? selectionSortKeys, string? selectionFilterFilter, int? selectionPaginationPageSize = 15, int? selectionPaginationPageOffset = 0, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `selectionSortKeys` — nullable, no default → **must pass explicitly**
  - `selectionFilterFilter` — nullable, no default → **must pass explicitly**
  - defaults: `selectionPaginationPageSize` = 15, `selectionPaginationPageOffset` = 0, `requestOptions` = null
- **Query params (wire ← C#)**: `selection.pagination.pageSize` ← `selectionPaginationPageSize`, `selection.pagination.pageOffset` ← `selectionPaginationPageOffset`, `selection.sort.keys` ← `selectionSortKeys`, `selection.filter.filter` ← `selectionFilterFilter`
- **Returns**: `OreRecommendationsListResponse`
- **Error**: `SdkException<RecommendationServiceListRecommendedRulesError>` — **Case A (typed)**
- **Error accessors**: `TryGetDetailStatus(out DetailStatus)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RecommendationServiceUpdateRecommendedRules
- **HTTP**: `PATCH /insights/api/v1/orgs/{org_id}/recommendations/rules` (Default)
- **Notes**: Apply approval decisions and/or user-modified variables to a set of recommended rules grouped by device.
- **Signature**: `RecommendationServiceUpdateRecommendedRules(string orgId, OreUpdateRecommendedRulesRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `OreUpdateRecommendedRulesResponse`
- **Error**: `SdkException<RecommendationServiceUpdateRecommendedRulesError>` — **Case A (typed)**
- **Error accessors**: `TryGetDetailStatus(out DetailStatus)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
