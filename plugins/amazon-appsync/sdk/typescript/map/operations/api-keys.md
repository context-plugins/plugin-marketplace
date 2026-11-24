<!-- Generated file — do not edit; regenerated with the SDK. -->

# ApiKeys — operations

Accessor: `client.apiKeys` · Source: `src/resources/api-keys.ts` · 4 operations · Request and error types: namespace `ApiKeys`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-app-sync`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createApiKey

- **Signature**: `createApiKey(request: ApiKeys.CreateApiKeyRequest, options?: RequestOptions): ApiPromise<CreateApiKeyResponse, ApiKeys.CreateApiKeyError>`
- **Wire**: `POST /v1/apis/{apiId}/apikeys`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateApiKeyResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `ApiKeys.CreateApiKeyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiKeyLimitExceededException"` [400] `ApiKeyLimitExceededException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApiKeys.CreateApiKeyRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `apiId` | `path` | `string` | yes |
| `body` | `body` | `V1ApisApikeysRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ApisApikeysRequest` | `v1ApisApikeysRequestSchema` | `src/models/v1-apis-apikeys-request.ts` |
| `CreateApiKeyResponse` | `createApiKeyResponseSchema` | `src/models/create-api-key-response.ts` |
| `ApiKeyLimitExceededException` | `apiKeyLimitExceededExceptionSchema` | `src/models/api-key-limit-exceeded-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

### deleteApiKey

- **Signature**: `deleteApiKey(request: ApiKeys.DeleteApiKeyRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiKeys.DeleteApiKeyError>`
- **Wire**: `DELETE /v1/apis/{apiId}/apikeys/{id}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `ApiKeys.DeleteApiKeyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApiKeys.DeleteApiKeyRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `apiId` | `path` | `string` | yes |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

### listApiKeys

- **Signature**: `listApiKeys(request: ApiKeys.ListApiKeysRequest, options?: RequestOptions): ApiPromise<ListApiKeysResponse, ApiKeys.ListApiKeysError>`
- **Wire**: `GET /v1/apis/{apiId}/apikeys`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListApiKeysResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `ApiKeys.ListApiKeysError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApiKeys.ListApiKeysRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `apiId` | `path` | `string` | yes |
| `nextToken` | `query` | `string` | no |
| `maxResults` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListApiKeysResponse` | `listApiKeysResponseSchema` | `src/models/list-api-keys-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

### updateApiKey

- **Signature**: `updateApiKey(request: ApiKeys.UpdateApiKeyRequest, options?: RequestOptions): ApiPromise<UpdateApiKeyResponse, ApiKeys.UpdateApiKeyError>`
- **Wire**: `POST /v1/apis/{apiId}/apikeys/{id}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdateApiKeyResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `ApiKeys.UpdateApiKeyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiKeyValidityOutOfBoundsException"` [400] `ApiKeyValidityOutOfBoundsException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApiKeys.UpdateApiKeyRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `apiId` | `path` | `string` | yes |
| `id` | `path` | `string` | yes |
| `body` | `body` | `V1ApisApikeysRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ApisApikeysRequest1` | `v1ApisApikeysRequest1Schema` | `src/models/v1-apis-apikeys-request1.ts` |
| `UpdateApiKeyResponse` | `updateApiKeyResponseSchema` | `src/models/update-api-key-response.ts` |
| `ApiKeyValidityOutOfBoundsException` | `apiKeyValidityOutOfBoundsExceptionSchema` | `src/models/api-key-validity-out-of-bounds-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

