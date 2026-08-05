# OrgsRfTemplates — operations

Accessor: `client.OrgsRfTemplates` · Source: `Api/OrgsRfTemplates.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateOrgRfTemplate
- **HTTP**: `POST /api/v1/orgs/{org_id}/rftemplates` (ApiHost (api))
- **Notes**: Create Org RF Template
- **Signature**: `CreateOrgRfTemplate(Guid orgId, RfTemplate? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `RfTemplate`
- **Error**: `SdkException<CreateOrgRfTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgRfTemplate
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/rftemplates/{rftemplate_id}` (ApiHost (api))
- **Notes**: Delete Org RF Template
- **Signature**: `DeleteOrgRfTemplate(Guid orgId, Guid rftemplateId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgRfTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgRfTemplate
- **HTTP**: `GET /api/v1/orgs/{org_id}/rftemplates/{rftemplate_id}` (ApiHost (api))
- **Notes**: Get Org RF Template Details
- **Signature**: `GetOrgRfTemplate(Guid orgId, Guid rftemplateId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RfTemplate`
- **Error**: `SdkException<GetOrgRfTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgRfTemplates
- **HTTP**: `GET /api/v1/orgs/{org_id}/rftemplates` (ApiHost (api))
- **Notes**: Get List of Org RF Template
- **Signature**: `ListOrgRfTemplates(Guid orgId, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<RfTemplate>`
- **Error**: `SdkException<ListOrgRfTemplatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateOrgRfTemplate
- **HTTP**: `PUT /api/v1/orgs/{org_id}/rftemplates/{rftemplate_id}` (ApiHost (api))
- **Notes**: Update Org RF Template
- **Signature**: `UpdateOrgRfTemplate(Guid orgId, Guid rftemplateId, RfTemplate? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `RfTemplate`
- **Error**: `SdkException<UpdateOrgRfTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
