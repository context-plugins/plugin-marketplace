<!-- Generated file — do not edit; regenerated with the SDK. -->

# ApiKeys — operations

Accessor: `client.apiKeys` · Source: `src/resources/api-keys.ts` · 5 operations · Request and error types: namespace `ApiKeys`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `audioscrape`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### apiKeyUsage

- **Signature**: `apiKeyUsage(request: ApiKeys.ApiKeyUsageRequest, options?: RequestOptions): ApiPromise<ApiKeyUsage, ApiKeys.ApiKeyUsageError>`
- **Wire**: `GET /api/keys/{id}/usage`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiKeyUsage`
- **Error**: `AudioscrapeError` with `kind: "api"`, an instance of `ApiKeys.ApiKeyUsageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorBody"` [401] `ApiErrorBody` · `"apiErrorBody2"` [404] `ApiErrorBody` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApiKeys.ApiKeyUsageRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiKeyUsage` | `apiKeyUsageSchema` | `src/models/api-key-usage.ts` |
| `ApiErrorBody` | `apiErrorBodySchema` | `src/models/api-error-body.ts` |

### createApiKey

- **Signature**: `createApiKey(request: ApiKeys.CreateApiKeyRequest, options?: RequestOptions): ApiPromise<ApiKey, ApiKeys.CreateApiKeyError>`
- **Wire**: `POST /api/keys`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiKey`
- **Error**: `AudioscrapeError` with `kind: "api"`, an instance of `ApiKeys.CreateApiKeyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorBody"` [401] `ApiErrorBody` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApiKeys.CreateApiKeyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateApiKey` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateApiKey` | `createApiKeySchema` | `src/models/create-api-key.ts` |
| `ApiKey` | `apiKeySchema` | `src/models/api-key.ts` |
| `ApiErrorBody` | `apiErrorBodySchema` | `src/models/api-error-body.ts` |

### deleteApiKey

- **Signature**: `deleteApiKey(request: ApiKeys.DeleteApiKeyRequest, options?: RequestOptions): ApiPromise<undefined, ApiKeys.DeleteApiKeyError>`
- **Wire**: `DELETE /api/keys/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AudioscrapeError` with `kind: "api"`, an instance of `ApiKeys.DeleteApiKeyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorBody"` [401] `ApiErrorBody` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApiKeys.DeleteApiKeyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiErrorBody` | `apiErrorBodySchema` | `src/models/api-error-body.ts` |

### listApiKeys

- **Signature**: `listApiKeys(options?: RequestOptions): ApiPromise<ApiKey[], ApiKeys.ListApiKeysError>`
- **Wire**: `GET /api/keys`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiKey[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `AudioscrapeError` with `kind: "api"`, an instance of `ApiKeys.ListApiKeysError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorBody"` [401] `ApiErrorBody` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiKey` | `apiKeySchema` | `src/models/api-key.ts` |
| `ApiErrorBody` | `apiErrorBodySchema` | `src/models/api-error-body.ts` |

### rotateApiKey

- **Signature**: `rotateApiKey(request: ApiKeys.RotateApiKeyRequest, options?: RequestOptions): ApiPromise<ApiKey, ApiKeys.RotateApiKeyError>`
- **Wire**: `POST /api/keys/{id}/rotate`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiKey`
- **Error**: `AudioscrapeError` with `kind: "api"`, an instance of `ApiKeys.RotateApiKeyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorBody"` [401] `ApiErrorBody` · `"apiErrorBody2"` [404] `ApiErrorBody` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApiKeys.RotateApiKeyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiKey` | `apiKeySchema` | `src/models/api-key.ts` |
| `ApiErrorBody` | `apiErrorBodySchema` | `src/models/api-error-body.ts` |

