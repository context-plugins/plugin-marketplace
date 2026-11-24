<!-- Generated file — do not edit; regenerated with the SDK. -->

# Keys — operations

Accessor: `client.keys` · Source: `src/resources/keys.ts` · 5 operations · Request and error types: namespace `Keys`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `statable`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createApiKey

- **Signature**: `createApiKey(request: Keys.CreateApiKeyRequestParams, options?: RequestOptions): ApiPromise<CreatedApiKey, Keys.CreateApiKeyError>`
- **Wire**: `POST /keys`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreatedApiKey`
- **Error**: `StatableError` with `kind: "api"`, an instance of `Keys.CreateApiKeyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Keys.CreateApiKeyRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateApiKeyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateApiKeyRequest` | `createApiKeyRequestSchema` | `src/models/create-api-key-request.ts` |
| `CreatedApiKey` | `createdApiKeySchema` | `src/models/created-api-key.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listApiKeyEvents

- **Signature**: `listApiKeyEvents(request: Keys.ListApiKeyEventsRequest, options?: RequestOptions): ApiPromise<ApiKeyEventList, Keys.ListApiKeyEventsError>`
- **Wire**: `GET /keys/{id}/events`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiKeyEventList`
- **Error**: `StatableError` with `kind: "api"`, an instance of `Keys.ListApiKeyEventsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Keys.ListApiKeyEventsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiKeyEventList` | `apiKeyEventListSchema` | `src/models/api-key-event-list.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listApiKeys

- **Signature**: `listApiKeys(options?: RequestOptions): ApiPromise<ApiKeyList, Keys.ListApiKeysError>`
- **Wire**: `GET /keys`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiKeyList`
- **Error**: `StatableError` with `kind: "api"`, an instance of `Keys.ListApiKeysError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiKeyList` | `apiKeyListSchema` | `src/models/api-key-list.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### revokeApiKey

- **Signature**: `revokeApiKey(request: Keys.RevokeApiKeyRequest, options?: RequestOptions): ApiPromise<undefined, Keys.RevokeApiKeyError>`
- **Wire**: `DELETE /keys/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `StatableError` with `kind: "api"`, an instance of `Keys.RevokeApiKeyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [409] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Keys.RevokeApiKeyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### rotateApiKey

- **Signature**: `rotateApiKey(request: Keys.RotateApiKeyRequest, options?: RequestOptions): ApiPromise<CreatedApiKey, Keys.RotateApiKeyError>`
- **Wire**: `POST /keys/{id}/rotate`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreatedApiKey`
- **Error**: `StatableError` with `kind: "api"`, an instance of `Keys.RotateApiKeyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [409] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Keys.RotateApiKeyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreatedApiKey` | `createdApiKeySchema` | `src/models/created-api-key.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

