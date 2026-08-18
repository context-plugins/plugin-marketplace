<!-- Generated file — do not edit; regenerated with the SDK. -->

# Interact — operations

Accessor: `client.Interact` · Source: `Api/Interact.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateBrowserSession

- **Signature**: `CreateBrowserSession(InteractRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `InteractResponse`
- **Error**: `SdkException<CreateBrowserSessionError>` — **Case A (typed)**
- **Error accessors**: `TryGetInteract402Error1(out Interact402Error1)` [402] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `InteractRequest` | `Models/InteractRequest.cs` |
| `InteractResponse` | `Models/InteractResponse.cs` |
| `CreateBrowserSessionError` | `Errors/CreateBrowserSessionError.cs` |
| `Interact402Error1` | `Models/Interact402Error1.cs` |

### DeleteBrowserSession

- **Signature**: `DeleteBrowserSession(string sessionId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `InteractResponse2`
- **Error**: `SdkException<DeleteBrowserSessionError>` — **Case A (typed)**
- **Error accessors**: `TryGetInteract402Error1(out Interact402Error1)` [402] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `InteractResponse2` | `Models/InteractResponse2.cs` |
| `DeleteBrowserSessionError` | `Errors/DeleteBrowserSessionError.cs` |
| `Interact402Error1` | `Models/Interact402Error1.cs` |

### ExecuteBrowserCode

- **Signature**: `ExecuteBrowserCode(string sessionId, InteractExecuteRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `InteractExecuteResponse`
- **Error**: `SdkException<ExecuteBrowserCodeError>` — **Case A (typed)**
- **Error accessors**: `TryGetInteractExecute402Error1(out InteractExecute402Error1)` [402] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `InteractExecuteRequest` | `Models/InteractExecuteRequest.cs` |
| `InteractExecuteResponse` | `Models/InteractExecuteResponse.cs` |
| `ExecuteBrowserCodeError` | `Errors/ExecuteBrowserCodeError.cs` |
| `InteractExecute402Error1` | `Models/InteractExecute402Error1.cs` |

### ListBrowserSessions

- **Signature**: `ListBrowserSessions(Status10? status, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `status` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `status` ← `status`
- **Returns**: `InteractResponse1`
- **Error**: `SdkException<ListBrowserSessionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetInteract402Error1(out Interact402Error1)` [402] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Status10` | `Models/Enums/Status10.cs` |
| `InteractResponse1` | `Models/InteractResponse1.cs` |
| `ListBrowserSessionsError` | `Errors/ListBrowserSessionsError.cs` |
| `Interact402Error1` | `Models/Interact402Error1.cs` |

