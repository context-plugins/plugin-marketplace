<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConversationsV1Participant — operations

Accessor: `client.ConversationsV1Participant` · Source: `Api/ConversationsV1Participant.cs` · 10 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateConversationParticipant

- **Server group**: `Default7`
- **Signature**: `CreateConversationParticipant(string conversationSid, Confirmation? xTwilioWebhookEnabled, string? identity, string? messagingBindingAddress, string? messagingBindingProxyAddress, DateTimeOffset? dateCreated, DateTimeOffset? dateUpdated, string? attributes, string? messagingBindingProjectedAddress, string? roleSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`xTwilioWebhookEnabled` … `roleSid`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ConversationsV1ConversationConversationParticipant`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Confirmation` | `Models/Enums/Confirmation.cs` |
| `ConversationsV1ConversationConversationParticipant` | `Models/ConversationsV1ConversationConversationParticipant.cs` |

### CreateServiceConversationParticipant

- **Server group**: `Default7`
- **Signature**: `CreateServiceConversationParticipant(string chatServiceSid, string conversationSid, Confirmation? xTwilioWebhookEnabled, string? identity, string? messagingBindingAddress, string? messagingBindingProxyAddress, DateTimeOffset? dateCreated, DateTimeOffset? dateUpdated, string? attributes, string? messagingBindingProjectedAddress, string? roleSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`xTwilioWebhookEnabled` … `roleSid`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ConversationsV1ServiceServiceConversationServiceConversationParticipant`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Confirmation` | `Models/Enums/Confirmation.cs` |
| `ConversationsV1ServiceServiceConversationServiceConversationParticipant` | `Models/ConversationsV1ServiceServiceConversationServiceConversationParticipant.cs` |

### DeleteConversationParticipant

- **Server group**: `Default7`
- **Signature**: `DeleteConversationParticipant(string conversationSid, string sid, Confirmation? xTwilioWebhookEnabled, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xTwilioWebhookEnabled` — nullable, no default → **must pass explicitly**
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Confirmation` | `Models/Enums/Confirmation.cs` |

### DeleteServiceConversationParticipant

- **Server group**: `Default7`
- **Signature**: `DeleteServiceConversationParticipant(string chatServiceSid, string conversationSid, string sid, Confirmation? xTwilioWebhookEnabled, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xTwilioWebhookEnabled` — nullable, no default → **must pass explicitly**
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Confirmation` | `Models/Enums/Confirmation.cs` |

### FetchConversationParticipant

- **Server group**: `Default7`
- **Signature**: `FetchConversationParticipant(string conversationSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ConversationsV1ConversationConversationParticipant`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ConversationsV1ConversationConversationParticipant` | `Models/ConversationsV1ConversationConversationParticipant.cs` |

### FetchServiceConversationParticipant

- **Server group**: `Default7`
- **Signature**: `FetchServiceConversationParticipant(string chatServiceSid, string conversationSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ConversationsV1ServiceServiceConversationServiceConversationParticipant`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ConversationsV1ServiceServiceConversationServiceConversationParticipant` | `Models/ConversationsV1ServiceServiceConversationServiceConversationParticipant.cs` |

### ListConversationParticipant

- **Server group**: `Default7`
- **Signature**: `ListConversationParticipant(string conversationSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListConversationParticipantResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListConversationParticipantResponse` | `Models/ListConversationParticipantResponse.cs` |

### ListServiceConversationParticipant

- **Server group**: `Default7`
- **Signature**: `ListServiceConversationParticipant(string chatServiceSid, string conversationSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListServiceConversationParticipantResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListServiceConversationParticipantResponse` | `Models/ListServiceConversationParticipantResponse.cs` |

### UpdateConversationParticipant

- **Server group**: `Default7`
- **Signature**: `UpdateConversationParticipant(string conversationSid, string sid, Confirmation? xTwilioWebhookEnabled, DateTimeOffset? dateCreated, DateTimeOffset? dateUpdated, string? attributes, string? roleSid, string? messagingBindingProxyAddress, string? messagingBindingProjectedAddress, string? identity, int? lastReadMessageIndex, string? lastReadTimestamp, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 10 params (`xTwilioWebhookEnabled` … `lastReadTimestamp`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ConversationsV1ConversationConversationParticipant`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Confirmation` | `Models/Enums/Confirmation.cs` |
| `ConversationsV1ConversationConversationParticipant` | `Models/ConversationsV1ConversationConversationParticipant.cs` |

### UpdateServiceConversationParticipant

- **Server group**: `Default7`
- **Signature**: `UpdateServiceConversationParticipant(string chatServiceSid, string conversationSid, string sid, Confirmation? xTwilioWebhookEnabled, DateTimeOffset? dateCreated, DateTimeOffset? dateUpdated, string? identity, string? attributes, string? roleSid, string? messagingBindingProxyAddress, string? messagingBindingProjectedAddress, int? lastReadMessageIndex, string? lastReadTimestamp, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 10 params (`xTwilioWebhookEnabled` … `lastReadTimestamp`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ConversationsV1ServiceServiceConversationServiceConversationParticipant`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Confirmation` | `Models/Enums/Confirmation.cs` |
| `ConversationsV1ServiceServiceConversationServiceConversationParticipant` | `Models/ConversationsV1ServiceServiceConversationServiceConversationParticipant.cs` |

