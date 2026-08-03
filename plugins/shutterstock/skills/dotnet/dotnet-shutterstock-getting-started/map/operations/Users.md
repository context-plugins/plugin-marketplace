# Users — operations

Accessor: `client.Users` · Source: `Api/Users.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetAccessToken
- **HTTP**: `GET /v2/user/access_token` (Default (api))
- **Signature**: `GetAccessToken(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AccessTokenDetails`
- **Error**: `SdkException<GetAccessTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetUser
- **HTTP**: `GET /v2/user` (Default (api))
- **Signature**: `GetUser(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UserDetails`
- **Error**: `SdkException<GetUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetUserSubscriptionList
- **HTTP**: `GET /v2/user/subscriptions` (Default (api))
- **Signature**: `GetUserSubscriptionList(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SubscriptionDataList`
- **Error**: `SdkException<GetUserSubscriptionListError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
