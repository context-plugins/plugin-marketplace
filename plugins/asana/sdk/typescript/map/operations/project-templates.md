<!-- Generated file — do not edit; regenerated with the SDK. -->

# ProjectTemplates — operations

Accessor: `client.projectTemplates` · Source: `src/resources/project-templates.ts` · 4 operations · Request and error types: namespace `ProjectTemplates`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `asana`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getProjectTemplate

- **Signature**: `getProjectTemplate(request: ProjectTemplates.GetProjectTemplateRequest, options?: RequestOptions): ApiPromise<ProjectTemplatesResponse, ProjectTemplates.GetProjectTemplateError>`
- **Wire**: `GET /project_templates/{project_template_gid}`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProjectTemplatesResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `ProjectTemplates.GetProjectTemplateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProjectTemplates.GetProjectTemplateRequest` (3):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `projectTemplateGid` | `path` | `project_template_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectTemplatesResponse` | `projectTemplatesResponseSchema` | `src/models/project-templates-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getProjectTemplates

- **Signature**: `getProjectTemplates(request?: ProjectTemplates.GetProjectTemplatesRequest, options?: RequestOptions): ApiPromise<ProjectTemplatesResponse1, ProjectTemplates.GetProjectTemplatesError>`
- **Wire**: `GET /project_templates`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProjectTemplatesResponse1`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `ProjectTemplates.GetProjectTemplatesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProjectTemplates.GetProjectTemplatesRequest` (6):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `workspace` | `query` | — | `string` | no | — |
| `team` | `query` | — | `string` | no | — |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectTemplatesResponse1` | `projectTemplatesResponse1Schema` | `src/models/project-templates-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getProjectTemplatesForTeam

- **Signature**: `getProjectTemplatesForTeam(request: ProjectTemplates.GetProjectTemplatesForTeamRequest, options?: RequestOptions): ApiPromise<TeamsProjectTemplatesResponse, ProjectTemplates.GetProjectTemplatesForTeamError>`
- **Wire**: `GET /teams/{team_gid}/project_templates`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamsProjectTemplatesResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `ProjectTemplates.GetProjectTemplatesForTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProjectTemplates.GetProjectTemplatesForTeamRequest` (5):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `teamGid` | `path` | `team_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TeamsProjectTemplatesResponse` | `teamsProjectTemplatesResponseSchema` | `src/models/teams-project-templates-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### instantiateProject

- **Signature**: `instantiateProject(request: ProjectTemplates.InstantiateProjectRequest, options?: RequestOptions): ApiPromise<ProjectTemplatesInstantiateProjectResponse, ProjectTemplates.InstantiateProjectError>`
- **Wire**: `POST /project_templates/{project_template_gid}/instantiateProject`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProjectTemplatesInstantiateProjectResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `ProjectTemplates.InstantiateProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProjectTemplates.InstantiateProjectRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `projectTemplateGid` | `path` | `project_template_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `ProjectTemplatesInstantiateProjectRequest` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectTemplatesInstantiateProjectRequest` | `projectTemplatesInstantiateProjectRequestSchema` | `src/models/project-templates-instantiate-project-request.ts` |
| `ProjectTemplatesInstantiateProjectResponse` | `projectTemplatesInstantiateProjectResponseSchema` | `src/models/project-templates-instantiate-project-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

