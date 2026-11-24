<!-- Generated file — do not edit; regenerated with the SDK. -->

# Models — operations

Accessor: `client.models` · Source: `src/resources/models.ts` · 9 operations · Request and error types: namespace `Models`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `hightouch`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createModel

- **Signature**: `createModel(request: Models.CreateModelRequest, options?: RequestOptions): ApiPromise<ModelsResponse1, Models.CreateModelError>`
- **Wire**: `POST /models`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ModelsResponse1`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `Models.CreateModelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"validateErrorJson"` [409] `ValidateErrorJson` · `"validateErrorJson2"` [422] `ValidateErrorJson` · `"internalServerError"` [500] `InternalServerError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Models.CreateModelRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `skipColumnQuery` | `query` | `boolean` | no | `false` |
| `body` | `body` | `ModelCreate` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ModelCreate` | `modelCreateSchema` | `src/models/model-create.ts` |
| `ModelsResponse1` | `modelsResponse1Schema` | `src/models/unions/models-response1.ts` |
| `ValidateErrorJson` | `validateErrorJsonSchema` | `src/models/validate-error-json.ts` |
| `InternalServerError` | `internalServerErrorSchema` | `src/models/internal-server-error.ts` |

### deleteModel

- **Signature**: `deleteModel(request: Models.DeleteModelRequest, options?: RequestOptions): ApiPromise<ModelsResponse11, Models.DeleteModelError>`
- **Wire**: `DELETE /models/{modelId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ModelsResponse11`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `Models.DeleteModelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"validateErrorJson"` [409] `ValidateErrorJson` · `"validateErrorJson2"` [422] `ValidateErrorJson` · `"internalServerError"` [500] `InternalServerError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Models.DeleteModelRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `modelId` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ModelsResponse11` | `modelsResponse11Schema` | `src/models/unions/models-response11.ts` |
| `ValidateErrorJson` | `validateErrorJsonSchema` | `src/models/validate-error-json.ts` |
| `InternalServerError` | `internalServerErrorSchema` | `src/models/internal-server-error.ts` |

### getAudienceSize

- **Signature**: `getAudienceSize(request: Models.GetAudienceSizeRequest, options?: RequestOptions): ApiPromise<ModelsSizeResponse1, Models.GetAudienceSizeError>`
- **Wire**: `GET /models/{modelId}/size/{jobId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ModelsSizeResponse1`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `Models.GetAudienceSizeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"validateErrorJson"` [422] `ValidateErrorJson` · `"internalServerError"` [500] `InternalServerError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Models.GetAudienceSizeRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `modelId` | `path` | `number` | yes |
| `jobId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ModelsSizeResponse1` | `modelsSizeResponse1Schema` | `src/models/unions/models-size-response1.ts` |
| `ValidateErrorJson` | `validateErrorJsonSchema` | `src/models/validate-error-json.ts` |
| `InternalServerError` | `internalServerErrorSchema` | `src/models/internal-server-error.ts` |

### getModel

- **Signature**: `getModel(request: Models.GetModelRequest, options?: RequestOptions): ApiPromise<Model, Models.GetModelError>`
- **Wire**: `GET /models/{modelId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Model`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `Models.GetModelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Models.GetModelRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `modelId` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Model` | `modelSchema` | `src/models/model.ts` |

### listEnrichmentRuns

- **Signature**: `listEnrichmentRuns(request: Models.ListEnrichmentRunsRequest, options?: RequestOptions): ApiPromise<ModelsMatchBoosterRunsResponse, Models.ListEnrichmentRunsError>`
- **Wire**: `GET /models/{modelId}/match-booster/runs`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ModelsMatchBoosterRunsResponse`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `Models.ListEnrichmentRunsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"validateErrorJson"` [422] `ValidateErrorJson` · `"internalServerError"` [500] `InternalServerError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Models.ListEnrichmentRunsRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `modelId` | `path` | `number` | yes | — |
| `region` | `query` | `Region1` | no | — |
| `limit` | `query` | `number` | no | `100` |
| `offset` | `query` | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Region1` | `region1Schema` | `src/models/region1.ts` |
| `ModelsMatchBoosterRunsResponse` | `modelsMatchBoosterRunsResponseSchema` | `src/models/unions/models-match-booster-runs-response.ts` |
| `ValidateErrorJson` | `validateErrorJsonSchema` | `src/models/validate-error-json.ts` |
| `InternalServerError` | `internalServerErrorSchema` | `src/models/internal-server-error.ts` |

### listModel

- **Signature**: `listModel(request?: Models.ListModelRequest, options?: RequestOptions): ApiPromise<ModelsResponse, Models.ListModelError>`
- **Wire**: `GET /models`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ModelsResponse`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `Models.ListModelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"validateErrorJson"` [422] `ValidateErrorJson` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Models.ListModelRequest` (6):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `name` | `query` | `string` | no | — |
| `slug` | `query` | `string` | no | — |
| `offset` | `query` | `number` | no | `0` |
| `limit` | `query` | `number` | no | `100` |
| `orderBy` | `query` | `OrderByHightouchDestinationsApi` | no | `OrderByHightouchDestinationsApi.Id` |
| `tags` | `query` | `string[]` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrderByHightouchDestinationsApi` | `orderByHightouchDestinationsApiSchema` | `src/models/order-by-hightouch-destinations-api.ts` |
| `ModelsResponse` | `modelsResponseSchema` | `src/models/models-response.ts` |
| `ValidateErrorJson` | `validateErrorJsonSchema` | `src/models/validate-error-json.ts` |

### startAudienceSizeJob

- **Signature**: `startAudienceSizeJob(request: Models.StartAudienceSizeJobRequest, options?: RequestOptions): ApiPromise<ModelsSizeResponse, Models.StartAudienceSizeJobError>`
- **Wire**: `POST /models/{modelId}/size`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ModelsSizeResponse`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `Models.StartAudienceSizeJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"validateErrorJson"` [422] `ValidateErrorJson` · `"internalServerError"` [500] `InternalServerError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Models.StartAudienceSizeJobRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `modelId` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ModelsSizeResponse` | `modelsSizeResponseSchema` | `src/models/unions/models-size-response.ts` |
| `ValidateErrorJson` | `validateErrorJsonSchema` | `src/models/validate-error-json.ts` |
| `InternalServerError` | `internalServerErrorSchema` | `src/models/internal-server-error.ts` |

### triggerEnrichment

- **Signature**: `triggerEnrichment(request: Models.TriggerEnrichmentRequest, options?: RequestOptions): ApiPromise<ModelsMatchBoosterTriggerResponse, Models.TriggerEnrichmentError>`
- **Wire**: `POST /models/{modelId}/match-booster/trigger`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ModelsMatchBoosterTriggerResponse`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `Models.TriggerEnrichmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"validateErrorJson"` [422] `ValidateErrorJson` · `"internalServerError"` [500] `InternalServerError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Models.TriggerEnrichmentRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `modelId` | `path` | `number` | yes |
| `body` | `body` | `MatchBoosterTriggerInput` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MatchBoosterTriggerInput` | `matchBoosterTriggerInputSchema` | `src/models/match-booster-trigger-input.ts` |
| `ModelsMatchBoosterTriggerResponse` | `modelsMatchBoosterTriggerResponseSchema` | `src/models/unions/models-match-booster-trigger-response.ts` |
| `ValidateErrorJson` | `validateErrorJsonSchema` | `src/models/validate-error-json.ts` |
| `InternalServerError` | `internalServerErrorSchema` | `src/models/internal-server-error.ts` |

### updateModel

- **Signature**: `updateModel(request: Models.UpdateModelRequest, options?: RequestOptions): ApiPromise<ModelsResponse1, Models.UpdateModelError>`
- **Wire**: `PATCH /models/{modelId}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ModelsResponse1`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `Models.UpdateModelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"validateErrorJson"` [422] `ValidateErrorJson` · `"internalServerError"` [500] `InternalServerError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Models.UpdateModelRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `modelId` | `path` | `number` | yes |
| `body` | `body` | `ModelUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ModelUpdate` | `modelUpdateSchema` | `src/models/model-update.ts` |
| `ModelsResponse1` | `modelsResponse1Schema` | `src/models/unions/models-response1.ts` |
| `ValidateErrorJson` | `validateErrorJsonSchema` | `src/models/validate-error-json.ts` |
| `InternalServerError` | `internalServerErrorSchema` | `src/models/internal-server-error.ts` |

