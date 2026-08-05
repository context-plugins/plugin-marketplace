# ConversationsV1DeliveryReceipt — operations

Accessor: `client.ConversationsV1DeliveryReceipt` · Source: `Api/ConversationsV1DeliveryReceipt.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchConversationMessageReceipt
- **HTTP**: `GET /v1/Conversations/{ConversationSid}/Messages/{MessageSid}/Receipts/{Sid}` (Default2 (conversations))
- **Notes**: Fetch the delivery and read receipts of the conversation message
- **Signature**: `FetchConversationMessageReceipt(string conversationSid, string messageSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ConversationsV1ConversationConversationMessageConversationMessageReceipt`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchServiceConversationMessageReceipt
- **HTTP**: `GET /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{MessageSid}/Receipts/{Sid}` (Default2 (conversations))
- **Notes**: Fetch the delivery and read receipts of the conversation message
- **Signature**: `FetchServiceConversationMessageReceipt(string chatServiceSid, string conversationSid, string messageSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ServiceConversationMessageReceipt`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListConversationMessageReceipt
- **HTTP**: `GET /v1/Conversations/{ConversationSid}/Messages/{MessageSid}/Receipts` (Default2 (conversations))
- **Notes**: Retrieve a list of all delivery and read receipts of the conversation message
- **Signature**: `ListConversationMessageReceipt(string conversationSid, string messageSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListConversationMessageReceiptResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### ListServiceConversationMessageReceipt
- **HTTP**: `GET /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{MessageSid}/Receipts` (Default2 (conversations))
- **Notes**: Retrieve a list of all delivery and read receipts of the conversation message
- **Signature**: `ListServiceConversationMessageReceipt(string chatServiceSid, string conversationSid, string messageSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListServiceConversationMessageReceiptResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
