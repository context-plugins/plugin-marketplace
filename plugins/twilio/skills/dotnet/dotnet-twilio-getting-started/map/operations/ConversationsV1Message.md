<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConversationsV1Message — operations

Accessor: `client.ConversationsV1Message` · Source: `Api/ConversationsV1Message.cs` · 10 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateConversationMessage

- **Server group**: `Default7`
- **Signature**: `CreateConversationMessage(string conversationSid, Confirmation? xTwilioWebhookEnabled, string? author, string? body, DateTimeOffset? dateCreated, DateTimeOffset? dateUpdated, string? attributes, string? mediaSid, string? contentSid, string? contentVariables, string? subject, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 10 params (`xTwilioWebhookEnabled` … `subject`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ConversationsV1ConversationConversationMessage`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Confirmation` | `Models/Enums/Confirmation.cs` |
| `ConversationsV1ConversationConversationMessage` | `Models/ConversationsV1ConversationConversationMessage.cs` |

### CreateServiceConversationMessage

- **Server group**: `Default7`
- **Signature**: `CreateServiceConversationMessage(string chatServiceSid, string conversationSid, Confirmation? xTwilioWebhookEnabled, string? author, string? body, DateTimeOffset? dateCreated, DateTimeOffset? dateUpdated, string? attributes, string? mediaSid, string? contentSid, string? contentVariables, string? subject, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 10 params (`xTwilioWebhookEnabled` … `subject`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ConversationsV1ServiceServiceConversationServiceConversationMessage`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Confirmation` | `Models/Enums/Confirmation.cs` |
| `ConversationsV1ServiceServiceConversationServiceConversationMessage` | `Models/ConversationsV1ServiceServiceConversationServiceConversationMessage.cs` |

### DeleteConversationMessage

- **Server group**: `Default7`
- **Signature**: `DeleteConversationMessage(string conversationSid, string sid, Confirmation? xTwilioWebhookEnabled, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xTwilioWebhookEnabled` — nullable, no default → **must pass explicitly**
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Confirmation` | `Models/Enums/Confirmation.cs` |

### DeleteServiceConversationMessage

- **Server group**: `Default7`
- **Signature**: `DeleteServiceConversationMessage(string chatServiceSid, string conversationSid, string sid, Confirmation? xTwilioWebhookEnabled, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xTwilioWebhookEnabled` — nullable, no default → **must pass explicitly**
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Confirmation` | `Models/Enums/Confirmation.cs` |

### FetchConversationMessage

- **Server group**: `Default7`
- **Signature**: `FetchConversationMessage(string conversationSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ConversationsV1ConversationConversationMessage`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ConversationsV1ConversationConversationMessage` | `Models/ConversationsV1ConversationConversationMessage.cs` |

### FetchServiceConversationMessage

- **Server group**: `Default7`
- **Signature**: `FetchServiceConversationMessage(string chatServiceSid, string conversationSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ConversationsV1ServiceServiceConversationServiceConversationMessage`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ConversationsV1ServiceServiceConversationServiceConversationMessage` | `Models/ConversationsV1ServiceServiceConversationServiceConversationMessage.cs` |

### ListConversationMessage

- **Server group**: `Default7`
- **Signature**: `ListConversationMessage(string conversationSid, ChallengeEnumListOrders? order, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`order` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `Order` ← `order`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListConversationMessageResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ChallengeEnumListOrders` | `Models/Enums/ChallengeEnumListOrders.cs` |
| `ListConversationMessageResponse` | `Models/ListConversationMessageResponse.cs` |

### ListServiceConversationMessage

- **Server group**: `Default7`
- **Signature**: `ListServiceConversationMessage(string chatServiceSid, string conversationSid, ChallengeEnumListOrders? order, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`order` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `Order` ← `order`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListServiceConversationMessageResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ChallengeEnumListOrders` | `Models/Enums/ChallengeEnumListOrders.cs` |
| `ListServiceConversationMessageResponse` | `Models/ListServiceConversationMessageResponse.cs` |

### UpdateConversationMessage

- **Server group**: `Default7`
- **Signature**: `UpdateConversationMessage(string conversationSid, string sid, Confirmation? xTwilioWebhookEnabled, string? author, string? body, DateTimeOffset? dateCreated, DateTimeOffset? dateUpdated, string? attributes, string? subject, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`xTwilioWebhookEnabled` … `subject`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ConversationsV1ConversationConversationMessage`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Confirmation` | `Models/Enums/Confirmation.cs` |
| `ConversationsV1ConversationConversationMessage` | `Models/ConversationsV1ConversationConversationMessage.cs` |

### UpdateServiceConversationMessage

- **Server group**: `Default7`
- **Signature**: `UpdateServiceConversationMessage(string chatServiceSid, string conversationSid, string sid, Confirmation? xTwilioWebhookEnabled, string? author, string? body, DateTimeOffset? dateCreated, DateTimeOffset? dateUpdated, string? attributes, string? subject, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`xTwilioWebhookEnabled` … `subject`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ConversationsV1ServiceServiceConversationServiceConversationMessage`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Confirmation` | `Models/Enums/Confirmation.cs` |
| `ConversationsV1ServiceServiceConversationServiceConversationMessage` | `Models/ConversationsV1ServiceServiceConversationServiceConversationMessage.cs` |

