<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConversationsV2Operation — operations

Accessor: `client.ConversationsV2Operation` · Source: `Api/ConversationsV2Operation.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchOperationStatus

- **Server group**: `Default7`
- **Signature**: `FetchOperationStatus(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ConversationsV2OperationStatus`
- **Error**: `SdkException<FetchOperationStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [400, 404, 429, 500, 503] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ConversationsV2OperationStatus` | `Models/ConversationsV2OperationStatus.cs` |
| `FetchOperationStatusError` | `Errors/FetchOperationStatusError.cs` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `Models/AccountsCallsRecordingsSidJson201041408Error1.cs` |

