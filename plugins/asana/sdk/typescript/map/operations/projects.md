<!-- Generated file — do not edit; regenerated with the SDK. -->

# Projects — operations

Accessor: `client.projects` · Source: `src/resources/projects.ts` · 19 operations · Request and error types: namespace `Projects`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `asana`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addCustomFieldSettingForProject

- **Signature**: `addCustomFieldSettingForProject(request: Projects.AddCustomFieldSettingForProjectRequest, options?: RequestOptions): ApiPromise<ProjectsAddCustomFieldSettingResponse, Projects.AddCustomFieldSettingForProjectError>`
- **Wire**: `POST /projects/{project_gid}/addCustomFieldSetting`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProjectsAddCustomFieldSettingResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Projects.AddCustomFieldSettingForProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.AddCustomFieldSettingForProjectRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectGid` | `path` | `project_gid` | `string` | yes |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no |
| `body` | `body` | — | `ProjectsAddCustomFieldSettingRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectsAddCustomFieldSettingRequest` | `projectsAddCustomFieldSettingRequestSchema` | `src/models/projects-add-custom-field-setting-request.ts` |
| `ProjectsAddCustomFieldSettingResponse` | `projectsAddCustomFieldSettingResponseSchema` | `src/models/projects-add-custom-field-setting-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### addFollowersForProject

- **Signature**: `addFollowersForProject(request: Projects.AddFollowersForProjectRequest, options?: RequestOptions): ApiPromise<ProjectsAddFollowersResponse, Projects.AddFollowersForProjectError>`
- **Wire**: `POST /projects/{project_gid}/addFollowers`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProjectsAddFollowersResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Projects.AddFollowersForProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.AddFollowersForProjectRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `projectGid` | `path` | `project_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `ProjectsAddFollowersRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectsAddFollowersRequest` | `projectsAddFollowersRequestSchema` | `src/models/projects-add-followers-request.ts` |
| `ProjectsAddFollowersResponse` | `projectsAddFollowersResponseSchema` | `src/models/projects-add-followers-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### addMembersForProject

- **Signature**: `addMembersForProject(request: Projects.AddMembersForProjectRequest, options?: RequestOptions): ApiPromise<ProjectsAddMembersResponse, Projects.AddMembersForProjectError>`
- **Wire**: `POST /projects/{project_gid}/addMembers`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProjectsAddMembersResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Projects.AddMembersForProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.AddMembersForProjectRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `projectGid` | `path` | `project_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `ProjectsAddMembersRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectsAddMembersRequest` | `projectsAddMembersRequestSchema` | `src/models/projects-add-members-request.ts` |
| `ProjectsAddMembersResponse` | `projectsAddMembersResponseSchema` | `src/models/projects-add-members-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### createProject

- **Signature**: `createProject(request: Projects.CreateProjectRequest, options?: RequestOptions): ApiPromise<ProjectsResponse1, Projects.CreateProjectError>`
- **Wire**: `POST /projects`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProjectsResponse1`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Projects.CreateProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.CreateProjectRequest` (3):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `ProjectsRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectsRequest` | `projectsRequestSchema` | `src/models/projects-request.ts` |
| `ProjectsResponse1` | `projectsResponse1Schema` | `src/models/projects-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### createProjectForTeam

- **Signature**: `createProjectForTeam(request: Projects.CreateProjectForTeamRequest, options?: RequestOptions): ApiPromise<TeamsProjectsResponse1, Projects.CreateProjectForTeamError>`
- **Wire**: `POST /teams/{team_gid}/projects`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TeamsProjectsResponse1`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Projects.CreateProjectForTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.CreateProjectForTeamRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `teamGid` | `path` | `team_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `TeamsProjectsRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TeamsProjectsRequest` | `teamsProjectsRequestSchema` | `src/models/teams-projects-request.ts` |
| `TeamsProjectsResponse1` | `teamsProjectsResponse1Schema` | `src/models/teams-projects-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### createProjectForWorkspace

