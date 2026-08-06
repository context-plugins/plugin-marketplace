# FlexV1FlexFlowApi — operations

Accessor: `client.FlexV1FlexFlowApi` · Source: `Api/FlexV1FlexFlowApi.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateFlexFlow
- **HTTP**: `POST /v1/FlexFlows` (Default13 (flex-api))
- **Signature**: `CreateFlexFlow(string friendlyName, string chatServiceSid, FlexFlowEnumChannelType channelType, string? contactIdentity, bool? enabled, FlexFlowEnumIntegrationType? integrationType, string? integrationFlowSid, string? integrationUrl, string? integrationWorkspaceSid, string? integrationWorkflowSid, string? integrationChannel, int? integrationTimeout, int? integrationPriority, bool? integrationCreationOnMessage, bool? longLived, bool? janitorEnabled, int? integrationRetryCount, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 14 params (`contactIdentity` … `integrationRetryCount`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `ChatServiceSid` ← `chatServiceSid`, `ChannelType` ← `channelType`, `ContactIdentity` ← `contactIdentity`, `Enabled` ← `enabled`, `IntegrationType` ← `integrationType`, `Integration.FlowSid` ← `integrationFlowSid`, `Integration.Url` ← `integrationUrl`, `Integration.WorkspaceSid` ← `integrationWorkspaceSid`, `Integration.WorkflowSid` ← `integrationWorkflowSid`, `Integration.Channel` ← `integrationChannel`, `Integration.Timeout` ← `integrationTimeout`, `Integration.Priority` ← `integrationPriority`, `Integration.CreationOnMessage` ← `integrationCreationOnMessage`, `LongLived` ← `longLived`, `JanitorEnabled` ← `janitorEnabled`, `Integration.RetryCount` ← `integrationRetryCount`
- **Returns**: `FlexV1FlexFlow`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteFlexFlow
- **HTTP**: `DELETE /v1/FlexFlows/{Sid}` (Default13 (flex-api))
- **Signature**: `DeleteFlexFlow(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchFlexFlow
- **HTTP**: `GET /v1/FlexFlows/{Sid}` (Default13 (flex-api))
- **Signature**: `FetchFlexFlow(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `FlexV1FlexFlow`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListFlexFlow
- **HTTP**: `GET /v1/FlexFlows` (Default13 (flex-api))
- **Signature**: `ListFlexFlow(string? friendlyName, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`friendlyName` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListFlexFlowResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateFlexFlow
- **HTTP**: `POST /v1/FlexFlows/{Sid}` (Default13 (flex-api))
- **Signature**: `UpdateFlexFlow(string sid, string? friendlyName, string? chatServiceSid, FlexFlowEnumChannelType? channelType, string? contactIdentity, bool? enabled, FlexFlowEnumIntegrationType? integrationType, string? integrationFlowSid, string? integrationUrl, string? integrationWorkspaceSid, string? integrationWorkflowSid, string? integrationChannel, int? integrationTimeout, int? integrationPriority, bool? integrationCreationOnMessage, bool? longLived, bool? janitorEnabled, int? integrationRetryCount, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 17 params (`friendlyName` … `integrationRetryCount`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `ChatServiceSid` ← `chatServiceSid`, `ChannelType` ← `channelType`, `ContactIdentity` ← `contactIdentity`, `Enabled` ← `enabled`, `IntegrationType` ← `integrationType`, `Integration.FlowSid` ← `integrationFlowSid`, `Integration.Url` ← `integrationUrl`, `Integration.WorkspaceSid` ← `integrationWorkspaceSid`, `Integration.WorkflowSid` ← `integrationWorkflowSid`, `Integration.Channel` ← `integrationChannel`, `Integration.Timeout` ← `integrationTimeout`, `Integration.Priority` ← `integrationPriority`, `Integration.CreationOnMessage` ← `integrationCreationOnMessage`, `LongLived` ← `longLived`, `JanitorEnabled` ← `janitorEnabled`, `Integration.RetryCount` ← `integrationRetryCount`
- **Returns**: `FlexV1FlexFlow`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
