<!-- Generated file — do not edit; regenerated with the SDK. -->

# GoogleCloudTalentSolutionClient — ungrouped operations

Accessor: `client` (the client itself) · Source: `src/client.ts` · 23 operations · Request and error types: namespace `GoogleCloudTalentSolutionClient`

Operations the spec leaves untagged are methods on the client rather than on a resource, so there is no accessor property to go through. The request type still lives in a namespace merged onto the exported class, so you write `GoogleCloudTalentSolutionClient.JobsProjectsOperationsGetRequest`.

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `google-cloud-talent-solution`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### jobsProjectsOperationsGet

- **Signature**: `jobsProjectsOperationsGet(request: GoogleCloudTalentSolutionClient.JobsProjectsOperationsGetRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudTalentSolutionClient.JobsProjectsOperationsGetError>`
- **Wire**: `GET /v4/projects/{projectsId}/operations/{operationsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Operation`
- **Error**: `GoogleCloudTalentSolutionError` with `kind: "api"`, an instance of `GoogleCloudTalentSolutionClient.JobsProjectsOperationsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudTalentSolutionClient.JobsProjectsOperationsGetRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `operationsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### jobsProjectsTenantsClientEventsCreate

- **Signature**: `jobsProjectsTenantsClientEventsCreate(request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsClientEventsCreateRequest, options?: RequestOptions): ApiPromise<ClientEvent, GoogleCloudTalentSolutionClient.JobsProjectsTenantsClientEventsCreateError>`
- **Wire**: `POST /v4/projects/{projectsId}/tenants/{tenantsId}/clientEvents`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClientEvent`
- **Error**: `GoogleCloudTalentSolutionError` with `kind: "api"`, an instance of `GoogleCloudTalentSolutionClient.JobsProjectsTenantsClientEventsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudTalentSolutionClient.JobsProjectsTenantsClientEventsCreateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `tenantsId` | `path` | `string` | yes |
| `body` | `body` | `ClientEvent` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClientEvent` | `clientEventSchema` | `src/models/client-event.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### jobsProjectsTenantsCompaniesCreate

- **Signature**: `jobsProjectsTenantsCompaniesCreate(request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesCreateRequest, options?: RequestOptions): ApiPromise<Company, GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesCreateError>`
- **Wire**: `POST /v4/projects/{projectsId}/tenants/{tenantsId}/companies`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Company`
- **Error**: `GoogleCloudTalentSolutionError` with `kind: "api"`, an instance of `GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesCreateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `tenantsId` | `path` | `string` | yes |
| `body` | `body` | `Company` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Company` | `companySchema` | `src/models/company.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### jobsProjectsTenantsCompaniesDelete

