<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV1FlexFlowApi — operations

Accessor: `client.FlexV1FlexFlowApi` · Source: `Api/FlexV1FlexFlowApi.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateFlexFlow

- **Server group**: `Default13`
- **Signature**: `CreateFlexFlow(string friendlyName, string chatServiceSid, FlexFlowEnumChannelType channelType, string? contactIdentity, bool? enabled, FlexFlowEnumIntegrationType? integrationType, string? integrationFlowSid, string? integrationUrl, string? integrationWorkspaceSid, string? integrationWorkflowSid, string? integrationChannel, int? integrationTimeout, int? integrationPriority, bool? integrationCreationOnMessage, bool? longLived, bool? janitorEnabled, int? integrationRetryCount, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 14 params (`contactIdentity` … `integrationRetryCount`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `FlexV1FlexFlow`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `FlexFlowEnumChannelType` | `Models/Enums/FlexFlowEnumChannelType.cs` |
| `FlexFlowEnumIntegrationType` | `Models/Enums/FlexFlowEnumIntegrationType.cs` |
| `FlexV1FlexFlow` | `Models/FlexV1FlexFlow.cs` |

### DeleteFlexFlow

- **Server group**: `Default13`
- **Signature**: `DeleteFlexFlow(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchFlexFlow

- **Server group**: `Default13`
- **Signature**: `FetchFlexFlow(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `FlexV1FlexFlow`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `FlexV1FlexFlow` | `Models/FlexV1FlexFlow.cs` |

### ListFlexFlow

- **Server group**: `Default13`
- **Signature**: `ListFlexFlow(string? friendlyName, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`friendlyName` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListFlexFlowResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListFlexFlowResponse` | `Models/ListFlexFlowResponse.cs` |

### UpdateFlexFlow

- **Server group**: `Default13`
- **Signature**: `UpdateFlexFlow(string sid, string? friendlyName, string? chatServiceSid, FlexFlowEnumChannelType? channelType, string? contactIdentity, bool? enabled, FlexFlowEnumIntegrationType? integrationType, string? integrationFlowSid, string? integrationUrl, string? integrationWorkspaceSid, string? integrationWorkflowSid, string? integrationChannel, int? integrationTimeout, int? integrationPriority, bool? integrationCreationOnMessage, bool? longLived, bool? janitorEnabled, int? integrationRetryCount, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 17 params (`friendlyName` … `integrationRetryCount`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `FlexV1FlexFlow`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `FlexFlowEnumChannelType` | `Models/Enums/FlexFlowEnumChannelType.cs` |
| `FlexFlowEnumIntegrationType` | `Models/Enums/FlexFlowEnumIntegrationType.cs` |
| `FlexV1FlexFlow` | `Models/FlexV1FlexFlow.cs` |

