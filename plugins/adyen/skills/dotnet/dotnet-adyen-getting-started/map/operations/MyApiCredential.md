# MyApiCredential — operations

Accessor: `client.MyApiCredential` · Source: `Api/MyApiCredential.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteMeAllowedOriginsOriginId
- **HTTP**: `DELETE /me/allowedOrigins/{originId}` (Default (balanceplatform-api-test))
- **Notes**: Removes the allowed origin specified in the path. The API key from the request is used to identify the API credential . You can make this request with any of the Management API roles.
- **Signature**: `DeleteMeAllowedOriginsOriginId(string originId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteMeAllowedOriginsOriginIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetMe
- **HTTP**: `GET /me` (Default (balanceplatform-api-test))
- **Notes**: Returns your API credential details based on the API Key you used in the request. You can make this request with any of the Management API roles.
- **Signature**: `GetMe(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `MeApiCredential`
- **Error**: `SdkException<GetMeError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetMeAllowedOrigins
- **HTTP**: `GET /me/allowedOrigins` (Default (balanceplatform-api-test))
- **Notes**: Returns the list of allowed origins of your API credential based on the API key you used in the request. You can make this request with any of the Management API roles.
- **Signature**: `GetMeAllowedOrigins(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AllowedOriginsResponse`
- **Error**: `SdkException<GetMeAllowedOriginsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetMeAllowedOriginsOriginId
- **HTTP**: `GET /me/allowedOrigins/{originId}` (Default (balanceplatform-api-test))
- **Notes**: Returns the details of the allowed origin specified in the path. The API key from the request is used to identify the API credential . You can make this request with any of the Management API roles.
- **Signature**: `GetMeAllowedOriginsOriginId(string originId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AllowedOrigin`
- **Error**: `SdkException<GetMeAllowedOriginsOriginIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostMeAllowedOrigins
- **HTTP**: `POST /me/allowedOrigins` (Default (balanceplatform-api-test))
- **Notes**: Adds an allowed origin to the list of allowed origins of your API credential. The API key from the request is used to identify the API credential . You can make this request with any of the Management API roles.
- **Signature**: `PostMeAllowedOrigins(CreateAllowedOriginRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `AllowedOrigin`
- **Error**: `SdkException<PostMeAllowedOriginsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostMeGenerateClientKey
- **HTTP**: `POST /me/generateClientKey` (Default (balanceplatform-api-test))
- **Notes**: Generates a new client key used to authenticate requests from your payment environment. You can use the new client key a few minutes after generating it. The old client key stops working 24 hours after generating a new one. To make this request, your API credential must have the following role : * Management API—API credentials read and write
- **Signature**: `PostMeGenerateClientKey(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GenerateClientKeyResponse`
- **Error**: `SdkException<PostMeGenerateClientKeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
