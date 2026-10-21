<!-- Generated file — do not edit; regenerated with the SDK. -->

# TokenOperations — operations

Accessor: `client.tokenOperations` · Source: `src/resources/token-operations.ts` · 5 operations · Request and error types: namespace `TokenOperations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `authlete-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### authTokenCreateApi

- **Signature**: `authTokenCreateApi(request: TokenOperations.AuthTokenCreateApiRequest, options?: RequestOptions): ApiPromise<TokenCreateResponse, TokenOperations.AuthTokenCreateApiError>`
- **Wire**: `POST /api/{serviceId}/auth/token/create`
- **Auth**: `bearer`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TokenCreateResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `TokenOperations.AuthTokenCreateApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TokenOperations.AuthTokenCreateApiRequest` (24):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `grantType` | `form` | `GrantType` | yes |
| `clientId` | `form` | `number` | no |
| `subject` | `form` | `string` | no |
| `scopes` | `form` | `string[]` | no |
| `accessTokenDuration` | `form` | `number` | no |
| `refreshTokenDuration` | `form` | `number` | no |
| `properties` | `form` | `Property[]` | no |
| `clientIdAliasUsed` | `form` | `boolean` | no |
| `accessToken` | `form` | `string` | no |
| `refreshToken` | `form` | `string` | no |
| `accessTokenPersistent` | `form` | `boolean` | no |
| `certificateThumbprint` | `form` | `string` | no |
| `dpopKeyThumbprint` | `form` | `string` | no |
| `authorizationDetails` | `form` | `AuthzDetails` | no |
| `resources` | `form` | `string[]` | no |
| `forExternalAttachment` | `form` | `boolean` | no |
| `jwtAtClaims` | `form` | `string` | no |
| `acr` | `form` | `string` | no |
| `authTime` | `form` | `number` | no |
| `clientEntityIdUsed` | `form` | `boolean` | no |
| `clientIdentifier` | `form` | `string` | no |
| `sessionId` | `form` | `string` | no |
| `metadataDocumentUsed` | `form` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GrantType` | `grantTypeSchema` | `src/models/grant-type.ts` |
| `Property` | `propertySchema` | `src/models/property.ts` |
| `AuthzDetails` | `authzDetailsSchema` | `src/models/authz-details.ts` |
| `TokenCreateResponse` | `tokenCreateResponseSchema` | `src/models/token-create-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### authTokenDeleteApi

- **Signature**: `authTokenDeleteApi(request: TokenOperations.AuthTokenDeleteApiRequest, options?: RequestOptions): ApiPromise<undefined, TokenOperations.AuthTokenDeleteApiError>`
- **Wire**: `DELETE /api/{serviceId}/auth/token/delete/{accessTokenIdentifier}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `TokenOperations.AuthTokenDeleteApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TokenOperations.AuthTokenDeleteApiRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `accessTokenIdentifier` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Result` | `resultSchema` | `src/models/result.ts` |

### authTokenGetListApi

- **Signature**: `authTokenGetListApi(request: TokenOperations.AuthTokenGetListApiRequest, options?: RequestOptions): ApiPromise<TokenGetListResponse, TokenOperations.AuthTokenGetListApiError>`
- **Wire**: `GET /api/{serviceId}/auth/token/get/list`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TokenGetListResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `TokenOperations.AuthTokenGetListApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TokenOperations.AuthTokenGetListApiRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `clientIdentifier` | `query` | `string` | no |
| `subject` | `query` | `string` | no |
| `start` | `query` | `number` | no |
| `end` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TokenGetListResponse` | `tokenGetListResponseSchema` | `src/models/token-get-list-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### authTokenRevokeApi

- **Signature**: `authTokenRevokeApi(request: TokenOperations.AuthTokenRevokeApiRequest, options?: RequestOptions): ApiPromise<TokenRevokeResponse, TokenOperations.AuthTokenRevokeApiError>`
- **Wire**: `POST /api/{serviceId}/auth/token/revoke`
- **Auth**: `bearer`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TokenRevokeResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `TokenOperations.AuthTokenRevokeApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [404] `Result` · `"result5"` [429] `Result` · `"result6"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TokenOperations.AuthTokenRevokeApiRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `accessTokenIdentifier` | `form` | `string` | no |
| `refreshTokenIdentifier` | `form` | `string` | no |
| `clientIdentifier` | `form` | `string` | no |
| `subject` | `form` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TokenRevokeResponse` | `tokenRevokeResponseSchema` | `src/models/token-revoke-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### authTokenUpdateApi

- **Signature**: `authTokenUpdateApi(request: TokenOperations.AuthTokenUpdateApiRequest, options?: RequestOptions): ApiPromise<TokenUpdateResponse, TokenOperations.AuthTokenUpdateApiError>`
- **Wire**: `POST /api/{serviceId}/auth/token/update`
- **Auth**: `bearer`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TokenUpdateResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `TokenOperations.AuthTokenUpdateApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TokenOperations.AuthTokenUpdateApiRequest` (16):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `accessToken` | `form` | `string` | no |
| `accessTokenExpiresAt` | `form` | `number` | no |
| `scopes` | `form` | `string[]` | no |
| `properties` | `form` | `Property[]` | no |
| `accessTokenExpiresAtUpdatedOnScopeUpdate` | `form` | `boolean` | no |
| `accessTokenHash` | `form` | `string` | no |
| `accessTokenValueUpdated` | `form` | `boolean` | no |
| `accessTokenPersistent` | `form` | `boolean` | no |
| `certificateThumbprint` | `form` | `string` | no |
| `dpopKeyThumbprint` | `form` | `string` | no |
| `authorizationDetails` | `form` | `AuthzDetails` | no |
| `forExternalAttachment` | `form` | `boolean` | no |
| `refreshTokenExpiresAt` | `form` | `number` | no |
| `refreshTokenExpiresAtUpdatedOnScopeUpdate` | `form` | `boolean` | no |
| `tokenId` | `form` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Property` | `propertySchema` | `src/models/property.ts` |
| `AuthzDetails` | `authzDetailsSchema` | `src/models/authz-details.ts` |
| `TokenUpdateResponse` | `tokenUpdateResponseSchema` | `src/models/token-update-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

