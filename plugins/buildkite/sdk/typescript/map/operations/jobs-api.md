<!-- Generated file — do not edit; regenerated with the SDK. -->

# JobsApi — operations

Accessor: `client.jobsApi` · Source: `src/resources/jobs-api.ts` · 2 operations · Request types: namespace `JobsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `buildkite`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getJobLog

- **Signature**: `getJobLog(request: JobsApi.GetJobLogRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /organizations/{org}/pipelines/{pipeline}/builds/{number}/jobs/{job}/log`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BuildkiteError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `JobsApi.GetJobLogRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `org` | `path` | `string` | yes |
| `pipeline` | `path` | `string` | yes |
| `number` | `path` | `number` | yes |
| `job` | `path` | `string` | yes |

### retryJob

- **Signature**: `retryJob(request: JobsApi.RetryJobRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `PUT /organizations/{org}/pipelines/{pipeline}/builds/{number}/jobs/{job}/retry`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BuildkiteError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `JobsApi.RetryJobRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `org` | `path` | `string` | yes |
| `pipeline` | `path` | `string` | yes |
| `number` | `path` | `number` | yes |
| `job` | `path` | `string` | yes |

