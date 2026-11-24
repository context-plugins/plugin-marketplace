<!-- Generated file — do not edit; regenerated with the SDK. -->

# Sessions — operations

Accessor: `client.Sessions` · Source: `src/BrowserStack/Api/Sessions.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteSession

- **Auth**: `options.BasicAuth`
- **Signature**: `DeleteSession(DeleteSessionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SessionId`
- **Returns**: `StatusMessage`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DeleteSessionRequest` | `src/BrowserStack/Requests/Sessions/DeleteSessionRequest.cs` |
| `StatusMessage` | `src/BrowserStack/Models/StatusMessage.cs` |

### GetSession

- **Auth**: `options.BasicAuth`
- **Signature**: `GetSession(GetSessionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SessionId`
- **Returns**: `Session`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetSessionRequest` | `src/BrowserStack/Requests/Sessions/GetSessionRequest.cs` |
| `Session` | `src/BrowserStack/Models/Session.cs` |

### GetSessionConsoleLogs

- **Auth**: `options.BasicAuth`
- **Signature**: `GetSessionConsoleLogs(GetSessionConsoleLogsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SessionId`
- **Returns**: `string`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetSessionConsoleLogsRequest` | `src/BrowserStack/Requests/Sessions/GetSessionConsoleLogsRequest.cs` |

### GetSessionLogs

- **Auth**: `options.BasicAuth`
- **Signature**: `GetSessionLogs(GetSessionLogsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SessionId`
- **Returns**: `string`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetSessionLogsRequest` | `src/BrowserStack/Requests/Sessions/GetSessionLogsRequest.cs` |

### GetSessionNetworkLogs

- **Auth**: `options.BasicAuth`
- **Signature**: `GetSessionNetworkLogs(GetSessionNetworkLogsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SessionId`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetSessionNetworkLogsRequest` | `src/BrowserStack/Requests/Sessions/GetSessionNetworkLogsRequest.cs` |

### ListBuildSessions

- **Auth**: `options.BasicAuth`
- **Signature**: `ListBuildSessions(ListBuildSessionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BuildId`
- **Returns**: `IReadOnlyList<Session>`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListBuildSessionsRequest` | `src/BrowserStack/Requests/Sessions/ListBuildSessionsRequest.cs` |
| `Session` | `src/BrowserStack/Models/Session.cs` |

### UpdateSession

- **Auth**: `options.BasicAuth`
- **Signature**: `UpdateSession(UpdateSessionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SessionId`, `Body`
- **Returns**: `Session`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `UpdateSessionRequest` | `src/BrowserStack/Requests/Sessions/UpdateSessionRequest.cs` |
| `AutomateSessionsJsonRequest` | `src/BrowserStack/Models/AutomateSessionsJsonRequest.cs` |
| `Session` | `src/BrowserStack/Models/Session.cs` |

