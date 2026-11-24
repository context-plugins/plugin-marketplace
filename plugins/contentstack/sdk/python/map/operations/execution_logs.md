<!-- Generated file — do not edit; regenerated with the SDK. -->

# ExecutionLogs — operations

Accessor: `client.execution_logs` · Source: `contentstack/apis/execution_logs.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.execution_logs.get_all_execution_logs

- **Route**: `GET /v1/organizations/{organization_uid}/projects/{project_uid}/executions`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_automate_management_accounts_api`
- **Signature**: `def get_all_execution_logs(organization_uid: str, project_uid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_uid`, `project_uid`
- **Params**: `organization_uid` — path · `project_uid` — path
- **Returns (parsed)**: `ExecutionLogList`
- **Returns (raw)**: `ApiResult[ExecutionLogList, GetAllExecutionLogsErrorBody]`
- **Error**: `GetAllExecutionLogsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ExecutionLogList` | `contentstack/models/execution_log_list.py` |
| `GetAllExecutionLogsErrorBody` | `contentstack/errors/get_all_execution_logs_error.py` |
| `Error` | `contentstack/models/error.py` |

### client.execution_logs.get_execution_log

- **Route**: `GET /v1/organizations/{organization_uid}/projects/{project_uid}/executions/{execution_uid}`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_automate_management_accounts_api`
- **Signature**: `def get_execution_log(organization_uid: str, project_uid: str, execution_uid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_uid`, `project_uid`, `execution_uid`
- **Params**: `organization_uid` — path · `project_uid` — path · `execution_uid` — path
- **Returns (parsed)**: `ExecutionLog`
- **Returns (raw)**: `ApiResult[ExecutionLog, GetExecutionLogErrorBody]`
- **Error**: `GetExecutionLogErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ExecutionLog` | `contentstack/models/execution_log.py` |
| `GetExecutionLogErrorBody` | `contentstack/errors/get_execution_log_error.py` |
| `Error` | `contentstack/models/error.py` |