- **Signature**: `jobsProjectsTenantsCompaniesDelete(request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesDeleteError>`
- **Wire**: `DELETE /v4/projects/{projectsId}/tenants/{tenantsId}/companies/{companiesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `GoogleCloudTalentSolutionError` with `kind: "api"`, an instance of `GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `tenantsId` | `path` | `string` | yes |
| `companiesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### jobsProjectsTenantsCompaniesGet

- **Signature**: `jobsProjectsTenantsCompaniesGet(request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesGetRequest, options?: RequestOptions): ApiPromise<Company, GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesGetError>`
- **Wire**: `GET /v4/projects/{projectsId}/tenants/{tenantsId}/companies/{companiesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Company`
- **Error**: `GoogleCloudTalentSolutionError` with `kind: "api"`, an instance of `GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `tenantsId` | `path` | `string` | yes |
| `companiesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Company` | `companySchema` | `src/models/company.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### jobsProjectsTenantsCompaniesList

- **Signature**: `jobsProjectsTenantsCompaniesList(request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesListRequest, options?: RequestOptions): ApiPromise<ListCompaniesResponse, GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesListError>`
- **Wire**: `GET /v4/projects/{projectsId}/tenants/{tenantsId}/companies`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListCompaniesResponse`
- **Error**: `GoogleCloudTalentSolutionError` with `kind: "api"`, an instance of `GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesListRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `tenantsId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |
| `requireOpenJobs` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListCompaniesResponse` | `listCompaniesResponseSchema` | `src/models/list-companies-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### jobsProjectsTenantsCompaniesPatch

- **Signature**: `jobsProjectsTenantsCompaniesPatch(request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesPatchRequest, options?: RequestOptions): ApiPromise<Company, GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesPatchError>`
- **Wire**: `PATCH /v4/projects/{projectsId}/tenants/{tenantsId}/companies/{companiesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Company`
- **Error**: `GoogleCloudTalentSolutionError` with `kind: "api"`, an instance of `GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesPatchRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `tenantsId` | `path` | `string` | yes |
| `companiesId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `Company` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Company` | `companySchema` | `src/models/company.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### jobsProjectsTenantsCompleteQuery

- **Signature**: `jobsProjectsTenantsCompleteQuery(request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompleteQueryRequest, options?: RequestOptions): ApiPromise<CompleteQueryResponse, GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompleteQueryError>`
- **Wire**: `GET /v4/projects/{projectsId}/tenants/{tenantsId}:completeQuery`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompleteQueryResponse`
- **Error**: `GoogleCloudTalentSolutionError` with `kind: "api"`, an instance of `GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompleteQueryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompleteQueryRequest` (8):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `tenantsId` | `path` | `string` | yes |
| `company` | `query` | `string` | no |
| `languageCodes` | `query` | `string[]` | no |
| `pageSize` | `query` | `number` | no |
| `query` | `query` | `string` | no |
| `scope` | `query` | `Scope` | no |
| `type` | `query` | `Type4` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Scope` | `scopeSchema` | `src/models/scope.ts` |
| `Type4` | `type4Schema` | `src/models/type4.ts` |
| `CompleteQueryResponse` | `completeQueryResponseSchema` | `src/models/complete-query-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### jobsProjectsTenantsCreate

- **Signature**: `jobsProjectsTenantsCreate(request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsCreateRequest, options?: RequestOptions): ApiPromise<Tenant, GoogleCloudTalentSolutionClient.JobsProjectsTenantsCreateError>`
- **Wire**: `POST /v4/projects/{projectsId}/tenants`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Tenant`
- **Error**: `GoogleCloudTalentSolutionError` with `kind: "api"`, an instance of `GoogleCloudTalentSolutionClient.JobsProjectsTenantsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudTalentSolutionClient.JobsProjectsTenantsCreateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `body` | `body` | `Tenant` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Tenant` | `tenantSchema` | `src/models/tenant.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### jobsProjectsTenantsDelete

- **Signature**: `jobsProjectsTenantsDelete(request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, GoogleCloudTalentSolutionClient.JobsProjectsTenantsDeleteError>`
- **Wire**: `DELETE /v4/projects/{projectsId}/tenants/{tenantsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `GoogleCloudTalentSolutionError` with `kind: "api"`, an instance of `GoogleCloudTalentSolutionClient.JobsProjectsTenantsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudTalentSolutionClient.JobsProjectsTenantsDeleteRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `tenantsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### jobsProjectsTenantsGet

- **Signature**: `jobsProjectsTenantsGet(request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsGetRequest, options?: RequestOptions): ApiPromise<Tenant, GoogleCloudTalentSolutionClient.JobsProjectsTenantsGetError>`
- **Wire**: `GET /v4/projects/{projectsId}/tenants/{tenantsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Tenant`
- **Error**: `GoogleCloudTalentSolutionError` with `kind: "api"`, an instance of `GoogleCloudTalentSolutionClient.JobsProjectsTenantsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudTalentSolutionClient.JobsProjectsTenantsGetRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `tenantsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Tenant` | `tenantSchema` | `src/models/tenant.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### jobsProjectsTenantsJobsBatchCreate

- **Signature**: `jobsProjectsTenantsJobsBatchCreate(request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsBatchCreateRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsBatchCreateError>`
- **Wire**: `POST /v4/projects/{projectsId}/tenants/{tenantsId}/jobs:batchCreate`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudTalentSolutionError` with `kind: "api"`, an instance of `GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsBatchCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsBatchCreateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `tenantsId` | `path` | `string` | yes |
| `body` | `body` | `BatchCreateJobsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BatchCreateJobsRequest` | `batchCreateJobsRequestSchema` | `src/models/batch-create-jobs-request.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### jobsProjectsTenantsJobsBatchDelete

- **Signature**: `jobsProjectsTenantsJobsBatchDelete(request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsBatchDeleteRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsBatchDeleteError>`
- **Wire**: `POST /v4/projects/{projectsId}/tenants/{tenantsId}/jobs:batchDelete`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudTalentSolutionError` with `kind: "api"`, an instance of `GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsBatchDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsBatchDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `tenantsId` | `path` | `string` | yes |
| `body` | `body` | `BatchDeleteJobsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BatchDeleteJobsRequest` | `batchDeleteJobsRequestSchema` | `src/models/batch-delete-jobs-request.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### jobsProjectsTenantsJobsBatchUpdate

- **Signature**: `jobsProjectsTenantsJobsBatchUpdate(request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsBatchUpdateRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsBatchUpdateError>`
- **Wire**: `POST /v4/projects/{projectsId}/tenants/{tenantsId}/jobs:batchUpdate`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudTalentSolutionError` with `kind: "api"`, an instance of `GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsBatchUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsBatchUpdateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `tenantsId` | `path` | `string` | yes |
| `body` | `body` | `BatchUpdateJobsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BatchUpdateJobsRequest` | `batchUpdateJobsRequestSchema` | `src/models/batch-update-jobs-request.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### jobsProjectsTenantsJobsCreate

- **Signature**: `jobsProjectsTenantsJobsCreate(request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsCreateRequest, options?: RequestOptions): ApiPromise<Job, GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsCreateError>`
- **Wire**: `POST /v4/projects/{projectsId}/tenants/{tenantsId}/jobs`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Job`
- **Error**: `GoogleCloudTalentSolutionError` with `kind: "api"`, an instance of `GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsCreateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `tenantsId` | `path` | `string` | yes |
| `body` | `body` | `Job` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Job` | `jobSchema` | `src/models/job.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### jobsProjectsTenantsJobsDelete

- **Signature**: `jobsProjectsTenantsJobsDelete(request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsDeleteError>`
- **Wire**: `DELETE /v4/projects/{projectsId}/tenants/{tenantsId}/jobs/{jobsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `GoogleCloudTalentSolutionError` with `kind: "api"`, an instance of `GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `tenantsId` | `path` | `string` | yes |
| `jobsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### jobsProjectsTenantsJobsGet

- **Signature**: `jobsProjectsTenantsJobsGet(request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsGetRequest, options?: RequestOptions): ApiPromise<Job, GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsGetError>`
- **Wire**: `GET /v4/projects/{projectsId}/tenants/{tenantsId}/jobs/{jobsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Job`
- **Error**: `GoogleCloudTalentSolutionError` with `kind: "api"`, an instance of `GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `tenantsId` | `path` | `string` | yes |
| `jobsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Job` | `jobSchema` | `src/models/job.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### jobsProjectsTenantsJobsList

- **Signature**: `jobsProjectsTenantsJobsList(request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsListRequest, options?: RequestOptions): ApiPromise<ListJobsResponse, GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsListError>`
- **Wire**: `GET /v4/projects/{projectsId}/tenants/{tenantsId}/jobs`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListJobsResponse`
- **Error**: `GoogleCloudTalentSolutionError` with `kind: "api"`, an instance of `GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsListRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `tenantsId` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |
| `jobView` | `query` | `JobView1` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `JobView1` | `jobView1Schema` | `src/models/job-view1.ts` |
| `ListJobsResponse` | `listJobsResponseSchema` | `src/models/list-jobs-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### jobsProjectsTenantsJobsPatch

- **Signature**: `jobsProjectsTenantsJobsPatch(request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsPatchRequest, options?: RequestOptions): ApiPromise<Job, GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsPatchError>`
- **Wire**: `PATCH /v4/projects/{projectsId}/tenants/{tenantsId}/jobs/{jobsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Job`
- **Error**: `GoogleCloudTalentSolutionError` with `kind: "api"`, an instance of `GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsPatchRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `tenantsId` | `path` | `string` | yes |
| `jobsId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `Job` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Job` | `jobSchema` | `src/models/job.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### jobsProjectsTenantsJobsSearch

- **Signature**: `jobsProjectsTenantsJobsSearch(request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsSearchRequest, options?: RequestOptions): ApiPromise<SearchJobsResponse, GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsSearchError>`
- **Wire**: `POST /v4/projects/{projectsId}/tenants/{tenantsId}/jobs:search`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SearchJobsResponse`
- **Error**: `GoogleCloudTalentSolutionError` with `kind: "api"`, an instance of `GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsSearchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsSearchRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `tenantsId` | `path` | `string` | yes |
| `body` | `body` | `SearchJobsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchJobsRequest` | `searchJobsRequestSchema` | `src/models/search-jobs-request.ts` |
| `SearchJobsResponse` | `searchJobsResponseSchema` | `src/models/search-jobs-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### jobsProjectsTenantsJobsSearchForAlert

- **Signature**: `jobsProjectsTenantsJobsSearchForAlert(request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsSearchForAlertRequest, options?: RequestOptions): ApiPromise<SearchJobsResponse, GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsSearchForAlertError>`
- **Wire**: `POST /v4/projects/{projectsId}/tenants/{tenantsId}/jobs:searchForAlert`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SearchJobsResponse`
- **Error**: `GoogleCloudTalentSolutionError` with `kind: "api"`, an instance of `GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsSearchForAlertError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsSearchForAlertRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `tenantsId` | `path` | `string` | yes |
| `body` | `body` | `SearchJobsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchJobsRequest` | `searchJobsRequestSchema` | `src/models/search-jobs-request.ts` |
| `SearchJobsResponse` | `searchJobsResponseSchema` | `src/models/search-jobs-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### jobsProjectsTenantsList

- **Signature**: `jobsProjectsTenantsList(request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsListRequest, options?: RequestOptions): ApiPromise<ListTenantsResponse, GoogleCloudTalentSolutionClient.JobsProjectsTenantsListError>`
- **Wire**: `GET /v4/projects/{projectsId}/tenants`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListTenantsResponse`
- **Error**: `GoogleCloudTalentSolutionError` with `kind: "api"`, an instance of `GoogleCloudTalentSolutionClient.JobsProjectsTenantsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudTalentSolutionClient.JobsProjectsTenantsListRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListTenantsResponse` | `listTenantsResponseSchema` | `src/models/list-tenants-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### jobsProjectsTenantsPatch

- **Signature**: `jobsProjectsTenantsPatch(request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsPatchRequest, options?: RequestOptions): ApiPromise<Tenant, GoogleCloudTalentSolutionClient.JobsProjectsTenantsPatchError>`
- **Wire**: `PATCH /v4/projects/{projectsId}/tenants/{tenantsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Tenant`
- **Error**: `GoogleCloudTalentSolutionError` with `kind: "api"`, an instance of `GoogleCloudTalentSolutionClient.JobsProjectsTenantsPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudTalentSolutionClient.JobsProjectsTenantsPatchRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `tenantsId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `Tenant` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Tenant` | `tenantSchema` | `src/models/tenant.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

