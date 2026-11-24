<!-- Generated file — do not edit; regenerated with the SDK. -->

# Models — operations

Accessor: `client.models` · Source: `src/resources/models.ts` · 5 operations · Request and error types: namespace `Models`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `boomi`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createModel

- **Server**: `defaultBoomiDataHubGoldenRecordsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createModel(request: Models.CreateModelRequest, options?: RequestOptions): ApiPromise<Model, Models.CreateModelError>`
- **Wire**: `POST /repositories/{repositoryId}/models`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Model`
- **Error**: `BoomiError` with `kind: "api"`, an instance of `Models.CreateModelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseBoomiDataHubGoldenRecordsApi"` [400] `ErrorResponseBoomiDataHubGoldenRecordsApi` · `"errorResponseBoomiDataHubGoldenRecordsApi2"` [401] `ErrorResponseBoomiDataHubGoldenRecordsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Models.CreateModelRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `repositoryId` | `path` | `string` | yes |
| `body` | `body` | `ModelInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ModelInput` | `modelInputSchema` | `src/models/model-input.ts` |
| `Model` | `modelSchema` | `src/models/model.ts` |
| `ErrorResponseBoomiDataHubGoldenRecordsApi` | `errorResponseBoomiDataHubGoldenRecordsApiSchema` | `src/models/error-response-boomi-data-hub-golden-records-api.ts` |

### deleteModel

- **Server**: `defaultBoomiDataHubGoldenRecordsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteModel(request: Models.DeleteModelRequest, options?: RequestOptions): ApiPromise<undefined, Models.DeleteModelError>`
- **Wire**: `DELETE /repositories/{repositoryId}/models/{modelId}`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BoomiError` with `kind: "api"`, an instance of `Models.DeleteModelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseBoomiDataHubGoldenRecordsApi"` [401] `ErrorResponseBoomiDataHubGoldenRecordsApi` · `"errorResponseBoomiDataHubGoldenRecordsApi2"` [404] `ErrorResponseBoomiDataHubGoldenRecordsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Models.DeleteModelRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `repositoryId` | `path` | `string` | yes |
| `modelId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponseBoomiDataHubGoldenRecordsApi` | `errorResponseBoomiDataHubGoldenRecordsApiSchema` | `src/models/error-response-boomi-data-hub-golden-records-api.ts` |

### getModel

- **Server**: `defaultBoomiDataHubGoldenRecordsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getModel(request: Models.GetModelRequest, options?: RequestOptions): ApiPromise<Model, Models.GetModelError>`
- **Wire**: `GET /repositories/{repositoryId}/models/{modelId}`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Model`
- **Error**: `BoomiError` with `kind: "api"`, an instance of `Models.GetModelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseBoomiDataHubGoldenRecordsApi"` [401] `ErrorResponseBoomiDataHubGoldenRecordsApi` · `"errorResponseBoomiDataHubGoldenRecordsApi2"` [404] `ErrorResponseBoomiDataHubGoldenRecordsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Models.GetModelRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `repositoryId` | `path` | `string` | yes |
| `modelId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Model` | `modelSchema` | `src/models/model.ts` |
| `ErrorResponseBoomiDataHubGoldenRecordsApi` | `errorResponseBoomiDataHubGoldenRecordsApiSchema` | `src/models/error-response-boomi-data-hub-golden-records-api.ts` |

### listModels

- **Server**: `defaultBoomiDataHubGoldenRecordsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listModels(request: Models.ListModelsRequest, options?: RequestOptions): ApiPromise<RepositoriesModelsResponse, Models.ListModelsError>`
- **Wire**: `GET /repositories/{repositoryId}/models`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RepositoriesModelsResponse`
- **Error**: `BoomiError` with `kind: "api"`, an instance of `Models.ListModelsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseBoomiDataHubGoldenRecordsApi"` [401] `ErrorResponseBoomiDataHubGoldenRecordsApi` · `"errorResponseBoomiDataHubGoldenRecordsApi2"` [404] `ErrorResponseBoomiDataHubGoldenRecordsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Models.ListModelsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `repositoryId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RepositoriesModelsResponse` | `repositoriesModelsResponseSchema` | `src/models/repositories-models-response.ts` |
| `ErrorResponseBoomiDataHubGoldenRecordsApi` | `errorResponseBoomiDataHubGoldenRecordsApiSchema` | `src/models/error-response-boomi-data-hub-golden-records-api.ts` |

### publishModel

- **Server**: `defaultBoomiDataHubGoldenRecordsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `publishModel(request: Models.PublishModelRequest, options?: RequestOptions): ApiPromise<Model, Models.PublishModelError>`
- **Wire**: `POST /repositories/{repositoryId}/models/{modelId}/publish`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Model`
- **Error**: `BoomiError` with `kind: "api"`, an instance of `Models.PublishModelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseBoomiDataHubGoldenRecordsApi"` [401] `ErrorResponseBoomiDataHubGoldenRecordsApi` · `"errorResponseBoomiDataHubGoldenRecordsApi2"` [404] `ErrorResponseBoomiDataHubGoldenRecordsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Models.PublishModelRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `repositoryId` | `path` | `string` | yes |
| `modelId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Model` | `modelSchema` | `src/models/model.ts` |
| `ErrorResponseBoomiDataHubGoldenRecordsApi` | `errorResponseBoomiDataHubGoldenRecordsApiSchema` | `src/models/error-response-boomi-data-hub-golden-records-api.ts` |

