<!-- Generated file — do not edit; regenerated with the SDK. -->

# Licenses — operations

Accessor: `client.licenses` · Source: `src/resources/licenses.ts` · 2 operations · Request and error types: namespace `Licenses`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `ui-path`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getGroupLicenseAllocation

- **Server**: `defaultUiPathPlatformManagementAuditLogsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getGroupLicenseAllocation(request: Licenses.GetGroupLicenseAllocationRequest, options?: RequestOptions): ApiPromise<GroupLicenseAllocation, Licenses.GetGroupLicenseAllocationError>`
- **Wire**: `GET /{organizationName}/la/api/account/{accountId}/user-license/group/{groupId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GroupLicenseAllocation`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Licenses.GetGroupLicenseAllocationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseUiPathPlatformManagementAuditLogsApi"` [401] `ErrorResponseUiPathPlatformManagementAuditLogsApi` · `"errorResponseUiPathPlatformManagementAuditLogsApi2"` [404] `ErrorResponseUiPathPlatformManagementAuditLogsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Licenses.GetGroupLicenseAllocationRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationName` | `path` | `string` | yes |
| `accountId` | `path` | `string` | yes |
| `groupId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GroupLicenseAllocation` | `groupLicenseAllocationSchema` | `src/models/group-license-allocation.ts` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `errorResponseUiPathPlatformManagementAuditLogsApiSchema` | `src/models/error-response-ui-path-platform-management-audit-logs-api.ts` |

### updateGroupLicenseAllocation

- **Server**: `defaultUiPathPlatformManagementAuditLogsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateGroupLicenseAllocation(request: Licenses.UpdateGroupLicenseAllocationRequestParams, options?: RequestOptions): ApiPromise<GroupLicenseAllocation, Licenses.UpdateGroupLicenseAllocationError>`
- **Wire**: `PUT /{organizationName}/la/api/account/{accountId}/user-license/group/{groupId}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GroupLicenseAllocation`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Licenses.UpdateGroupLicenseAllocationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseUiPathPlatformManagementAuditLogsApi"` [400] `ErrorResponseUiPathPlatformManagementAuditLogsApi` · `"errorResponseUiPathPlatformManagementAuditLogsApi2"` [401] `ErrorResponseUiPathPlatformManagementAuditLogsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Licenses.UpdateGroupLicenseAllocationRequestParams` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationName` | `path` | `string` | yes |
| `accountId` | `path` | `string` | yes |
| `groupId` | `path` | `string` | yes |
| `body` | `body` | `UpdateGroupLicenseAllocationRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateGroupLicenseAllocationRequest` | `updateGroupLicenseAllocationRequestSchema` | `src/models/update-group-license-allocation-request.ts` |
| `GroupLicenseAllocation` | `groupLicenseAllocationSchema` | `src/models/group-license-allocation.ts` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `errorResponseUiPathPlatformManagementAuditLogsApiSchema` | `src/models/error-response-ui-path-platform-management-audit-logs-api.ts` |

