<!-- Generated file — do not edit; regenerated with the SDK. -->

# Processes — operations

Accessor: `client.processes` · Source: `src/resources/processes.ts` · 7 operations · Request and error types: namespace `Processes`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `boomi`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createProcess

- **Signature**: `createProcess(request: Processes.CreateProcessRequest, options?: RequestOptions): ApiPromise<Process, Processes.CreateProcessError>`
- **Wire**: `POST /Process`
- **Auth**: `basicAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Process`
- **Error**: `BoomiError` with `kind: "api"`, an instance of `Processes.CreateProcessError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Processes.CreateProcessRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ProcessInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProcessInput` | `processInputSchema` | `src/models/process-input.ts` |
| `Process` | `processSchema` | `src/models/process.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteProcess

- **Signature**: `deleteProcess(request: Processes.DeleteProcessRequest, options?: RequestOptions): ApiPromise<undefined, Processes.DeleteProcessError>`
- **Wire**: `DELETE /Process/{id}`
- **Auth**: `basicAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BoomiError` with `kind: "api"`, an instance of `Processes.DeleteProcessError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Processes.DeleteProcessRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getProcess

- **Signature**: `getProcess(request: Processes.GetProcessRequest, options?: RequestOptions): ApiPromise<Process, Processes.GetProcessError>`
- **Wire**: `GET /Process/{id}`
- **Auth**: `basicAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Process`
- **Error**: `BoomiError` with `kind: "api"`, an instance of `Processes.GetProcessError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Processes.GetProcessRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Process` | `processSchema` | `src/models/process.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getProcessSchedules

- **Signature**: `getProcessSchedules(request: Processes.GetProcessSchedulesRequest, options?: RequestOptions): ApiPromise<ProcessSchedules, Processes.GetProcessSchedulesError>`
- **Wire**: `GET /ProcessSchedules/{id}`
- **Auth**: `basicAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProcessSchedules`
- **Error**: `BoomiError` with `kind: "api"`, an instance of `Processes.GetProcessSchedulesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Processes.GetProcessSchedulesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProcessSchedules` | `processSchedulesSchema` | `src/models/process-schedules.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### queryProcesses

- **Signature**: `queryProcesses(request: Processes.QueryProcessesRequest, options?: RequestOptions): ApiPromise<ProcessQueryResult, Processes.QueryProcessesError>`
- **Wire**: `POST /Process/query`
- **Auth**: `basicAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProcessQueryResult`
- **Error**: `BoomiError` with `kind: "api"`, an instance of `Processes.QueryProcessesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Processes.QueryProcessesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `QueryRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `QueryRequest` | `queryRequestSchema` | `src/models/query-request.ts` |
| `ProcessQueryResult` | `processQueryResultSchema` | `src/models/process-query-result.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateProcess

- **Signature**: `updateProcess(request: Processes.UpdateProcessRequest, options?: RequestOptions): ApiPromise<Process, Processes.UpdateProcessError>`
- **Wire**: `POST /Process/{id}`
- **Auth**: `basicAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Process`
- **Error**: `BoomiError` with `kind: "api"`, an instance of `Processes.UpdateProcessError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Processes.UpdateProcessRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ProcessInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProcessInput` | `processInputSchema` | `src/models/process-input.ts` |
| `Process` | `processSchema` | `src/models/process.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateProcessSchedules

- **Signature**: `updateProcessSchedules(request: Processes.UpdateProcessSchedulesRequest, options?: RequestOptions): ApiPromise<ProcessSchedules, Processes.UpdateProcessSchedulesError>`
- **Wire**: `POST /ProcessSchedules/{id}`
- **Auth**: `basicAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProcessSchedules`
- **Error**: `BoomiError` with `kind: "api"`, an instance of `Processes.UpdateProcessSchedulesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Processes.UpdateProcessSchedulesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ProcessSchedules` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProcessSchedules` | `processSchedulesSchema` | `src/models/process-schedules.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

