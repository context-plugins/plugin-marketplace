# SelfApiToken — operations

Accessor: `client.SelfApiToken` · Source: `Api/SelfApiToken.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateApiToken
- **HTTP**: `POST /api/v1/self/apitokens` (ApiHost (api))
- **Notes**: Create API Token Note that the key is only available during creation time.
- **Signature**: `CreateApiToken(UserApitoken? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<UserApitoken>`
- **Error**: `SdkException<CreateApiTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteApiToken
- **HTTP**: `DELETE /api/v1/self/apitokens/{apitoken_id}` (ApiHost (api))
- **Notes**: Delete an API Token
- **Signature**: `DeleteApiToken(Guid apitokenId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteApiTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetApiToken
- **HTTP**: `GET /api/v1/self/apitokens/{apitoken_id}` (ApiHost (api))
- **Notes**: Get User API Token
- **Signature**: `GetApiToken(Guid apitokenId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UserApitoken`
- **Error**: `SdkException<GetApiTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListApiTokens
- **HTTP**: `GET /api/v1/self/apitokens` (ApiHost (api))
- **Notes**: Get List of Current User API Tokens
- **Signature**: `ListApiTokens(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<UserApitoken>`
- **Error**: `SdkException<ListApiTokensError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateApiToken
- **HTTP**: `PUT /api/v1/self/apitokens/{apitoken_id}` (ApiHost (api))
- **Notes**: Update User API Token
- **Signature**: `UpdateApiToken(Guid apitokenId, UserApitoken? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `UserApitoken`
- **Error**: `SdkException<UpdateApiTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
