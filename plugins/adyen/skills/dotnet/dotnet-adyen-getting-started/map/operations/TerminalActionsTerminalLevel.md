<!-- Generated file — do not edit; regenerated with the SDK. -->

# TerminalActionsTerminalLevel — operations

Accessor: `client.TerminalActionsTerminalLevel` · Source: `Api/TerminalActionsTerminalLevel.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PostTerminalsScheduleActions
- **Server group**: `Default9`
- **Signature**: `PostTerminalsScheduleActions(ScheduleTerminalActionsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `ScheduleTerminalActionsResponse`
- **Error**: `SdkException<PostTerminalsScheduleActionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ScheduleTerminalActionsRequest` | `Models/ScheduleTerminalActionsRequest.cs` |
| `ScheduleTerminalActionsResponse` | `Models/ScheduleTerminalActionsResponse.cs` |
| `PostTerminalsScheduleActionsError` | `Errors/PostTerminalsScheduleActionsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

