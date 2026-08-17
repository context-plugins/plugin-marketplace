<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConversationsV1ConfigurationApi — operations

Accessor: `client.ConversationsV1ConfigurationApi` · Source: `Api/ConversationsV1ConfigurationApi.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchConfiguration

- **Server group**: `Default7`
- **Signature**: `FetchConfiguration(RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ConversationsV1Configuration`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ConversationsV1Configuration` | `Models/ConversationsV1Configuration.cs` |

### FetchServiceConfiguration

- **Server group**: `Default7`
- **Signature**: `FetchServiceConfiguration(string chatServiceSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ConversationsV1ServiceServiceConfiguration`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ConversationsV1ServiceServiceConfiguration` | `Models/ConversationsV1ServiceServiceConfiguration.cs` |

### UpdateConfiguration

- **Server group**: `Default7`
- **Signature**: `UpdateConfiguration(string? defaultChatServiceSid, string? defaultMessagingServiceSid, string? defaultInactiveTimer, string? defaultClosedTimer, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`defaultChatServiceSid` … `defaultClosedTimer`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ConversationsV1Configuration`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ConversationsV1Configuration` | `Models/ConversationsV1Configuration.cs` |

### UpdateServiceConfiguration

- **Server group**: `Default7`
- **Signature**: `UpdateServiceConfiguration(string chatServiceSid, string? defaultConversationCreatorRoleSid, string? defaultConversationRoleSid, string? defaultChatServiceRoleSid, bool? reachabilityEnabled, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`defaultConversationCreatorRoleSid` … `reachabilityEnabled`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ConversationsV1ServiceServiceConfiguration`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ConversationsV1ServiceServiceConfiguration` | `Models/ConversationsV1ServiceServiceConfiguration.cs` |

