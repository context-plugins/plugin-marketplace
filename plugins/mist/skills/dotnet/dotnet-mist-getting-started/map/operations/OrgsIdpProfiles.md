# OrgsIdpProfiles — operations

Accessor: `client.OrgsIdpProfiles` · Source: `Api/OrgsIdpProfiles.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateOrgIdpProfile
- **HTTP**: `POST /api/v1/orgs/{org_id}/idpprofiles` (ApiHost (api))
- **Notes**: Create Org IDP Profile
- **Signature**: `CreateOrgIdpProfile(Guid orgId, IdpProfile? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `IdpProfile`
- **Error**: `SdkException<CreateOrgIdpProfileError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgIdpProfile
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/idpprofiles/{idpprofile_id}` (ApiHost (api))
- **Notes**: Delete Org IDP Profile
- **Signature**: `DeleteOrgIdpProfile(Guid orgId, Guid idpprofileId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgIdpProfileError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgIdpProfile
- **HTTP**: `GET /api/v1/orgs/{org_id}/idpprofiles/{idpprofile_id}` (ApiHost (api))
- **Notes**: Get Org IDP Profile
- **Signature**: `GetOrgIdpProfile(Guid orgId, Guid idpprofileId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IdpProfile`
- **Error**: `SdkException<GetOrgIdpProfileError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgIdpProfiles
- **HTTP**: `GET /api/v1/orgs/{org_id}/idpprofiles` (ApiHost (api))
- **Notes**: Get the list of Org IDP Profiles
- **Signature**: `ListOrgIdpProfiles(Guid orgId, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<IdpProfile>`
- **Error**: `SdkException<ListOrgIdpProfilesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateOrgIdpProfile
- **HTTP**: `PUT /api/v1/orgs/{org_id}/idpprofiles/{idpprofile_id}` (ApiHost (api))
- **Notes**: Update Org IDP Profile
- **Signature**: `UpdateOrgIdpProfile(Guid orgId, Guid idpprofileId, IdpProfile? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `IdpProfile`
- **Error**: `SdkException<UpdateOrgIdpProfileError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
