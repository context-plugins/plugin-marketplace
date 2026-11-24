<!-- Generated file — do not edit; regenerated with the SDK. -->

# Jobs — operations

Accessor: `client.jobs` · Source: `src/resources/jobs.ts` · 3 operations · Request and error types: namespace `Jobs`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `zillapi`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getJob

- **Signature**: `getJob(request: Jobs.GetJobRequest, options?: RequestOptions): ApiPromise<V1JobsResponse1, ApiError>`
- **Wire**: `GET /v1/jobs/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1JobsResponse1`
- **Error**: `ZillapiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Jobs.GetJobRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1JobsResponse1` | `v1JobsResponse1Schema` | `src/models/v1-jobs-response1.ts` |

### getJobResults

- **Signature**: `getJobResults(request: Jobs.GetJobResultsRequest, options?: RequestOptions): ApiPromise<V1JobsResultsResponse, Jobs.GetJobResultsError>`
- **Wire**: `GET /v1/jobs/{id}/results`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1JobsResultsResponse`
- **Error**: `ZillapiError` with `kind: "api"`, an instance of `Jobs.GetJobResultsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [404] `ApiErrorModel` · `"apiErrorModel2"` [409] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Jobs.GetJobResultsRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `id` | `path` | `string` | yes | — |
| `limit` | `query` | `number` | no | `100` |
| `offset` | `query` | `number` | no | `0` |
| `format` | `query` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `V1JobsResultsResponse` | `v1JobsResultsResponseSchema` | `src/models/v1-jobs-results-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### listJobs

- **Signature**: `listJobs(request?: Jobs.ListJobsRequest, options?: RequestOptions): ApiPromise<V1JobsResponse, ApiError>`
- **Wire**: `GET /v1/jobs`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1JobsResponse`
- **Error**: `ZillapiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Jobs.ListJobsRequest` (5):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `status` | `query` | `StatusZillapiZillowPropertyDataJobsApi` | no | — |
| `type` | `query` | `Type` | no | — |
| `since` | `query` | `Date` (date-time) | no | — |
| `limit` | `query` | `number` | no | `50` |
| `offset` | `query` | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `StatusZillapiZillowPropertyDataJobsApi` | `statusZillapiZillowPropertyDataJobsApiSchema` | `src/models/status-zillapi-zillow-property-data-jobs-api.ts` |
| `Type` | `typeSchema` | `src/models/type.ts` |
| `V1JobsResponse` | `v1JobsResponseSchema` | `src/models/v1-jobs-response.ts` |

