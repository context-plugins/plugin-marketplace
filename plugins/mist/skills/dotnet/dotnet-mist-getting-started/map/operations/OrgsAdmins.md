# OrgsAdmins — operations

Accessor: `client.OrgsAdmins` · Source: `Api/OrgsAdmins.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### InviteOrgAdmin
- **HTTP**: `POST /api/v1/orgs/{org_id}/invites` (ApiHost (api))
- **Notes**: If the request is successful, an email will also be sent to the user with a link to ```https://manage.mist.com/verify/invite?token=:token&amp;expire=1459632743&amp;org=OrgName```
- **Signature**: `InviteOrgAdmin(Guid orgId, Admin? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<InviteOrgAdminError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgAdmins
- **HTTP**: `GET /api/v1/orgs/{org_id}/admins` (ApiHost (api))
- **Notes**: Get List of people who can manage the Site/Org under the Org
- **Signature**: `ListOrgAdmins(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Admin>`
- **Error**: `SdkException<ListOrgAdminsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RevokeOrgAdmin
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/admins/{admin_id}` (ApiHost (api))
- **Notes**: This removes all privileges this admin has against the org
- **Signature**: `RevokeOrgAdmin(Guid orgId, Guid adminId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RevokeOrgAdminError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UninviteOrgAdmin
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/invites/{invite_id}` (ApiHost (api))
- **Notes**: Delete Admin Invite
- **Signature**: `UninviteOrgAdmin(Guid orgId, Guid inviteId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UninviteOrgAdminError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateOrgAdmin
- **HTTP**: `PUT /api/v1/orgs/{org_id}/admins/{admin_id}` (ApiHost (api))
- **Notes**: Invite Org Admin
- **Signature**: `UpdateOrgAdmin(Guid orgId, Guid adminId, Admin? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Admin`
- **Error**: `SdkException<UpdateOrgAdminError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateOrgAdminInvite
- **HTTP**: `PUT /api/v1/orgs/{org_id}/invites/{invite_id}` (ApiHost (api))
- **Notes**: Update Admin Invite
- **Signature**: `UpdateOrgAdminInvite(Guid orgId, Guid inviteId, Admin? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UpdateOrgAdminInviteError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
