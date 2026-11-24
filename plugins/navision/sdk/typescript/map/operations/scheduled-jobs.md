<!-- Generated file — do not edit; regenerated with the SDK. -->

# ScheduledJobs — operations

Accessor: `client.scheduledJobs` · Source: `src/resources/scheduled-jobs.ts` · 1 operation · Request and error types: namespace `ScheduledJobs`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `microsoft-dynamics-nav`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listScheduledJobs

- **Server**: `defaultBusinessCentralAutomationApiV20CompaniesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listScheduledJobs(request: ScheduledJobs.ListScheduledJobsRequest, options?: RequestOptions): ApiPromise<CompaniesApiScheduledJobsResponse, ScheduledJobs.ListScheduledJobsError>`
- **Wire**: `GET /companies({company_id})/scheduledJobs`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompaniesApiScheduledJobsResponse`
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `ScheduledJobs.ListScheduledJobsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ScheduledJobs.ListScheduledJobsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompaniesApiScheduledJobsResponse` | `companiesApiScheduledJobsResponseSchema` | `src/models/companies-api-scheduled-jobs-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

