<!-- Generated file — do not edit; regenerated with the SDK. -->

# ProjectApi — operations

Accessor: `client.projectApi` · Source: `src/resources/project-api.ts` · 11 operations · Request and error types: namespace `ProjectApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `circle-ci`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createCheckoutKey

- **Signature**: `createCheckoutKey(request: ProjectApi.CreateCheckoutKeyRequest, options?: RequestOptions): ApiPromise<CheckoutKey, ProjectApi.CreateCheckoutKeyError>`
- **Wire**: `POST /project/{project-slug}/checkout-key`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CheckoutKey`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `ProjectApi.CreateCheckoutKeyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProjectApi.CreateCheckoutKeyRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectSlug` | `path` | `project-slug` | `string` | yes |
| `body` | `body` | — | `ProjectCheckoutKeyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectCheckoutKeyRequest` | `projectCheckoutKeyRequestSchema` | `src/models/project-checkout-key-request.ts` |
| `CheckoutKey` | `checkoutKeySchema` | `src/models/checkout-key.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### createProjectEnvironmentVariable

- **Signature**: `createProjectEnvironmentVariable(request: ProjectApi.CreateProjectEnvironmentVariableRequest, options?: RequestOptions): ApiPromise<ProjectEnvVar, ProjectApi.CreateProjectEnvironmentVariableError>`
- **Wire**: `POST /project/{project-slug}/envvar`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProjectEnvVar`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `ProjectApi.CreateProjectEnvironmentVariableError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProjectApi.CreateProjectEnvironmentVariableRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectSlug` | `path` | `project-slug` | `string` | yes |
| `body` | `body` | — | `ProjectEnvvarRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectEnvvarRequest` | `projectEnvvarRequestSchema` | `src/models/project-envvar-request.ts` |
| `ProjectEnvVar` | `projectEnvVarSchema` | `src/models/project-env-var.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteCheckoutKey

- **Signature**: `deleteCheckoutKey(request: ProjectApi.DeleteCheckoutKeyRequest, options?: RequestOptions): ApiPromise<MessageResponse, ProjectApi.DeleteCheckoutKeyError>`
- **Wire**: `DELETE /project/{project-slug}/checkout-key/{fingerprint}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MessageResponse`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `ProjectApi.DeleteCheckoutKeyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProjectApi.DeleteCheckoutKeyRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectSlug` | `path` | `project-slug` | `string` | yes |
| `fingerprint` | `path` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessageResponse` | `messageResponseSchema` | `src/models/message-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteProjectEnvironmentVariable

- **Signature**: `deleteProjectEnvironmentVariable(request: ProjectApi.DeleteProjectEnvironmentVariableRequest, options?: RequestOptions): ApiPromise<MessageResponse, ProjectApi.DeleteProjectEnvironmentVariableError>`
- **Wire**: `DELETE /project/{project-slug}/envvar/{name}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MessageResponse`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `ProjectApi.DeleteProjectEnvironmentVariableError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProjectApi.DeleteProjectEnvironmentVariableRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectSlug` | `path` | `project-slug` | `string` | yes |
| `name` | `path` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessageResponse` | `messageResponseSchema` | `src/models/message-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### followProject

- **Signature**: `followProject(request: ProjectApi.FollowProjectRequest, options?: RequestOptions): ApiPromise<ProjectProjectFollowResponse, ProjectApi.FollowProjectError>`
- **Wire**: `POST /project/{vcs-type}/{username}/{project}/follow`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProjectProjectFollowResponse`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `ProjectApi.FollowProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProjectApi.FollowProjectRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vcsType` | `path` | `vcs-type` | `VcsType` | yes |
| `username` | `path` | — | `string` | yes |
| `project` | `path` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VcsType` | `vcsTypeSchema` | `src/models/vcs-type.ts` |
| `ProjectProjectFollowResponse` | `projectProjectFollowResponseSchema` | `src/models/project-project-follow-response.ts` |

### getCheckoutKey

- **Signature**: `getCheckoutKey(request: ProjectApi.GetCheckoutKeyRequest, options?: RequestOptions): ApiPromise<CheckoutKey, ProjectApi.GetCheckoutKeyError>`
- **Wire**: `GET /project/{project-slug}/checkout-key/{fingerprint}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CheckoutKey`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `ProjectApi.GetCheckoutKeyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProjectApi.GetCheckoutKeyRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectSlug` | `path` | `project-slug` | `string` | yes |
| `fingerprint` | `path` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CheckoutKey` | `checkoutKeySchema` | `src/models/checkout-key.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getProject

- **Signature**: `getProject(request: ProjectApi.GetProjectRequest, options?: RequestOptions): ApiPromise<Project2, ProjectApi.GetProjectError>`
- **Wire**: `GET /project/{project-slug}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Project2`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `ProjectApi.GetProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProjectApi.GetProjectRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectSlug` | `path` | `project-slug` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Project2` | `project2Schema` | `src/models/project2.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getProjectEnvironmentVariable

- **Signature**: `getProjectEnvironmentVariable(request: ProjectApi.GetProjectEnvironmentVariableRequest, options?: RequestOptions): ApiPromise<ProjectEnvVar, ProjectApi.GetProjectEnvironmentVariableError>`
- **Wire**: `GET /project/{project-slug}/envvar/{name}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProjectEnvVar`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `ProjectApi.GetProjectEnvironmentVariableError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProjectApi.GetProjectEnvironmentVariableRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectSlug` | `path` | `project-slug` | `string` | yes |
| `name` | `path` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectEnvVar` | `projectEnvVarSchema` | `src/models/project-env-var.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listCheckoutKeys

- **Signature**: `listCheckoutKeys(request: ProjectApi.ListCheckoutKeysRequest, options?: RequestOptions): ApiPromise<CheckoutKeyList, ProjectApi.ListCheckoutKeysError>`
- **Wire**: `GET /project/{project-slug}/checkout-key`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CheckoutKeyList`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `ProjectApi.ListCheckoutKeysError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProjectApi.ListCheckoutKeysRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectSlug` | `path` | `project-slug` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CheckoutKeyList` | `checkoutKeyListSchema` | `src/models/checkout-key-list.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listProjectEnvironmentVariables

- **Signature**: `listProjectEnvironmentVariables(request: ProjectApi.ListProjectEnvironmentVariablesRequest, options?: RequestOptions): ApiPromise<ProjectEnvVarList, ProjectApi.ListProjectEnvironmentVariablesError>`
- **Wire**: `GET /project/{project-slug}/envvar`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProjectEnvVarList`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `ProjectApi.ListProjectEnvironmentVariablesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProjectApi.ListProjectEnvironmentVariablesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectSlug` | `path` | `project-slug` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectEnvVarList` | `projectEnvVarListSchema` | `src/models/project-env-var-list.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listProjects

- **Signature**: `listProjects(options?: RequestOptions): ApiPromise<ProjectCircleciProjectApi[], ProjectApi.ListProjectsError>`
- **Wire**: `GET /projects`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProjectCircleciProjectApi[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `ProjectApi.ListProjectsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectCircleciProjectApi` | `projectCircleciProjectApiSchema` | `src/models/project-circleci-project-api.ts` |

