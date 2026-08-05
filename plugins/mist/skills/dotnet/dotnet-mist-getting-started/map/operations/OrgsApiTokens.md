# OrgsApiTokens — operations

Accessor: `client.OrgsApiTokens` · Source: `Api/OrgsApiTokens.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateOrgApiToken
- **HTTP**: `POST /api/v1/orgs/{org_id}/apitokens` (ApiHost (api))
- **Notes**: Create Org API Token Note that the token key is only available during creation time.
- **Signature**: `CreateOrgApiToken(Guid orgId, OrgApitoken? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `OrgApitoken`
- **Error**: `SdkException<CreateOrgApiTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgApiToken
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/apitokens/{apitoken_id}` (ApiHost (api))
- **Notes**: Delete Org API Token
- **Signature**: `DeleteOrgApiToken(Guid orgId, Guid apitokenId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgApiTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgApiToken
- **HTTP**: `GET /api/v1/orgs/{org_id}/apitokens/{apitoken_id}` (ApiHost (api))
- **Notes**: Get Org API Token
- **Signature**: `GetOrgApiToken(Guid orgId, Guid apitokenId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `OrgApitoken`
- **Error**: `SdkException<GetOrgApiTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgApiTokens
- **HTTP**: `GET /api/v1/orgs/{org_id}/apitokens` (ApiHost (api))
- **Notes**: Get List of Org API Tokens
- **Signature**: `ListOrgApiTokens(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<OrgApitoken>`
- **Error**: `SdkException<ListOrgApiTokensError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateOrgApiToken
- **HTTP**: `PUT /api/v1/orgs/{org_id}/apitokens/{apitoken_id}` (ApiHost (api))
- **Notes**: Update Org API Token
- **Signature**: `UpdateOrgApiToken(Guid orgId, Guid apitokenId, OrgApitoken? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UpdateOrgApiTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
