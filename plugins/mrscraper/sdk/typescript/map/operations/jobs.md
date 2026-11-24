<!-- Generated file — do not edit; regenerated with the SDK. -->

# Jobs — operations

Accessor: `client.jobs` · Source: `src/resources/jobs.ts` · 4 operations · Request types: namespace `Jobs`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `mr-scraper`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getJobs

- **Server**: `defaultScraperServiceGatewayAuthApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getJobs(request?: Jobs.GetJobsRequest, options?: RequestOptions): ApiPromise<JobsResponse, ApiError>`
- **Wire**: `GET /jobs`
- **Auth**: any of `apiKey`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `JobsResponse`
- **Error**: `MrScraperError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Jobs.GetJobsRequest` (10):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `pageSize` | `query` | `number` | no |
| `page` | `query` | `number` | no |
| `sortField` | `query` | `string` | no |
| `sortOrder` | `query` | `string` | no |
| `search` | `query` | `string` | no |
| `startAt` | `query` | `string` | no |
| `endAt` | `query` | `string` | no |
| `dateRangeColumn` | `query` | `string` | no |
| `name` | `query` | `string` | no |
| `status` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `JobsResponse` | `jobsResponseSchema` | `src/models/jobs-response.ts` |

### getJobsById

- **Server**: `defaultScraperServiceGatewayAuthApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getJobsById(request: Jobs.GetJobsByIdRequest, options?: RequestOptions): ApiPromise<JobsResponse1, ApiError>`
- **Wire**: `GET /jobs/{id}`
- **Auth**: any of `apiKey`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `JobsResponse1`
- **Error**: `MrScraperError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Jobs.GetJobsByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `JobsResponse1` | `jobsResponse1Schema` | `src/models/jobs-response1.ts` |

### postJobs

- **Server**: `defaultScraperServiceGatewayAuthApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postJobs(request: Jobs.PostJobsRequest, options?: RequestOptions): ApiPromise<JobsResponse1, ApiError>`
- **Wire**: `POST /jobs`
- **Auth**: any of `apiKey`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `JobsResponse1`
- **Error**: `MrScraperError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Jobs.PostJobsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `JobJob` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `JobJob` | `jobJobSchema` | `src/models/job-job.ts` |
| `JobsResponse1` | `jobsResponse1Schema` | `src/models/jobs-response1.ts` |

### putJobsById

- **Server**: `defaultScraperServiceGatewayAuthApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `putJobsById(request: Jobs.PutJobsByIdRequest, options?: RequestOptions): ApiPromise<JobsResponse1, ApiError>`
- **Wire**: `PUT /jobs/{id}`
- **Auth**: any of `apiKey`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `JobsResponse1`
- **Error**: `MrScraperError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Jobs.PutJobsByIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `body` | `body` | `JobJob` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `JobJob` | `jobJobSchema` | `src/models/job-job.ts` |
| `JobsResponse1` | `jobsResponse1Schema` | `src/models/jobs-response1.ts` |

