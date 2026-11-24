<!-- Generated file — do not edit; regenerated with the SDK. -->

# Jobs — operations

Accessor: `client.jobs` · Source: `src/resources/jobs.ts` · 3 operations · Request and error types: namespace `Jobs`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `basiq`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getJobs

- **Signature**: `getJobs(request: Jobs.GetJobsRequest, options?: RequestOptions): ApiPromise<JobsResponse3, Jobs.GetJobsError>`
- **Wire**: `GET /jobs/{jobId}`
- **Auth**: `servicesToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `JobsResponse3`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Jobs.GetJobsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"jobs400Error1"` [400] `Jobs400Error1` · `"jobs401Error1"` [401] `Jobs401Error1` · `"jobs403Error1"` [403] `Jobs403Error1` · `"jobs404Error1"` [404] `Jobs404Error1` · `"jobs500Error1"` [500] `Jobs500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Jobs.GetJobsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `jobId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `JobsResponse3` | `jobsResponse3Schema` | `src/models/unions/jobs-response3.ts` |
| `Jobs400Error1` | `jobs400Error1Schema` | `src/models/jobs400-error1.ts` |
| `Jobs401Error1` | `jobs401Error1Schema` | `src/models/jobs401-error1.ts` |
| `Jobs403Error1` | `jobs403Error1Schema` | `src/models/jobs403-error1.ts` |
| `Jobs404Error1` | `jobs404Error1Schema` | `src/models/jobs404-error1.ts` |
| `Jobs500Error1` | `jobs500Error1Schema` | `src/models/jobs500-error1.ts` |

### getUserJobs

- **Signature**: `getUserJobs(request: Jobs.GetUserJobsRequest, options?: RequestOptions): ApiPromise<UsersJobsResponse, Jobs.GetUserJobsError>`
- **Wire**: `GET /users/{userId}/jobs`
- **Auth**: `servicesToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UsersJobsResponse`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Jobs.GetUserJobsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"usersJobs400Error1"` [400] `UsersJobs400Error1` · `"usersJobs401Error1"` [401] `UsersJobs401Error1` · `"usersJobs403Error1"` [403] `UsersJobs403Error1` · `"usersJobs404Error1"` [404] `UsersJobs404Error1` · `"usersJobs500Error1"` [500] `UsersJobs500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Jobs.GetUserJobsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersJobsResponse` | `usersJobsResponseSchema` | `src/models/users-jobs-response.ts` |
| `UsersJobs400Error1` | `usersJobs400Error1Schema` | `src/models/users-jobs400-error1.ts` |
| `UsersJobs401Error1` | `usersJobs401Error1Schema` | `src/models/users-jobs401-error1.ts` |
| `UsersJobs403Error1` | `usersJobs403Error1Schema` | `src/models/users-jobs403-error1.ts` |
| `UsersJobs404Error1` | `usersJobs404Error1Schema` | `src/models/users-jobs404-error1.ts` |
| `UsersJobs500Error1` | `usersJobs500Error1Schema` | `src/models/users-jobs500-error1.ts` |

### postJobMfa

- **Signature**: `postJobMfa(request: Jobs.PostJobMfaRequest, options?: RequestOptions): ApiPromise<ConnectionResponseResource, Jobs.PostJobMfaError>`
- **Wire**: `POST /jobs/{jobId}/mfa`
- **Auth**: `servicesToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConnectionResponseResource`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Jobs.PostJobMfaError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"jobsMfa400Error1"` [400] `JobsMfa400Error1` · `"jobsMfa401Error1"` [401] `JobsMfa401Error1` · `"jobsMfa403Error1"` [403] `JobsMfa403Error1` · `"jobsMfa404Error1"` [404] `JobsMfa404Error1` · `"jobsMfa500Error1"` [500] `JobsMfa500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Jobs.PostJobMfaRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `jobId` | `path` | `string` | yes |
| `body` | `body` | `JobsMfaRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `JobsMfaRequest` | `jobsMfaRequestSchema` | `src/models/jobs-mfa-request.ts` |
| `ConnectionResponseResource` | `connectionResponseResourceSchema` | `src/models/connection-response-resource.ts` |
| `JobsMfa400Error1` | `jobsMfa400Error1Schema` | `src/models/jobs-mfa400-error1.ts` |
| `JobsMfa401Error1` | `jobsMfa401Error1Schema` | `src/models/jobs-mfa401-error1.ts` |
| `JobsMfa403Error1` | `jobsMfa403Error1Schema` | `src/models/jobs-mfa403-error1.ts` |
| `JobsMfa404Error1` | `jobsMfa404Error1Schema` | `src/models/jobs-mfa404-error1.ts` |
| `JobsMfa500Error1` | `jobsMfa500Error1Schema` | `src/models/jobs-mfa500-error1.ts` |

