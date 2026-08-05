# OrgsMarvisInvites — operations

Accessor: `client.OrgsMarvisInvites` · Source: `Api/OrgsMarvisInvites.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateOrgMarvisClientInvite
- **HTTP**: `POST /api/v1/orgs/{org_id}/marvisinvites` (ApiHost (api))
- **Notes**: Create Org Marvis Client Invite
- **Signature**: `CreateOrgMarvisClientInvite(Guid orgId, MarvisClient? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `MarvisClient`
- **Error**: `SdkException<CreateOrgMarvisClientInviteError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgMarvisClientInvite
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/marvisinvites/{marvisinvite_id}` (ApiHost (api))
- **Notes**: Delete Org Marvis Client Invite
- **Signature**: `DeleteOrgMarvisClientInvite(Guid orgId, Guid marvisinviteId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgMarvisClientInviteError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgMarvisClientInvite
- **HTTP**: `GET /api/v1/orgs/{org_id}/marvisinvites/{marvisinvite_id}` (ApiHost (api))
- **Notes**: Get Org Marvis Client Invite
- **Signature**: `GetOrgMarvisClientInvite(Guid orgId, Guid marvisinviteId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `MarvisClient`
- **Error**: `SdkException<GetOrgMarvisClientInviteError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgMarvisClientInvites
- **HTTP**: `GET /api/v1/orgs/{org_id}/marvisinvites` (ApiHost (api))
- **Notes**: List Org Marvis Client Invites
- **Signature**: `ListOrgMarvisClientInvites(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<MarvisClient>`
- **Error**: `SdkException<ListOrgMarvisClientInvitesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateOrgMarvisClientInvite
- **HTTP**: `PUT /api/v1/orgs/{org_id}/marvisinvites/{marvisinvite_id}` (ApiHost (api))
- **Notes**: Update Org Marvis Client Invite
- **Signature**: `UpdateOrgMarvisClientInvite(Guid orgId, Guid marvisinviteId, MarvisClient? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `MarvisClient`
- **Error**: `SdkException<UpdateOrgMarvisClientInviteError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
