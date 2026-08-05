# SitesMapsAutoPlacement — operations

Accessor: `client.SitesMapsAutoPlacement` · Source: `Api/SitesMapsAutoPlacement.cs` · 9 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ClearSiteApAutoOrient
- **HTTP**: `POST /api/v1/sites/{site_id}/maps/{map_id}/clear_auto_orient` (ApiHost (api))
- **Notes**: This API is used to destroy the autoorientations of a map or subset of APs on a map.
- **Signature**: `ClearSiteApAutoOrient(Guid siteId, Guid mapId, MacAddresses? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<ClearSiteApAutoOrientError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ClearSiteApAutoplacement
- **HTTP**: `POST /api/v1/sites/{site_id}/maps/{map_id}/clear_autoplacement` (ApiHost (api))
- **Notes**: This API is used to destroy the cached autoplacement locations of a map or subset of APs on a map.
- **Signature**: `ClearSiteApAutoplacement(Guid siteId, Guid mapId, MacAddresses? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<ClearSiteApAutoplacementError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ConfirmSiteApLocalizationData
- **HTTP**: `POST /api/v1/sites/{site_id}/maps/{map_id}/use_auto_ap_values` (ApiHost (api))
- **Notes**: This API is used to accept or reject the cached autoplacement and auto-orientation values of a map or subset of APs on a map. Any APs that have autoplacement values are stored in cache for up to 7 days while awaiting acceptance or rejection. Accepting the autoplacement values overwrites the existing X, Y, and orientation of the accepted APs with their cached autoplacement values. Rejecting the autoplacement values causes the APs to retain their current X, Y, and orientation. Once a decision (accept or reject) is made, or the 7-day time-to-live (TTL) expires, the cached values are deleted.
- **Signature**: `ConfirmSiteApLocalizationData(Guid siteId, Guid mapId, UseAutoApValues? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<ConfirmSiteApLocalizationDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetResponseHttp400(out ResponseHttp400)` [401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteSiteApAutoOrientation
- **HTTP**: `DELETE /api/v1/sites/{site_id}/maps/{map_id}/auto_orient` (ApiHost (api))
- **Notes**: This API is called to force stop auto placement for a given map
- **Signature**: `DeleteSiteApAutoOrientation(Guid mapId, Guid siteId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteSiteApAutoOrientationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetResponseHttp400(out ResponseHttp400)` [401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteSiteApAutoplacement
- **HTTP**: `DELETE /api/v1/sites/{site_id}/maps/{map_id}/auto_placement` (ApiHost (api))
- **Notes**: This API is called to force stop auto placement for a given map
- **Signature**: `DeleteSiteApAutoplacement(Guid siteId, Guid mapId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteSiteApAutoplacementError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetResponseHttp400(out ResponseHttp400)` [401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteApAutoOrientation
- **HTTP**: `GET /api/v1/sites/{site_id}/maps/{map_id}/auto_orient` (ApiHost (api))
- **Notes**: This API is called to view the current status of auto orient for a given map.
- **Signature**: `GetSiteApAutoOrientation(Guid mapId, Guid siteId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ResponseAutoOrientationInfo`
- **Error**: `SdkException<GetSiteApAutoOrientationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetResponseHttp400(out ResponseHttp400)` [401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteApAutoPlacement
- **HTTP**: `GET /api/v1/sites/{site_id}/maps/{map_id}/auto_placement` (ApiHost (api))
- **Notes**: This API is called to view the current status of auto placement for a given map. Status Descriptions | Status | Description | | --- | --- | | `pending` | Autoplacement has not been requested for this map | | `inprogress` | Autoplacement is currently processing | | `done` | The autoplacement process has completed | | `data_needed` | Additional position data is required for autoplacement. Users should verify the requested anchor APs have a position on the map | | `invalid_model` | Autoplacement is not supported on the model of the APs on the map | | `invalid_version` | Autoplacement is not supported with the APs current firmware version | | `error` | There was an error in the autoplacement process |
- **Signature**: `GetSiteApAutoPlacement(Guid siteId, Guid mapId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ResponseAutoPlacementInfo`
- **Error**: `SdkException<GetSiteApAutoPlacementError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RunSiteApAutoplacement
- **HTTP**: `POST /api/v1/sites/{site_id}/maps/{map_id}/auto_placement` (ApiHost (api))
- **Notes**: This API is called to trigger auto placement for a map. For the auto placement feature to work, RTT-FTM data needs to be collected from the APs on the map. This scan is disruptive, and users must be notified of service disruption during the auto placement process. Repeated POST requests to this endpoint while a map is still running will be rejected. `force_collection` is set to `false` by default. If `force_collection` is set to `false`, the API attempts to start localization with existing data. If no data exists, the API attempts to start orchestration. If `force_collection` is set to `true`, the API attempts to start orchestration. Providing a list of devices is optional. If provided, autoplacement suggestions will be made only for the specified devices. If no list is provided, all APs associated with the map are considered by default.
- **Signature**: `RunSiteApAutoplacement(Guid siteId, Guid mapId, AutoPlacement? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ResponseAutoplacement`
- **Error**: `SdkException<RunSiteApAutoplacementError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### StartSiteApAutoOrientation
- **HTTP**: `POST /api/v1/sites/{site_id}/maps/{map_id}/auto_orient` (ApiHost (api))
- **Notes**: This API is called to trigger a map for auto orient. For auto orient feature to work, BLE data needs to be collected from the APs on the map. This precess is not disruptive unlike FTM collection. Repeated POST requests to this endpoint while a map is still running will be rejected. `force_collection` is set to `false` by default. If `force_collection`==`false`, the API attempts to start orientation with existing data. If no data exists, the API attempts to start collecting orientation data. If `force_collection`==`true`, the API attempts to start collecting orientation data. Providing a list of device macs is optional. If provided, auto orientation suggestions will be made only for the specified devices. If no list is provided, all APs associated with the map are considered by default.
- **Signature**: `StartSiteApAutoOrientation(Guid mapId, Guid siteId, AutoOrient? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ResponseAutoOrientation`
- **Error**: `SdkException<StartSiteApAutoOrientationError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseDetailString(out ResponseDetailString)` [400] · `TryGetResponseHttp400(out ResponseHttp400)` [401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
