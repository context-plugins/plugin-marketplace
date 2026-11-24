<!-- Generated file — do not edit; regenerated with the SDK. -->

# Agent — operations

Accessor: `client.agent` · Source: `src/resources/agent.ts` · 61 operations · Request and error types: namespace `Agent`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dynamic-feed`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### postV1Explain

- **Signature**: `postV1Explain(request?: Agent.PostV1ExplainRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Agent.PostV1ExplainError>`
- **Wire**: `POST /v1/explain`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Agent.PostV1ExplainError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agent.PostV1ExplainRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `subject` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### schemasIndexSchemasIndexJsonGet

- **Signature**: `schemasIndexSchemasIndexJsonGet(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `GET /schemas/index.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### v1AgentReceiptV1AgentReceiptPost

- **Signature**: `v1AgentReceiptV1AgentReceiptPost(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `POST /v1/agent/receipt`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### v1AsofV1AsofGet

- **Signature**: `v1AsofV1AsofGet(request: Agent.V1AsofV1AsofGetRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Agent.V1AsofV1AsofGetError>`
- **Wire**: `GET /v1/asof`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Agent.V1AsofV1AsofGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agent.V1AsofV1AsofGetRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `tool` | `query` | — | `string` | yes |
| `t` | `query` | — | `string` | yes |
| `xApiKey` | `header` | `x-api-key` | `XApiKey` | no |
| `xRapidapiProxySecret` | `header` | `x-rapidapi-proxy-secret` | `XRapidapiProxySecret` | no |
| `xRapidapiUser` | `header` | `x-rapidapi-user` | `XRapidapiUser` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `XApiKey` | `xApiKeySchema` | `src/models/unions/xapi-key.ts` |
| `XRapidapiProxySecret` | `xRapidapiProxySecretSchema` | `src/models/unions/xrapidapi-proxy-secret.ts` |
| `XRapidapiUser` | `xRapidapiUserSchema` | `src/models/unions/xrapidapi-user.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### v1AttestV1AttestGet

- **Signature**: `v1AttestV1AttestGet(request: Agent.V1AttestV1AttestGetRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Agent.V1AttestV1AttestGetError>`
- **Wire**: `GET /v1/attest`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Agent.V1AttestV1AttestGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agent.V1AttestV1AttestGetRequest` (6):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `metric` | `query` | `string` | yes | — |
| `threshold` | `query` | `number` | yes | — |
| `op` | `query` | `string` | no | `"gte"` |
| `lat` | `query` | `number` | no | — |
| `lon` | `query` | `number` | no | — |
| `city` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### v1BatchV1BatchPost

- **Signature**: `v1BatchV1BatchPost(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `POST /v1/batch`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### v1BenchmarkHistoryV1BenchmarkHistoryGet

- **Signature**: `v1BenchmarkHistoryV1BenchmarkHistoryGet(request?: Agent.V1BenchmarkHistoryV1BenchmarkHistoryGetRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Agent.V1BenchmarkHistoryV1BenchmarkHistoryGetError>`
- **Wire**: `GET /v1/benchmark/history`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Agent.V1BenchmarkHistoryV1BenchmarkHistoryGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agent.V1BenchmarkHistoryV1BenchmarkHistoryGetRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `days` | `query` | `number` | no | `90` |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### v1BenchmarkV1BenchmarkGet

- **Signature**: `v1BenchmarkV1BenchmarkGet(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `GET /v1/benchmark`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### v1BundleV1BundlesBundleIdGet

- **Signature**: `v1BundleV1BundlesBundleIdGet(request: Agent.V1BundleV1BundlesBundleIdGetRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Agent.V1BundleV1BundlesBundleIdGetError>`
- **Wire**: `GET /v1/bundles/{bundle_id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Agent.V1BundleV1BundlesBundleIdGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agent.V1BundleV1BundlesBundleIdGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `bundleId` | `path` | `bundle_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### v1BundlesV1BundlesGet

- **Signature**: `v1BundlesV1BundlesGet(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `GET /v1/bundles`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### v1BushfireV1BushfireGet

- **Signature**: `v1BushfireV1BushfireGet(request?: Agent.V1BushfireV1BushfireGetRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Agent.V1BushfireV1BushfireGetError>`
- **Wire**: `GET /v1/bushfire`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Agent.V1BushfireV1BushfireGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agent.V1BushfireV1BushfireGetRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `lat` | `query` | — | `number` | no | — |
| `lon` | `query` | — | `number` | no | — |
| `radiusKm` | `query` | `radius_km` | `number` | no | `150` |
| `state` | `query` | — | `string` | no | — |
| `limit` | `query` | — | `number` | no | `20` |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### v1CheckpointProofV1CheckpointsDayProofGet

- **Signature**: `v1CheckpointProofV1CheckpointsDayProofGet(request: Agent.V1CheckpointProofV1CheckpointsDayProofGetRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Agent.V1CheckpointProofV1CheckpointsDayProofGetError>`
- **Wire**: `GET /v1/checkpoints/{day}/proof`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Agent.V1CheckpointProofV1CheckpointsDayProofGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agent.V1CheckpointProofV1CheckpointsDayProofGetRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `day` | `path` | `string` | yes | — |
| `kind` | `query` | `string` | no | `"ots"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### v1CheckpointsV1CheckpointsGet

- **Signature**: `v1CheckpointsV1CheckpointsGet(request?: Agent.V1CheckpointsV1CheckpointsGetRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Agent.V1CheckpointsV1CheckpointsGetError>`
- **Wire**: `GET /v1/checkpoints`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Agent.V1CheckpointsV1CheckpointsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agent.V1CheckpointsV1CheckpointsGetRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `limit` | `query` | `number` | no | `30` |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### v1DiscoverGetV1DiscoverGet

- **Signature**: `v1DiscoverGetV1DiscoverGet(request?: Agent.V1DiscoverGetV1DiscoverGetRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Agent.V1DiscoverGetV1DiscoverGetError>`
- **Wire**: `GET /v1/discover`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Agent.V1DiscoverGetV1DiscoverGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agent.V1DiscoverGetV1DiscoverGetRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `need` | `query` | `string` | no | — |
| `limit` | `query` | `number` | no | `8` |
| `external` | `query` | `number` | no | `1` |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### v1DiscoverPostV1DiscoverPost

- **Signature**: `v1DiscoverPostV1DiscoverPost(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `POST /v1/discover`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### v1DriftV1DriftPost

- **Signature**: `v1DriftV1DriftPost(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `POST /v1/drift`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### v1EvalReceiptSampleV1EvalReceiptSampleGet

- **Signature**: `v1EvalReceiptSampleV1EvalReceiptSampleGet(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `GET /v1/eval-receipt/sample`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### v1EvalReceiptV1EvalReceiptPost

- **Signature**: `v1EvalReceiptV1EvalReceiptPost(request?: Agent.V1EvalReceiptV1EvalReceiptPostRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Agent.V1EvalReceiptV1EvalReceiptPostError>`
- **Wire**: `POST /v1/eval-receipt`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Agent.V1EvalReceiptV1EvalReceiptPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agent.V1EvalReceiptV1EvalReceiptPostRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xApiKey` | `header` | `x-api-key` | `XApiKey` | no |
| `xRapidapiProxySecret` | `header` | `x-rapidapi-proxy-secret` | `XRapidapiProxySecret` | no |
| `xRapidapiUser` | `header` | `x-rapidapi-user` | `XRapidapiUser` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `XApiKey` | `xApiKeySchema` | `src/models/unions/xapi-key.ts` |
| `XRapidapiProxySecret` | `xRapidapiProxySecretSchema` | `src/models/unions/xrapidapi-proxy-secret.ts` |
| `XRapidapiUser` | `xRapidapiUserSchema` | `src/models/unions/xrapidapi-user.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### v1EvidenceWildfireV1EvidenceWildfireGet

- **Signature**: `v1EvidenceWildfireV1EvidenceWildfireGet(request: Agent.V1EvidenceWildfireV1EvidenceWildfireGetRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Agent.V1EvidenceWildfireV1EvidenceWildfireGetError>`
- **Wire**: `GET /v1/evidence/wildfire`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Agent.V1EvidenceWildfireV1EvidenceWildfireGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agent.V1EvidenceWildfireV1EvidenceWildfireGetRequest` (6):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `lat` | `query` | — | `number` | yes | — |
| `lon` | `query` | — | `number` | yes | — |
| `detectedAt` | `query` | `detected_at` | `DetectedAt` | no | — |
| `detector` | `query` | — | `string` | no | `"the detector"` |
| `place` | `query` | — | `Place` | no | — |
| `confidence` | `query` | — | `Confidence` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `DetectedAt` | `detectedAtSchema` | `src/models/unions/detected-at.ts` |
| `Place` | `placeSchema` | `src/models/unions/place.ts` |
| `Confidence` | `confidenceSchema` | `src/models/unions/confidence.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### v1ExplainV1ExplainGet

- **Signature**: `v1ExplainV1ExplainGet(request?: Agent.V1ExplainV1ExplainGetRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Agent.V1ExplainV1ExplainGetError>`
- **Wire**: `GET /v1/explain`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Agent.V1ExplainV1ExplainGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agent.V1ExplainV1ExplainGetRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `subject` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### v1ExposureReportV1ExposureReportGet

- **Signature**: `v1ExposureReportV1ExposureReportGet(request?: Agent.V1ExposureReportV1ExposureReportGetRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Agent.V1ExposureReportV1ExposureReportGetError>`
- **Wire**: `GET /v1/exposure-report`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Agent.V1ExposureReportV1ExposureReportGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agent.V1ExposureReportV1ExposureReportGetRequest` (6):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `perils` | `query` | — | `string` | no | `"wind,flood,wildfire"` |
| `lat` | `query` | — | `number` | no | `-33.8688` |
| `lon` | `query` | — | `number` | no | `151.2093` |
| `place` | `query` | — | `Place` | no | — |
| `organisation` | `query` | — | `Organisation` | no | — |
| `useCase` | `query` | `use_case` | `UseCase` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Place` | `placeSchema` | `src/models/unions/place.ts` |
| `Organisation` | `organisationSchema` | `src/models/unions/organisation.ts` |
| `UseCase` | `useCaseSchema` | `src/models/unions/use-case.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### v1GuardV1GuardPost

- **Signature**: `v1GuardV1GuardPost(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `POST /v1/guard`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### v1IndexV1Get

- **Signature**: `v1IndexV1Get(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `GET /v1`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### v1InferenceReceiptSampleV1InferenceReceiptSampleGet

- **Signature**: `v1InferenceReceiptSampleV1InferenceReceiptSampleGet(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `GET /v1/inference-receipt/sample`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### v1InferenceReceiptV1InferenceReceiptPost

- **Signature**: `v1InferenceReceiptV1InferenceReceiptPost(request?: Agent.V1InferenceReceiptV1InferenceReceiptPostRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Agent.V1InferenceReceiptV1InferenceReceiptPostError>`
- **Wire**: `POST /v1/inference-receipt`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Agent.V1InferenceReceiptV1InferenceReceiptPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agent.V1InferenceReceiptV1InferenceReceiptPostRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xApiKey` | `header` | `x-api-key` | `XApiKey` | no |
| `xRapidapiProxySecret` | `header` | `x-rapidapi-proxy-secret` | `XRapidapiProxySecret` | no |
| `xRapidapiUser` | `header` | `x-rapidapi-user` | `XRapidapiUser` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `XApiKey` | `xApiKeySchema` | `src/models/unions/xapi-key.ts` |
| `XRapidapiProxySecret` | `xRapidapiProxySecretSchema` | `src/models/unions/xrapidapi-proxy-secret.ts` |
| `XRapidapiUser` | `xRapidapiUserSchema` | `src/models/unions/xrapidapi-user.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### v1IntensityV1IntensityGet

- **Signature**: `v1IntensityV1IntensityGet(request: Agent.V1IntensityV1IntensityGetRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Agent.V1IntensityV1IntensityGetError>`
- **Wire**: `GET /v1/intensity`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Agent.V1IntensityV1IntensityGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agent.V1IntensityV1IntensityGetRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `lat` | `query` | `number` | yes | — |
| `lon` | `query` | `number` | yes | — |
| `peril` | `query` | `string` | no | `"flood"` |
| `metric` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### v1MeV1MeGet

- **Signature**: `v1MeV1MeGet(request?: Agent.V1MeV1MeGetRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Agent.V1MeV1MeGetError>`
- **Wire**: `GET /v1/me`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Agent.V1MeV1MeGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agent.V1MeV1MeGetRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xApiKey` | `header` | `x-api-key` | `XApiKey` | no |
| `xRapidapiProxySecret` | `header` | `x-rapidapi-proxy-secret` | `XRapidapiProxySecret` | no |
| `xRapidapiUser` | `header` | `x-rapidapi-user` | `XRapidapiUser` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `XApiKey` | `xApiKeySchema` | `src/models/unions/xapi-key.ts` |
| `XRapidapiProxySecret` | `xRapidapiProxySecretSchema` | `src/models/unions/xrapidapi-proxy-secret.ts` |
| `XRapidapiUser` | `xRapidapiUserSchema` | `src/models/unions/xrapidapi-user.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### v1NearbyV1NearbyGet

- **Signature**: `v1NearbyV1NearbyGet(request: Agent.V1NearbyV1NearbyGetRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Agent.V1NearbyV1NearbyGetError>`
- **Wire**: `GET /v1/nearby`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Agent.V1NearbyV1NearbyGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agent.V1NearbyV1NearbyGetRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `lat` | `query` | — | `number` | yes | — |
| `lon` | `query` | — | `number` | yes | — |
| `radiusKm` | `query` | `radius_km` | `number` | no | `500` |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### v1NotarizeV1NotarizePost

- **Signature**: `v1NotarizeV1NotarizePost(request?: Agent.V1NotarizeV1NotarizePostRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Agent.V1NotarizeV1NotarizePostError>`
- **Wire**: `POST /v1/notarize`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Agent.V1NotarizeV1NotarizePostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agent.V1NotarizeV1NotarizePostRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xApiKey` | `header` | `x-api-key` | `XApiKey` | no |
| `xRapidapiProxySecret` | `header` | `x-rapidapi-proxy-secret` | `XRapidapiProxySecret` | no |
| `xRapidapiUser` | `header` | `x-rapidapi-user` | `XRapidapiUser` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `XApiKey` | `xApiKeySchema` | `src/models/unions/xapi-key.ts` |
| `XRapidapiProxySecret` | `xRapidapiProxySecretSchema` | `src/models/unions/xrapidapi-proxy-secret.ts` |
| `XRapidapiUser` | `xRapidapiUserSchema` | `src/models/unions/xrapidapi-user.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### v1NotaryEntryV1NotaryLogIdxGet

- **Signature**: `v1NotaryEntryV1NotaryLogIdxGet(request: Agent.V1NotaryEntryV1NotaryLogIdxGetRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Agent.V1NotaryEntryV1NotaryLogIdxGetError>`
- **Wire**: `GET /v1/notary/log/{idx}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Agent.V1NotaryEntryV1NotaryLogIdxGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agent.V1NotaryEntryV1NotaryLogIdxGetRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `idx` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### v1NotaryFeedRegisterV1NotaryFeedsPost

- **Signature**: `v1NotaryFeedRegisterV1NotaryFeedsPost(request?: Agent.V1NotaryFeedRegisterV1NotaryFeedsPostRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Agent.V1NotaryFeedRegisterV1NotaryFeedsPostError>`
- **Wire**: `POST /v1/notary/feeds`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Agent.V1NotaryFeedRegisterV1NotaryFeedsPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agent.V1NotaryFeedRegisterV1NotaryFeedsPostRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xApiKey` | `header` | `x-api-key` | `XApiKey` | no |
| `xRapidapiProxySecret` | `header` | `x-rapidapi-proxy-secret` | `XRapidapiProxySecret` | no |
| `xRapidapiUser` | `header` | `x-rapidapi-user` | `XRapidapiUser` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `XApiKey` | `xApiKeySchema` | `src/models/unions/xapi-key.ts` |
| `XRapidapiProxySecret` | `xRapidapiProxySecretSchema` | `src/models/unions/xrapidapi-proxy-secret.ts` |
| `XRapidapiUser` | `xRapidapiUserSchema` | `src/models/unions/xrapidapi-user.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### v1NotaryFeedsListV1NotaryFeedsGet

- **Signature**: `v1NotaryFeedsListV1NotaryFeedsGet(request?: Agent.V1NotaryFeedsListV1NotaryFeedsGetRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Agent.V1NotaryFeedsListV1NotaryFeedsGetError>`
- **Wire**: `GET /v1/notary/feeds`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Agent.V1NotaryFeedsListV1NotaryFeedsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agent.V1NotaryFeedsListV1NotaryFeedsGetRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xApiKey` | `header` | `x-api-key` | `XApiKey` | no |
| `xRapidapiProxySecret` | `header` | `x-rapidapi-proxy-secret` | `XRapidapiProxySecret` | no |
| `xRapidapiUser` | `header` | `x-rapidapi-user` | `XRapidapiUser` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `XApiKey` | `xApiKeySchema` | `src/models/unions/xapi-key.ts` |
| `XRapidapiProxySecret` | `xRapidapiProxySecretSchema` | `src/models/unions/xrapidapi-proxy-secret.ts` |
| `XRapidapiUser` | `xRapidapiUserSchema` | `src/models/unions/xrapidapi-user.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### v1NotaryHeadV1NotaryLogHeadGet

- **Signature**: `v1NotaryHeadV1NotaryLogHeadGet(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `GET /v1/notary/log/head`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### v1NotaryLogV1NotaryLogGet

- **Signature**: `v1NotaryLogV1NotaryLogGet(request?: Agent.V1NotaryLogV1NotaryLogGetRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Agent.V1NotaryLogV1NotaryLogGetError>`
- **Wire**: `GET /v1/notary/log`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Agent.V1NotaryLogV1NotaryLogGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agent.V1NotaryLogV1NotaryLogGetRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `limit` | `query` | `number` | no | `50` |
| `before` | `query` | `number` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### v1NotaryProofV1NotaryLogIdxProofGet

- **Signature**: `v1NotaryProofV1NotaryLogIdxProofGet(request: Agent.V1NotaryProofV1NotaryLogIdxProofGetRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Agent.V1NotaryProofV1NotaryLogIdxProofGetError>`
- **Wire**: `GET /v1/notary/log/{idx}/proof`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Agent.V1NotaryProofV1NotaryLogIdxProofGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agent.V1NotaryProofV1NotaryLogIdxProofGetRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `idx` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### v1ProAsofV1ProAsofPost

- **Signature**: `v1ProAsofV1ProAsofPost(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `POST /v1/pro/asof`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### v1ProBatchV1ProBatchPost

- **Signature**: `v1ProBatchV1ProBatchPost(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `POST /v1/pro/batch`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### v1ProCatalogV1ProCatalogGet

- **Signature**: `v1ProCatalogV1ProCatalogGet(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `GET /v1/pro/catalog`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### v1ProToolDiscoverV1ProToolToolGet

- **Signature**: `v1ProToolDiscoverV1ProToolToolGet(request: Agent.V1ProToolDiscoverV1ProToolToolGetRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Agent.V1ProToolDiscoverV1ProToolToolGetError>`
- **Wire**: `GET /v1/pro/tool/{tool}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Agent.V1ProToolDiscoverV1ProToolToolGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agent.V1ProToolDiscoverV1ProToolToolGetRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `tool` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### v1ProToolV1ProToolToolPost

- **Signature**: `v1ProToolV1ProToolToolPost(request: Agent.V1ProToolV1ProToolToolPostRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Agent.V1ProToolV1ProToolToolPostError>`
- **Wire**: `POST /v1/pro/tool/{tool}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Agent.V1ProToolV1ProToolToolPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agent.V1ProToolV1ProToolToolPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `tool` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### v1ProxyWitnessV1ProxyWitnessPost

- **Signature**: `v1ProxyWitnessV1ProxyWitnessPost(request?: Agent.V1ProxyWitnessV1ProxyWitnessPostRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Agent.V1ProxyWitnessV1ProxyWitnessPostError>`
- **Wire**: `POST /v1/proxy-witness`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Agent.V1ProxyWitnessV1ProxyWitnessPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agent.V1ProxyWitnessV1ProxyWitnessPostRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xApiKey` | `header` | `x-api-key` | `XApiKey` | no |
| `xRapidapiProxySecret` | `header` | `x-rapidapi-proxy-secret` | `XRapidapiProxySecret` | no |
| `xRapidapiUser` | `header` | `x-rapidapi-user` | `XRapidapiUser` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `XApiKey` | `xApiKeySchema` | `src/models/unions/xapi-key.ts` |
| `XRapidapiProxySecret` | `xRapidapiProxySecretSchema` | `src/models/unions/xrapidapi-proxy-secret.ts` |
| `XRapidapiUser` | `xRapidapiUserSchema` | `src/models/unions/xrapidapi-user.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### v1ReceiptV1ReceiptPost

- **Signature**: `v1ReceiptV1ReceiptPost(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `POST /v1/receipt`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### v1SnapshotV1SnapshotGet

- **Signature**: `v1SnapshotV1SnapshotGet(request?: Agent.V1SnapshotV1SnapshotGetRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Agent.V1SnapshotV1SnapshotGetError>`
- **Wire**: `GET /v1/snapshot`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Agent.V1SnapshotV1SnapshotGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agent.V1SnapshotV1SnapshotGetRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `date` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### v1SourcesV1SourcesGet

- **Signature**: `v1SourcesV1SourcesGet(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `GET /v1/sources`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### v1StampV1StampPost

- **Signature**: `v1StampV1StampPost(request?: Agent.V1StampV1StampPostRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Agent.V1StampV1StampPostError>`
- **Wire**: `POST /v1/stamp`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Agent.V1StampV1StampPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agent.V1StampV1StampPostRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xApiKey` | `header` | `x-api-key` | `XApiKey` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `XApiKey` | `xApiKeySchema` | `src/models/unions/xapi-key.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### v1StationGetV1StationStationIdGet

- **Signature**: `v1StationGetV1StationStationIdGet(request: Agent.V1StationGetV1StationStationIdGetRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Agent.V1StationGetV1StationStationIdGetError>`
- **Wire**: `GET /v1/station/{station_id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Agent.V1StationGetV1StationStationIdGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agent.V1StationGetV1StationStationIdGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `stationId` | `path` | `station_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### v1StationReadingV1StationReadingPost

- **Signature**: `v1StationReadingV1StationReadingPost(request?: Agent.V1StationReadingV1StationReadingPostRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Agent.V1StationReadingV1StationReadingPostError>`
- **Wire**: `POST /v1/station/reading`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Agent.V1StationReadingV1StationReadingPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agent.V1StationReadingV1StationReadingPostRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xApiKey` | `header` | `x-api-key` | `XApiKey` | no |
| `xRapidapiProxySecret` | `header` | `x-rapidapi-proxy-secret` | `XRapidapiProxySecret` | no |
| `xRapidapiUser` | `header` | `x-rapidapi-user` | `XRapidapiUser` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `XApiKey` | `xApiKeySchema` | `src/models/unions/xapi-key.ts` |
| `XRapidapiProxySecret` | `xRapidapiProxySecretSchema` | `src/models/unions/xrapidapi-proxy-secret.ts` |
| `XRapidapiUser` | `xRapidapiUserSchema` | `src/models/unions/xrapidapi-user.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### v1StationRegisterV1StationRegisterPost

- **Signature**: `v1StationRegisterV1StationRegisterPost(request?: Agent.V1StationRegisterV1StationRegisterPostRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Agent.V1StationRegisterV1StationRegisterPostError>`
- **Wire**: `POST /v1/station/register`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Agent.V1StationRegisterV1StationRegisterPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agent.V1StationRegisterV1StationRegisterPostRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xApiKey` | `header` | `x-api-key` | `XApiKey` | no |
| `xRapidapiProxySecret` | `header` | `x-rapidapi-proxy-secret` | `XRapidapiProxySecret` | no |
| `xRapidapiUser` | `header` | `x-rapidapi-user` | `XRapidapiUser` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `XApiKey` | `xApiKeySchema` | `src/models/unions/xapi-key.ts` |
| `XRapidapiProxySecret` | `xRapidapiProxySecretSchema` | `src/models/unions/xrapidapi-proxy-secret.ts` |
| `XRapidapiUser` | `xRapidapiUserSchema` | `src/models/unions/xrapidapi-user.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### v1StreamV1StreamGet

- **Signature**: `v1StreamV1StreamGet(request?: Agent.V1StreamV1StreamGetRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Agent.V1StreamV1StreamGetError>`
- **Wire**: `GET /v1/stream`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Agent.V1StreamV1StreamGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agent.V1StreamV1StreamGetRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `tool` | `query` | `string` | no | — |
| `args` | `query` | `string` | no | — |
| `interval` | `query` | `number` | no | `15` |
| `count` | `query` | `number` | no | `20` |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### v1TriggerReceiptV1TriggerReceiptGet

- **Signature**: `v1TriggerReceiptV1TriggerReceiptGet(request: Agent.V1TriggerReceiptV1TriggerReceiptGetRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Agent.V1TriggerReceiptV1TriggerReceiptGetError>`
- **Wire**: `GET /v1/trigger-receipt`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Agent.V1TriggerReceiptV1TriggerReceiptGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agent.V1TriggerReceiptV1TriggerReceiptGetRequest` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `metric` | `query` | — | `string` | yes | — |
| `threshold` | `query` | — | `number` | yes | — |
| `op` | `query` | — | `string` | no | `"gte"` |
| `lat` | `query` | — | `number` | no | — |
| `lon` | `query` | — | `number` | no | — |
| `city` | `query` | — | `string` | no | — |
| `peril` | `query` | — | `string` | no | — |
| `contractRef` | `query` | `contract_ref` | `string` | no | — |
| `methodology` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### v1VcV1VcPost

- **Signature**: `v1VcV1VcPost(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `POST /v1/vc`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### v1WatchlistDeleteV1WatchlistDelete

- **Signature**: `v1WatchlistDeleteV1WatchlistDelete(request?: Agent.V1WatchlistDeleteV1WatchlistDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Agent.V1WatchlistDeleteV1WatchlistDeleteError>`
- **Wire**: `DELETE /v1/watchlist`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Agent.V1WatchlistDeleteV1WatchlistDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agent.V1WatchlistDeleteV1WatchlistDeleteRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `label` | `query` | — | `string` | no |
| `xApiKey` | `header` | `x-api-key` | `XApiKey` | no |
| `xRapidapiProxySecret` | `header` | `x-rapidapi-proxy-secret` | `XRapidapiProxySecret` | no |
| `xRapidapiUser` | `header` | `x-rapidapi-user` | `XRapidapiUser` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `XApiKey` | `xApiKeySchema` | `src/models/unions/xapi-key.ts` |
| `XRapidapiProxySecret` | `xRapidapiProxySecretSchema` | `src/models/unions/xrapidapi-proxy-secret.ts` |
| `XRapidapiUser` | `xRapidapiUserSchema` | `src/models/unions/xrapidapi-user.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### v1WatchlistGetV1WatchlistGet

- **Signature**: `v1WatchlistGetV1WatchlistGet(request?: Agent.V1WatchlistGetV1WatchlistGetRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Agent.V1WatchlistGetV1WatchlistGetError>`
- **Wire**: `GET /v1/watchlist`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Agent.V1WatchlistGetV1WatchlistGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agent.V1WatchlistGetV1WatchlistGetRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `pull` | `query` | — | `boolean` | no | `false` |
| `xApiKey` | `header` | `x-api-key` | `XApiKey` | no | — |
| `xRapidapiProxySecret` | `header` | `x-rapidapi-proxy-secret` | `XRapidapiProxySecret` | no | — |
| `xRapidapiUser` | `header` | `x-rapidapi-user` | `XRapidapiUser` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `XApiKey` | `xApiKeySchema` | `src/models/unions/xapi-key.ts` |
| `XRapidapiProxySecret` | `xRapidapiProxySecretSchema` | `src/models/unions/xrapidapi-proxy-secret.ts` |
| `XRapidapiUser` | `xRapidapiUserSchema` | `src/models/unions/xrapidapi-user.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### v1WatchlistPostV1WatchlistPost

- **Signature**: `v1WatchlistPostV1WatchlistPost(request?: Agent.V1WatchlistPostV1WatchlistPostRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Agent.V1WatchlistPostV1WatchlistPostError>`
- **Wire**: `POST /v1/watchlist`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Agent.V1WatchlistPostV1WatchlistPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agent.V1WatchlistPostV1WatchlistPostRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xApiKey` | `header` | `x-api-key` | `XApiKey` | no |
| `xRapidapiProxySecret` | `header` | `x-rapidapi-proxy-secret` | `XRapidapiProxySecret` | no |
| `xRapidapiUser` | `header` | `x-rapidapi-user` | `XRapidapiUser` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `XApiKey` | `xApiKeySchema` | `src/models/unions/xapi-key.ts` |
| `XRapidapiProxySecret` | `xRapidapiProxySecretSchema` | `src/models/unions/xrapidapi-proxy-secret.ts` |
| `XRapidapiUser` | `xRapidapiUserSchema` | `src/models/unions/xrapidapi-user.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### v1WebhooksCreateV1WebhooksPost

- **Signature**: `v1WebhooksCreateV1WebhooksPost(request?: Agent.V1WebhooksCreateV1WebhooksPostRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Agent.V1WebhooksCreateV1WebhooksPostError>`
- **Wire**: `POST /v1/webhooks`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Agent.V1WebhooksCreateV1WebhooksPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agent.V1WebhooksCreateV1WebhooksPostRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xApiKey` | `header` | `x-api-key` | `XApiKey` | no |
| `xRapidapiProxySecret` | `header` | `x-rapidapi-proxy-secret` | `XRapidapiProxySecret` | no |
| `xRapidapiUser` | `header` | `x-rapidapi-user` | `XRapidapiUser` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `XApiKey` | `xApiKeySchema` | `src/models/unions/xapi-key.ts` |
| `XRapidapiProxySecret` | `xRapidapiProxySecretSchema` | `src/models/unions/xrapidapi-proxy-secret.ts` |
| `XRapidapiUser` | `xRapidapiUserSchema` | `src/models/unions/xrapidapi-user.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### v1WebhooksDeleteV1WebhooksDelete

- **Signature**: `v1WebhooksDeleteV1WebhooksDelete(request?: Agent.V1WebhooksDeleteV1WebhooksDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Agent.V1WebhooksDeleteV1WebhooksDeleteError>`
- **Wire**: `DELETE /v1/webhooks`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Agent.V1WebhooksDeleteV1WebhooksDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agent.V1WebhooksDeleteV1WebhooksDeleteRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `query` | — | `number` | no | `0` |
| `xApiKey` | `header` | `x-api-key` | `XApiKey` | no | — |
| `xRapidapiProxySecret` | `header` | `x-rapidapi-proxy-secret` | `XRapidapiProxySecret` | no | — |
| `xRapidapiUser` | `header` | `x-rapidapi-user` | `XRapidapiUser` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `XApiKey` | `xApiKeySchema` | `src/models/unions/xapi-key.ts` |
| `XRapidapiProxySecret` | `xRapidapiProxySecretSchema` | `src/models/unions/xrapidapi-proxy-secret.ts` |
| `XRapidapiUser` | `xRapidapiUserSchema` | `src/models/unions/xrapidapi-user.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### v1WebhooksListV1WebhooksGet

- **Signature**: `v1WebhooksListV1WebhooksGet(request?: Agent.V1WebhooksListV1WebhooksGetRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Agent.V1WebhooksListV1WebhooksGetError>`
- **Wire**: `GET /v1/webhooks`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Agent.V1WebhooksListV1WebhooksGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agent.V1WebhooksListV1WebhooksGetRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xApiKey` | `header` | `x-api-key` | `XApiKey` | no |
| `xRapidapiProxySecret` | `header` | `x-rapidapi-proxy-secret` | `XRapidapiProxySecret` | no |
| `xRapidapiUser` | `header` | `x-rapidapi-user` | `XRapidapiUser` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `XApiKey` | `xApiKeySchema` | `src/models/unions/xapi-key.ts` |
| `XRapidapiProxySecret` | `xRapidapiProxySecretSchema` | `src/models/unions/xrapidapi-proxy-secret.ts` |
| `XRapidapiUser` | `xRapidapiUserSchema` | `src/models/unions/xrapidapi-user.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### v1WebhooksTestV1WebhooksTestPost

- **Signature**: `v1WebhooksTestV1WebhooksTestPost(request?: Agent.V1WebhooksTestV1WebhooksTestPostRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Agent.V1WebhooksTestV1WebhooksTestPostError>`
- **Wire**: `POST /v1/webhooks/test`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Agent.V1WebhooksTestV1WebhooksTestPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agent.V1WebhooksTestV1WebhooksTestPostRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xApiKey` | `header` | `x-api-key` | `XApiKey` | no |
| `xRapidapiProxySecret` | `header` | `x-rapidapi-proxy-secret` | `XRapidapiProxySecret` | no |
| `xRapidapiUser` | `header` | `x-rapidapi-user` | `XRapidapiUser` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `XApiKey` | `xApiKeySchema` | `src/models/unions/xapi-key.ts` |
| `XRapidapiProxySecret` | `xRapidapiProxySecretSchema` | `src/models/unions/xrapidapi-proxy-secret.ts` |
| `XRapidapiUser` | `xRapidapiUserSchema` | `src/models/unions/xrapidapi-user.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### v1WitnessInclusionV1WitnessIdxInclusionGet

- **Signature**: `v1WitnessInclusionV1WitnessIdxInclusionGet(request: Agent.V1WitnessInclusionV1WitnessIdxInclusionGetRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Agent.V1WitnessInclusionV1WitnessIdxInclusionGetError>`
- **Wire**: `GET /v1/witness/{idx}/inclusion`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Agent.V1WitnessInclusionV1WitnessIdxInclusionGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agent.V1WitnessInclusionV1WitnessIdxInclusionGetRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `idx` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### v1WitnessSampleV1WitnessSampleGet

- **Signature**: `v1WitnessSampleV1WitnessSampleGet(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `GET /v1/witness/sample`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### v1WitnessV1WitnessPost

- **Signature**: `v1WitnessV1WitnessPost(request?: Agent.V1WitnessV1WitnessPostRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Agent.V1WitnessV1WitnessPostError>`
- **Wire**: `POST /v1/witness`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Agent.V1WitnessV1WitnessPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agent.V1WitnessV1WitnessPostRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xApiKey` | `header` | `x-api-key` | `XApiKey` | no |
| `xRapidapiProxySecret` | `header` | `x-rapidapi-proxy-secret` | `XRapidapiProxySecret` | no |
| `xRapidapiUser` | `header` | `x-rapidapi-user` | `XRapidapiUser` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `XApiKey` | `xApiKeySchema` | `src/models/unions/xapi-key.ts` |
| `XRapidapiProxySecret` | `xRapidapiProxySecretSchema` | `src/models/unions/xrapidapi-proxy-secret.ts` |
| `XRapidapiUser` | `xRapidapiUserSchema` | `src/models/unions/xrapidapi-user.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

