<!-- Generated file — do not edit; regenerated with the SDK. -->

# Experiments — operations

Accessor: `client.experiments` · Source: `src/resources/experiments.ts` · 8 operations · Request and error types: namespace `Experiments`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `syllable-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### experimentsCreate

- **Signature**: `experimentsCreate(request: Experiments.ExperimentsCreateRequest, options?: RequestOptions): ApiPromise<ExperimentResponse, Experiments.ExperimentsCreateError>`
- **Wire**: `POST /api/v1/experiments/`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ExperimentResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Experiments.ExperimentsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error409"` [409] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Experiments.ExperimentsCreateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ExperimentCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ExperimentCreateRequest` | `experimentCreateRequestSchema` | `src/models/experiment-create-request.ts` |
| `ExperimentResponse` | `experimentResponseSchema` | `src/models/experiment-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### experimentsDelete

- **Signature**: `experimentsDelete(request: Experiments.ExperimentsDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Experiments.ExperimentsDeleteError>`
- **Wire**: `DELETE /api/v1/experiments/{experiment_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Experiments.ExperimentsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Experiments.ExperimentsDeleteRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `experimentId` | `path` | `experiment_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### experimentsGetById

- **Signature**: `experimentsGetById(request: Experiments.ExperimentsGetByIdRequest, options?: RequestOptions): ApiPromise<ExperimentResponse, Experiments.ExperimentsGetByIdError>`
- **Wire**: `GET /api/v1/experiments/{experiment_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ExperimentResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Experiments.ExperimentsGetByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Experiments.ExperimentsGetByIdRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `experimentId` | `path` | `experiment_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ExperimentResponse` | `experimentResponseSchema` | `src/models/experiment-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### experimentsList

- **Signature**: `experimentsList(request: Experiments.ExperimentsListRequest, options?: RequestOptions): ApiPromise<ListResponseExperimentResponse, Experiments.ExperimentsListError>`
- **Wire**: `GET /api/v1/experiments/`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseExperimentResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Experiments.ExperimentsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Experiments.ExperimentsListRequest` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `page` | `query` | — | `Page` | no | — |
| `limit` | `query` | — | `number` | no | `25` |
| `searchFields` | `query` | `search_fields` | `ExperimentProperties[]` | no | — |
| `searchFieldValues` | `query` | `search_field_values` | `string[]` | no | — |
| `orderBy` | `query` | `order_by` | `OrderBy6` | no | — |
| `orderByDirection` | `query` | `order_by_direction` | `OrderByDirection1` | no | — |
| `fields` | `query` | — | `Fields6` | no | — |
| `startDatetime` | `query` | `start_datetime` | `StartDatetime3` | no | — |
| `endDatetime` | `query` | `end_datetime` | `EndDatetime3` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Page` | `pageSchema` | `src/models/unions/page.ts` |
| `ExperimentProperties` | `experimentPropertiesSchema` | `src/models/experiment-properties.ts` |
| `OrderBy6` | `orderBy6Schema` | `src/models/unions/order-by6.ts` |
| `OrderByDirection1` | `orderByDirection1Schema` | `src/models/unions/order-by-direction1.ts` |
| `Fields6` | `fields6Schema` | `src/models/unions/fields6.ts` |
| `StartDatetime3` | `startDatetime3Schema` | `src/models/unions/start-datetime3.ts` |
| `EndDatetime3` | `endDatetime3Schema` | `src/models/unions/end-datetime3.ts` |
| `ListResponseExperimentResponse` | `listResponseExperimentResponseSchema` | `src/models/list-response-experiment-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### experimentsResults

- **Signature**: `experimentsResults(request: Experiments.ExperimentsResultsRequest, options?: RequestOptions): ApiPromise<ExperimentResultsResponse, Experiments.ExperimentsResultsError>`
- **Wire**: `GET /api/v1/experiments/{experiment_id}/results`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ExperimentResultsResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Experiments.ExperimentsResultsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Experiments.ExperimentsResultsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `experimentId` | `path` | `experiment_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ExperimentResultsResponse` | `experimentResultsResponseSchema` | `src/models/experiment-results-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### experimentsStart

- **Signature**: `experimentsStart(request: Experiments.ExperimentsStartRequest, options?: RequestOptions): ApiPromise<ExperimentStartResponse, Experiments.ExperimentsStartError>`
- **Wire**: `POST /api/v1/experiments/{experiment_id}/start`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ExperimentStartResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Experiments.ExperimentsStartError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error409"` [409] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Experiments.ExperimentsStartRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `experimentId` | `path` | `experiment_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ExperimentStartResponse` | `experimentStartResponseSchema` | `src/models/experiment-start-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### experimentsStop

- **Signature**: `experimentsStop(request: Experiments.ExperimentsStopRequest, options?: RequestOptions): ApiPromise<ExperimentResponse, Experiments.ExperimentsStopError>`
- **Wire**: `POST /api/v1/experiments/{experiment_id}/stop`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ExperimentResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Experiments.ExperimentsStopError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Experiments.ExperimentsStopRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `experimentId` | `path` | `experiment_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ExperimentResponse` | `experimentResponseSchema` | `src/models/experiment-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### experimentsUpdate

- **Signature**: `experimentsUpdate(request: Experiments.ExperimentsUpdateRequest, options?: RequestOptions): ApiPromise<ExperimentResponse, Experiments.ExperimentsUpdateError>`
- **Wire**: `PUT /api/v1/experiments/{experiment_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ExperimentResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Experiments.ExperimentsUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error409"` [409] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Experiments.ExperimentsUpdateRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `experimentId` | `path` | `experiment_id` | `number` | yes |
| `body` | `body` | — | `ExperimentUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ExperimentUpdateRequest` | `experimentUpdateRequestSchema` | `src/models/experiment-update-request.ts` |
| `ExperimentResponse` | `experimentResponseSchema` | `src/models/experiment-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

