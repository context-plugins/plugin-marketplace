<!-- Generated file — do not edit; regenerated with the SDK. -->

# Windows — operations

Accessor: `client.windows` · Source: `src/resources/windows.ts` · 6 operations · Request and error types: namespace `Windows`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `skylight-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### instances

- **Signature**: `instances(options?: RequestOptions): ApiPromise<InstancesListResponse, Windows.InstancesError>`
- **Wire**: `GET /windows/instances`
- **Auth**: `apikey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InstancesListResponse`
- **Error**: `SkylightApiError` with `kind: "api"`, an instance of `Windows.InstancesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"forbiddenErrorResponse"` [403] `ForbiddenErrorResponse` · `"errorResponse1"` [500] `ErrorResponse1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `InstancesListResponse` | `instancesListResponseSchema` | `src/models/instances-list-response.ts` |
| `ForbiddenErrorResponse` | `forbiddenErrorResponseSchema` | `src/models/forbidden-error-response.ts` |
| `ErrorResponse1` | `errorResponse1Schema` | `src/models/error-response1.ts` |

### pause

- **Signature**: `pause(request: Windows.PauseRequest, options?: RequestOptions): ApiPromise<InactiveOperationResponse, Windows.PauseError>`
- **Wire**: `POST /windows/pause/{instance_id}`
- **Auth**: `apikey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InactiveOperationResponse`
- **Error**: `SkylightApiError` with `kind: "api"`, an instance of `Windows.PauseError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"forbiddenErrorResponse"` [403] `ForbiddenErrorResponse` · `"errorResponse1"` [500] `ErrorResponse1` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Windows.PauseRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `instanceId` | `path` | `instance_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InactiveOperationResponse` | `inactiveOperationResponseSchema` | `src/models/inactive-operation-response.ts` |
| `ForbiddenErrorResponse` | `forbiddenErrorResponseSchema` | `src/models/forbidden-error-response.ts` |
| `ErrorResponse1` | `errorResponse1Schema` | `src/models/error-response1.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### resume

- **Signature**: `resume(request: Windows.ResumeRequest, options?: RequestOptions): ApiPromise<ActiveOperationResponse, Windows.ResumeError>`
- **Wire**: `POST /windows/resume/{instance_id}`
- **Auth**: `apikey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ActiveOperationResponse`
- **Error**: `SkylightApiError` with `kind: "api"`, an instance of `Windows.ResumeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"forbiddenErrorResponse"` [403] `ForbiddenErrorResponse` · `"errorResponse1"` [500] `ErrorResponse1` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Windows.ResumeRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `instanceId` | `path` | `instance_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ActiveOperationResponse` | `activeOperationResponseSchema` | `src/models/active-operation-response.ts` |
| `ForbiddenErrorResponse` | `forbiddenErrorResponseSchema` | `src/models/forbidden-error-response.ts` |
| `ErrorResponse1` | `errorResponse1Schema` | `src/models/error-response1.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### start

- **Signature**: `start(request: Windows.StartRequest, options?: RequestOptions): ApiPromise<InstanceStartResponse, Windows.StartError>`
- **Wire**: `POST /windows/start`
- **Auth**: `apikey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InstanceStartResponse`
- **Error**: `SkylightApiError` with `kind: "api"`, an instance of `Windows.StartError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"forbiddenErrorResponse"` [403] `ForbiddenErrorResponse` · `"errorResponse1"` [500] `ErrorResponse1` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Windows.StartRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `InstanceRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InstanceRequest` | `instanceRequestSchema` | `src/models/instance-request.ts` |
| `InstanceStartResponse` | `instanceStartResponseSchema` | `src/models/instance-start-response.ts` |
| `ForbiddenErrorResponse` | `forbiddenErrorResponseSchema` | `src/models/forbidden-error-response.ts` |
| `ErrorResponse1` | `errorResponse1Schema` | `src/models/error-response1.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### state

- **Signature**: `state(request: Windows.StateRequest, options?: RequestOptions): ApiPromise<InstanceStatusResponse, Windows.StateError>`
- **Wire**: `GET /windows/state/{instance_id}`
- **Auth**: `apikey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InstanceStatusResponse`
- **Error**: `SkylightApiError` with `kind: "api"`, an instance of `Windows.StateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"forbiddenErrorResponse"` [403] `ForbiddenErrorResponse` · `"errorResponse1"` [500] `ErrorResponse1` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Windows.StateRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `instanceId` | `path` | `instance_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InstanceStatusResponse` | `instanceStatusResponseSchema` | `src/models/instance-status-response.ts` |
| `ForbiddenErrorResponse` | `forbiddenErrorResponseSchema` | `src/models/forbidden-error-response.ts` |
| `ErrorResponse1` | `errorResponse1Schema` | `src/models/error-response1.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### terminate

- **Signature**: `terminate(request: Windows.TerminateRequest, options?: RequestOptions): ApiPromise<InactiveOperationResponse, Windows.TerminateError>`
- **Wire**: `POST /windows/terminate/{instance_id}`
- **Auth**: `apikey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InactiveOperationResponse`
- **Error**: `SkylightApiError` with `kind: "api"`, an instance of `Windows.TerminateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"forbiddenErrorResponse"` [403] `ForbiddenErrorResponse` · `"errorResponse1"` [500] `ErrorResponse1` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Windows.TerminateRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `instanceId` | `path` | `instance_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InactiveOperationResponse` | `inactiveOperationResponseSchema` | `src/models/inactive-operation-response.ts` |
| `ForbiddenErrorResponse` | `forbiddenErrorResponseSchema` | `src/models/forbidden-error-response.ts` |
| `ErrorResponse1` | `errorResponse1Schema` | `src/models/error-response1.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

