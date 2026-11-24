<!-- Generated file — do not edit; regenerated with the SDK. -->

# ProjectChangeRequests — operations

Accessor: `client.projectChangeRequests` · Source: `src/resources/project-change-requests.ts` · 1 operation · Request and error types: namespace `ProjectChangeRequests`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dev-cycle`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### projectChangeRequestsControllerGetFeatureChangeRequests

- **Signature**: `projectChangeRequestsControllerGetFeatureChangeRequests(request: ProjectChangeRequests.ProjectChangeRequestsControllerGetFeatureChangeRequestsRequest, options?: RequestOptions): ApiPromise<FeatureChangeRequestSummary[], ProjectChangeRequests.ProjectChangeRequestsControllerGetFeatureChangeRequestsError>`
- **Wire**: `GET /v2/projects/{project}/change-requests`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FeatureChangeRequestSummary[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `ProjectChangeRequests.ProjectChangeRequestsControllerGetFeatureChangeRequestsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"notFoundErrorResponse"` [404] `NotFoundErrorResponse` · `"error405"` [405] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProjectChangeRequests.ProjectChangeRequestsControllerGetFeatureChangeRequestsRequest` (9):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `project` | `path` | `string` | yes | — |
| `page` | `query` | `number` | no | `1` |
| `perPage` | `query` | `number` | no | `100` |
| `sortBy` | `query` | `SortBy` | no | `SortBy.CreatedAt` |
| `sortOrder` | `query` | `SortOrder` | no | `SortOrder.Desc` |
| `search` | `query` | `string` | no | — |
| `createdBy` | `query` | `string` | no | — |
| `status` | `query` | `Status1DevCycleManagementProjectChangeRequestsApi` | no | — |
| `reviewer` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SortBy` | `sortBySchema` | `src/models/sort-by.ts` |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `Status1DevCycleManagementProjectChangeRequestsApi` | `status1DevCycleManagementProjectChangeRequestsApiSchema` | `src/models/status1-dev-cycle-management-project-change-requests-api.ts` |
| `FeatureChangeRequestSummary` | `featureChangeRequestSummarySchema` | `src/models/feature-change-request-summary.ts` |
| `NotFoundErrorResponse` | `notFoundErrorResponseSchema` | `src/models/not-found-error-response.ts` |

