<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConversationsV1ConversationApi — operations

Accessor: `client.ConversationsV1ConversationApi` · Source: `Api/ConversationsV1ConversationApi.cs` · 10 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateConversation

- **Server group**: `Default7`
- **Signature**: `CreateConversation(Confirmation? xTwilioWebhookEnabled, string? friendlyName, string? uniqueName, DateTimeOffset? dateCreated, DateTimeOffset? dateUpdated, string? messagingServiceSid, string? attributes, ConversationEnumState? state, string? timersInactive, string? timersClosed, string? bindingsEmailAddress, string? bindingsEmailName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`xTwilioWebhookEnabled` … `bindingsEmailName`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ConversationsV1Conversation`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Confirmation` | `Models/Enums/Confirmation.cs` |
| `ConversationEnumState` | `Models/Enums/ConversationEnumState.cs` |
| `ConversationsV1Conversation` | `Models/ConversationsV1Conversation.cs` |

### CreateServiceConversation

- **Server group**: `Default7`
- **Signature**: `CreateServiceConversation(string chatServiceSid, Confirmation? xTwilioWebhookEnabled, string? friendlyName, string? uniqueName, string? attributes, string? messagingServiceSid, DateTimeOffset? dateCreated, DateTimeOffset? dateUpdated, ServiceConversationEnumState? state, string? timersInactive, string? timersClosed, string? bindingsEmailAddress, string? bindingsEmailName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`xTwilioWebhookEnabled` … `bindingsEmailName`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ConversationsV1ServiceServiceConversation`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Confirmation` | `Models/Enums/Confirmation.cs` |
| `ServiceConversationEnumState` | `Models/Enums/ServiceConversationEnumState.cs` |
| `ConversationsV1ServiceServiceConversation` | `Models/ConversationsV1ServiceServiceConversation.cs` |

### DeleteConversation

- **Server group**: `Default7`
- **Signature**: `DeleteConversation(string sid, Confirmation? xTwilioWebhookEnabled, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xTwilioWebhookEnabled` — nullable, no default → **must pass explicitly**
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Confirmation` | `Models/Enums/Confirmation.cs` |

### DeleteServiceConversation

- **Server group**: `Default7`
- **Signature**: `DeleteServiceConversation(string chatServiceSid, string sid, Confirmation? xTwilioWebhookEnabled, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xTwilioWebhookEnabled` — nullable, no default → **must pass explicitly**
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Confirmation` | `Models/Enums/Confirmation.cs` |

### FetchConversation

- **Server group**: `Default7`
- **Signature**: `FetchConversation(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ConversationsV1Conversation`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ConversationsV1Conversation` | `Models/ConversationsV1Conversation.cs` |

### FetchServiceConversation

- **Server group**: `Default7`
- **Signature**: `FetchServiceConversation(string chatServiceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ConversationsV1ServiceServiceConversation`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ConversationsV1ServiceServiceConversation` | `Models/ConversationsV1ServiceServiceConversation.cs` |

### ListConversation

- **Server group**: `Default7`
- **Signature**: `ListConversation(string? startDate, string? endDate, ConversationEnumState? state, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`startDate` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `StartDate` ← `startDate`, `EndDate` ← `endDate`, `State` ← `state`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListConversationResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ConversationEnumState` | `Models/Enums/ConversationEnumState.cs` |
| `ListConversationResponse` | `Models/ListConversationResponse.cs` |

### ListServiceConversation

- **Server group**: `Default7`
- **Signature**: `ListServiceConversation(string chatServiceSid, string? startDate, string? endDate, ServiceConversationEnumState? state, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`startDate` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `StartDate` ← `startDate`, `EndDate` ← `endDate`, `State` ← `state`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListServiceConversationResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ServiceConversationEnumState` | `Models/Enums/ServiceConversationEnumState.cs` |
| `ListServiceConversationResponse` | `Models/ListServiceConversationResponse.cs` |

### UpdateConversation

- **Server group**: `Default7`
- **Signature**: `UpdateConversation(string sid, Confirmation? xTwilioWebhookEnabled, string? friendlyName, DateTimeOffset? dateCreated, DateTimeOffset? dateUpdated, string? attributes, string? messagingServiceSid, ConversationEnumState? state, string? timersInactive, string? timersClosed, string? uniqueName, string? bindingsEmailAddress, string? bindingsEmailName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`xTwilioWebhookEnabled` … `bindingsEmailName`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ConversationsV1Conversation`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Confirmation` | `Models/Enums/Confirmation.cs` |
| `ConversationEnumState` | `Models/Enums/ConversationEnumState.cs` |
| `ConversationsV1Conversation` | `Models/ConversationsV1Conversation.cs` |

### UpdateServiceConversation

- **Server group**: `Default7`
- **Signature**: `UpdateServiceConversation(string chatServiceSid, string sid, Confirmation? xTwilioWebhookEnabled, string? friendlyName, DateTimeOffset? dateCreated, DateTimeOffset? dateUpdated, string? attributes, string? messagingServiceSid, ServiceConversationEnumState? state, string? timersInactive, string? timersClosed, string? uniqueName, string? bindingsEmailAddress, string? bindingsEmailName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`xTwilioWebhookEnabled` … `bindingsEmailName`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ConversationsV1ServiceServiceConversation`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Confirmation` | `Models/Enums/Confirmation.cs` |
| `ServiceConversationEnumState` | `Models/Enums/ServiceConversationEnumState.cs` |
| `ConversationsV1ServiceServiceConversation` | `Models/ConversationsV1ServiceServiceConversation.cs` |

