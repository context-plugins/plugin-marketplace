# MspsSsoRoles — operations

Accessor: `client.MspsSsoRoles` · Source: `Api/MspsSsoRoles.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateMspSsoRole
- **HTTP**: `POST /api/v1/msps/{msp_id}/ssoroles` (ApiHost (api))
- **Notes**: Create MSP Role
- **Signature**: `CreateMspSsoRole(Guid mspId, SsoRoleMsp? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SsoRoleMsp`
- **Error**: `SdkException<CreateMspSsoRoleError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteMspSsoRole
- **HTTP**: `DELETE /api/v1/msps/{msp_id}/ssoroles/{ssorole_id}` (ApiHost (api))
- **Notes**: Delete MSP SSO Roles
- **Signature**: `DeleteMspSsoRole(Guid mspId, Guid ssoroleId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteMspSsoRoleError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListMspSsoRoles
- **HTTP**: `GET /api/v1/msps/{msp_id}/ssoroles` (ApiHost (api))
- **Notes**: Get List of MSP SSO Roles
- **Signature**: `ListMspSsoRoles(Guid mspId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<SsoRoleMsp>`
- **Error**: `SdkException<ListMspSsoRolesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateMspSsoRole
- **HTTP**: `PUT /api/v1/msps/{msp_id}/ssoroles/{ssorole_id}` (ApiHost (api))
- **Notes**: Update SSO Role
- **Signature**: `UpdateMspSsoRole(Guid mspId, Guid ssoroleId, SsoRoleMsp? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SsoRoleMsp`
- **Error**: `SdkException<UpdateMspSsoRoleError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
