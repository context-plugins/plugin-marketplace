<!-- Generated file — do not edit; regenerated with the SDK. -->

# Workspaces — operations

Accessor: `client.workspaces` · Source: `src/resources/workspaces.ts` · 5 operations · Request types: namespace `Workspaces`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cribl-cloud-public-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### v1WorkspacesCreateWorkspace

- **Signature**: `v1WorkspacesCreateWorkspace(request: Workspaces.V1WorkspacesCreateWorkspaceRequest, options?: RequestOptions): ApiPromise<WorkspaceSchema, ApiError>`
- **Wire**: `POST /v1/organizations/{organizationId}/workspaces`
- **Auth**: any of `clientOauth`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WorkspaceSchema`
- **Error**: `CriblCloudPublicApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Workspaces.V1WorkspacesCreateWorkspaceRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationId` | `path` | `string` | yes |
| `body` | `body` | `WorkspaceCreateRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkspaceCreateRequestDto` | `workspaceCreateRequestDtoSchema` | `src/models/workspace-create-request-dto.ts` |
| `WorkspaceSchema` | `workspaceSchemaSchema` | `src/models/workspace-schema.ts` |

### v1WorkspacesDeleteWorkspace

- **Signature**: `v1WorkspacesDeleteWorkspace(request: Workspaces.V1WorkspacesDeleteWorkspaceRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /v1/organizations/{organizationId}/workspaces/{workspaceId}`
- **Auth**: any of `clientOauth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `CriblCloudPublicApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Workspaces.V1WorkspacesDeleteWorkspaceRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationId` | `path` | `string` | yes |
| `workspaceId` | `path` | `string` | yes |

### v1WorkspacesGetWorkspace

- **Signature**: `v1WorkspacesGetWorkspace(request: Workspaces.V1WorkspacesGetWorkspaceRequest, options?: RequestOptions): ApiPromise<WorkspaceSchema, ApiError>`
- **Wire**: `GET /v1/organizations/{organizationId}/workspaces/{workspaceId}`
- **Auth**: any of `clientOauth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WorkspaceSchema`
- **Error**: `CriblCloudPublicApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Workspaces.V1WorkspacesGetWorkspaceRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationId` | `path` | `string` | yes |
| `workspaceId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkspaceSchema` | `workspaceSchemaSchema` | `src/models/workspace-schema.ts` |

### v1WorkspacesListWorkspaces

- **Signature**: `v1WorkspacesListWorkspaces(request: Workspaces.V1WorkspacesListWorkspacesRequest, options?: RequestOptions): ApiPromise<WorkspacesListResponseDto, ApiError>`
- **Wire**: `GET /v1/organizations/{organizationId}/workspaces`
- **Auth**: any of `clientOauth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WorkspacesListResponseDto`
- **Error**: `CriblCloudPublicApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Workspaces.V1WorkspacesListWorkspacesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkspacesListResponseDto` | `workspacesListResponseDtoSchema` | `src/models/workspaces-list-response-dto.ts` |

### v1WorkspacesUpdateWorkspace

- **Signature**: `v1WorkspacesUpdateWorkspace(request: Workspaces.V1WorkspacesUpdateWorkspaceRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `PATCH /v1/organizations/{organizationId}/workspaces/{workspaceId}`
- **Auth**: any of `clientOauth`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `CriblCloudPublicApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Workspaces.V1WorkspacesUpdateWorkspaceRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationId` | `path` | `string` | yes |
| `workspaceId` | `path` | `string` | yes |
| `body` | `body` | `WorkspacePatchRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkspacePatchRequestDto` | `workspacePatchRequestDtoSchema` | `src/models/workspace-patch-request-dto.ts` |

