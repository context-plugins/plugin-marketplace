# TerminalsTerminalLevel — operations

Accessor: `client.TerminalsTerminalLevel` · Source: `Api/TerminalsTerminalLevel.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetTerminals
- **HTTP**: `GET /terminals` (Default (balanceplatform-api-test))
- **Notes**: Returns the payment terminals that the API credential has access to and that match the query parameters. To make this request, your API credential must have the following roles : * Management API — Terminal actions read In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `GetTerminals(string? searchQuery, string? otpQuery, string? countries, string? merchantIds, string? storeIds, string? brandModels, int? pageNumber, int? pageSize, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`searchQuery` … `pageSize`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `searchQuery` ← `searchQuery`, `otpQuery` ← `otpQuery`, `countries` ← `countries`, `merchantIds` ← `merchantIds`, `storeIds` ← `storeIds`, `brandModels` ← `brandModels`, `pageNumber` ← `pageNumber`, `pageSize` ← `pageSize`
- **Returns**: `ListTerminalsResponse`
- **Error**: `SdkException<GetTerminalsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostTerminalsTerminalIdReassign
- **HTTP**: `POST /terminals/{terminalId}/reassign` (Default (balanceplatform-api-test))
- **Notes**: Reassigns a payment terminal to a company account, merchant account, merchant account inventory, or a store. To make this request, your API credential must have the following role : * Management API—Assign Terminal In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `PostTerminalsTerminalIdReassign(string terminalId, TerminalReassignmentRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<PostTerminalsTerminalIdReassignError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
