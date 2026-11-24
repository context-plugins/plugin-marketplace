<!-- Generated file — do not edit; regenerated with the SDK. -->

# Models — operations

Accessor: `client.models` · Source: `src/resources/models.ts` · 11 operations · Request and error types: namespace `Models`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `hud`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### forkModelV2ModelsForkPost

- **Signature**: `forkModelV2ModelsForkPost(request: Models.ForkModelV2ModelsForkPostRequest, options?: RequestOptions): ApiPromise<ModelResponse, Models.ForkModelV2ModelsForkPostError>`
- **Wire**: `POST /v2/models/fork`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ModelResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Models.ForkModelV2ModelsForkPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Models.ForkModelV2ModelsForkPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ModelForkRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ModelForkRequest` | `modelForkRequestSchema` | `src/models/model-fork-request.ts` |
| `ModelResponse` | `modelResponseSchema` | `src/models/model-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getModelV2ModelsModelIdGet

- **Signature**: `getModelV2ModelsModelIdGet(request: Models.GetModelV2ModelsModelIdGetRequest, options?: RequestOptions): ApiPromise<ModelResponse, Models.GetModelV2ModelsModelIdGetError>`
- **Wire**: `GET /v2/models/{model_id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ModelResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Models.GetModelV2ModelsModelIdGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Models.GetModelV2ModelsModelIdGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `modelId` | `path` | `model_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ModelResponse` | `modelResponseSchema` | `src/models/model-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGet

