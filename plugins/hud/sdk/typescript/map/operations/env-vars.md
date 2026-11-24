<!-- Generated file — do not edit; regenerated with the SDK. -->

# EnvVars — operations

Accessor: `client.envVars` · Source: `src/resources/env-vars.ts` · 6 operations · Request and error types: namespace `EnvVars`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `hud`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### batchReplaceEnvVarsV2EnvVarsBatchPut

- **Signature**: `batchReplaceEnvVarsV2EnvVarsBatchPut(request: EnvVars.BatchReplaceEnvVarsV2EnvVarsBatchPutRequest, options?: RequestOptions): ApiPromise<RegistryEnvVarBatchResponse, EnvVars.BatchReplaceEnvVarsV2EnvVarsBatchPutError>`
- **Wire**: `PUT /v2/env-vars/batch`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RegistryEnvVarBatchResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `EnvVars.BatchReplaceEnvVarsV2EnvVarsBatchPutError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EnvVars.BatchReplaceEnvVarsV2EnvVarsBatchPutRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `RegistryEnvVarBatchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RegistryEnvVarBatchRequest` | `registryEnvVarBatchRequestSchema` | `src/models/registry-env-var-batch-request.ts` |
| `RegistryEnvVarBatchResponse` | `registryEnvVarBatchResponseSchema` | `src/models/registry-env-var-batch-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### checkEnvVarCompletenessV2EnvVarsCheckPost

- **Signature**: `checkEnvVarCompletenessV2EnvVarsCheckPost(request: EnvVars.CheckEnvVarCompletenessV2EnvVarsCheckPostRequest, options?: RequestOptions): ApiPromise<RegistryEnvVarCheckResponse, EnvVars.CheckEnvVarCompletenessV2EnvVarsCheckPostError>`
- **Wire**: `POST /v2/env-vars/check`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RegistryEnvVarCheckResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `EnvVars.CheckEnvVarCompletenessV2EnvVarsCheckPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EnvVars.CheckEnvVarCompletenessV2EnvVarsCheckPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `RegistryEnvVarCheckRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RegistryEnvVarCheckRequest` | `registryEnvVarCheckRequestSchema` | `src/models/registry-env-var-check-request.ts` |
| `RegistryEnvVarCheckResponse` | `registryEnvVarCheckResponseSchema` | `src/models/registry-env-var-check-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### createEnvVarV2EnvVarsPost

- **Signature**: `createEnvVarV2EnvVarsPost(request: EnvVars.CreateEnvVarV2EnvVarsPostRequest, options?: RequestOptions): ApiPromise<RegistryEnvVarItem, EnvVars.CreateEnvVarV2EnvVarsPostError>`
- **Wire**: `POST /v2/env-vars`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RegistryEnvVarItem`
- **Error**: `HudError` with `kind: "api"`, an instance of `EnvVars.CreateEnvVarV2EnvVarsPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EnvVars.CreateEnvVarV2EnvVarsPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `RegistryEnvVarCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RegistryEnvVarCreateRequest` | `registryEnvVarCreateRequestSchema` | `src/models/registry-env-var-create-request.ts` |
| `RegistryEnvVarItem` | `registryEnvVarItemSchema` | `src/models/registry-env-var-item.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### deleteEnvVarV2EnvVarsVarIdDelete

- **Signature**: `deleteEnvVarV2EnvVarsVarIdDelete(request: EnvVars.DeleteEnvVarV2EnvVarsVarIdDeleteRequest, options?: RequestOptions): ApiPromise<undefined, EnvVars.DeleteEnvVarV2EnvVarsVarIdDeleteError>`
- **Wire**: `DELETE /v2/env-vars/{var_id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `HudError` with `kind: "api"`, an instance of `EnvVars.DeleteEnvVarV2EnvVarsVarIdDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EnvVars.DeleteEnvVarV2EnvVarsVarIdDeleteRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `varId` | `path` | `var_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listEnvVarsV2EnvVarsGet

- **Signature**: `listEnvVarsV2EnvVarsGet(request: EnvVars.ListEnvVarsV2EnvVarsGetRequest, options?: RequestOptions): ApiPromise<RegistryEnvVarsListResponse, EnvVars.ListEnvVarsV2EnvVarsGetError>`
- **Wire**: `GET /v2/env-vars`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RegistryEnvVarsListResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `EnvVars.ListEnvVarsV2EnvVarsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EnvVars.ListEnvVarsV2EnvVarsGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `registryId` | `query` | `registry_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RegistryEnvVarsListResponse` | `registryEnvVarsListResponseSchema` | `src/models/registry-env-vars-list-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### updateEnvVarV2EnvVarsVarIdPatch

- **Signature**: `updateEnvVarV2EnvVarsVarIdPatch(request: EnvVars.UpdateEnvVarV2EnvVarsVarIdPatchRequest, options?: RequestOptions): ApiPromise<RegistryEnvVarItem, EnvVars.UpdateEnvVarV2EnvVarsVarIdPatchError>`
- **Wire**: `PATCH /v2/env-vars/{var_id}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RegistryEnvVarItem`
- **Error**: `HudError` with `kind: "api"`, an instance of `EnvVars.UpdateEnvVarV2EnvVarsVarIdPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EnvVars.UpdateEnvVarV2EnvVarsVarIdPatchRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `varId` | `path` | `var_id` | `string` | yes |
| `body` | `body` | — | `RegistryEnvVarUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RegistryEnvVarUpdateRequest` | `registryEnvVarUpdateRequestSchema` | `src/models/registry-env-var-update-request.ts` |
| `RegistryEnvVarItem` | `registryEnvVarItemSchema` | `src/models/registry-env-var-item.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

