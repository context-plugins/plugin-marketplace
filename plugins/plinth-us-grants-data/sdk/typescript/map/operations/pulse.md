<!-- Generated file — do not edit; regenerated with the SDK. -->

# Pulse — operations

Accessor: `client.pulse` · Source: `src/resources/pulse.ts` · 9 operations · Request and error types: namespace `Pulse`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `plinth-us-grants-data`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createPulse

- **Signature**: `createPulse(request: Pulse.CreatePulseRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Pulse.CreatePulseError>`
- **Wire**: `POST /api/v1/pulse`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `PlinthUsGrantsDataError` with `kind: "api"`, an instance of `Pulse.CreatePulseError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [401] `ApiErrorModel` · `"apiErrorModel2"` [402] `ApiErrorModel` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Pulse.CreatePulseRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PulseCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PulseCreate` | `pulseCreateSchema` | `src/models/pulse-create.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### deletePulse

- **Signature**: `deletePulse(request: Pulse.DeletePulseRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Pulse.DeletePulseError>`
- **Wire**: `DELETE /api/v1/pulse/{sub_id}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `PlinthUsGrantsDataError` with `kind: "api"`, an instance of `Pulse.DeletePulseError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [401] `ApiErrorModel` · `"apiErrorModel2"` [402] `ApiErrorModel` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Pulse.DeletePulseRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subId` | `path` | `sub_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getPulse

- **Signature**: `getPulse(request: Pulse.GetPulseRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Pulse.GetPulseError>`
- **Wire**: `GET /api/v1/pulse/{sub_id}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `PlinthUsGrantsDataError` with `kind: "api"`, an instance of `Pulse.GetPulseError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [401] `ApiErrorModel` · `"apiErrorModel2"` [402] `ApiErrorModel` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Pulse.GetPulseRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subId` | `path` | `sub_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getPulseLatest

- **Signature**: `getPulseLatest(request: Pulse.GetPulseLatestRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Pulse.GetPulseLatestError>`
- **Wire**: `GET /api/v1/pulse/{sub_id}/latest`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `PlinthUsGrantsDataError` with `kind: "api"`, an instance of `Pulse.GetPulseLatestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [401] `ApiErrorModel` · `"apiErrorModel2"` [402] `ApiErrorModel` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Pulse.GetPulseLatestRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subId` | `path` | `sub_id` | `string` | yes |
| `format` | `query` | — | `Format1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format1` | `format1Schema` | `src/models/unions/format1.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getPulseRun

- **Signature**: `getPulseRun(request: Pulse.GetPulseRunRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Pulse.GetPulseRunError>`
- **Wire**: `GET /api/v1/pulse/{sub_id}/runs/{run_id}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `PlinthUsGrantsDataError` with `kind: "api"`, an instance of `Pulse.GetPulseRunError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [401] `ApiErrorModel` · `"apiErrorModel2"` [402] `ApiErrorModel` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Pulse.GetPulseRunRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subId` | `path` | `sub_id` | `string` | yes |
| `runId` | `path` | `run_id` | `string` | yes |
| `format` | `query` | — | `Format1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format1` | `format1Schema` | `src/models/unions/format1.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listPulse

- **Signature**: `listPulse(options?: RequestOptions): ApiPromise<Record<string, unknown>, Pulse.ListPulseError>`
- **Wire**: `GET /api/v1/pulse`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `PlinthUsGrantsDataError` with `kind: "api"`, an instance of `Pulse.ListPulseError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [401] `ApiErrorModel` · `"apiErrorModel2"` [402] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### listPulseRuns

- **Signature**: `listPulseRuns(request: Pulse.ListPulseRunsRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Pulse.ListPulseRunsError>`
- **Wire**: `GET /api/v1/pulse/{sub_id}/runs`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `PlinthUsGrantsDataError` with `kind: "api"`, an instance of `Pulse.ListPulseRunsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [401] `ApiErrorModel` · `"apiErrorModel2"` [402] `ApiErrorModel` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Pulse.ListPulseRunsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subId` | `path` | `sub_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### runPulse

- **Signature**: `runPulse(request: Pulse.RunPulseRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Pulse.RunPulseError>`
- **Wire**: `POST /api/v1/pulse/{sub_id}/run`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `PlinthUsGrantsDataError` with `kind: "api"`, an instance of `Pulse.RunPulseError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [401] `ApiErrorModel` · `"apiErrorModel2"` [402] `ApiErrorModel` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Pulse.RunPulseRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subId` | `path` | `sub_id` | `string` | yes |
| `checks` | `query` | — | `Checks2` | no |
| `format` | `query` | — | `Format1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Checks2` | `checks2Schema` | `src/models/unions/checks2.ts` |
| `Format1` | `format1Schema` | `src/models/unions/format1.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### updatePulse

- **Signature**: `updatePulse(request: Pulse.UpdatePulseRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Pulse.UpdatePulseError>`
- **Wire**: `PATCH /api/v1/pulse/{sub_id}`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `PlinthUsGrantsDataError` with `kind: "api"`, an instance of `Pulse.UpdatePulseError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [401] `ApiErrorModel` · `"apiErrorModel2"` [402] `ApiErrorModel` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Pulse.UpdatePulseRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subId` | `path` | `sub_id` | `string` | yes |
| `body` | `body` | — | `PulsePatch` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PulsePatch` | `pulsePatchSchema` | `src/models/pulse-patch.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

