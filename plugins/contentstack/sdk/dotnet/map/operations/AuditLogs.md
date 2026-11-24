<!-- Generated file — do not edit; regenerated with the SDK. -->

# AuditLogs — operations

Accessor: `client.AuditLogs` · Source: `src/Contentstack/Api/AuditLogs.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetAllAuditLogs

- **Server group**: `DefaultContentstackAutomateManagementAccountsApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `GetAllAuditLogs(GetAllAuditLogsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationUid`, `ProjectUid`
- **Returns**: `AuditLogList`
- **Error**: `ApiException<GetAllAuditLogsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAllAuditLogsRequest` | `src/Contentstack/Requests/AuditLogs/GetAllAuditLogsRequest.cs` |
| `AuditLogList` | `src/Contentstack/Models/AuditLogList.cs` |
| `GetAllAuditLogsError` | `src/Contentstack/Errors/GetAllAuditLogsError.cs` |
| `Error` | `src/Contentstack/Models/Error.cs` |

