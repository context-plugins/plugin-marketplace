# Interact — operations

Accessor: `client.Interact` · Source: `Api/Interact.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateBrowserSession
- **HTTP**: `POST /interact` (Default (api))
- **Signature**: `CreateBrowserSession(InteractRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `InteractResponse`
- **Error**: `SdkException<CreateBrowserSessionError>` — **Case A (typed)**
- **Error accessors**: `TryGetInteract402Error1(out Interact402Error1)` [402] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteBrowserSession
- **HTTP**: `DELETE /interact/{sessionId}` (Default (api))
- **Signature**: `DeleteBrowserSession(string sessionId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `InteractResponse2`
- **Error**: `SdkException<DeleteBrowserSessionError>` — **Case A (typed)**
- **Error accessors**: `TryGetInteract402Error1(out Interact402Error1)` [402] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ExecuteBrowserCode
- **HTTP**: `POST /interact/{sessionId}/execute` (Default (api))
- **Signature**: `ExecuteBrowserCode(string sessionId, InteractExecuteRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `InteractExecuteResponse`
- **Error**: `SdkException<ExecuteBrowserCodeError>` — **Case A (typed)**
- **Error accessors**: `TryGetInteractExecute402Error1(out InteractExecute402Error1)` [402] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListBrowserSessions
- **HTTP**: `GET /interact` (Default (api))
- **Signature**: `ListBrowserSessions(Status10? status, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `status` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `status` ← `status`
- **Returns**: `InteractResponse1`
- **Error**: `SdkException<ListBrowserSessionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetInteract402Error1(out Interact402Error1)` [402] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
