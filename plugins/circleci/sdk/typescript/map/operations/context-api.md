<!-- Generated file — do not edit; regenerated with the SDK. -->

# ContextApi — operations

Accessor: `client.contextApi` · Source: `src/resources/context-api.ts` · 7 operations · Request and error types: namespace `ContextApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `circle-ci`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addOrUpdateContextEnvironmentVariable

- **Server**: `defaultCircleCiRestApiV2ContextApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `addOrUpdateContextEnvironmentVariable(request: ContextApi.AddOrUpdateContextEnvironmentVariableRequest, options?: RequestOptions): ApiPromise<EnvironmentVariable, ContextApi.AddOrUpdateContextEnvironmentVariableError>`
- **Wire**: `PUT /context/{context-id}/environment-variable/{env-var-name}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EnvironmentVariable`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `ContextApi.AddOrUpdateContextEnvironmentVariableError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContextApi.AddOrUpdateContextEnvironmentVariableRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contextId` | `path` | `context-id` | `string` | yes |
| `envVarName` | `path` | `env-var-name` | `string` | yes |
| `body` | `body` | — | `ContextEnvironmentVariableRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContextEnvironmentVariableRequest` | `contextEnvironmentVariableRequestSchema` | `src/models/context-environment-variable-request.ts` |
| `EnvironmentVariable` | `environmentVariableSchema` | `src/models/environment-variable.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### createContext

- **Server**: `defaultCircleCiRestApiV2ContextApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createContext(request: ContextApi.CreateContextRequestParams, options?: RequestOptions): ApiPromise<Context, ContextApi.CreateContextError>`
- **Wire**: `POST /context`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Context`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `ContextApi.CreateContextError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContextApi.CreateContextRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateContextRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateContextRequest` | `createContextRequestSchema` | `src/models/create-context-request.ts` |
| `Context` | `contextSchema` | `src/models/context.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteContext

- **Server**: `defaultCircleCiRestApiV2ContextApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteContext(request: ContextApi.DeleteContextRequest, options?: RequestOptions): ApiPromise<MessageResponse, ContextApi.DeleteContextError>`
- **Wire**: `DELETE /context/{context-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MessageResponse`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `ContextApi.DeleteContextError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContextApi.DeleteContextRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contextId` | `path` | `context-id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessageResponse` | `messageResponseSchema` | `src/models/message-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteContextEnvironmentVariable

- **Server**: `defaultCircleCiRestApiV2ContextApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteContextEnvironmentVariable(request: ContextApi.DeleteContextEnvironmentVariableRequest, options?: RequestOptions): ApiPromise<MessageResponse, ContextApi.DeleteContextEnvironmentVariableError>`
- **Wire**: `DELETE /context/{context-id}/environment-variable/{env-var-name}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MessageResponse`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `ContextApi.DeleteContextEnvironmentVariableError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContextApi.DeleteContextEnvironmentVariableRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contextId` | `path` | `context-id` | `string` | yes |
| `envVarName` | `path` | `env-var-name` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessageResponse` | `messageResponseSchema` | `src/models/message-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getContext

- **Server**: `defaultCircleCiRestApiV2ContextApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getContext(request: ContextApi.GetContextRequest, options?: RequestOptions): ApiPromise<Context, ContextApi.GetContextError>`
- **Wire**: `GET /context/{context-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Context`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `ContextApi.GetContextError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContextApi.GetContextRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contextId` | `path` | `context-id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Context` | `contextSchema` | `src/models/context.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listContextEnvironmentVariables

- **Server**: `defaultCircleCiRestApiV2ContextApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listContextEnvironmentVariables(request: ContextApi.ListContextEnvironmentVariablesRequest, options?: RequestOptions): ApiPromise<EnvironmentVariableList, ContextApi.ListContextEnvironmentVariablesError>`
- **Wire**: `GET /context/{context-id}/environment-variable`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EnvironmentVariableList`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `ContextApi.ListContextEnvironmentVariablesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContextApi.ListContextEnvironmentVariablesRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contextId` | `path` | `context-id` | `string` | yes |
| `pageToken` | `query` | `page-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EnvironmentVariableList` | `environmentVariableListSchema` | `src/models/environment-variable-list.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listContexts

- **Server**: `defaultCircleCiRestApiV2ContextApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listContexts(request?: ContextApi.ListContextsRequest, options?: RequestOptions): ApiPromise<ContextList, ContextApi.ListContextsError>`
- **Wire**: `GET /context`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ContextList`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `ContextApi.ListContextsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContextApi.ListContextsRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `ownerId` | `query` | `owner-id` | `string` | no |
| `ownerSlug` | `query` | `owner-slug` | `string` | no |
| `ownerType` | `query` | `owner-type` | `OwnerType` | no |
| `pageToken` | `query` | `page-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `OwnerType` | `ownerTypeSchema` | `src/models/owner-type.ts` |
| `ContextList` | `contextListSchema` | `src/models/context-list.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

