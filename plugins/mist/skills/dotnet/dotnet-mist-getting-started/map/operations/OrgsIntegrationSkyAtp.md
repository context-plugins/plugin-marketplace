# OrgsIntegrationSkyAtp — operations

Accessor: `client.OrgsIntegrationSkyAtp` · Source: `Api/OrgsIntegrationSkyAtp.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteOrgSkyAtpIntegration
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/setting/skyatp/setup` (ApiHost (api))
- **Notes**: Delete SkyATP Integration
- **Signature**: `DeleteOrgSkyAtpIntegration(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgSkyAtpIntegrationError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgSkyAtpIntegration
- **HTTP**: `GET /api/v1/orgs/{org_id}/setting/skyatp/setup` (ApiHost (api))
- **Notes**: Get Org SkyATP Integration
- **Signature**: `GetOrgSkyAtpIntegration(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AccountSkyatpData`
- **Error**: `SdkException<GetOrgSkyAtpIntegrationError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SetupOrgAtpIntegration
- **HTTP**: `POST /api/v1/orgs/{org_id}/setting/skyatp/setup` (ApiHost (api))
- **Notes**: Login to the Sky ATP realm through the Mist UI by providing the realm, username and password. Sky ATP API is invoked which creates the realm using above details. Sky ATP by default will provide functionality for Security-Intelligence and Advanced Anti Malware. Security Intelligence will provide configuration for CC, DNS Feeds, Infected Host, Blocklists and Allowlists.
- **Signature**: `SetupOrgAtpIntegration(Guid orgId, AccountSkyatpConfig? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `AccountSkyatpData`
- **Error**: `SdkException<SetupOrgAtpIntegrationError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UdpateOrgAtpAllowedList
- **HTTP**: `PUT /api/v1/orgs/{org_id}/setting/skyatp/secintel_allowlist` (ApiHost (api))
- **Notes**: Update Sky ATP Allowed List
- **Signature**: `UdpateOrgAtpAllowedList(Guid orgId, SkyatpList? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SkyatpList`
- **Error**: `SdkException<UdpateOrgAtpAllowedListError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UdpateOrgAtpBlockedList
- **HTTP**: `PUT /api/v1/orgs/{org_id}/setting/skyatp/secintel_blocklist` (ApiHost (api))
- **Notes**: Update Sky ATP Blocked List
- **Signature**: `UdpateOrgAtpBlockedList(Guid orgId, SkyatpList? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SkyatpList`
- **Error**: `SdkException<UdpateOrgAtpBlockedListError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UdpateOrgAtpIntegration
- **HTTP**: `PUT /api/v1/orgs/{org_id}/setting/skyatp/setup` (ApiHost (api))
- **Notes**: Update Sky ATP config
- **Signature**: `UdpateOrgAtpIntegration(Guid orgId, AccountSkyatpData? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `AccountSkyatpInfo`
- **Error**: `SdkException<UdpateOrgAtpIntegrationError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
