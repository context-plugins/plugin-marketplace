# OrgsNetworkTemplates — operations

Accessor: `client.OrgsNetworkTemplates` · Source: `Api/OrgsNetworkTemplates.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateOrgNetworkTemplate
- **HTTP**: `POST /api/v1/orgs/{org_id}/networktemplates` (ApiHost (api))
- **Notes**: Update Org Network Templates
- **Signature**: `CreateOrgNetworkTemplate(Guid orgId, NetworkTemplate? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `NetworkTemplate`
- **Error**: `SdkException<CreateOrgNetworkTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgNetworkTemplate
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/networktemplates/{networktemplate_id}` (ApiHost (api))
- **Notes**: Delete Org Network Template
- **Signature**: `DeleteOrgNetworkTemplate(Guid orgId, Guid networktemplateId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgNetworkTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgNetworkTemplate
- **HTTP**: `GET /api/v1/orgs/{org_id}/networktemplates/{networktemplate_id}` (ApiHost (api))
- **Notes**: Get Org Network Templates Details
- **Signature**: `GetOrgNetworkTemplate(Guid orgId, Guid networktemplateId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `NetworkTemplate`
- **Error**: `SdkException<GetOrgNetworkTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgNetworkTemplates
- **HTTP**: `GET /api/v1/orgs/{org_id}/networktemplates` (ApiHost (api))
- **Notes**: Get List of Org Network Templates
- **Signature**: `ListOrgNetworkTemplates(Guid orgId, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<NetworkTemplate>`
- **Error**: `SdkException<ListOrgNetworkTemplatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateOrgNetworkTemplate
- **HTTP**: `PUT /api/v1/orgs/{org_id}/networktemplates/{networktemplate_id}` (ApiHost (api))
- **Notes**: Update Org Network Template
- **Signature**: `UpdateOrgNetworkTemplate(Guid orgId, Guid networktemplateId, NetworkTemplate? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `NetworkTemplate`
- **Error**: `SdkException<UpdateOrgNetworkTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
