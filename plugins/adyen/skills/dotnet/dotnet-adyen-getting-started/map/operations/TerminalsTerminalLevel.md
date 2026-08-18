<!-- Generated file — do not edit; regenerated with the SDK. -->

# TerminalsTerminalLevel — operations

Accessor: `client.TerminalsTerminalLevel` · Source: `Api/TerminalsTerminalLevel.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetTerminals
- **Server group**: `Default9`
- **Signature**: `GetTerminals(string? searchQuery, string? otpQuery, string? countries, string? merchantIds, string? storeIds, string? brandModels, int? pageNumber, int? pageSize, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`searchQuery` … `pageSize`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `searchQuery` ← `searchQuery`, `otpQuery` ← `otpQuery`, `countries` ← `countries`, `merchantIds` ← `merchantIds`, `storeIds` ← `storeIds`, `brandModels` ← `brandModels`, `pageNumber` ← `pageNumber`, `pageSize` ← `pageSize`
- **Returns**: `ListTerminalsResponse`
- **Error**: `SdkException<GetTerminalsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ListTerminalsResponse` | `Models/ListTerminalsResponse.cs` |
| `GetTerminalsError` | `Errors/GetTerminalsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PostTerminalsTerminalIdReassign
- **Server group**: `Default9`
- **Signature**: `PostTerminalsTerminalIdReassign(string terminalId, TerminalReassignmentRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `void` (Task)
- **Error**: `SdkException<PostTerminalsTerminalIdReassignError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TerminalReassignmentRequest` | `Models/TerminalReassignmentRequest.cs` |
| `PostTerminalsTerminalIdReassignError` | `Errors/PostTerminalsTerminalIdReassignError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

