<!-- Generated file — do not edit; regenerated with the SDK. -->

# Credentials — operations

Accessor: `client.credentials` · Source: `src/resources/credentials.ts` · 5 operations · Request and error types: namespace `Credentials`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `fillo`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createSyncToken

- **Signature**: `createSyncToken(request?: Credentials.CreateSyncTokenRequest, options?: RequestOptions): ApiPromise<ApiV1ManageSyncTokensResponse1, Credentials.CreateSyncTokenError>`
- **Wire**: `POST /api/v1/manage/sync-tokens`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ManageSyncTokensResponse1`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Credentials.CreateSyncTokenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [409] `Error` · `"error6"` [413] `Error` · `"error7"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Credentials.CreateSyncTokenRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1ManageSyncTokensRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ManageSyncTokensRequest` | `apiV1ManageSyncTokensRequestSchema` | `src/models/api-v1-manage-sync-tokens-request.ts` |
| `ApiV1ManageSyncTokensResponse1` | `apiV1ManageSyncTokensResponse1Schema` | `src/models/api-v1-manage-sync-tokens-response1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listConnectorTokens

- **Signature**: `listConnectorTokens(options?: RequestOptions): ApiPromise<ApiV1ManageTokensResponse, Credentials.ListConnectorTokensError>`
- **Wire**: `GET /api/v1/manage/tokens`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1ManageTokensResponse`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Credentials.ListConnectorTokensError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ManageTokensResponse` | `apiV1ManageTokensResponseSchema` | `src/models/api-v1-manage-tokens-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listSyncTokens

- **Signature**: `listSyncTokens(options?: RequestOptions): ApiPromise<ApiV1ManageSyncTokensResponse, Credentials.ListSyncTokensError>`
- **Wire**: `GET /api/v1/manage/sync-tokens`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1ManageSyncTokensResponse`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Credentials.ListSyncTokensError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ManageSyncTokensResponse` | `apiV1ManageSyncTokensResponseSchema` | `src/models/api-v1-manage-sync-tokens-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### revokeConnectorToken

- **Signature**: `revokeConnectorToken(request: Credentials.RevokeConnectorTokenRequest, options?: RequestOptions): ApiPromise<ApiV1ManageTokensResponse1, Credentials.RevokeConnectorTokenError>`
- **Wire**: `DELETE /api/v1/manage/tokens/{id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ManageTokensResponse1`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Credentials.RevokeConnectorTokenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [409] `Error` · `"error6"` [413] `Error` · `"error7"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Credentials.RevokeConnectorTokenRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ConfirmTarget` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConfirmTarget` | `confirmTargetSchema` | `src/models/confirm-target.ts` |
| `ApiV1ManageTokensResponse1` | `apiV1ManageTokensResponse1Schema` | `src/models/api-v1-manage-tokens-response1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### revokeSyncToken

- **Signature**: `revokeSyncToken(request: Credentials.RevokeSyncTokenRequest, options?: RequestOptions): ApiPromise<ApiV1ManageSyncTokensResponse2, Credentials.RevokeSyncTokenError>`
- **Wire**: `DELETE /api/v1/manage/sync-tokens/{id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ManageSyncTokensResponse2`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Credentials.RevokeSyncTokenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [409] `Error` · `"error6"` [413] `Error` · `"error7"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Credentials.RevokeSyncTokenRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ConfirmTarget` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConfirmTarget` | `confirmTargetSchema` | `src/models/confirm-target.ts` |
| `ApiV1ManageSyncTokensResponse2` | `apiV1ManageSyncTokensResponse2Schema` | `src/models/api-v1-manage-sync-tokens-response2.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

