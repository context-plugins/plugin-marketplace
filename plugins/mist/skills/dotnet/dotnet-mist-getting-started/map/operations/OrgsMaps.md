# OrgsMaps — operations

Accessor: `client.OrgsMaps` · Source: `Api/OrgsMaps.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ImportOrgMapToSite
- **HTTP**: `POST /api/v1/orgs/{org_id}/sites/{site_name}/maps/import` (ApiHost (api))
- **Notes**: Import data from files is a multipart POST which has a file, an optional json, and an optional csv, to create floorplan, assign matching inventory to specific site, place ap if name or mac matches Request "json": a JSON string describing your upload "file": a binary file
- **Signature**: `ImportOrgMapToSite(Guid orgId, string siteName, bool? autoDeviceprofileAssignment, BinaryContent? csv, BinaryContent? file, MapImportJson? json, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`autoDeviceprofileAssignment` … `json`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Returns**: `ResponseMapImport`
- **Error**: `SdkException<ImportOrgMapToSiteError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ImportOrgMaps
- **HTTP**: `POST /api/v1/orgs/{org_id}/maps/import` (ApiHost (api))
- **Notes**: Import data from files is a multipart POST which has a file, an optional json, and an optional csv, to create floorplan, assign matching inventory to specific site, place ap if name or mac matches CSV File Format Vendor AP name,Mist AP Mac US Office AP-2 - 5c:5b:35:00:00:02,5c5b35000002
- **Signature**: `ImportOrgMaps(Guid orgId, bool? autoDeviceprofileAssignment, BinaryContent? csv, BinaryContent? file, MapOrgImportFileJson? json, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`autoDeviceprofileAssignment` … `json`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Returns**: `ResponseMapImport`
- **Error**: `SdkException<ImportOrgMapsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
