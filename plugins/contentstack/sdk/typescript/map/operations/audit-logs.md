<!-- Generated file — do not edit; regenerated with the SDK. -->

# AuditLogs — operations

Accessor: `client.auditLogs` · Source: `src/resources/audit-logs.ts` · 1 operation · Request and error types: namespace `AuditLogs`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `contentstack`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getAllAuditLogs

- **Server**: `defaultContentstackAutomateManagementAccountsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getAllAuditLogs(request: AuditLogs.GetAllAuditLogsRequest, options?: RequestOptions): ApiPromise<AuditLogList, AuditLogs.GetAllAuditLogsError>`
- **Wire**: `GET /v1/organizations/{organization_uid}/projects/{project_uid}/audit-logs`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AuditLogList`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `AuditLogs.GetAllAuditLogsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AuditLogs.GetAllAuditLogsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `organizationUid` | `path` | `organization_uid` | `string` | yes |
| `projectUid` | `path` | `project_uid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AuditLogList` | `auditLogListSchema` | `src/models/audit-log-list.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

