<!-- Generated file — do not edit; regenerated with the SDK. -->

# Checks — operations

Accessor: `client.checks` · Source: `src/resources/checks.ts` · 5 operations · Request and error types: namespace `Checks`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `hud`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createTeamQcPipelineV2ChecksPipelinesPost

- **Signature**: `createTeamQcPipelineV2ChecksPipelinesPost(request: Checks.CreateTeamQcPipelineV2ChecksPipelinesPostRequest, options?: RequestOptions): ApiPromise<QcPipelineRegistrationResponse, Checks.CreateTeamQcPipelineV2ChecksPipelinesPostError>`
- **Wire**: `POST /v2/checks/pipelines`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `QcPipelineRegistrationResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Checks.CreateTeamQcPipelineV2ChecksPipelinesPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Checks.CreateTeamQcPipelineV2ChecksPipelinesPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `QcPipelineCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `QcPipelineCreateRequest` | `qcPipelineCreateRequestSchema` | `src/models/qc-pipeline-create-request.ts` |
| `QcPipelineRegistrationResponse` | `qcPipelineRegistrationResponseSchema` | `src/models/qc-pipeline-registration-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listPlatformCheckRunsV2ChecksRunsGet

- **Signature**: `listPlatformCheckRunsV2ChecksRunsGet(request: Checks.ListPlatformCheckRunsV2ChecksRunsGetRequest, options?: RequestOptions): ApiPromise<CheckRunResponse[], Checks.ListPlatformCheckRunsV2ChecksRunsGetError>`
- **Wire**: `GET /v2/checks/runs`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CheckRunResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `HudError` with `kind: "api"`, an instance of `Checks.ListPlatformCheckRunsV2ChecksRunsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Checks.ListPlatformCheckRunsV2ChecksRunsGetRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `subjectType` | `query` | `subject_type` | `CheckSubjectType` | yes | — |
| `subjectId` | `query` | `subject_id` | `string` | yes | — |
| `limit` | `query` | — | `number` | no | `50` |

| Type | Schema value | Source |
| --- | --- | --- |
| `CheckSubjectType` | `checkSubjectTypeSchema` | `src/models/check-subject-type.ts` |
| `CheckRunResponse` | `checkRunResponseSchema` | `src/models/check-run-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listPlatformChecksV2ChecksGet

- **Signature**: `listPlatformChecksV2ChecksGet(request?: Checks.ListPlatformChecksV2ChecksGetRequest, options?: RequestOptions): ApiPromise<CheckDefinitionResponse[], Checks.ListPlatformChecksV2ChecksGetError>`
- **Wire**: `GET /v2/checks`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CheckDefinitionResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `HudError` with `kind: "api"`, an instance of `Checks.ListPlatformChecksV2ChecksGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Checks.ListPlatformChecksV2ChecksGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subjectType` | `query` | `subject_type` | `SubjectType` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubjectType` | `subjectTypeSchema` | `src/models/unions/subject-type.ts` |
| `CheckDefinitionResponse` | `checkDefinitionResponseSchema` | `src/models/check-definition-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listTeamQcPipelinesV2ChecksPipelinesGet

- **Signature**: `listTeamQcPipelinesV2ChecksPipelinesGet(options?: RequestOptions): ApiPromise<QcPipelineRegistrationResponse[], Checks.ListTeamQcPipelinesV2ChecksPipelinesGetError>`
- **Wire**: `GET /v2/checks/pipelines`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `QcPipelineRegistrationResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `HudError` with `kind: "api"`, an instance of `Checks.ListTeamQcPipelinesV2ChecksPipelinesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `QcPipelineRegistrationResponse` | `qcPipelineRegistrationResponseSchema` | `src/models/qc-pipeline-registration-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### runPlatformCheckV2ChecksCheckKeyRunsPost

- **Signature**: `runPlatformCheckV2ChecksCheckKeyRunsPost(request: Checks.RunPlatformCheckV2ChecksCheckKeyRunsPostRequest, options?: RequestOptions): ApiPromise<CheckRunResponse, Checks.RunPlatformCheckV2ChecksCheckKeyRunsPostError>`
- **Wire**: `POST /v2/checks/{check_key}/runs`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CheckRunResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Checks.RunPlatformCheckV2ChecksCheckKeyRunsPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Checks.RunPlatformCheckV2ChecksCheckKeyRunsPostRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `checkKey` | `path` | `check_key` | `string` | yes |
| `body` | `body` | — | `CheckRunRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CheckRunRequest` | `checkRunRequestSchema` | `src/models/check-run-request.ts` |
| `CheckRunResponse` | `checkRunResponseSchema` | `src/models/check-run-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

