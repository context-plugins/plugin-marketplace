<!-- Generated file — do not edit; regenerated with the SDK. -->

# Jobs — operations

Accessor: `client.jobs` · Source: `src/resources/jobs.ts` · 1 operation · Request and error types: namespace `Jobs`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `staying-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### pollJob

- **Signature**: `pollJob(request: Jobs.PollJobRequest, options?: RequestOptions): ApiPromise<JobResponse, Jobs.PollJobError>`
- **Wire**: `GET /jobs/{jobId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `JobResponse`
- **Error**: `StayingApiError` with `kind: "api"`, an instance of `Jobs.PollJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorEnvelope"` [401] `ErrorEnvelope` · `"errorEnvelope2"` [404] `ErrorEnvelope` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Jobs.PollJobRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `jobId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `JobResponse` | `jobResponseSchema` | `src/models/unions/job-response.ts` |
| `ErrorEnvelope` | `errorEnvelopeSchema` | `src/models/error-envelope.ts` |