- **Signature**: `listCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGet(request: Models.ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetRequest, options?: RequestOptions): ApiPromise<CheckpointTraceRow[], Models.ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetError>`
- **Wire**: `GET /v2/models/{model_id}/checkpoints/{checkpoint_id}/traces`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CheckpointTraceRow[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `HudError` with `kind: "api"`, an instance of `Models.ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Models.ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `modelId` | `path` | `model_id` | `string` | yes | — |
| `checkpointId` | `path` | `checkpoint_id` | `string` | yes | — |
| `limit` | `query` | — | `number` | no | `200` |

| Type | Schema value | Source |
| --- | --- | --- |
| `CheckpointTraceRow` | `checkpointTraceRowSchema` | `src/models/checkpoint-trace-row.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listModelCheckpointsV2ModelsModelIdCheckpointsGet

- **Signature**: `listModelCheckpointsV2ModelsModelIdCheckpointsGet(request: Models.ListModelCheckpointsV2ModelsModelIdCheckpointsGetRequest, options?: RequestOptions): ApiPromise<CheckpointResponse[], Models.ListModelCheckpointsV2ModelsModelIdCheckpointsGetError>`
- **Wire**: `GET /v2/models/{model_id}/checkpoints`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CheckpointResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `HudError` with `kind: "api"`, an instance of `Models.ListModelCheckpointsV2ModelsModelIdCheckpointsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Models.ListModelCheckpointsV2ModelsModelIdCheckpointsGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `modelId` | `path` | `model_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CheckpointResponse` | `checkpointResponseSchema` | `src/models/checkpoint-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listModelInferenceLogsV2ModelsModelIdLogsGet

- **Signature**: `listModelInferenceLogsV2ModelsModelIdLogsGet(request: Models.ListModelInferenceLogsV2ModelsModelIdLogsGetRequest, options?: RequestOptions): ApiPromise<PaginatedResponseModelInferenceLogEntry, Models.ListModelInferenceLogsV2ModelsModelIdLogsGetError>`
- **Wire**: `GET /v2/models/{model_id}/logs`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginatedResponseModelInferenceLogEntry`
- **Error**: `HudError` with `kind: "api"`, an instance of `Models.ListModelInferenceLogsV2ModelsModelIdLogsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Models.ListModelInferenceLogsV2ModelsModelIdLogsGetRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `modelId` | `path` | `model_id` | `string` | yes | — |
| `limit` | `query` | — | `number` | no | `50` |
| `offset` | `query` | — | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaginatedResponseModelInferenceLogEntry` | `paginatedResponseModelInferenceLogEntrySchema` | `src/models/paginated-response-model-inference-log-entry.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listModelsV2ModelsGet

- **Signature**: `listModelsV2ModelsGet(request?: Models.ListModelsV2ModelsGetRequest, options?: RequestOptions): ApiPromise<PaginatedResponseModelResponse, Models.ListModelsV2ModelsGetError>`
- **Wire**: `GET /v2/models`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginatedResponseModelResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Models.ListModelsV2ModelsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Models.ListModelsV2ModelsGetRequest` (7):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `limit` | `query` | — | `number` | no | `100` |
| `offset` | `query` | — | `number` | no | `0` |
| `scope` | `query` | — | `ScopeHudPlatformModelsApi` | no | — |
| `search` | `query` | — | `Search` | no | — |
| `trainable` | `query` | — | `boolean` | no | `false` |
| `includeDeprecated` | `query` | `include_deprecated` | `boolean` | no | `true` |
| `sort` | `query` | — | `ModelListSort1` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ScopeHudPlatformModelsApi` | `scopeHudPlatformModelsApiSchema` | `src/models/unions/scope-hud-platform-models-api.ts` |
| `Search` | `searchSchema` | `src/models/unions/search.ts` |
| `ModelListSort1` | `modelListSort1Schema` | `src/models/model-list-sort1.ts` |
| `PaginatedResponseModelResponse` | `paginatedResponseModelResponseSchema` | `src/models/paginated-response-model-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### modelResultsV2ModelsModelIdResultsGet

- **Signature**: `modelResultsV2ModelsModelIdResultsGet(request: Models.ModelResultsV2ModelsModelIdResultsGetRequest, options?: RequestOptions): ApiPromise<ModelResultsResponse, Models.ModelResultsV2ModelsModelIdResultsGetError>`
- **Wire**: `GET /v2/models/{model_id}/results`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ModelResultsResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Models.ModelResultsV2ModelsModelIdResultsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Models.ModelResultsV2ModelsModelIdResultsGetRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `modelId` | `path` | `model_id` | `string` | yes |
| `checkpointIds` | `query` | `checkpoint_ids` | `CheckpointIds` | no |
| `purpose` | `query` | — | `Purpose2` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CheckpointIds` | `checkpointIdsSchema` | `src/models/unions/checkpoint-ids.ts` |
| `Purpose2` | `purpose2Schema` | `src/models/unions/purpose2.ts` |
| `ModelResultsResponse` | `modelResultsResponseSchema` | `src/models/model-results-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### modelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGet

- **Signature**: `modelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGet(request: Models.ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGetRequest, options?: RequestOptions): ApiPromise<SuggestedTasksetsResponse, Models.ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGetError>`
- **Wire**: `GET /v2/models/{model_id}/suggested-tasksets`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SuggestedTasksetsResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Models.ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Models.ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGetRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `modelId` | `path` | `model_id` | `string` | yes | — |
| `exclude` | `query` | — | `Exclude` | no | — |
| `search` | `query` | — | `Search1` | no | — |
| `limit` | `query` | — | `number` | no | `50` |
| `purpose` | `query` | — | `Purpose2` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Exclude` | `excludeSchema` | `src/models/unions/exclude.ts` |
| `Search1` | `search1Schema` | `src/models/unions/search1.ts` |
| `Purpose2` | `purpose2Schema` | `src/models/unions/purpose2.ts` |
| `SuggestedTasksetsResponse` | `suggestedTasksetsResponseSchema` | `src/models/suggested-tasksets-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### resolveModelV2ModelsResolveGet

- **Signature**: `resolveModelV2ModelsResolveGet(request: Models.ResolveModelV2ModelsResolveGetRequest, options?: RequestOptions): ApiPromise<ModelResponse, Models.ResolveModelV2ModelsResolveGetError>`
- **Wire**: `GET /v2/models/resolve`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ModelResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Models.ResolveModelV2ModelsResolveGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Models.ResolveModelV2ModelsResolveGetRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `model` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ModelResponse` | `modelResponseSchema` | `src/models/model-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### setModelHeadV2ModelsModelIdHeadPut

- **Signature**: `setModelHeadV2ModelsModelIdHeadPut(request: Models.SetModelHeadV2ModelsModelIdHeadPutRequest, options?: RequestOptions): ApiPromise<ModelResponse, Models.SetModelHeadV2ModelsModelIdHeadPutError>`
- **Wire**: `PUT /v2/models/{model_id}/head`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ModelResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Models.SetModelHeadV2ModelsModelIdHeadPutError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Models.SetModelHeadV2ModelsModelIdHeadPutRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `modelId` | `path` | `model_id` | `string` | yes |
| `body` | `body` | — | `SetHeadRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SetHeadRequest` | `setHeadRequestSchema` | `src/models/set-head-request.ts` |
| `ModelResponse` | `modelResponseSchema` | `src/models/model-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### updateModelV2ModelsModelIdPatch

- **Signature**: `updateModelV2ModelsModelIdPatch(request: Models.UpdateModelV2ModelsModelIdPatchRequest, options?: RequestOptions): ApiPromise<ModelResponse, Models.UpdateModelV2ModelsModelIdPatchError>`
- **Wire**: `PATCH /v2/models/{model_id}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ModelResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Models.UpdateModelV2ModelsModelIdPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Models.UpdateModelV2ModelsModelIdPatchRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `modelId` | `path` | `model_id` | `string` | yes |
| `body` | `body` | — | `ModelUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ModelUpdate` | `modelUpdateSchema` | `src/models/model-update.ts` |
| `ModelResponse` | `modelResponseSchema` | `src/models/model-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

