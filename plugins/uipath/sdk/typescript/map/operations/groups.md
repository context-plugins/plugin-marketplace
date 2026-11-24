<!-- Generated file — do not edit; regenerated with the SDK. -->

# Groups — operations

Accessor: `client.groups` · Source: `src/resources/groups.ts` · 3 operations · Request and error types: namespace `Groups`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `ui-path`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createGroup

- **Server**: `defaultUiPathPlatformManagementAuditLogsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createGroup(request: Groups.CreateGroupRequestParams, options?: RequestOptions): ApiPromise<Group, Groups.CreateGroupError>`
- **Wire**: `POST /{organizationName}/identity_/api/Group`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Group`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Groups.CreateGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseUiPathPlatformManagementAuditLogsApi"` [400] `ErrorResponseUiPathPlatformManagementAuditLogsApi` · `"errorResponseUiPathPlatformManagementAuditLogsApi2"` [401] `ErrorResponseUiPathPlatformManagementAuditLogsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Groups.CreateGroupRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationName` | `path` | `string` | yes |
| `body` | `body` | `CreateGroupRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateGroupRequest` | `createGroupRequestSchema` | `src/models/create-group-request.ts` |
| `Group` | `groupSchema` | `src/models/group.ts` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `errorResponseUiPathPlatformManagementAuditLogsApiSchema` | `src/models/error-response-ui-path-platform-management-audit-logs-api.ts` |

### getGroup

- **Server**: `defaultUiPathPlatformManagementAuditLogsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getGroup(request: Groups.GetGroupRequest, options?: RequestOptions): ApiPromise<Group, Groups.GetGroupError>`
- **Wire**: `GET /{organizationName}/identity_/api/Group/{partitionGlobalId}/{groupId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Group`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Groups.GetGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseUiPathPlatformManagementAuditLogsApi"` [401] `ErrorResponseUiPathPlatformManagementAuditLogsApi` · `"errorResponseUiPathPlatformManagementAuditLogsApi2"` [404] `ErrorResponseUiPathPlatformManagementAuditLogsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Groups.GetGroupRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationName` | `path` | `string` | yes |
| `partitionGlobalId` | `path` | `string` | yes |
| `groupId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Group` | `groupSchema` | `src/models/group.ts` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `errorResponseUiPathPlatformManagementAuditLogsApiSchema` | `src/models/error-response-ui-path-platform-management-audit-logs-api.ts` |

### listGroups

- **Server**: `defaultUiPathPlatformManagementAuditLogsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listGroups(request: Groups.ListGroupsRequest, options?: RequestOptions): ApiPromise<IdentityApiGroupResponse, Groups.ListGroupsError>`
- **Wire**: `GET /{organizationName}/identity_/api/Group/{partitionGlobalId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `IdentityApiGroupResponse`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Groups.ListGroupsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseUiPathPlatformManagementAuditLogsApi"` [401] `ErrorResponseUiPathPlatformManagementAuditLogsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Groups.ListGroupsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationName` | `path` | `string` | yes |
| `partitionGlobalId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IdentityApiGroupResponse` | `identityApiGroupResponseSchema` | `src/models/identity-api-group-response.ts` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `errorResponseUiPathPlatformManagementAuditLogsApiSchema` | `src/models/error-response-ui-path-platform-management-audit-logs-api.ts` |

