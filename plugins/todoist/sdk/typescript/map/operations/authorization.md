<!-- Generated file — do not edit; regenerated with the SDK. -->

# Authorization — operations

Accessor: `client.authorization` · Source: `src/resources/authorization.ts` · 3 operations · Request and error types: namespace `Authorization`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `todoist-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### migratePersonalTokenApiV1AccessTokensMigratePersonalTokenPost

- **Signature**: `migratePersonalTokenApiV1AccessTokensMigratePersonalTokenPost(request: Authorization.MigratePersonalTokenApiV1AccessTokensMigratePersonalTokenPostRequest, options?: RequestOptions): ApiPromise<MigratePersonalTokenResponse, Authorization.MigratePersonalTokenApiV1AccessTokensMigratePersonalTokenPostError>`
- **Wire**: `POST /api/v1/access_tokens/migrate_personal_token`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MigratePersonalTokenResponse`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Authorization.MigratePersonalTokenApiV1AccessTokensMigratePersonalTokenPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Authorization.MigratePersonalTokenApiV1AccessTokensMigratePersonalTokenPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `Body30` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Body30` | `body30Schema` | `src/models/body30.ts` |
| `MigratePersonalTokenResponse` | `migratePersonalTokenResponseSchema` | `src/models/migrate-personal-token-response.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### revokeAccessTokenApiApiV1AccessTokensDelete

- **Signature**: `revokeAccessTokenApiApiV1AccessTokensDelete(request: Authorization.RevokeAccessTokenApiApiV1AccessTokensDeleteRequest, options?: RequestOptions): ApiPromise<undefined, Authorization.RevokeAccessTokenApiApiV1AccessTokensDeleteError>`
- **Wire**: `DELETE /api/v1/access_tokens`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Authorization.RevokeAccessTokenApiApiV1AccessTokensDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Authorization.RevokeAccessTokenApiApiV1AccessTokensDeleteRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `clientId` | `query` | `client_id` | `string` | yes |
| `clientSecret` | `query` | `client_secret` | `string` | yes |
| `accessToken` | `query` | `access_token` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### revokeTokenRfc7009CompliantApiV1RevokePost

- **Signature**: `revokeTokenRfc7009CompliantApiV1RevokePost(request: Authorization.RevokeTokenRfc7009CompliantApiV1RevokePostRequest, options?: RequestOptions): ApiPromise<undefined, Authorization.RevokeTokenRfc7009CompliantApiV1RevokePostError>`
- **Wire**: `POST /api/v1/revoke`
- **Auth**: `clientBasic`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Authorization.RevokeTokenRfc7009CompliantApiV1RevokePostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Authorization.RevokeTokenRfc7009CompliantApiV1RevokePostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `Body25` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Body25` | `body25Schema` | `src/models/body25.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

