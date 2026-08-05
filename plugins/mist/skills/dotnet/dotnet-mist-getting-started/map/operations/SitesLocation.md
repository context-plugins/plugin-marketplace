# SitesLocation — operations

Accessor: `client.SitesLocation` · Source: `Api/SitesLocation.cs` · 8 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ClearSiteMlOverwriteForDevice
- **HTTP**: `DELETE /api/v1/sites/{site_id}/location/ml/device/{device_id}` (ApiHost (api))
- **Notes**: Clear ML Overwrite for Device
- **Signature**: `ClearSiteMlOverwriteForDevice(Guid siteId, Guid deviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<ClearSiteMlOverwriteForDeviceError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ClearSiteMlOverwriteForMap
- **HTTP**: `DELETE /api/v1/sites/{site_id}/location/ml/map/{map_id}` (ApiHost (api))
- **Notes**: Clear ML Overwrite for Map
- **Signature**: `ClearSiteMlOverwriteForMap(Guid siteId, Guid mapId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<ClearSiteMlOverwriteForMapError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteBeamCoverageOverview
- **HTTP**: `GET /api/v1/sites/{site_id}/location/coverage` (ApiHost (api))
- **Notes**: Get Beam Coverage Overview
- **Signature**: `GetSiteBeamCoverageOverview(Guid siteId, string? mapId, RfClientType? type, string? clientType, Resolution? resolution, int? start, int? end, string? duration = "1d", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`mapId` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `duration` = "1d", `requestOptions` = null
- **Query params (wire ← C#)**: `map_id` ← `mapId`, `type` ← `type`, `client_type` ← `clientType`, `duration` ← `duration`, `resolution` ← `resolution`, `start` ← `start`, `end` ← `end`
- **Returns**: `ResponseLocationCoverage`
- **Error**: `SdkException<GetSiteBeamCoverageOverviewError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteDefaultPlfForModels
- **HTTP**: `GET /api/v1/sites/{site_id}/location/ml/defaults` (ApiHost (api))
- **Notes**: Get Default PLF for Models
- **Signature**: `GetSiteDefaultPlfForModels(Guid siteId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<object>`
- **Error**: `SdkException<GetSiteDefaultPlfForModelsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteMachineLearningCurrentStat
- **HTTP**: `GET /api/v1/sites/{site_id}/location/ml/current` (ApiHost (api))
- **Notes**: Get Machine Learning Current Stat For each VBLE AP, it has ML model parameters (e.g. Path-loss-estimate, Intercept) as well as completion indicators (Level and PercentageComplete). For the completeness, ML takes N sample to finish its first level and use N*0.25 samples to complete each successive level. When a device is moved, the completeness will be reset as it has to re-learn.
- **Signature**: `GetSiteMachineLearningCurrentStat(Guid siteId, string? mapId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `mapId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `map_id` ← `mapId`
- **Returns**: `IReadOnlyList<object>`
- **Error**: `SdkException<GetSiteMachineLearningCurrentStatError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OverwriteSiteMlForDevice
- **HTTP**: `PUT /api/v1/sites/{site_id}/location/ml/device/{device_id}` (ApiHost (api))
- **Notes**: Overwrite ML For Device
- **Signature**: `OverwriteSiteMlForDevice(Guid siteId, Guid deviceId, IReadOnlyDictionary<string, MlOverwriteAdditionalProperties>? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<object>`
- **Error**: `SdkException<OverwriteSiteMlForDeviceError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OverwriteSiteMlForMap
- **HTTP**: `PUT /api/v1/sites/{site_id}/location/ml/map/{map_id}` (ApiHost (api))
- **Notes**: Overwrite ML For Map
- **Signature**: `OverwriteSiteMlForMap(Guid siteId, Guid mapId, IReadOnlyDictionary<string, MlOverwriteAdditionalProperties>? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<object>`
- **Error**: `SdkException<OverwriteSiteMlForMapError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ResetSiteMlStatsByMap
- **HTTP**: `POST /api/v1/sites/{site_id}/location/ml/reset/map/{map_id}` (ApiHost (api))
- **Notes**: Reset ML Stats by Map
- **Signature**: `ResetSiteMlStatsByMap(Guid siteId, Guid mapId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<ResetSiteMlStatsByMapError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
