<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConversationsV1Notification — operations

Accessor: `client.ConversationsV1Notification` · Source: `Api/ConversationsV1Notification.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchServiceNotification

- **Server group**: `Default7`
- **Signature**: `FetchServiceNotification(string chatServiceSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ConversationsV1ServiceServiceConfigurationServiceNotification`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ConversationsV1ServiceServiceConfigurationServiceNotification` | `Models/ConversationsV1ServiceServiceConfigurationServiceNotification.cs` |

### UpdateServiceNotification

- **Server group**: `Default7`
- **Signature**: `UpdateServiceNotification(string chatServiceSid, bool? logEnabled, bool? newMessageEnabled, string? newMessageTemplate, string? newMessageSound, bool? newMessageBadgeCountEnabled, bool? addedToConversationEnabled, string? addedToConversationTemplate, string? addedToConversationSound, bool? removedFromConversationEnabled, string? removedFromConversationTemplate, string? removedFromConversationSound, bool? newMessageWithMediaEnabled, string? newMessageWithMediaTemplate, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 13 params (`logEnabled` … `newMessageWithMediaTemplate`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ConversationsV1ServiceServiceConfigurationServiceNotification`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ConversationsV1ServiceServiceConfigurationServiceNotification` | `Models/ConversationsV1ServiceServiceConfigurationServiceNotification.cs` |

