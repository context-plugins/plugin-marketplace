# SitesMaps — operations

Accessor: `client.SitesMaps` · Source: `Api/SitesMaps.cs` · 11 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AddSiteMapImage
- **HTTP**: `POST /api/v1/sites/{site_id}/maps/{map_id}/image` (ApiHost (api))
- **Notes**: Add image map is a multipart POST which has an file (Image) and an optional json parameter
- **Signature**: `AddSiteMapImage(Guid siteId, Guid mapId, BinaryContent file, string? json, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `json` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<AddSiteMapImageError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### BulkAssignSiteApsToMap
- **HTTP**: `POST /api/v1/sites/{site_id}/maps/{map_id}/set_map` (ApiHost (api))
- **Notes**: This API can be used to assign a list of AP Macs associated with site_id to the specified map_id. Note that map_id must be associated with corresponding site_id. This API obeys the following rules 1. if AP is unassigned to any Map, it gets associated with map_id 2. Any moved APs are returned in the response 3. If the AP is considered a locked AP, no action will be taken
- **Signature**: `BulkAssignSiteApsToMap(Guid siteId, Guid mapId, MacAddresses? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ResponseSetDevicesMap`
- **Error**: `SdkException<BulkAssignSiteApsToMapError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateSiteMap
- **HTTP**: `POST /api/v1/sites/{site_id}/maps` (ApiHost (api))
- **Notes**: Create Site Map
- **Signature**: `CreateSiteMap(Guid siteId, Map? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Map`
- **Error**: `SdkException<CreateSiteMapError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteSiteMap
- **HTTP**: `DELETE /api/v1/sites/{site_id}/maps/{map_id}` (ApiHost (api))
- **Notes**: Delete Site Map
- **Signature**: `DeleteSiteMap(Guid siteId, Guid mapId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteSiteMapError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteSiteMapImage
- **HTTP**: `DELETE /api/v1/sites/{site_id}/maps/{map_id}/image` (ApiHost (api))
- **Notes**: Delete Site Map Image
- **Signature**: `DeleteSiteMapImage(Guid siteId, Guid mapId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteSiteMapImageError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteMap
- **HTTP**: `GET /api/v1/sites/{site_id}/maps/{map_id}` (ApiHost (api))
- **Notes**: Get Site Map Details
- **Signature**: `GetSiteMap(Guid siteId, Guid mapId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Map`
- **Error**: `SdkException<GetSiteMapError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ImportSiteMaps
- **HTTP**: `POST /api/v1/sites/{site_id}/maps/import` (ApiHost (api))
- **Notes**: Import data from files is a multipart POST which has an file, an optional json, and an optional csv, to create floorplan, assign matching inventory to specific site, place ap if name or mac matches. Note This endpoint (at the site level), the AP must be already assigned to the site to be placed on the floorplan. If you want to place APs from the Org inventory, it is required to use the endpoint at the Org level importOrgMaps CSV File Format Vendor AP name,Mist AP Mac US Office AP-2,5c:5b:35:00:00:02 US Office AP-3,5c5b35000002
- **Signature**: `ImportSiteMaps(Guid siteId, bool? autoDeviceprofileAssignment, BinaryContent? csv, BinaryContent? file, MapImportJson? json, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`autoDeviceprofileAssignment` … `json`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Returns**: `ResponseMapImport`
- **Error**: `SdkException<ImportSiteMapsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ImportSiteWayfindings
- **HTTP**: `POST /api/v1/sites/{site_id}/maps/{map_id}/wayfinding/import` (ApiHost (api))
- **Notes**: This imports the vendor map meta data into the Map JSON. This is required by the SDK and App in order to access/render the vendor Map properly.
- **Signature**: `ImportSiteWayfindings(Guid siteId, Guid mapId, WayfindingImportJson? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<ImportSiteWayfindingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSiteMaps
- **HTTP**: `GET /api/v1/sites/{site_id}/maps` (ApiHost (api))
- **Notes**: Get List of Site Maps
- **Signature**: `ListSiteMaps(Guid siteId, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<Map>`
- **Error**: `SdkException<ListSiteMapsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### ReplaceSiteMapImage
- **HTTP**: `POST /api/v1/sites/{site_id}/maps/{map_id}/replace` (ApiHost (api))
- **Notes**: Replace Map Image This works like an PUT where the image will be replaced. If transform is provided, all the locations of the objects on the map (AP, Zone, Vbeacon, Beacon) will be transformed as well (relative to the new Map)
- **Signature**: `ReplaceSiteMapImage(Guid siteId, Guid mapId, BinaryContent file, MapSiteReplaceFileJson? json, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `json` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<ReplaceSiteMapImageError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateSiteMap
- **HTTP**: `PUT /api/v1/sites/{site_id}/maps/{map_id}` (ApiHost (api))
- **Notes**: Update Site Map
- **Signature**: `UpdateSiteMap(Guid siteId, Guid mapId, Map? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Map`
- **Error**: `SdkException<UpdateSiteMapError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
