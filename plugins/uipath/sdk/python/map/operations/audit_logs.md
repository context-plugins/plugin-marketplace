<!-- Generated file — do not edit; regenerated with the SDK. -->

# AuditLogs — operations

Accessor: `client.audit_logs` · Source: `ui_path/apis/audit_logs.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.audit_logs.get_organization_audit_sources

- **Route**: `GET /{organizationName}/orgaudit_/api/query/sources`
- **Auth**: `bearer_auth`
- **Server**: `default_ui_path_platform_management_audit_logs_api`
- **Signature**: `def get_organization_audit_sources(organization_name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_name`
- **Params**: `organization_name` — path `organizationName`
- **Returns (parsed)**: `AuditSources`
- **Returns (raw)**: `ApiResult[AuditSources, GetOrganizationAuditSourcesErrorBody]`
- **Error**: `GetOrganizationAuditSourcesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseUiPathPlatformManagementAuditLogsApi` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AuditSources` | `ui_path/models/audit_sources.py` |
| `GetOrganizationAuditSourcesErrorBody` | `ui_path/errors/get_organization_audit_sources_error.py` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `ui_path/models/error_response_ui_path_platform_management_audit_logs_api.py` |

### client.audit_logs.query_organization_audit_events

- **Route**: `GET /{organizationName}/orgaudit_/api/query/events`
- **Auth**: `bearer_auth`
- **Server**: `default_ui_path_platform_management_audit_logs_api`
- **Signature**: `def query_organization_audit_events(organization_name: str, *, from_: RFC3339DateTime | None = None, to: RFC3339DateTime | None = None, source: list[str] | None = None, max_count: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_name`
- **Params**: `organization_name` — path `organizationName` · `from_` — query `from` · `to` — query · `source` — query · `max_count` — query `maxCount`
- **Returns (parsed)**: `AuditEventCollection`
- **Returns (raw)**: `ApiResult[AuditEventCollection, QueryOrganizationAuditEventsErrorBody]`
- **Error**: `QueryOrganizationAuditEventsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseUiPathPlatformManagementAuditLogsApi` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AuditEventCollection` | `ui_path/models/audit_event_collection.py` |
| `QueryOrganizationAuditEventsErrorBody` | `ui_path/errors/query_organization_audit_events_error.py` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `ui_path/models/error_response_ui_path_platform_management_audit_logs_api.py` |

### client.audit_logs.query_tenant_audit_events

- **Route**: `GET /{organizationName}/{tenantName}/tenantaudit_/api/query/events`
- **Auth**: `bearer_auth`
- **Server**: `default_ui_path_platform_management_audit_logs_api`
- **Signature**: `def query_tenant_audit_events(organization_name: str, tenant_name: str, *, from_: RFC3339DateTime | None = None, to: RFC3339DateTime | None = None, source: list[str] | None = None, max_count: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_name`, `tenant_name`
- **Params**: `organization_name` — path `organizationName` · `tenant_name` — path `tenantName` · `from_` — query `from` · `to` — query · `source` — query · `max_count` — query `maxCount`
- **Returns (parsed)**: `AuditEventCollection`
- **Returns (raw)**: `ApiResult[AuditEventCollection, QueryTenantAuditEventsErrorBody]`
- **Error**: `QueryTenantAuditEventsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseUiPathPlatformManagementAuditLogsApi` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AuditEventCollection` | `ui_path/models/audit_event_collection.py` |
| `QueryTenantAuditEventsErrorBody` | `ui_path/errors/query_tenant_audit_events_error.py` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `ui_path/models/error_response_ui_path_platform_management_audit_logs_api.py` |

