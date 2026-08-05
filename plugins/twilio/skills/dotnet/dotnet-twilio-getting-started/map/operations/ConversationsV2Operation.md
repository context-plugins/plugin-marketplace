# ConversationsV2Operation — operations

Accessor: `client.ConversationsV2Operation` · Source: `Api/ConversationsV2Operation.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchOperationStatus
- **HTTP**: `GET /v2/ControlPlane/Operations/{Sid}` (Default2 (conversations))
- **Notes**: Retrieve the current status of a long-running operation. Operations progress through: PENDING -&gt; RUNNING -&gt; COMPLETED or FAILED.
- **Signature**: `FetchOperationStatus(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ConversationsV2OperationStatus`
- **Error**: `SdkException<FetchOperationStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [400, 404, 429, 500, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
