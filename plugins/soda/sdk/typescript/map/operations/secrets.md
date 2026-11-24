<!-- Generated file — do not edit; regenerated with the SDK. -->

# Secrets — operations

Accessor: `client.secrets` · Source: `src/resources/secrets.ts` · 5 operations · Request and error types: namespace `Secrets`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `soda`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteApiV1SecretsSecretId

- **Signature**: `deleteApiV1SecretsSecretId(request: Secrets.DeleteApiV1SecretsSecretIdRequest, options?: RequestOptions): ApiPromise<PublicApiDeleteSecretResponse, Secrets.DeleteApiV1SecretsSecretIdError>`
- **Wire**: `DELETE /api/v1/secrets/{secretId}`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PublicApiDeleteSecretResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Secrets.DeleteApiV1SecretsSecretIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Secrets.DeleteApiV1SecretsSecretIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `secretId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiDeleteSecretResponse` | `publicApiDeleteSecretResponseSchema` | `src/models/public-api-delete-secret-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getApiV1Secrets

- **Signature**: `getApiV1Secrets(request?: Secrets.GetApiV1SecretsRequest, options?: RequestOptions): ApiPromise<PublicApiListSecretsResponse, Secrets.GetApiV1SecretsError>`
- **Wire**: `GET /api/v1/secrets`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicApiListSecretsResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Secrets.GetApiV1SecretsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Secrets.GetApiV1SecretsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `page` | `query` | `number` | no |
| `search` | `query` | `string` | no |
| `size` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiListSecretsResponse` | `publicApiListSecretsResponseSchema` | `src/models/public-api-list-secrets-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getApiV1SecretsPublicKey

- **Signature**: `getApiV1SecretsPublicKey(options?: RequestOptions): ApiPromise<PublicApiGetEncryptionKeyResponse, Secrets.GetApiV1SecretsPublicKeyError>`
- **Wire**: `GET /api/v1/secretsPublicKey`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicApiGetEncryptionKeyResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Secrets.GetApiV1SecretsPublicKeyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [429] `ErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiGetEncryptionKeyResponse` | `publicApiGetEncryptionKeyResponseSchema` | `src/models/public-api-get-encryption-key-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postApiV1Secrets

- **Signature**: `postApiV1Secrets(request: Secrets.PostApiV1SecretsRequest, options?: RequestOptions): ApiPromise<PublicApiCreateSecretResponse, Secrets.PostApiV1SecretsError>`
- **Wire**: `POST /api/v1/secrets`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PublicApiCreateSecretResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Secrets.PostApiV1SecretsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Secrets.PostApiV1SecretsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PublicApiCreateSecretRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiCreateSecretRequestDto` | `publicApiCreateSecretRequestDtoSchema` | `src/models/public-api-create-secret-request-dto.ts` |
| `PublicApiCreateSecretResponse` | `publicApiCreateSecretResponseSchema` | `src/models/public-api-create-secret-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postApiV1SecretsSecretId

- **Signature**: `postApiV1SecretsSecretId(request: Secrets.PostApiV1SecretsSecretIdRequest, options?: RequestOptions): ApiPromise<PublicApiUpdateSecretResponse, Secrets.PostApiV1SecretsSecretIdError>`
- **Wire**: `POST /api/v1/secrets/{secretId}`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PublicApiUpdateSecretResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Secrets.PostApiV1SecretsSecretIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Secrets.PostApiV1SecretsSecretIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `secretId` | `path` | `string` | yes |
| `body` | `body` | `PublicApiUpdateSecretRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiUpdateSecretRequestDto` | `publicApiUpdateSecretRequestDtoSchema` | `src/models/public-api-update-secret-request-dto.ts` |
| `PublicApiUpdateSecretResponse` | `publicApiUpdateSecretResponseSchema` | `src/models/public-api-update-secret-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

