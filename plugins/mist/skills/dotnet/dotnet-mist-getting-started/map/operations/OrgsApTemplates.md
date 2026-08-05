# OrgsApTemplates — operations

Accessor: `client.OrgsApTemplates` · Source: `Api/OrgsApTemplates.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateOrgAptemplate
- **HTTP**: `POST /api/v1/orgs/{org_id}/aptemplates` (ApiHost (api))
- **Notes**: Create Org AP Template
- **Signature**: `CreateOrgAptemplate(Guid orgId, ApTemplate? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ApTemplate`
- **Error**: `SdkException<CreateOrgAptemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgAptemplate
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/aptemplates/{aptemplate_id}` (ApiHost (api))
- **Notes**: Delete existing AP Template
- **Signature**: `DeleteOrgAptemplate(Guid orgId, Guid aptemplateId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgAptemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgAptemplate
- **HTTP**: `GET /api/v1/orgs/{org_id}/aptemplates/{aptemplate_id}` (ApiHost (api))
- **Notes**: Get AP Template
- **Signature**: `GetOrgAptemplate(Guid orgId, Guid aptemplateId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ApTemplate`
- **Error**: `SdkException<GetOrgAptemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgAptemplates
- **HTTP**: `GET /api/v1/orgs/{org_id}/aptemplates` (ApiHost (api))
- **Notes**: Get List of Org AP Templates
- **Signature**: `ListOrgAptemplates(Guid orgId, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<ApTemplate>`
- **Error**: `SdkException<ListOrgAptemplatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateOrgAptemplate
- **HTTP**: `PUT /api/v1/orgs/{org_id}/aptemplates/{aptemplate_id}` (ApiHost (api))
- **Notes**: Update AP Template
- **Signature**: `UpdateOrgAptemplate(Guid orgId, Guid aptemplateId, ApTemplate? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ApTemplate`
- **Error**: `SdkException<UpdateOrgAptemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
