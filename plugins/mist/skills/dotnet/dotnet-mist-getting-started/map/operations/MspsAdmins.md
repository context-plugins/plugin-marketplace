# MspsAdmins — operations

Accessor: `client.MspsAdmins` · Source: `Api/MspsAdmins.cs` · 7 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetMspAdmin
- **HTTP**: `GET /api/v1/msps/{msp_id}/admins/{admin_id}` (ApiHost (api))
- **Notes**: Get MSP Admins
- **Signature**: `GetMspAdmin(Guid mspId, Guid adminId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Admin`
- **Error**: `SdkException<GetMspAdminError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### InviteMspAdmin
- **HTTP**: `POST /api/v1/msps/{msp_id}/invites` (ApiHost (api))
- **Notes**: Invite MSP Admin Note : An email will also be sent to the user with a link to https://manage.mist.com/verify/invite?token=:token
- **Signature**: `InviteMspAdmin(Guid mspId, Admin? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Admin`
- **Error**: `SdkException<InviteMspAdminError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListMspAdmins
- **HTTP**: `GET /api/v1/msps/{msp_id}/admins` (ApiHost (api))
- **Notes**: Get List of MSP Admins
- **Signature**: `ListMspAdmins(Guid mspId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Admin>`
- **Error**: `SdkException<ListMspAdminsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RevokeMspAdmin
- **HTTP**: `DELETE /api/v1/msps/{msp_id}/admins/{admin_id}` (ApiHost (api))
- **Notes**: This removes all privileges this admin has against the MSP. This goes deep all the way to the sites
- **Signature**: `RevokeMspAdmin(Guid mspId, Guid adminId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RevokeMspAdminError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UninviteMspAdmin
- **HTTP**: `DELETE /api/v1/msps/{msp_id}/invites/{invite_id}` (ApiHost (api))
- **Notes**: Delete admin invite
- **Signature**: `UninviteMspAdmin(Guid mspId, Guid inviteId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UninviteMspAdminError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateMspAdmin
- **HTTP**: `PUT /api/v1/msps/{msp_id}/admins/{admin_id}` (ApiHost (api))
- **Notes**: Update MSP Admin
- **Signature**: `UpdateMspAdmin(Guid mspId, Guid adminId, Admin? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Admin`
- **Error**: `SdkException<UpdateMspAdminError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateMspAdminInvite
- **HTTP**: `PUT /api/v1/msps/{msp_id}/invites/{invite_id}` (ApiHost (api))
- **Notes**: Update MSP admin invite
- **Signature**: `UpdateMspAdminInvite(Guid mspId, Guid inviteId, Admin? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Admin`
- **Error**: `SdkException<UpdateMspAdminInviteError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
