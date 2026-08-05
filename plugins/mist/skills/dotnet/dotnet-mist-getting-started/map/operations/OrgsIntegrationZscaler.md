# OrgsIntegrationZscaler — operations

Accessor: `client.OrgsIntegrationZscaler` · Source: `Api/OrgsIntegrationZscaler.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteOrgZscalerIntegration
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/setting/zscaler/setup` (ApiHost (api))
- **Notes**: To delete Zscaler integration
- **Signature**: `DeleteOrgZscalerIntegration(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgZscalerIntegrationError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgZscalerIntegration
- **HTTP**: `GET /api/v1/orgs/{org_id}/setting/zscaler/setup` (ApiHost (api))
- **Notes**: To get Zscaler integration
- **Signature**: `GetOrgZscalerIntegration(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AccountZscalerInfo`
- **Error**: `SdkException<GetOrgZscalerIntegrationError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SetupOrgZscalerIntegration
- **HTTP**: `POST /api/v1/orgs/{org_id}/setting/zscaler/setup` (ApiHost (api))
- **Notes**: To setup Zscaler integration
- **Signature**: `SetupOrgZscalerIntegration(Guid orgId, AccountZscalerConfig? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<SetupOrgZscalerIntegrationError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
