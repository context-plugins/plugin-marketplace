# ConversationsV1Message — operations

Accessor: `client.ConversationsV1Message` · Source: `Api/ConversationsV1Message.cs` · 10 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateConversationMessage
- **HTTP**: `POST /v1/Conversations/{ConversationSid}/Messages` (Default2 (conversations))
- **Notes**: Add a new message to the conversation
- **Signature**: `CreateConversationMessage(string conversationSid, Confirmation? xTwilioWebhookEnabled, string? author, string? body, DateTimeOffset? dateCreated, DateTimeOffset? dateUpdated, string? attributes, string? mediaSid, string? contentSid, string? contentVariables, string? subject, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 10 params (`xTwilioWebhookEnabled` … `subject`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Author` ← `author`, `Body` ← `body`, `DateCreated` ← `dateCreated`, `DateUpdated` ← `dateUpdated`, `Attributes` ← `attributes`, `MediaSid` ← `mediaSid`, `ContentSid` ← `contentSid`, `ContentVariables` ← `contentVariables`, `Subject` ← `subject`
- **Returns**: `ConversationsV1ConversationConversationMessage`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateServiceConversationMessage
- **HTTP**: `POST /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages` (Default2 (conversations))
- **Notes**: Add a new message to the conversation in a specific service
- **Signature**: `CreateServiceConversationMessage(string chatServiceSid, string conversationSid, Confirmation? xTwilioWebhookEnabled, string? author, string? body, DateTimeOffset? dateCreated, DateTimeOffset? dateUpdated, string? attributes, string? mediaSid, string? contentSid, string? contentVariables, string? subject, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 10 params (`xTwilioWebhookEnabled` … `subject`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Author` ← `author`, `Body` ← `body`, `DateCreated` ← `dateCreated`, `DateUpdated` ← `dateUpdated`, `Attributes` ← `attributes`, `MediaSid` ← `mediaSid`, `ContentSid` ← `contentSid`, `ContentVariables` ← `contentVariables`, `Subject` ← `subject`
- **Returns**: `ConversationsV1ServiceServiceConversationServiceConversationMessage`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteConversationMessage
- **HTTP**: `DELETE /v1/Conversations/{ConversationSid}/Messages/{Sid}` (Default2 (conversations))
- **Notes**: Remove a message from the conversation
- **Signature**: `DeleteConversationMessage(string conversationSid, string sid, Confirmation? xTwilioWebhookEnabled, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xTwilioWebhookEnabled` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteServiceConversationMessage
- **HTTP**: `DELETE /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{Sid}` (Default2 (conversations))
- **Notes**: Remove a message from the conversation
- **Signature**: `DeleteServiceConversationMessage(string chatServiceSid, string conversationSid, string sid, Confirmation? xTwilioWebhookEnabled, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xTwilioWebhookEnabled` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchConversationMessage
- **HTTP**: `GET /v1/Conversations/{ConversationSid}/Messages/{Sid}` (Default2 (conversations))
- **Notes**: Fetch a message from the conversation
- **Signature**: `FetchConversationMessage(string conversationSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ConversationsV1ConversationConversationMessage`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchServiceConversationMessage
- **HTTP**: `GET /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{Sid}` (Default2 (conversations))
- **Notes**: Fetch a message from the conversation
- **Signature**: `FetchServiceConversationMessage(string chatServiceSid, string conversationSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ConversationsV1ServiceServiceConversationServiceConversationMessage`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListConversationMessage
- **HTTP**: `GET /v1/Conversations/{ConversationSid}/Messages` (Default2 (conversations))
- **Notes**: Retrieve a list of all messages in the conversation
- **Signature**: `ListConversationMessage(string conversationSid, ConversationMessageEnumOrderType? order, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`order` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Order` ← `order`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListConversationMessageResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### ListServiceConversationMessage
- **HTTP**: `GET /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages` (Default2 (conversations))
- **Notes**: Retrieve a list of all messages in the conversation
- **Signature**: `ListServiceConversationMessage(string chatServiceSid, string conversationSid, ServiceConversationMessageEnumOrderType? order, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`order` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Order` ← `order`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListServiceConversationMessageResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateConversationMessage
- **HTTP**: `POST /v1/Conversations/{ConversationSid}/Messages/{Sid}` (Default2 (conversations))
- **Notes**: Update an existing message in the conversation
- **Signature**: `UpdateConversationMessage(string conversationSid, string sid, Confirmation? xTwilioWebhookEnabled, string? author, string? body, DateTimeOffset? dateCreated, DateTimeOffset? dateUpdated, string? attributes, string? subject, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`xTwilioWebhookEnabled` … `subject`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Author` ← `author`, `Body` ← `body`, `DateCreated` ← `dateCreated`, `DateUpdated` ← `dateUpdated`, `Attributes` ← `attributes`, `Subject` ← `subject`
- **Returns**: `ConversationsV1ConversationConversationMessage`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateServiceConversationMessage
- **HTTP**: `POST /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{Sid}` (Default2 (conversations))
- **Notes**: Update an existing message in the conversation
- **Signature**: `UpdateServiceConversationMessage(string chatServiceSid, string conversationSid, string sid, Confirmation? xTwilioWebhookEnabled, string? author, string? body, DateTimeOffset? dateCreated, DateTimeOffset? dateUpdated, string? attributes, string? subject, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`xTwilioWebhookEnabled` … `subject`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Author` ← `author`, `Body` ← `body`, `DateCreated` ← `dateCreated`, `DateUpdated` ← `dateUpdated`, `Attributes` ← `attributes`, `Subject` ← `subject`
- **Returns**: `ConversationsV1ServiceServiceConversationServiceConversationMessage`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
