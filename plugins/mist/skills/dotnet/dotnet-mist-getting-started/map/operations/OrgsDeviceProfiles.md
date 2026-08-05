# OrgsDeviceProfiles — operations

Accessor: `client.OrgsDeviceProfiles` · Source: `Api/OrgsDeviceProfiles.cs` · 7 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AssignOrgDeviceProfile
- **HTTP**: `POST /api/v1/orgs/{org_id}/deviceprofiles/{deviceprofile_id}/assign` (ApiHost (api))
- **Notes**: Assign Org Device Profile to Devices
- **Signature**: `AssignOrgDeviceProfile(Guid orgId, Guid deviceprofileId, MacAddresses? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ResponseAssignSuccess`
- **Error**: `SdkException<AssignOrgDeviceProfileError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateOrgDeviceProfile
- **HTTP**: `POST /api/v1/orgs/{org_id}/deviceprofiles` (ApiHost (api))
- **Notes**: Create Device Profile
- **Signature**: `CreateOrgDeviceProfile(Guid orgId, Deviceprofile? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Deviceprofile`
- **Error**: `SdkException<CreateOrgDeviceProfileError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgDeviceProfile
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/deviceprofiles/{deviceprofile_id}` (ApiHost (api))
- **Notes**: Delete Org Device Profile
- **Signature**: `DeleteOrgDeviceProfile(Guid orgId, Guid deviceprofileId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgDeviceProfileError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgDeviceProfile
- **HTTP**: `GET /api/v1/orgs/{org_id}/deviceprofiles/{deviceprofile_id}` (ApiHost (api))
- **Notes**: Get Org device Profile Details
- **Signature**: `GetOrgDeviceProfile(Guid orgId, Guid deviceprofileId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Deviceprofile`
- **Error**: `SdkException<GetOrgDeviceProfileError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgDeviceProfiles
- **HTTP**: `GET /api/v1/orgs/{org_id}/deviceprofiles` (ApiHost (api))
- **Notes**: Get List of Org Device Profiles
- **Signature**: `ListOrgDeviceProfiles(Guid orgId, DeviceTypeDefaultAp? type, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `type` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `type` ← `type`, `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<Deviceprofile>`
- **Error**: `SdkException<ListOrgDeviceProfilesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UnassignOrgDeviceProfile
- **HTTP**: `POST /api/v1/orgs/{org_id}/deviceprofiles/{deviceprofile_id}/unassign` (ApiHost (api))
- **Notes**: Unassign Org Device Profile from Devices
- **Signature**: `UnassignOrgDeviceProfile(Guid orgId, Guid deviceprofileId, MacAddresses? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ResponseAssignSuccess`
- **Error**: `SdkException<UnassignOrgDeviceProfileError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateOrgDeviceProfile
- **HTTP**: `PUT /api/v1/orgs/{org_id}/deviceprofiles/{deviceprofile_id}` (ApiHost (api))
- **Notes**: Update Org Device Profile
- **Signature**: `UpdateOrgDeviceProfile(Guid orgId, Guid deviceprofileId, Deviceprofile? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Deviceprofile`
- **Error**: `SdkException<UpdateOrgDeviceProfileError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
