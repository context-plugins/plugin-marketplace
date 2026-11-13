<!-- Generated file — do not edit; regenerated with the SDK. -->

# Workspaces — operations

Accessor: `client.workspaces` · Source: `src/resources/workspaces.ts` · 9 operations · Request types: namespace `Workspaces`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `grist-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createWorkspace

- **Signature**: `createWorkspace(request: Workspaces.CreateWorkspaceRequest, options?: RequestOptions): ApiPromise<number, ApiError>`
- **Wire**: `POST /orgs/{orgId}/workspaces`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `number` — a bare `application/json` number; the success type *is* the number
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Workspaces.CreateWorkspaceRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `orgId` | `path` | `OrgId` | yes |
| `body` | `body` | `WorkspaceParameters` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrgId` | `orgIdSchema` | `src/models/unions/org-id.ts` |
| `WorkspaceParameters` | `workspaceParametersSchema` | `src/models/workspace-parameters.ts` |

### deleteWorkspace

- **Signature**: `deleteWorkspace(request: Workspaces.DeleteWorkspaceRequest, options?: RequestOptions): ApiPromise<WorkspacesResponse, ApiError>`
- **Wire**: `DELETE /workspaces/{workspaceId}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WorkspacesResponse`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Workspaces.DeleteWorkspaceRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `workspaceId` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkspacesResponse` | `workspacesResponseSchema` | `src/models/unions/workspaces-response.ts` |

### describeWorkspace

- **Signature**: `describeWorkspace(request: Workspaces.DescribeWorkspaceRequest, options?: RequestOptions): ApiPromise<WorkspaceWithDocsAndOrg, ApiError>`
- **Wire**: `GET /workspaces/{workspaceId}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WorkspaceWithDocsAndOrg`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Workspaces.DescribeWorkspaceRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `workspaceId` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkspaceWithDocsAndOrg` | `workspaceWithDocsAndOrgSchema` | `src/models/workspace-with-docs-and-org.ts` |

### listWorkspaceAccess

- **Signature**: `listWorkspaceAccess(request: Workspaces.ListWorkspaceAccessRequest, options?: RequestOptions): ApiPromise<WorkspaceAccessRead, ApiError>`
- **Wire**: `GET /workspaces/{workspaceId}/access`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WorkspaceAccessRead`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Workspaces.ListWorkspaceAccessRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `workspaceId` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkspaceAccessRead` | `workspaceAccessReadSchema` | `src/models/workspace-access-read.ts` |

### listWorkspaces

- **Signature**: `listWorkspaces(request: Workspaces.ListWorkspacesRequest, options?: RequestOptions): ApiPromise<WorkspaceWithDocsAndDomain[], ApiError>`
- **Wire**: `GET /orgs/{orgId}/workspaces`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WorkspaceWithDocsAndDomain[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Workspaces.ListWorkspacesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `orgId` | `path` | `OrgId` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrgId` | `orgIdSchema` | `src/models/unions/org-id.ts` |
| `WorkspaceWithDocsAndDomain` | `workspaceWithDocsAndDomainSchema` | `src/models/workspace-with-docs-and-domain.ts` |

### modifyWorkspace

- **Signature**: `modifyWorkspace(request: Workspaces.ModifyWorkspaceRequest, options?: RequestOptions): ApiPromise<WorkspacesResponse, ApiError>`
- **Wire**: `PATCH /workspaces/{workspaceId}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WorkspacesResponse`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Workspaces.ModifyWorkspaceRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `workspaceId` | `path` | `number` | yes |
| `body` | `body` | `WorkspaceParameters` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkspaceParameters` | `workspaceParametersSchema` | `src/models/workspace-parameters.ts` |
| `WorkspacesResponse` | `workspacesResponseSchema` | `src/models/unions/workspaces-response.ts` |

### modifyWorkspaceAccess

- **Signature**: `modifyWorkspaceAccess(request: Workspaces.ModifyWorkspaceAccessRequest, options?: RequestOptions): ApiPromise<WorkspacesAccessResponse, ApiError>`
- **Wire**: `PATCH /workspaces/{workspaceId}/access`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WorkspacesAccessResponse`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Workspaces.ModifyWorkspaceAccessRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `workspaceId` | `path` | `number` | yes |
| `body` | `body` | `WorkspacesAccessRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkspacesAccessRequest` | `workspacesAccessRequestSchema` | `src/models/workspaces-access-request.ts` |
| `WorkspacesAccessResponse` | `workspacesAccessResponseSchema` | `src/models/unions/workspaces-access-response.ts` |

### removeWorkspace

- **Signature**: `removeWorkspace(request: Workspaces.RemoveWorkspaceRequest, options?: RequestOptions): ApiPromise<WorkspacesRemoveResponse, ApiError>`
- **Wire**: `POST /workspaces/{workspaceId}/remove`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WorkspacesRemoveResponse`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Workspaces.RemoveWorkspaceRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `workspaceId` | `path` | `number` | yes |
| `permanent` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkspacesRemoveResponse` | `workspacesRemoveResponseSchema` | `src/models/unions/workspaces-remove-response.ts` |

### unremoveWorkspace

- **Signature**: `unremoveWorkspace(request: Workspaces.UnremoveWorkspaceRequest, options?: RequestOptions): ApiPromise<WorkspacesUnremoveResponse, ApiError>`
- **Wire**: `POST /workspaces/{workspaceId}/unremove`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WorkspacesUnremoveResponse`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Workspaces.UnremoveWorkspaceRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `workspaceId` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkspacesUnremoveResponse` | `workspacesUnremoveResponseSchema` | `src/models/unions/workspaces-unremove-response.ts` |

