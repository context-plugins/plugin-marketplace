# OrgsScep — operations

Accessor: `client.OrgsScep` · Source: `Api/OrgsScep.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DisableOrgMistScep
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/setting/mist_scep` (ApiHost (api))
- **Notes**: Disable Mist SCEP Org setting
- **Signature**: `DisableOrgMistScep(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `OrgSettingScepResponse`
- **Error**: `SdkException<DisableOrgMistScepError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgMistScep
- **HTTP**: `GET /api/v1/orgs/{org_id}/setting/mist_scep` (ApiHost (api))
- **Notes**: Get Mist SCEP Org setting
- **Signature**: `GetOrgMistScep(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `OrgSettingScepResponse`
- **Error**: `SdkException<GetOrgMistScepError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgIssuedClientCertificates
- **HTTP**: `GET /api/v1/orgs/{org_id}/setting/mist_scep/client_certs` (ApiHost (api))
- **Notes**: Get Issued Client Certificates
- **Signature**: `ListOrgIssuedClientCertificates(Guid orgId, string? ssoNameId, string? serialNumber, string? deviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `ssoNameId` — nullable, no default → **must pass explicitly**
  - `serialNumber` — nullable, no default → **must pass explicitly**
  - `deviceId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `sso_name_id` ← `ssoNameId`, `serial_number` ← `serialNumber`, `device_id` ← `deviceId`
- **Returns**: `IssuedClientCertificatesResults`
- **Error**: `SdkException<ListOrgIssuedClientCertificatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RevokeOrgIssuedClientCertificates
- **HTTP**: `POST /api/v1/orgs/{org_id}/setting/mist_scep/client_certs/revoke` (ApiHost (api))
- **Notes**: Revoke Issued Client Certificates
- **Signature**: `RevokeOrgIssuedClientCertificates(Guid orgId, ClientCertSerialNumbers? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RevokeOrgIssuedClientCertificatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateOrgMistScep
- **HTTP**: `PUT /api/v1/orgs/{org_id}/setting/mist_scep` (ApiHost (api))
- **Notes**: Update Mist SCEP Org setting
- **Signature**: `UpdateOrgMistScep(Guid orgId, OrgSettingScep? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `OrgSettingScepResponse`
- **Error**: `SdkException<UpdateOrgMistScepError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
