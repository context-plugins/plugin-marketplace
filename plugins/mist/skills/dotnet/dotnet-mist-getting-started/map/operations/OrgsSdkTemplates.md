# OrgsSdkTemplates — operations

Accessor: `client.OrgsSdkTemplates` · Source: `Api/OrgsSdkTemplates.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateSdkTemplate
- **HTTP**: `POST /api/v1/orgs/{org_id}/sdktemplates` (ApiHost (api))
- **Notes**: Create SDK Template
- **Signature**: `CreateSdkTemplate(Guid orgId, Sdktemplate? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Sdktemplate`
- **Error**: `SdkException<CreateSdkTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteSdkTemplate
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/sdktemplates/{sdktemplate_id}` (ApiHost (api))
- **Notes**: Delete SDK Template
- **Signature**: `DeleteSdkTemplate(Guid orgId, Guid sdktemplateId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteSdkTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSdkTemplate
- **HTTP**: `GET /api/v1/orgs/{org_id}/sdktemplates/{sdktemplate_id}` (ApiHost (api))
- **Notes**: Get SDK Template Details
- **Signature**: `GetSdkTemplate(Guid orgId, Guid sdktemplateId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Sdktemplate`
- **Error**: `SdkException<GetSdkTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSdkTemplates
- **HTTP**: `GET /api/v1/orgs/{org_id}/sdktemplates` (ApiHost (api))
- **Notes**: Get List of Org SDK Templates
- **Signature**: `ListSdkTemplates(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Sdktemplate>`
- **Error**: `SdkException<ListSdkTemplatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateSdkTemplate
- **HTTP**: `PUT /api/v1/orgs/{org_id}/sdktemplates/{sdktemplate_id}` (ApiHost (api))
- **Notes**: Update SDK Template
- **Signature**: `UpdateSdkTemplate(Guid orgId, Guid sdktemplateId, Sdktemplate? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Sdktemplate`
- **Error**: `SdkException<UpdateSdkTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
