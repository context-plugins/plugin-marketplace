# ConversationsV1Notification — operations

Accessor: `client.ConversationsV1Notification` · Source: `Api/ConversationsV1Notification.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchServiceNotification
- **HTTP**: `GET /v1/Services/{ChatServiceSid}/Configuration/Notifications` (Default7 (conversations))
- **Notes**: Fetch push notification service settings
- **Signature**: `FetchServiceNotification(string chatServiceSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ConversationsV1ServiceServiceConfigurationServiceNotification`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateServiceNotification
- **HTTP**: `POST /v1/Services/{ChatServiceSid}/Configuration/Notifications` (Default7 (conversations))
- **Notes**: Update push notification service settings
- **Signature**: `UpdateServiceNotification(string chatServiceSid, bool? logEnabled, bool? newMessageEnabled, string? newMessageTemplate, string? newMessageSound, bool? newMessageBadgeCountEnabled, bool? addedToConversationEnabled, string? addedToConversationTemplate, string? addedToConversationSound, bool? removedFromConversationEnabled, string? removedFromConversationTemplate, string? removedFromConversationSound, bool? newMessageWithMediaEnabled, string? newMessageWithMediaTemplate, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 13 params (`logEnabled` … `newMessageWithMediaTemplate`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `LogEnabled` ← `logEnabled`, `NewMessage.Enabled` ← `newMessageEnabled`, `NewMessage.Template` ← `newMessageTemplate`, `NewMessage.Sound` ← `newMessageSound`, `NewMessage.BadgeCountEnabled` ← `newMessageBadgeCountEnabled`, `AddedToConversation.Enabled` ← `addedToConversationEnabled`, `AddedToConversation.Template` ← `addedToConversationTemplate`, `AddedToConversation.Sound` ← `addedToConversationSound`, `RemovedFromConversation.Enabled` ← `removedFromConversationEnabled`, `RemovedFromConversation.Template` ← `removedFromConversationTemplate`, `RemovedFromConversation.Sound` ← `removedFromConversationSound`, `NewMessage.WithMedia.Enabled` ← `newMessageWithMediaEnabled`, `NewMessage.WithMedia.Template` ← `newMessageWithMediaTemplate`
- **Returns**: `ConversationsV1ServiceServiceConfigurationServiceNotification`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
