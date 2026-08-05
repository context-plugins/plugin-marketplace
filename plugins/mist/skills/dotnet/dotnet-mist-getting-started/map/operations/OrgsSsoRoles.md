# OrgsSsoRoles — operations

Accessor: `client.OrgsSsoRoles` · Source: `Api/OrgsSsoRoles.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateOrgSsoRole
- **HTTP**: `POST /api/v1/orgs/{org_id}/ssoroles` (ApiHost (api))
- **Notes**: Create Org SSO Role
- **Signature**: `CreateOrgSsoRole(Guid orgId, SsoRoleOrg? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SsoRoleOrg`
- **Error**: `SdkException<CreateOrgSsoRoleError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgSsoRole
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/ssoroles/{ssorole_id}` (ApiHost (api))
- **Notes**: Delete Org SSO Role
- **Signature**: `DeleteOrgSsoRole(Guid orgId, Guid ssoroleId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgSsoRoleError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgSsoRole
- **HTTP**: `GET /api/v1/orgs/{org_id}/ssoroles/{ssorole_id}` (ApiHost (api))
- **Notes**: Get Org SSO Role Details
- **Signature**: `GetOrgSsoRole(Guid orgId, Guid ssoroleId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SsoRoleOrg`
- **Error**: `SdkException<GetOrgSsoRoleError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgSsoRoles
- **HTTP**: `GET /api/v1/orgs/{org_id}/ssoroles` (ApiHost (api))
- **Notes**: Get List of Org SSO Roles
- **Signature**: `ListOrgSsoRoles(Guid orgId, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<SsoRoleOrg>`
- **Error**: `SdkException<ListOrgSsoRolesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateOrgSsoRole
- **HTTP**: `PUT /api/v1/orgs/{org_id}/ssoroles/{ssorole_id}` (ApiHost (api))
- **Notes**: Update Org SSO Role
- **Signature**: `UpdateOrgSsoRole(Guid orgId, Guid ssoroleId, SsoRoleOrg? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SsoRoleOrg`
- **Error**: `SdkException<UpdateOrgSsoRoleError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
