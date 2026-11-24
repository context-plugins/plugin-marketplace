<!-- Generated file — do not edit; regenerated with the SDK. -->

# AuditLogs — operations

Accessor: `client.AuditLogs` · Source: `src/UiPath/Api/AuditLogs.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetOrganizationAuditSources

- **Server group**: `DefaultUiPathPlatformManagementAuditLogsApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `GetOrganizationAuditSources(GetOrganizationAuditSourcesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationName`
- **Returns**: `AuditSources`
- **Error**: `ApiException<GetOrganizationAuditSourcesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseUiPathPlatformManagementAuditLogsApi([NotNullWhen(true)] out ErrorResponseUiPathPlatformManagementAuditLogsApi? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetOrganizationAuditSourcesRequest` | `src/UiPath/Requests/AuditLogs/GetOrganizationAuditSourcesRequest.cs` |
| `AuditSources` | `src/UiPath/Models/AuditSources.cs` |
| `GetOrganizationAuditSourcesError` | `src/UiPath/Errors/GetOrganizationAuditSourcesError.cs` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `src/UiPath/Models/ErrorResponseUiPathPlatformManagementAuditLogsApi.cs` |

### QueryOrganizationAuditEvents

- **Server group**: `DefaultUiPathPlatformManagementAuditLogsApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `QueryOrganizationAuditEvents(QueryOrganizationAuditEventsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationName`
- **Query params (wire ← C#)**: `from` ← `From`, `to` ← `To`, `source` ← `Source`, `maxCount` ← `MaxCount`
- **Returns**: `AuditEventCollection`
- **Error**: `ApiException<QueryOrganizationAuditEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseUiPathPlatformManagementAuditLogsApi([NotNullWhen(true)] out ErrorResponseUiPathPlatformManagementAuditLogsApi? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `QueryOrganizationAuditEventsRequest` | `src/UiPath/Requests/AuditLogs/QueryOrganizationAuditEventsRequest.cs` |
| `AuditEventCollection` | `src/UiPath/Models/AuditEventCollection.cs` |
| `QueryOrganizationAuditEventsError` | `src/UiPath/Errors/QueryOrganizationAuditEventsError.cs` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `src/UiPath/Models/ErrorResponseUiPathPlatformManagementAuditLogsApi.cs` |

### QueryTenantAuditEvents

- **Server group**: `DefaultUiPathPlatformManagementAuditLogsApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `QueryTenantAuditEvents(QueryTenantAuditEventsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationName`, `TenantName`
- **Query params (wire ← C#)**: `from` ← `From`, `to` ← `To`, `source` ← `Source`, `maxCount` ← `MaxCount`
- **Returns**: `AuditEventCollection`
- **Error**: `ApiException<QueryTenantAuditEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseUiPathPlatformManagementAuditLogsApi([NotNullWhen(true)] out ErrorResponseUiPathPlatformManagementAuditLogsApi? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `QueryTenantAuditEventsRequest` | `src/UiPath/Requests/AuditLogs/QueryTenantAuditEventsRequest.cs` |
| `AuditEventCollection` | `src/UiPath/Models/AuditEventCollection.cs` |
| `QueryTenantAuditEventsError` | `src/UiPath/Errors/QueryTenantAuditEventsError.cs` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `src/UiPath/Models/ErrorResponseUiPathPlatformManagementAuditLogsApi.cs` |

