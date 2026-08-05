# OrgsNacTags — operations

Accessor: `client.OrgsNacTags` · Source: `Api/OrgsNacTags.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateOrgNacTag
- **HTTP**: `POST /api/v1/orgs/{org_id}/nactags` (ApiHost (api))
- **Notes**: Create Org NAC Tag
- **Signature**: `CreateOrgNacTag(Guid orgId, NacTag? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `NacTag`
- **Error**: `SdkException<CreateOrgNacTagError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgNacTag
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/nactags/{nactag_id}` (ApiHost (api))
- **Notes**: Delete Org NAC Tag
- **Signature**: `DeleteOrgNacTag(Guid orgId, Guid nactagId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgNacTagError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgNacTag
- **HTTP**: `GET /api/v1/orgs/{org_id}/nactags/{nactag_id}` (ApiHost (api))
- **Notes**: Get Org NAC Tag
- **Signature**: `GetOrgNacTag(Guid orgId, Guid nactagId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `NacTag`
- **Error**: `SdkException<GetOrgNacTagError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgNacTags
- **HTTP**: `GET /api/v1/orgs/{org_id}/nactags` (ApiHost (api))
- **Notes**: Get List of Org NAC Tags
- **Signature**: `ListOrgNacTags(Guid orgId, NacTagType? type, string? name, NacTagMatch? match, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `type` — nullable, no default → **must pass explicitly**
  - `name` — nullable, no default → **must pass explicitly**
  - `match` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `type` ← `type`, `name` ← `name`, `match` ← `match`, `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<NacTag>`
- **Error**: `SdkException<ListOrgNacTagsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateOrgNacTag
- **HTTP**: `PUT /api/v1/orgs/{org_id}/nactags/{nactag_id}` (ApiHost (api))
- **Notes**: Update Org NAC Tag
- **Signature**: `UpdateOrgNacTag(Guid orgId, Guid nactagId, NacTag? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `NacTag`
- **Error**: `SdkException<UpdateOrgNacTagError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