- **Signature**: `createProjectForWorkspace(request: Projects.CreateProjectForWorkspaceRequest, options?: RequestOptions): ApiPromise<WorkspacesProjectsResponse1, Projects.CreateProjectForWorkspaceError>`
- **Wire**: `POST /workspaces/{workspace_gid}/projects`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WorkspacesProjectsResponse1`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Projects.CreateProjectForWorkspaceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.CreateProjectForWorkspaceRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `workspaceGid` | `path` | `workspace_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `WorkspacesProjectsRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkspacesProjectsRequest` | `workspacesProjectsRequestSchema` | `src/models/workspaces-projects-request.ts` |
| `WorkspacesProjectsResponse1` | `workspacesProjectsResponse1Schema` | `src/models/workspaces-projects-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteProject

- **Signature**: `deleteProject(request: Projects.DeleteProjectRequest, options?: RequestOptions): ApiPromise<ProjectsResponse4, Projects.DeleteProjectError>`
- **Wire**: `DELETE /projects/{project_gid}`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProjectsResponse4`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Projects.DeleteProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.DeleteProjectRequest` (3):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `projectGid` | `path` | `project_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectsResponse4` | `projectsResponse4Schema` | `src/models/projects-response4.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### duplicateProject

- **Signature**: `duplicateProject(request: Projects.DuplicateProjectRequest, options?: RequestOptions): ApiPromise<ProjectsDuplicateResponse, Projects.DuplicateProjectError>`
- **Wire**: `POST /projects/{project_gid}/duplicate`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProjectsDuplicateResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Projects.DuplicateProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.DuplicateProjectRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `projectGid` | `path` | `project_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `ProjectsDuplicateRequest` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectsDuplicateRequest` | `projectsDuplicateRequestSchema` | `src/models/projects-duplicate-request.ts` |
| `ProjectsDuplicateResponse` | `projectsDuplicateResponseSchema` | `src/models/projects-duplicate-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getProject

- **Signature**: `getProject(request: Projects.GetProjectRequest, options?: RequestOptions): ApiPromise<ProjectsResponse1, Projects.GetProjectError>`
- **Wire**: `GET /projects/{project_gid}`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProjectsResponse1`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Projects.GetProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.GetProjectRequest` (3):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `projectGid` | `path` | `project_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectsResponse1` | `projectsResponse1Schema` | `src/models/projects-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getProjects

- **Signature**: `getProjects(request?: Projects.GetProjectsRequest, options?: RequestOptions): ApiPromise<ProjectsResponse, Projects.GetProjectsError>`
- **Wire**: `GET /projects`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProjectsResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Projects.GetProjectsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.GetProjectsRequest` (7):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `string` | no | — |
| `workspace` | `query` | — | `string` | no | — |
| `team` | `query` | — | `string` | no | — |
| `archived` | `query` | — | `boolean` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectsResponse` | `projectsResponseSchema` | `src/models/projects-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getProjectsForTask

- **Signature**: `getProjectsForTask(request: Projects.GetProjectsForTaskRequest, options?: RequestOptions): ApiPromise<TasksProjectsResponse, Projects.GetProjectsForTaskError>`
- **Wire**: `GET /tasks/{task_gid}/projects`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TasksProjectsResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Projects.GetProjectsForTaskError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.GetProjectsForTaskRequest` (5):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `taskGid` | `path` | `task_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TasksProjectsResponse` | `tasksProjectsResponseSchema` | `src/models/tasks-projects-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getProjectsForTeam

- **Signature**: `getProjectsForTeam(request: Projects.GetProjectsForTeamRequest, options?: RequestOptions): ApiPromise<TeamsProjectsResponse, Projects.GetProjectsForTeamError>`
- **Wire**: `GET /teams/{team_gid}/projects`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamsProjectsResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Projects.GetProjectsForTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.GetProjectsForTeamRequest` (6):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `teamGid` | `path` | `team_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `string` | no | — |
| `archived` | `query` | — | `boolean` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TeamsProjectsResponse` | `teamsProjectsResponseSchema` | `src/models/teams-projects-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getProjectsForWorkspace

- **Signature**: `getProjectsForWorkspace(request: Projects.GetProjectsForWorkspaceRequest, options?: RequestOptions): ApiPromise<WorkspacesProjectsResponse, Projects.GetProjectsForWorkspaceError>`
- **Wire**: `GET /workspaces/{workspace_gid}/projects`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WorkspacesProjectsResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Projects.GetProjectsForWorkspaceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.GetProjectsForWorkspaceRequest` (6):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `workspaceGid` | `path` | `workspace_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `string` | no | — |
| `archived` | `query` | — | `boolean` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkspacesProjectsResponse` | `workspacesProjectsResponseSchema` | `src/models/workspaces-projects-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getTaskCountsForProject

- **Signature**: `getTaskCountsForProject(request: Projects.GetTaskCountsForProjectRequest, options?: RequestOptions): ApiPromise<ProjectsTaskCountsResponse, Projects.GetTaskCountsForProjectError>`
- **Wire**: `GET /projects/{project_gid}/task_counts`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProjectsTaskCountsResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Projects.GetTaskCountsForProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.GetTaskCountsForProjectRequest` (5):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `projectGid` | `path` | `project_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectsTaskCountsResponse` | `projectsTaskCountsResponseSchema` | `src/models/projects-task-counts-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### projectSaveAsTemplate

- **Signature**: `projectSaveAsTemplate(request: Projects.ProjectSaveAsTemplateRequestParams, options?: RequestOptions): ApiPromise<ProjectsSaveAsTemplateResponse, Projects.ProjectSaveAsTemplateError>`
- **Wire**: `POST /projects/{project_gid}/saveAsTemplate`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProjectsSaveAsTemplateResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Projects.ProjectSaveAsTemplateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ProjectSaveAsTemplateRequestParams` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `projectGid` | `path` | `project_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `ProjectsSaveAsTemplateRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectsSaveAsTemplateRequest` | `projectsSaveAsTemplateRequestSchema` | `src/models/projects-save-as-template-request.ts` |
| `ProjectsSaveAsTemplateResponse` | `projectsSaveAsTemplateResponseSchema` | `src/models/projects-save-as-template-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### removeCustomFieldSettingForProject

