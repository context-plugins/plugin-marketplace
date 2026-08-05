# ConversationsV1Participant — operations

Accessor: `client.ConversationsV1Participant` · Source: `Api/ConversationsV1Participant.cs` · 10 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateConversationParticipant
- **HTTP**: `POST /v1/Conversations/{ConversationSid}/Participants` (Default2 (conversations))
- **Notes**: Add a new participant to the conversation
- **Signature**: `CreateConversationParticipant(string conversationSid, Confirmation? xTwilioWebhookEnabled, string? identity, string? messagingBindingAddress, string? messagingBindingProxyAddress, DateTimeOffset? dateCreated, DateTimeOffset? dateUpdated, string? attributes, string? messagingBindingProjectedAddress, string? roleSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`xTwilioWebhookEnabled` … `roleSid`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Identity` ← `identity`, `MessagingBinding.Address` ← `messagingBindingAddress`, `MessagingBinding.ProxyAddress` ← `messagingBindingProxyAddress`, `DateCreated` ← `dateCreated`, `DateUpdated` ← `dateUpdated`, `Attributes` ← `attributes`, `MessagingBinding.ProjectedAddress` ← `messagingBindingProjectedAddress`, `RoleSid` ← `roleSid`
- **Returns**: `ConversationsV1ConversationConversationParticipant`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateServiceConversationParticipant
- **HTTP**: `POST /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Participants` (Default2 (conversations))
- **Notes**: Add a new participant to the conversation in a specific service
- **Signature**: `CreateServiceConversationParticipant(string chatServiceSid, string conversationSid, Confirmation? xTwilioWebhookEnabled, string? identity, string? messagingBindingAddress, string? messagingBindingProxyAddress, DateTimeOffset? dateCreated, DateTimeOffset? dateUpdated, string? attributes, string? messagingBindingProjectedAddress, string? roleSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`xTwilioWebhookEnabled` … `roleSid`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Identity` ← `identity`, `MessagingBinding.Address` ← `messagingBindingAddress`, `MessagingBinding.ProxyAddress` ← `messagingBindingProxyAddress`, `DateCreated` ← `dateCreated`, `DateUpdated` ← `dateUpdated`, `Attributes` ← `attributes`, `MessagingBinding.ProjectedAddress` ← `messagingBindingProjectedAddress`, `RoleSid` ← `roleSid`
- **Returns**: `ConversationsV1ServiceServiceConversationServiceConversationParticipant`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteConversationParticipant
- **HTTP**: `DELETE /v1/Conversations/{ConversationSid}/Participants/{Sid}` (Default2 (conversations))
- **Notes**: Remove a participant from the conversation
- **Signature**: `DeleteConversationParticipant(string conversationSid, string sid, Confirmation? xTwilioWebhookEnabled, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xTwilioWebhookEnabled` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteServiceConversationParticipant
- **HTTP**: `DELETE /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Participants/{Sid}` (Default2 (conversations))
- **Notes**: Remove a participant from the conversation
- **Signature**: `DeleteServiceConversationParticipant(string chatServiceSid, string conversationSid, string sid, Confirmation? xTwilioWebhookEnabled, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xTwilioWebhookEnabled` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchConversationParticipant
- **HTTP**: `GET /v1/Conversations/{ConversationSid}/Participants/{Sid}` (Default2 (conversations))
- **Notes**: Fetch a participant of the conversation
- **Signature**: `FetchConversationParticipant(string conversationSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ConversationsV1ConversationConversationParticipant`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchServiceConversationParticipant
- **HTTP**: `GET /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Participants/{Sid}` (Default2 (conversations))
- **Notes**: Fetch a participant of the conversation
- **Signature**: `FetchServiceConversationParticipant(string chatServiceSid, string conversationSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ConversationsV1ServiceServiceConversationServiceConversationParticipant`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListConversationParticipant
- **HTTP**: `GET /v1/Conversations/{ConversationSid}/Participants` (Default2 (conversations))
- **Notes**: Retrieve a list of all participants of the conversation
- **Signature**: `ListConversationParticipant(string conversationSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListConversationParticipantResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### ListServiceConversationParticipant
- **HTTP**: `GET /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Participants` (Default2 (conversations))
- **Notes**: Retrieve a list of all participants of the conversation
- **Signature**: `ListServiceConversationParticipant(string chatServiceSid, string conversationSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListServiceConversationParticipantResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateConversationParticipant
- **HTTP**: `POST /v1/Conversations/{ConversationSid}/Participants/{Sid}` (Default2 (conversations))
- **Notes**: Update an existing participant in the conversation
- **Signature**: `UpdateConversationParticipant(string conversationSid, string sid, Confirmation? xTwilioWebhookEnabled, DateTimeOffset? dateCreated, DateTimeOffset? dateUpdated, string? attributes, string? roleSid, string? messagingBindingProxyAddress, string? messagingBindingProjectedAddress, string? identity, int? lastReadMessageIndex, string? lastReadTimestamp, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 10 params (`xTwilioWebhookEnabled` … `lastReadTimestamp`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `DateCreated` ← `dateCreated`, `DateUpdated` ← `dateUpdated`, `Attributes` ← `attributes`, `RoleSid` ← `roleSid`, `MessagingBinding.ProxyAddress` ← `messagingBindingProxyAddress`, `MessagingBinding.ProjectedAddress` ← `messagingBindingProjectedAddress`, `Identity` ← `identity`, `LastReadMessageIndex` ← `lastReadMessageIndex`, `LastReadTimestamp` ← `lastReadTimestamp`
- **Returns**: `ConversationsV1ConversationConversationParticipant`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateServiceConversationParticipant
- **HTTP**: `POST /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Participants/{Sid}` (Default2 (conversations))
- **Notes**: Update an existing participant in the conversation
- **Signature**: `UpdateServiceConversationParticipant(string chatServiceSid, string conversationSid, string sid, Confirmation? xTwilioWebhookEnabled, DateTimeOffset? dateCreated, DateTimeOffset? dateUpdated, string? identity, string? attributes, string? roleSid, string? messagingBindingProxyAddress, string? messagingBindingProjectedAddress, int? lastReadMessageIndex, string? lastReadTimestamp, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 10 params (`xTwilioWebhookEnabled` … `lastReadTimestamp`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `DateCreated` ← `dateCreated`, `DateUpdated` ← `dateUpdated`, `Identity` ← `identity`, `Attributes` ← `attributes`, `RoleSid` ← `roleSid`, `MessagingBinding.ProxyAddress` ← `messagingBindingProxyAddress`, `MessagingBinding.ProjectedAddress` ← `messagingBindingProjectedAddress`, `LastReadMessageIndex` ← `lastReadMessageIndex`, `LastReadTimestamp` ← `lastReadTimestamp`
- **Returns**: `ConversationsV1ServiceServiceConversationServiceConversationParticipant`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
