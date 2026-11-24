<!-- Generated file — do not edit; regenerated with the SDK. -->

# Discovery — operations

Accessor: `client.discovery` · Source: `src/resources/discovery.ts` · 3 operations · Request and error types: namespace `Discovery`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `ui-path`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listClassifiers

- **Server**: `defaultUiPathDocumentUnderstandingClassificationApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listClassifiers(request: Discovery.ListClassifiersRequest, options?: RequestOptions): ApiPromise<ProjectsClassifiersResponse, Discovery.ListClassifiersError>`
- **Wire**: `GET /projects/{projectId}/classifiers`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProjectsClassifiersResponse`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Discovery.ListClassifiersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseUiPathPlatformManagementAuditLogsApi"` [401] `ErrorResponseUiPathPlatformManagementAuditLogsApi` · `"errorResponseUiPathPlatformManagementAuditLogsApi2"` [404] `ErrorResponseUiPathPlatformManagementAuditLogsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Discovery.ListClassifiersRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `projectId` | `path` | — | `string` | yes | — |
| `apiVersion` | `query` | `api-version` | `string` | no | `"1"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectsClassifiersResponse` | `projectsClassifiersResponseSchema` | `src/models/projects-classifiers-response.ts` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `errorResponseUiPathPlatformManagementAuditLogsApiSchema` | `src/models/error-response-ui-path-platform-management-audit-logs-api.ts` |

### listExtractors

- **Server**: `defaultUiPathDocumentUnderstandingClassificationApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listExtractors(request: Discovery.ListExtractorsRequest, options?: RequestOptions): ApiPromise<ProjectsExtractorsResponse, Discovery.ListExtractorsError>`
- **Wire**: `GET /projects/{projectId}/extractors`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProjectsExtractorsResponse`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Discovery.ListExtractorsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseUiPathPlatformManagementAuditLogsApi"` [401] `ErrorResponseUiPathPlatformManagementAuditLogsApi` · `"errorResponseUiPathPlatformManagementAuditLogsApi2"` [404] `ErrorResponseUiPathPlatformManagementAuditLogsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Discovery.ListExtractorsRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `projectId` | `path` | — | `string` | yes | — |
| `apiVersion` | `query` | `api-version` | `string` | no | `"1"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectsExtractorsResponse` | `projectsExtractorsResponseSchema` | `src/models/projects-extractors-response.ts` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `errorResponseUiPathPlatformManagementAuditLogsApiSchema` | `src/models/error-response-ui-path-platform-management-audit-logs-api.ts` |

### listProjects

- **Server**: `defaultUiPathDocumentUnderstandingClassificationApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listProjects(request?: Discovery.ListProjectsRequest, options?: RequestOptions): ApiPromise<ProjectsResponse, Discovery.ListProjectsError>`
- **Wire**: `GET /projects`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProjectsResponse`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Discovery.ListProjectsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseUiPathPlatformManagementAuditLogsApi"` [401] `ErrorResponseUiPathPlatformManagementAuditLogsApi` · `"errorResponseUiPathPlatformManagementAuditLogsApi2"` [403] `ErrorResponseUiPathPlatformManagementAuditLogsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Discovery.ListProjectsRequest` (1):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `apiVersion` | `query` | `api-version` | `string` | no | `"1"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectsResponse` | `projectsResponseSchema` | `src/models/projects-response.ts` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `errorResponseUiPathPlatformManagementAuditLogsApiSchema` | `src/models/error-response-ui-path-platform-management-audit-logs-api.ts` |

