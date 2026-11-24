<!-- Generated file — do not edit; regenerated with the SDK. -->

# ProjectMemberships — operations

Accessor: `client.projectMemberships` · Source: `src/resources/project-memberships.ts` · 2 operations · Request and error types: namespace `ProjectMemberships`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `asana`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getProjectMembership

- **Signature**: `getProjectMembership(request: ProjectMemberships.GetProjectMembershipRequest, options?: RequestOptions): ApiPromise<ProjectMembershipsResponse, ProjectMemberships.GetProjectMembershipError>`
- **Wire**: `GET /project_memberships/{project_membership_gid}`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProjectMembershipsResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `ProjectMemberships.GetProjectMembershipError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProjectMemberships.GetProjectMembershipRequest` (3):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `projectMembershipGid` | `path` | `project_membership_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectMembershipsResponse` | `projectMembershipsResponseSchema` | `src/models/project-memberships-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getProjectMembershipsForProject

- **Signature**: `getProjectMembershipsForProject(request: ProjectMemberships.GetProjectMembershipsForProjectRequest, options?: RequestOptions): ApiPromise<ProjectsProjectMembershipsResponse, ProjectMemberships.GetProjectMembershipsForProjectError>`
- **Wire**: `GET /projects/{project_gid}/project_memberships`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProjectsProjectMembershipsResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `ProjectMemberships.GetProjectMembershipsForProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProjectMemberships.GetProjectMembershipsForProjectRequest` (6):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `projectGid` | `path` | `project_gid` | `string` | yes | — |
| `user` | `query` | — | `string` | no | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectsProjectMembershipsResponse` | `projectsProjectMembershipsResponseSchema` | `src/models/projects-project-memberships-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

