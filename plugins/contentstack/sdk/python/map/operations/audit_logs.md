<!-- Generated file — do not edit; regenerated with the SDK. -->

# AuditLogs — operations

Accessor: `client.audit_logs` · Source: `contentstack/apis/audit_logs.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.audit_logs.get_all_audit_logs

- **Route**: `GET /v1/organizations/{organization_uid}/projects/{project_uid}/audit-logs`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_automate_management_accounts_api`
- **Signature**: `def get_all_audit_logs(organization_uid: str, project_uid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_uid`, `project_uid`
- **Params**: `organization_uid` — path · `project_uid` — path
- **Returns (parsed)**: `AuditLogList`
- **Returns (raw)**: `ApiResult[AuditLogList, GetAllAuditLogsErrorBody]`
- **Error**: `GetAllAuditLogsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AuditLogList` | `contentstack/models/audit_log_list.py` |
| `GetAllAuditLogsErrorBody` | `contentstack/errors/get_all_audit_logs_error.py` |
| `Error` | `contentstack/models/error.py` |

