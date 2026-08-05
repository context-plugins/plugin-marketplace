# OrgsIntegrationCradlepoint — operations

Accessor: `client.OrgsIntegrationCradlepoint` · Source: `Api/OrgsIntegrationCradlepoint.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteOrgCradlepointConnection
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/setting/cradlepoint/setup` (ApiHost (api))
- **Notes**: This deletes the Cradlepoint integration in Mist
- **Signature**: `DeleteOrgCradlepointConnection(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgCradlepointConnectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SetupOrgCradlepointConnectionToMist
- **HTTP**: `POST /api/v1/orgs/{org_id}/setting/cradlepoint/setup` (ApiHost (api))
- **Notes**: This sets up cradlepoint webhooks to send events to Mist
- **Signature**: `SetupOrgCradlepointConnectionToMist(Guid orgId, AccountCradlepointConfig? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<SetupOrgCradlepointConnectionToMistError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SyncOrgCradlepointRouters
- **HTTP**: `POST /api/v1/orgs/{org_id}/setting/cradlepoint/sync` (ApiHost (api))
- **Notes**: This syncs cradlepoint devices with Mist. We’ll also attempt to use the LLDP data from cradlepoint to identify the linkage against Mist Site / Device
- **Signature**: `SyncOrgCradlepointRouters(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<SyncOrgCradlepointRoutersError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### TestOrgCradlepointConnection
- **HTTP**: `GET /api/v1/orgs/{org_id}/setting/cradlepoint/setup` (ApiHost (api))
- **Notes**: This tests the Cradlepoint integration in Mist
- **Signature**: `TestOrgCradlepointConnection(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TestCradlepoint`
- **Error**: `SdkException<TestOrgCradlepointConnectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateOrgCradlepointConnectionToMist
- **HTTP**: `PUT /api/v1/orgs/{org_id}/setting/cradlepoint/setup` (ApiHost (api))
- **Notes**: This updates the Cradlepoint integration settings in Mist
- **Signature**: `UpdateOrgCradlepointConnectionToMist(Guid orgId, AccountCradlepointConfig? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UpdateOrgCradlepointConnectionToMistError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
