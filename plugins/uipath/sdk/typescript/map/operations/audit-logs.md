<!-- Generated file — do not edit; regenerated with the SDK. -->

# AuditLogs — operations

Accessor: `client.auditLogs` · Source: `src/resources/audit-logs.ts` · 3 operations · Request and error types: namespace `AuditLogs`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `ui-path`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getOrganizationAuditSources

- **Server**: `defaultUiPathPlatformManagementAuditLogsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getOrganizationAuditSources(request: AuditLogs.GetOrganizationAuditSourcesRequest, options?: RequestOptions): ApiPromise<AuditSources, AuditLogs.GetOrganizationAuditSourcesError>`
- **Wire**: `GET /{organizationName}/orgaudit_/api/query/sources`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AuditSources`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `AuditLogs.GetOrganizationAuditSourcesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseUiPathPlatformManagementAuditLogsApi"` [401] `ErrorResponseUiPathPlatformManagementAuditLogsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AuditLogs.GetOrganizationAuditSourcesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationName` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AuditSources` | `auditSourcesSchema` | `src/models/audit-sources.ts` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `errorResponseUiPathPlatformManagementAuditLogsApiSchema` | `src/models/error-response-ui-path-platform-management-audit-logs-api.ts` |

### queryOrganizationAuditEvents

- **Server**: `defaultUiPathPlatformManagementAuditLogsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `queryOrganizationAuditEvents(request: AuditLogs.QueryOrganizationAuditEventsRequest, options?: RequestOptions): ApiPromise<AuditEventCollection, AuditLogs.QueryOrganizationAuditEventsError>`
- **Wire**: `GET /{organizationName}/orgaudit_/api/query/events`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AuditEventCollection`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `AuditLogs.QueryOrganizationAuditEventsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseUiPathPlatformManagementAuditLogsApi"` [401] `ErrorResponseUiPathPlatformManagementAuditLogsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AuditLogs.QueryOrganizationAuditEventsRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationName` | `path` | `string` | yes |
| `from` | `query` | `Date` (date-time) | no |
| `to` | `query` | `Date` (date-time) | no |
| `source` | `query` | `string[]` | no |
| `maxCount` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AuditEventCollection` | `auditEventCollectionSchema` | `src/models/audit-event-collection.ts` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `errorResponseUiPathPlatformManagementAuditLogsApiSchema` | `src/models/error-response-ui-path-platform-management-audit-logs-api.ts` |

### queryTenantAuditEvents

- **Server**: `defaultUiPathPlatformManagementAuditLogsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `queryTenantAuditEvents(request: AuditLogs.QueryTenantAuditEventsRequest, options?: RequestOptions): ApiPromise<AuditEventCollection, AuditLogs.QueryTenantAuditEventsError>`
- **Wire**: `GET /{organizationName}/{tenantName}/tenantaudit_/api/query/events`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AuditEventCollection`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `AuditLogs.QueryTenantAuditEventsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseUiPathPlatformManagementAuditLogsApi"` [401] `ErrorResponseUiPathPlatformManagementAuditLogsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AuditLogs.QueryTenantAuditEventsRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationName` | `path` | `string` | yes |
| `tenantName` | `path` | `string` | yes |
| `from` | `query` | `Date` (date-time) | no |
| `to` | `query` | `Date` (date-time) | no |
| `source` | `query` | `string[]` | no |
| `maxCount` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AuditEventCollection` | `auditEventCollectionSchema` | `src/models/audit-event-collection.ts` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `errorResponseUiPathPlatformManagementAuditLogsApiSchema` | `src/models/error-response-ui-path-platform-management-audit-logs-api.ts` |

