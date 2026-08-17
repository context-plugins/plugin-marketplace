<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConversationsV2ConfigurationApi — operations

Accessor: `client.ConversationsV2ConfigurationApi` · Source: `Api/ConversationsV2ConfigurationApi.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateConfiguration

- **Server group**: `Default7`
- **Signature**: `CreateConfiguration(string? idempotencyKey, V2ControlPlaneConfigurationsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `ConversationsV2OperationAccepted`
- **Error**: `SdkException<CreateConfigurationError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [400, 409, 429, 500, 503] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `V2ControlPlaneConfigurationsRequest` | `Models/V2ControlPlaneConfigurationsRequest.cs` |
| `ConversationsV2OperationAccepted` | `Models/ConversationsV2OperationAccepted.cs` |
| `CreateConfigurationError` | `Errors/CreateConfigurationError.cs` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `Models/AccountsCallsRecordingsSidJson201041408Error1.cs` |

### DeleteConfiguration

- **Server group**: `Default7`
- **Signature**: `DeleteConfiguration(string sid, string? idempotencyKey, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
- **Returns**: `ConversationsV2OperationAccepted`
- **Error**: `SdkException<DeleteConfigurationError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [404, 409, 429, 500, 503] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ConversationsV2OperationAccepted` | `Models/ConversationsV2OperationAccepted.cs` |
| `DeleteConfigurationError` | `Errors/DeleteConfigurationError.cs` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `Models/AccountsCallsRecordingsSidJson201041408Error1.cs` |

### FetchConfiguration2

- **Server group**: `Default7`
- **Signature**: `FetchConfiguration2(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ConversationsV2Configuration`
- **Error**: `SdkException<FetchConfiguration2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [404, 429, 500, 503] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ConversationsV2Configuration` | `Models/ConversationsV2Configuration.cs` |
| `FetchConfiguration2Error` | `Errors/FetchConfiguration2Error.cs` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `Models/AccountsCallsRecordingsSidJson201041408Error1.cs` |

### ListConfiguration

- **Server group**: `Default7`
- **Signature**: `ListConfiguration(string? pageToken, string? memoryStoreId, int? pageSize = 50, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageToken` — nullable, no default → **must pass explicitly**
  - `memoryStoreId` — nullable, no default → **must pass explicitly**
  - defaults: `pageSize` = `50`
- **Query params (wire ← C#)**: `pageSize` ← `pageSize`, `pageToken` ← `pageToken`, `memoryStoreId` ← `memoryStoreId`
- **Returns**: `V2ControlPlaneConfigurationsResponse`
- **Error**: `SdkException<ListConfigurationError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [400, 404, 429, 500, 503] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `V2ControlPlaneConfigurationsResponse` | `Models/V2ControlPlaneConfigurationsResponse.cs` |
| `ListConfigurationError` | `Errors/ListConfigurationError.cs` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `Models/AccountsCallsRecordingsSidJson201041408Error1.cs` |

### UpdateConfiguration2

- **Server group**: `Default7`
- **Signature**: `UpdateConfiguration2(string sid, string? idempotencyKey, V2ControlPlaneConfigurationsRequest1? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `ConversationsV2OperationAccepted`
- **Error**: `SdkException<UpdateConfiguration2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [400, 404, 409, 429, 500, 503] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `V2ControlPlaneConfigurationsRequest1` | `Models/V2ControlPlaneConfigurationsRequest1.cs` |
| `ConversationsV2OperationAccepted` | `Models/ConversationsV2OperationAccepted.cs` |
| `UpdateConfiguration2Error` | `Errors/UpdateConfiguration2Error.cs` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `Models/AccountsCallsRecordingsSidJson201041408Error1.cs` |

