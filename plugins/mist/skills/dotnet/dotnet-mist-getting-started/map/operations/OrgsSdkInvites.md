# OrgsSdkInvites — operations

Accessor: `client.OrgsSdkInvites` · Source: `Api/OrgsSdkInvites.cs` · 9 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ActivateSdkInvite
- **HTTP**: `POST /api/v1/mobile/verify/{secret}` (ApiHost (api))
- **Notes**: Verify secret
- **Signature**: `ActivateSdkInvite(string secret, DeviceIdString? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ResponseMobileVerifySecret`
- **Error**: `SdkException<ActivateSdkInviteError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateSdkInvite
- **HTTP**: `POST /api/v1/orgs/{org_id}/sdkinvites` (ApiHost (api))
- **Notes**: Create SDK Invite
- **Signature**: `CreateSdkInvite(Guid orgId, Sdkinvite? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Sdkinvite`
- **Error**: `SdkException<CreateSdkInviteError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSdkInvite
- **HTTP**: `GET /api/v1/orgs/{org_id}/sdkinvites/{sdkinvite_id}` (ApiHost (api))
- **Notes**: Get SDK Invite Details
- **Signature**: `GetSdkInvite(Guid orgId, Guid sdkinviteId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Sdkinvite`
- **Error**: `SdkException<GetSdkInviteError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSdkInviteQrCode
- **HTTP**: `GET /api/v1/orgs/{org_id}/sdkinvites/{sdkinvite_id}/qrcode` (ApiHost (api))
- **Notes**: Revoke SDK Invite
- **Signature**: `GetSdkInviteQrCode(Guid orgId, Guid sdkinviteId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BinaryContent`
- **Error**: `SdkException<GetSdkInviteQrCodeError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSdkInvites
- **HTTP**: `GET /api/v1/orgs/{org_id}/sdkinvites` (ApiHost (api))
- **Notes**: Get List of Org SDK Invites
- **Signature**: `ListSdkInvites(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Sdkinvite>`
- **Error**: `SdkException<ListSdkInvitesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RevokeSdkInvite
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/sdkinvites/{sdkinvite_id}` (ApiHost (api))
- **Notes**: Revoke SDK Invite
- **Signature**: `RevokeSdkInvite(Guid orgId, Guid sdkinviteId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RevokeSdkInviteError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SendSdkInviteEmail
- **HTTP**: `POST /api/v1/orgs/{org_id}/sdkinvites/{sdkinvite_id}/email` (ApiHost (api))
- **Notes**: Send SDK Invite by Email
- **Signature**: `SendSdkInviteEmail(Guid orgId, Guid sdkinviteId, EmailString? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<SendSdkInviteEmailError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SendSdkInviteSms
- **HTTP**: `POST /api/v1/orgs/{org_id}/sdkinvites/{sdkinvite_id}/sms` (ApiHost (api))
- **Notes**: Send SDK Invite by SMS
- **Signature**: `SendSdkInviteSms(Guid orgId, Guid sdkinviteId, SdkInviteSms? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<SendSdkInviteSmsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateSdkInvite
- **HTTP**: `PUT /api/v1/orgs/{org_id}/sdkinvites/{sdkinvite_id}` (ApiHost (api))
- **Notes**: Update SDK Invite
- **Signature**: `UpdateSdkInvite(Guid orgId, Guid sdkinviteId, Sdkinvite? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Sdkinvite`
- **Error**: `SdkException<UpdateSdkInviteError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
