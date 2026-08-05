# OrgsAntivirusProfiles — operations

Accessor: `client.OrgsAntivirusProfiles` · Source: `Api/OrgsAntivirusProfiles.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateOrgAntivirusProfile
- **HTTP**: `POST /api/v1/orgs/{org_id}/avprofiles` (ApiHost (api))
- **Notes**: Create getOrgServices Antivirus Profile
- **Signature**: `CreateOrgAntivirusProfile(Guid orgId, Avprofile? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Avprofile`
- **Error**: `SdkException<CreateOrgAntivirusProfileError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgAntivirusProfile
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/avprofiles/{avprofile_id}` (ApiHost (api))
- **Notes**: DeleteOrgAntivirusProfile
- **Signature**: `DeleteOrgAntivirusProfile(Guid orgId, Guid avprofileId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgAntivirusProfileError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgAntivirusProfile
- **HTTP**: `GET /api/v1/orgs/{org_id}/avprofiles/{avprofile_id}` (ApiHost (api))
- **Notes**: Get Org Antivirus Profile
- **Signature**: `GetOrgAntivirusProfile(Guid orgId, Guid avprofileId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Avprofile`
- **Error**: `SdkException<GetOrgAntivirusProfileError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgAntivirusProfiles
- **HTTP**: `GET /api/v1/orgs/{org_id}/avprofiles` (ApiHost (api))
- **Notes**: Get List of Antivirus Profiles
- **Signature**: `ListOrgAntivirusProfiles(Guid orgId, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<Avprofile>`
- **Error**: `SdkException<ListOrgAntivirusProfilesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateOrgAntivirusProfile
- **HTTP**: `PUT /api/v1/orgs/{org_id}/avprofiles/{avprofile_id}` (ApiHost (api))
- **Notes**: Update Org Antivirus Profile
- **Signature**: `UpdateOrgAntivirusProfile(Guid orgId, Guid avprofileId, Avprofile? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Avprofile`
- **Error**: `SdkException<UpdateOrgAntivirusProfileError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
