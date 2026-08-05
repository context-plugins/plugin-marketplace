# SitesSles — operations

Accessor: `client.SitesSles` · Source: `Api/SitesSles.cs` · 17 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetSiteSleClassifierDetails
- **HTTP**: `GET /api/v1/sites/{site_id}/sle/{scope}/{scope_id}/metric/{metric}/classifier/{classifier}/summary` (ApiHost (api))
- **Notes**: Get SLE classifier details
- **Signature**: `GetSiteSleClassifierDetails(Guid siteId, SleSummaryScope scope, string scopeId, string metric, string classifier, int? start, int? end, string? duration = "1d", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - defaults: `duration` = "1d", `requestOptions` = null
- **Query params (wire ← C#)**: `start` ← `start`, `end` ← `end`, `duration` ← `duration`
- **Returns**: `SleClassifierSummary`
- **Error**: `SdkException<GetSiteSleClassifierDetailsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteSleHistogram
- **HTTP**: `GET /api/v1/sites/{site_id}/sle/{scope}/{scope_id}/metric/{metric}/histogram` (ApiHost (api))
- **Notes**: Get the histogram for the SLE metric
- **Signature**: `GetSiteSleHistogram(Guid siteId, SiteSleHistogramScopeParameters scope, string scopeId, string metric, int? start, int? end, string? duration = "1d", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - defaults: `duration` = "1d", `requestOptions` = null
- **Query params (wire ← C#)**: `start` ← `start`, `end` ← `end`, `duration` ← `duration`
- **Returns**: `SleHistogram`
- **Error**: `SdkException<GetSiteSleHistogramError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteSleImpactSummary
- **HTTP**: `GET /api/v1/sites/{site_id}/sle/{scope}/{scope_id}/metric/{metric}/impact-summary` (ApiHost (api))
- **Notes**: Get impact summary counts optionally filtered by classifier and failure type * Wireless SLE Fields: `wlan`, `device_type`, `device_os` ,`band`, `ap`, `server`, `mxedge` * Wired SLE Fields: `switch`, `client`, `vlan`, `interface`, `chassis` * WAN SLE Fields: `gateway`, `client`, `interface`, `chassis`, `peer_path`, `gateway_zones`
- **Signature**: `GetSiteSleImpactSummary(Guid siteId, SiteSleImpactSummaryScopeParameters scope, string scopeId, string metric, int? start, int? end, SiteSleImpactSummaryFieldsParameter? fields, string? classifier, string? duration = "1d", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`start` … `classifier`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `duration` = "1d", `requestOptions` = null
- **Query params (wire ← C#)**: `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `fields` ← `fields`, `classifier` ← `classifier`
- **Returns**: `SleImpactSummary`
- **Error**: `SdkException<GetSiteSleImpactSummaryError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteSleSummary
- **HTTP**: `GET /api/v1/sites/{site_id}/sle/{scope}/{scope_id}/metric/{metric}/summary` (ApiHost (api))
- **Notes**: Get the summary for the SLE metric
- **Signature**: `GetSiteSleSummary(Guid siteId, SiteSleMetricSummaryScopeParameters scope, string scopeId, string metric, int? start, int? end, string? duration = "1d", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - defaults: `duration` = "1d", `requestOptions` = null
- **Query params (wire ← C#)**: `start` ← `start`, `end` ← `end`, `duration` ← `duration`
- **Returns**: `SleSummary`
- **Error**: `SdkException<GetSiteSleSummaryError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteSleThreshold
- **HTTP**: `GET /api/v1/sites/{site_id}/sle/{scope}/{scope_id}/metric/{metric}/threshold` (ApiHost (api))
- **Notes**: Get the SLE threshold
- **Signature**: `GetSiteSleThreshold(Guid siteId, SiteSleThresholdScopeParameter scope, string scopeId, string metric, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SleThreshold`
- **Error**: `SdkException<GetSiteSleThresholdError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSiteSleImpactedApplications
- **HTTP**: `GET /api/v1/sites/{site_id}/sle/{scope}/{scope_id}/metric/{metric}/impacted-applications` (ApiHost (api))
- **Notes**: For WAN SLEs. List the impacted interfaces optionally filtered by classifier and failure type
- **Signature**: `ListSiteSleImpactedApplications(Guid siteId, SiteSleScope scope, Guid scopeId, string metric, int? start, int? end, string? classifier, string? duration = "1d", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - `classifier` — nullable, no default → **must pass explicitly**
  - defaults: `duration` = "1d", `requestOptions` = null
- **Query params (wire ← C#)**: `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `classifier` ← `classifier`
- **Returns**: `SleImpactedApplications`
- **Error**: `SdkException<ListSiteSleImpactedApplicationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSiteSleImpactedAps
- **HTTP**: `GET /api/v1/sites/{site_id}/sle/{scope}/{scope_id}/metric/{metric}/impacted-aps` (ApiHost (api))
- **Notes**: For Wireless SLEs. List the impacted APs optionally filtered by classifier and failure type
- **Signature**: `ListSiteSleImpactedAps(Guid siteId, SiteSleImpactedApsScopeParameters scope, Guid scopeId, string metric, int? start, int? end, string? classifier, string? duration = "1d", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - `classifier` — nullable, no default → **must pass explicitly**
  - defaults: `duration` = "1d", `requestOptions` = null
- **Query params (wire ← C#)**: `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `classifier` ← `classifier`
- **Returns**: `SleImpactedAps`
- **Error**: `SdkException<ListSiteSleImpactedApsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSiteSleImpactedChassis
- **HTTP**: `GET /api/v1/sites/{site_id}/sle/{scope}/{scope_id}/metric/{metric}/impacted-chassis` (ApiHost (api))
- **Notes**: For Wired and WAN SLEs. List the impacted interfaces optionally filtered by classifier and failure type
- **Signature**: `ListSiteSleImpactedChassis(Guid siteId, SiteSleImpactedChassisScopeParameters scope, Guid scopeId, string metric, int? start, int? end, string? classifier, string? duration = "1d", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - `classifier` — nullable, no default → **must pass explicitly**
  - defaults: `duration` = "1d", `requestOptions` = null
- **Query params (wire ← C#)**: `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `classifier` ← `classifier`
- **Returns**: `SleImpactedChassis`
- **Error**: `SdkException<ListSiteSleImpactedChassisError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSiteSleImpactedGateways
- **HTTP**: `GET /api/v1/sites/{site_id}/sle/{scope}/{scope_id}/metric/{metric}/impacted-gateways` (ApiHost (api))
- **Notes**: For WAN SLEs. List the impacted interfaces optionally filtered by classifier and failure type
- **Signature**: `ListSiteSleImpactedGateways(Guid siteId, SiteSleImpactedGatewaysScopeParameters scope, Guid scopeId, string metric, int? start, int? end, string? classifier, string? duration = "1d", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - `classifier` — nullable, no default → **must pass explicitly**
  - defaults: `duration` = "1d", `requestOptions` = null
- **Query params (wire ← C#)**: `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `classifier` ← `classifier`
- **Returns**: `SleImpactedGateways`
- **Error**: `SdkException<ListSiteSleImpactedGatewaysError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSiteSleImpactedInterfaces
- **HTTP**: `GET /api/v1/sites/{site_id}/sle/{scope}/{scope_id}/metric/{metric}/impacted-interfaces` (ApiHost (api))
- **Notes**: For Wired and WAN SLEs. List the impacted interfaces optionally filtered by classifier and failure type
- **Signature**: `ListSiteSleImpactedInterfaces(Guid siteId, SiteSleImpactedInterfacesScopeParameters scope, Guid scopeId, string metric, int? start, int? end, string? classifier, string? duration = "1d", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - `classifier` — nullable, no default → **must pass explicitly**
  - defaults: `duration` = "1d", `requestOptions` = null
- **Query params (wire ← C#)**: `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `classifier` ← `classifier`
- **Returns**: `SleImpactedInterfaces`
- **Error**: `SdkException<ListSiteSleImpactedInterfacesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSiteSleImpactedSwitches
- **HTTP**: `GET /api/v1/sites/{site_id}/sle/{scope}/{scope_id}/metric/{metric}/impacted-switches` (ApiHost (api))
- **Notes**: For Wired SLEs. List the impacted switches optionally filtered by classifier and failure type
- **Signature**: `ListSiteSleImpactedSwitches(Guid siteId, SiteSleImpactedSwitchesScopeParameters scope, Guid scopeId, string metric, int? start, int? end, string? classifier, string? duration = "1d", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - `classifier` — nullable, no default → **must pass explicitly**
  - defaults: `duration` = "1d", `requestOptions` = null
- **Query params (wire ← C#)**: `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `classifier` ← `classifier`
- **Returns**: `SleImpactedSwitches`
- **Error**: `SdkException<ListSiteSleImpactedSwitchesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSiteSleImpactedWiredClients
- **HTTP**: `GET /api/v1/sites/{site_id}/sle/{scope}/{scope_id}/metric/{metric}/impacted-clients` (ApiHost (api))
- **Notes**: For Wired SLEs. List the impacted interfaces optionally filtered by classifier and failure type
- **Signature**: `ListSiteSleImpactedWiredClients(Guid siteId, SiteSleImpactedClientsScopeParameters scope, Guid scopeId, string metric, int? start, int? end, string? classifier, string? duration = "1d", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - `classifier` — nullable, no default → **must pass explicitly**
  - defaults: `duration` = "1d", `requestOptions` = null
- **Query params (wire ← C#)**: `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `classifier` ← `classifier`
- **Returns**: `SleImpactedClients`
- **Error**: `SdkException<ListSiteSleImpactedWiredClientsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSiteSleImpactedWirelessClients
- **HTTP**: `GET /api/v1/sites/{site_id}/sle/{scope}/{scope_id}/metric/{metric}/impacted-users` (ApiHost (api))
- **Notes**: For Wireless SLEs. List the impacted wireless users optionally filtered by classifier and failure type
- **Signature**: `ListSiteSleImpactedWirelessClients(Guid siteId, SiteSleImpactedUsersScopeParameter scope, Guid scopeId, string metric, int? start, int? end, string? classifier, string? duration = "1d", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - `classifier` — nullable, no default → **must pass explicitly**
  - defaults: `duration` = "1d", `requestOptions` = null
- **Query params (wire ← C#)**: `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `classifier` ← `classifier`
- **Returns**: `SleImpactedUsers`
- **Error**: `SdkException<ListSiteSleImpactedWirelessClientsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSiteSleMetricClassifiers
- **HTTP**: `GET /api/v1/sites/{site_id}/sle/{scope}/{scope_id}/metric/{metric}/classifiers` (ApiHost (api))
- **Notes**: List classifiers for a specific metric
- **Signature**: `ListSiteSleMetricClassifiers(Guid siteId, SiteSleMetricClassifiersScopeParameters scope, string scopeId, string metric, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<string>`
- **Error**: `SdkException<ListSiteSleMetricClassifiersError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSiteSlesMetrics
- **HTTP**: `GET /api/v1/sites/{site_id}/sle/{scope}/{scope_id}/metrics` (ApiHost (api))
- **Notes**: List the metrics for the given scope
- **Signature**: `ListSiteSlesMetrics(Guid siteId, SiteSleMetricsScopeParameters scope, string scopeId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SiteSleMetrics`
- **Error**: `SdkException<ListSiteSlesMetricsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReplaceSiteSleThreshold
- **HTTP**: `POST /api/v1/sites/{site_id}/sle/{scope}/{scope_id}/metric/{metric}/threshold` (ApiHost (api))
- **Notes**: Replace the SLE threshold
- **Signature**: `ReplaceSiteSleThreshold(Guid siteId, SiteSleThresholdScopeParameter scope, string scopeId, string metric, SleThreshold? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SleThreshold`
- **Error**: `SdkException<ReplaceSiteSleThresholdError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateSiteSleThreshold
- **HTTP**: `PUT /api/v1/sites/{site_id}/sle/{scope}/{scope_id}/metric/{metric}/threshold` (ApiHost (api))
- **Notes**: Update the SLE threshold
- **Signature**: `UpdateSiteSleThreshold(Guid siteId, SiteSleThresholdScopeParameter scope, string scopeId, string metric, SleThreshold? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SleThreshold`
- **Error**: `SdkException<UpdateSiteSleThresholdError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
