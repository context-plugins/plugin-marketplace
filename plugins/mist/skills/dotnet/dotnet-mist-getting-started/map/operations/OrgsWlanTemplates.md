# OrgsWlanTemplates — operations

Accessor: `client.OrgsWlanTemplates` · Source: `Api/OrgsWlanTemplates.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CloneOrgTemplate
- **HTTP**: `POST /api/v1/orgs/{org_id}/templates/{template_id}/clone` (ApiHost (api))
- **Notes**: Clone Org Template
- **Signature**: `CloneOrgTemplate(Guid orgId, Guid templateId, NameString? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Template`
- **Error**: `SdkException<CloneOrgTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateOrgTemplate
- **HTTP**: `POST /api/v1/orgs/{org_id}/templates` (ApiHost (api))
- **Notes**: Create Org Template
- **Signature**: `CreateOrgTemplate(Guid orgId, Template? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Template`
- **Error**: `SdkException<CreateOrgTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgTemplate
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/templates/{template_id}` (ApiHost (api))
- **Notes**: Delete Org Template
- **Signature**: `DeleteOrgTemplate(Guid orgId, Guid templateId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgTemplate
- **HTTP**: `GET /api/v1/orgs/{org_id}/templates/{template_id}` (ApiHost (api))
- **Notes**: Get Org Template Details
- **Signature**: `GetOrgTemplate(Guid orgId, Guid templateId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Template`
- **Error**: `SdkException<GetOrgTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgTemplates
- **HTTP**: `GET /api/v1/orgs/{org_id}/templates` (ApiHost (api))
- **Notes**: Get List of Org WLAN Templates
- **Signature**: `ListOrgTemplates(Guid orgId, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<Template>`
- **Error**: `SdkException<ListOrgTemplatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateOrgTemplate
- **HTTP**: `PUT /api/v1/orgs/{org_id}/templates/{template_id}` (ApiHost (api))
- **Notes**: Update Org Template
- **Signature**: `UpdateOrgTemplate(Guid orgId, Guid templateId, Template? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Template`
- **Error**: `SdkException<UpdateOrgTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
