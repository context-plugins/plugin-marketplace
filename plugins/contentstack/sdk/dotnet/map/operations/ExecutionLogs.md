<!-- Generated file — do not edit; regenerated with the SDK. -->

# ExecutionLogs — operations

Accessor: `client.ExecutionLogs` · Source: `src/Contentstack/Api/ExecutionLogs.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetAllExecutionLogs

- **Server group**: `DefaultContentstackAutomateManagementAccountsApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `GetAllExecutionLogs(GetAllExecutionLogsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationUid`, `ProjectUid`
- **Returns**: `ExecutionLogList`
- **Error**: `ApiException<GetAllExecutionLogsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAllExecutionLogsRequest` | `src/Contentstack/Requests/ExecutionLogs/GetAllExecutionLogsRequest.cs` |
| `ExecutionLogList` | `src/Contentstack/Models/ExecutionLogList.cs` |
| `GetAllExecutionLogsError` | `src/Contentstack/Errors/GetAllExecutionLogsError.cs` |
| `Error` | `src/Contentstack/Models/Error.cs` |

### GetExecutionLog

- **Server group**: `DefaultContentstackAutomateManagementAccountsApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `GetExecutionLog(GetExecutionLogRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationUid`, `ProjectUid`, `ExecutionUid`
- **Returns**: `ExecutionLog`
- **Error**: `ApiException<GetExecutionLogError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetExecutionLogRequest` | `src/Contentstack/Requests/ExecutionLogs/GetExecutionLogRequest.cs` |
| `ExecutionLog` | `src/Contentstack/Models/ExecutionLog.cs` |
| `GetExecutionLogError` | `src/Contentstack/Errors/GetExecutionLogError.cs` |
| `Error` | `src/Contentstack/Models/Error.cs` |

