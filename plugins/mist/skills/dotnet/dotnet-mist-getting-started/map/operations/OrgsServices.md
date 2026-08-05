# OrgsServices — operations

Accessor: `client.OrgsServices` · Source: `Api/OrgsServices.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateOrgService
- **HTTP**: `POST /api/v1/orgs/{org_id}/services` (ApiHost (api))
- **Notes**: Create getOrgServices Service
- **Signature**: `CreateOrgService(Guid orgId, Service? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Service`
- **Error**: `SdkException<CreateOrgServiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgService
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/services/{service_id}` (ApiHost (api))
- **Notes**: Delete Org Service
- **Signature**: `DeleteOrgService(Guid orgId, Guid serviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgServiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgService
- **HTTP**: `GET /api/v1/orgs/{org_id}/services/{service_id}` (ApiHost (api))
- **Notes**: Get Org Service
- **Signature**: `GetOrgService(Guid orgId, Guid serviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Service`
- **Error**: `SdkException<GetOrgServiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgServices
- **HTTP**: `GET /api/v1/orgs/{org_id}/services` (ApiHost (api))
- **Notes**: Get List of Org Services
- **Signature**: `ListOrgServices(Guid orgId, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<Service>`
- **Error**: `SdkException<ListOrgServicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateOrgService
- **HTTP**: `PUT /api/v1/orgs/{org_id}/services/{service_id}` (ApiHost (api))
- **Notes**: Update Org Service
- **Signature**: `UpdateOrgService(Guid orgId, Guid serviceId, Service? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Service`
- **Error**: `SdkException<UpdateOrgServiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
