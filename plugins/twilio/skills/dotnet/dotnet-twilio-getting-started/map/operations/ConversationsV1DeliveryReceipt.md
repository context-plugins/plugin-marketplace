<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConversationsV1DeliveryReceipt — operations

Accessor: `client.ConversationsV1DeliveryReceipt` · Source: `Api/ConversationsV1DeliveryReceipt.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchConversationMessageReceipt

- **Server group**: `Default7`
- **Signature**: `FetchConversationMessageReceipt(string conversationSid, string messageSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ConversationsV1ConversationConversationMessageConversationMessageReceipt`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ConversationsV1ConversationConversationMessageConversationMessageReceipt` | `Models/ConversationsV1ConversationConversationMessageConversationMessageReceipt.cs` |

### FetchServiceConversationMessageReceipt

- **Server group**: `Default7`
- **Signature**: `FetchServiceConversationMessageReceipt(string chatServiceSid, string conversationSid, string messageSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ServiceConversationMessageReceipt`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ServiceConversationMessageReceipt` | `Models/ServiceConversationMessageReceipt.cs` |

### ListConversationMessageReceipt

- **Server group**: `Default7`
- **Signature**: `ListConversationMessageReceipt(string conversationSid, string messageSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListConversationMessageReceiptResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListConversationMessageReceiptResponse` | `Models/ListConversationMessageReceiptResponse.cs` |

### ListServiceConversationMessageReceipt

- **Server group**: `Default7`
- **Signature**: `ListServiceConversationMessageReceipt(string chatServiceSid, string conversationSid, string messageSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListServiceConversationMessageReceiptResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListServiceConversationMessageReceiptResponse` | `Models/ListServiceConversationMessageReceiptResponse.cs` |

