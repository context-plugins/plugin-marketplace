# ConversationsV2ConfigurationApi — operations

Accessor: `client.ConversationsV2ConfigurationApi` · Source: `Api/ConversationsV2ConfigurationApi.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateConfiguration
- **HTTP**: `POST /v2/ControlPlane/Configurations` (Default2 (conversations))
- **Notes**: Create a new Configuration
- **Signature**: `CreateConfiguration(string? idempotencyKey, V2ControlPlaneConfigurationsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ConversationsV2OperationAccepted`
- **Error**: `SdkException<CreateConfigurationError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [400, 409, 429, 500, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteConfiguration
- **HTTP**: `DELETE /v2/ControlPlane/Configurations/{Sid}` (Default2 (conversations))
- **Notes**: Delete a Configuration
- **Signature**: `DeleteConfiguration(string sid, string? idempotencyKey, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ConversationsV2OperationAccepted`
- **Error**: `SdkException<DeleteConfigurationError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [404, 409, 429, 500, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### FetchConfiguration2
- **HTTP**: `GET /v2/ControlPlane/Configurations/{Sid}` (Default2 (conversations))
- **Notes**: Retrieve a Configuration.
- **Signature**: `FetchConfiguration2(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ConversationsV2Configuration`
- **Error**: `SdkException<FetchConfiguration2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [404, 429, 500, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListConfiguration
- **HTTP**: `GET /v2/ControlPlane/Configurations` (Default2 (conversations))
- **Notes**: Retrieve a list of Configurations.
- **Signature**: `ListConfiguration(string? pageToken, string? memoryStoreId, int? pageSize = 50, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageToken` — nullable, no default → **must pass explicitly**
  - `memoryStoreId` — nullable, no default → **must pass explicitly**
  - defaults: `pageSize` = 50, `requestOptions` = null
- **Query params (wire ← C#)**: `pageSize` ← `pageSize`, `pageToken` ← `pageToken`, `memoryStoreId` ← `memoryStoreId`
- **Returns**: `V2ControlPlaneConfigurationsResponse`
- **Error**: `SdkException<ListConfigurationError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [400, 404, 429, 500, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateConfiguration2
- **HTTP**: `PUT /v2/ControlPlane/Configurations/{Sid}` (Default2 (conversations))
- **Notes**: Update an existing Configuration
- **Signature**: `UpdateConfiguration2(string sid, string? idempotencyKey, V2ControlPlaneConfigurationsRequest1? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ConversationsV2OperationAccepted`
- **Error**: `SdkException<UpdateConfiguration2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [400, 404, 409, 429, 500, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
