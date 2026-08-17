<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConversationsV1UserConversation — operations

Accessor: `client.ConversationsV1UserConversation` · Source: `Api/ConversationsV1UserConversation.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteServiceUserConversation

- **Server group**: `Default7`
- **Signature**: `DeleteServiceUserConversation(string chatServiceSid, string userSid, string conversationSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### DeleteUserConversation

- **Server group**: `Default7`
- **Signature**: `DeleteUserConversation(string userSid, string conversationSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchServiceUserConversation

- **Server group**: `Default7`
- **Signature**: `FetchServiceUserConversation(string chatServiceSid, string userSid, string conversationSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ConversationsV1ServiceServiceUserServiceUserConversation`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ConversationsV1ServiceServiceUserServiceUserConversation` | `Models/ConversationsV1ServiceServiceUserServiceUserConversation.cs` |

### FetchUserConversation

- **Server group**: `Default7`
- **Signature**: `FetchUserConversation(string userSid, string conversationSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ConversationsV1UserUserConversation`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ConversationsV1UserUserConversation` | `Models/ConversationsV1UserUserConversation.cs` |

### ListServiceUserConversation

- **Server group**: `Default7`
- **Signature**: `ListServiceUserConversation(string chatServiceSid, string userSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListServiceUserConversationResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListServiceUserConversationResponse` | `Models/ListServiceUserConversationResponse.cs` |

### ListUserConversation

- **Server group**: `Default7`
- **Signature**: `ListUserConversation(string userSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListUserConversationResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListUserConversationResponse` | `Models/ListUserConversationResponse.cs` |

### UpdateServiceUserConversation

- **Server group**: `Default7`
- **Signature**: `UpdateServiceUserConversation(string chatServiceSid, string userSid, string conversationSid, ServiceUserConversationEnumNotificationLevel? notificationLevel, DateTimeOffset? lastReadTimestamp, int? lastReadMessageIndex, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `notificationLevel` — nullable, no default → **must pass explicitly**
  - `lastReadTimestamp` — nullable, no default → **must pass explicitly**
  - `lastReadMessageIndex` — nullable, no default → **must pass explicitly**
- **Returns**: `ConversationsV1ServiceServiceUserServiceUserConversation`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ServiceUserConversationEnumNotificationLevel` | `Models/Enums/ServiceUserConversationEnumNotificationLevel.cs` |
| `ConversationsV1ServiceServiceUserServiceUserConversation` | `Models/ConversationsV1ServiceServiceUserServiceUserConversation.cs` |

### UpdateUserConversation

- **Server group**: `Default7`
- **Signature**: `UpdateUserConversation(string userSid, string conversationSid, UserConversationEnumNotificationLevel? notificationLevel, DateTimeOffset? lastReadTimestamp, int? lastReadMessageIndex, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `notificationLevel` — nullable, no default → **must pass explicitly**
  - `lastReadTimestamp` — nullable, no default → **must pass explicitly**
  - `lastReadMessageIndex` — nullable, no default → **must pass explicitly**
- **Returns**: `ConversationsV1UserUserConversation`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `UserConversationEnumNotificationLevel` | `Models/Enums/UserConversationEnumNotificationLevel.cs` |
| `ConversationsV1UserUserConversation` | `Models/ConversationsV1UserUserConversation.cs` |