- **Signature**: `removeCustomFieldSettingForProject(request: Projects.RemoveCustomFieldSettingForProjectRequest, options?: RequestOptions): ApiPromise<ProjectsRemoveCustomFieldSettingResponse, Projects.RemoveCustomFieldSettingForProjectError>`
- **Wire**: `POST /projects/{project_gid}/removeCustomFieldSetting`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProjectsRemoveCustomFieldSettingResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Projects.RemoveCustomFieldSettingForProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.RemoveCustomFieldSettingForProjectRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectGid` | `path` | `project_gid` | `string` | yes |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no |
| `body` | `body` | — | `ProjectsRemoveCustomFieldSettingRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectsRemoveCustomFieldSettingRequest` | `projectsRemoveCustomFieldSettingRequestSchema` | `src/models/projects-remove-custom-field-setting-request.ts` |
| `ProjectsRemoveCustomFieldSettingResponse` | `projectsRemoveCustomFieldSettingResponseSchema` | `src/models/projects-remove-custom-field-setting-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### removeFollowersForProject

- **Signature**: `removeFollowersForProject(request: Projects.RemoveFollowersForProjectRequest, options?: RequestOptions): ApiPromise<ProjectsRemoveFollowersResponse, Projects.RemoveFollowersForProjectError>`
- **Wire**: `POST /projects/{project_gid}/removeFollowers`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProjectsRemoveFollowersResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Projects.RemoveFollowersForProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.RemoveFollowersForProjectRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `projectGid` | `path` | `project_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `ProjectsRemoveFollowersRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectsRemoveFollowersRequest` | `projectsRemoveFollowersRequestSchema` | `src/models/projects-remove-followers-request.ts` |
| `ProjectsRemoveFollowersResponse` | `projectsRemoveFollowersResponseSchema` | `src/models/projects-remove-followers-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### removeMembersForProject

- **Signature**: `removeMembersForProject(request: Projects.RemoveMembersForProjectRequest, options?: RequestOptions): ApiPromise<ProjectsRemoveMembersResponse, Projects.RemoveMembersForProjectError>`
- **Wire**: `POST /projects/{project_gid}/removeMembers`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProjectsRemoveMembersResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Projects.RemoveMembersForProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.RemoveMembersForProjectRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `projectGid` | `path` | `project_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `ProjectsRemoveMembersRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectsRemoveMembersRequest` | `projectsRemoveMembersRequestSchema` | `src/models/projects-remove-members-request.ts` |
| `ProjectsRemoveMembersResponse` | `projectsRemoveMembersResponseSchema` | `src/models/projects-remove-members-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateProject

- **Signature**: `updateProject(request: Projects.UpdateProjectRequest, options?: RequestOptions): ApiPromise<ProjectsResponse1, Projects.UpdateProjectError>`
- **Wire**: `PUT /projects/{project_gid}`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProjectsResponse1`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Projects.UpdateProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.UpdateProjectRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `projectGid` | `path` | `project_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `ProjectsRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectsRequest` | `projectsRequestSchema` | `src/models/projects-request.ts` |
| `ProjectsResponse1` | `projectsResponse1Schema` | `src/models/projects-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

