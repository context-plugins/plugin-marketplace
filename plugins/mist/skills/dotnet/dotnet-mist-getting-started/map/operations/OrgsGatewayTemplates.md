# OrgsGatewayTemplates — operations

Accessor: `client.OrgsGatewayTemplates` · Source: `Api/OrgsGatewayTemplates.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateOrgGatewayTemplate
- **HTTP**: `POST /api/v1/orgs/{org_id}/gatewaytemplates` (ApiHost (api))
- **Notes**: Create Org Gateway Template
- **Signature**: `CreateOrgGatewayTemplate(Guid orgId, GatewayTemplate? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `GatewayTemplate`
- **Error**: `SdkException<CreateOrgGatewayTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgGatewayTemplate
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/gatewaytemplates/{gatewaytemplate_id}` (ApiHost (api))
- **Notes**: Delete Organization Gateway Template
- **Signature**: `DeleteOrgGatewayTemplate(Guid orgId, Guid gatewaytemplateId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgGatewayTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgGatewayTemplate
- **HTTP**: `GET /api/v1/orgs/{org_id}/gatewaytemplates/{gatewaytemplate_id}` (ApiHost (api))
- **Notes**: Get Organization Gateway Template details
- **Signature**: `GetOrgGatewayTemplate(Guid orgId, Guid gatewaytemplateId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GatewayTemplate`
- **Error**: `SdkException<GetOrgGatewayTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgGatewayTemplates
- **HTTP**: `GET /api/v1/orgs/{org_id}/gatewaytemplates` (ApiHost (api))
- **Notes**: Get List of Org Gateway Templates
- **Signature**: `ListOrgGatewayTemplates(Guid orgId, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<GatewayTemplate>`
- **Error**: `SdkException<ListOrgGatewayTemplatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateOrgGatewayTemplate
- **HTTP**: `PUT /api/v1/orgs/{org_id}/gatewaytemplates/{gatewaytemplate_id}` (ApiHost (api))
- **Notes**: Update Organization Gateway Template
- **Signature**: `UpdateOrgGatewayTemplate(Guid orgId, Guid gatewaytemplateId, GatewayTemplate? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `GatewayTemplate`
- **Error**: `SdkException<UpdateOrgGatewayTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
