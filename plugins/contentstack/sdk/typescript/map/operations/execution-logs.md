<!-- Generated file — do not edit; regenerated with the SDK. -->

# ExecutionLogs — operations

Accessor: `client.executionLogs` · Source: `src/resources/execution-logs.ts` · 2 operations · Request and error types: namespace `ExecutionLogs`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `contentstack`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getAllExecutionLogs

- **Server**: `defaultContentstackAutomateManagementAccountsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getAllExecutionLogs(request: ExecutionLogs.GetAllExecutionLogsRequest, options?: RequestOptions): ApiPromise<ExecutionLogList, ExecutionLogs.GetAllExecutionLogsError>`
- **Wire**: `GET /v1/organizations/{organization_uid}/projects/{project_uid}/executions`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ExecutionLogList`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `ExecutionLogs.GetAllExecutionLogsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ExecutionLogs.GetAllExecutionLogsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `organizationUid` | `path` | `organization_uid` | `string` | yes |
| `projectUid` | `path` | `project_uid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ExecutionLogList` | `executionLogListSchema` | `src/models/execution-log-list.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getExecutionLog

- **Server**: `defaultContentstackAutomateManagementAccountsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getExecutionLog(request: ExecutionLogs.GetExecutionLogRequest, options?: RequestOptions): ApiPromise<ExecutionLog, ExecutionLogs.GetExecutionLogError>`
- **Wire**: `GET /v1/organizations/{organization_uid}/projects/{project_uid}/executions/{execution_uid}`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ExecutionLog`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `ExecutionLogs.GetExecutionLogError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ExecutionLogs.GetExecutionLogRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `organizationUid` | `path` | `organization_uid` | `string` | yes |
| `projectUid` | `path` | `project_uid` | `string` | yes |
| `executionUid` | `path` | `execution_uid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ExecutionLog` | `executionLogSchema` | `src/models/execution-log.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

