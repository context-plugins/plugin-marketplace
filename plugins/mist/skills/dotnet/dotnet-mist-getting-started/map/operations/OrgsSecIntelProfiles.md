# OrgsSecIntelProfiles — operations

Accessor: `client.OrgsSecIntelProfiles` · Source: `Api/OrgsSecIntelProfiles.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateOrgSecIntelProfile
- **HTTP**: `POST /api/v1/orgs/{org_id}/secintelprofiles` (ApiHost (api))
- **Notes**: Create Sec Intel Profiles
- **Signature**: `CreateOrgSecIntelProfile(Guid orgId, SecintelProfile? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SecintelProfile`
- **Error**: `SdkException<CreateOrgSecIntelProfileError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgSecIntelProfile
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/secintelprofiles/{secintelprofile_id}` (ApiHost (api))
- **Notes**: Delete Sec Intel Profile
- **Signature**: `DeleteOrgSecIntelProfile(Guid orgId, Guid secintelprofileId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgSecIntelProfileError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgSecIntelProfile
- **HTTP**: `GET /api/v1/orgs/{org_id}/secintelprofiles/{secintelprofile_id}` (ApiHost (api))
- **Notes**: Get Sec Intel Profile
- **Signature**: `GetOrgSecIntelProfile(Guid orgId, Guid secintelprofileId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SecintelProfile`
- **Error**: `SdkException<GetOrgSecIntelProfileError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgSecIntelProfiles
- **HTTP**: `GET /api/v1/orgs/{org_id}/secintelprofiles` (ApiHost (api))
- **Notes**: Get List of Sec Intel Profiles
- **Signature**: `ListOrgSecIntelProfiles(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<SecintelProfile>`
- **Error**: `SdkException<ListOrgSecIntelProfilesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateOrgSecIntelProfile
- **HTTP**: `PUT /api/v1/orgs/{org_id}/secintelprofiles/{secintelprofile_id}` (ApiHost (api))
- **Notes**: Update Sec Intel Profile
- **Signature**: `UpdateOrgSecIntelProfile(Guid orgId, Guid secintelprofileId, SecintelProfile? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SecintelProfile`
- **Error**: `SdkException<UpdateOrgSecIntelProfileError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
