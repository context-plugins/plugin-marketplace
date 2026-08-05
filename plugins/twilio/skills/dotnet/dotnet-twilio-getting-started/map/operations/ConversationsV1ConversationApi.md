# ConversationsV1ConversationApi — operations

Accessor: `client.ConversationsV1ConversationApi` · Source: `Api/ConversationsV1ConversationApi.cs` · 10 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateConversation
- **HTTP**: `POST /v1/Conversations` (Default2 (conversations))
- **Notes**: Create a new conversation in your account's default service
- **Signature**: `CreateConversation(Confirmation? xTwilioWebhookEnabled, string? friendlyName, string? uniqueName, DateTimeOffset? dateCreated, DateTimeOffset? dateUpdated, string? messagingServiceSid, string? attributes, ConversationEnumState? state, string? timersInactive, string? timersClosed, string? bindingsEmailAddress, string? bindingsEmailName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`xTwilioWebhookEnabled` … `bindingsEmailName`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `UniqueName` ← `uniqueName`, `DateCreated` ← `dateCreated`, `DateUpdated` ← `dateUpdated`, `MessagingServiceSid` ← `messagingServiceSid`, `Attributes` ← `attributes`, `State` ← `state`, `Timers.Inactive` ← `timersInactive`, `Timers.Closed` ← `timersClosed`, `Bindings.Email.Address` ← `bindingsEmailAddress`, `Bindings.Email.Name` ← `bindingsEmailName`
- **Returns**: `ConversationsV1Conversation`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateServiceConversation
- **HTTP**: `POST /v1/Services/{ChatServiceSid}/Conversations` (Default2 (conversations))
- **Notes**: Create a new conversation in your service
- **Signature**: `CreateServiceConversation(string chatServiceSid, Confirmation? xTwilioWebhookEnabled, string? friendlyName, string? uniqueName, string? attributes, string? messagingServiceSid, DateTimeOffset? dateCreated, DateTimeOffset? dateUpdated, ServiceConversationEnumState? state, string? timersInactive, string? timersClosed, string? bindingsEmailAddress, string? bindingsEmailName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`xTwilioWebhookEnabled` … `bindingsEmailName`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `UniqueName` ← `uniqueName`, `Attributes` ← `attributes`, `MessagingServiceSid` ← `messagingServiceSid`, `DateCreated` ← `dateCreated`, `DateUpdated` ← `dateUpdated`, `State` ← `state`, `Timers.Inactive` ← `timersInactive`, `Timers.Closed` ← `timersClosed`, `Bindings.Email.Address` ← `bindingsEmailAddress`, `Bindings.Email.Name` ← `bindingsEmailName`
- **Returns**: `ConversationsV1ServiceServiceConversation`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteConversation
- **HTTP**: `DELETE /v1/Conversations/{Sid}` (Default2 (conversations))
- **Notes**: Remove a conversation from your account's default service
- **Signature**: `DeleteConversation(string sid, Confirmation? xTwilioWebhookEnabled, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xTwilioWebhookEnabled` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteServiceConversation
- **HTTP**: `DELETE /v1/Services/{ChatServiceSid}/Conversations/{Sid}` (Default2 (conversations))
- **Notes**: Remove a conversation from your service
- **Signature**: `DeleteServiceConversation(string chatServiceSid, string sid, Confirmation? xTwilioWebhookEnabled, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xTwilioWebhookEnabled` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchConversation
- **HTTP**: `GET /v1/Conversations/{Sid}` (Default2 (conversations))
- **Notes**: Fetch a conversation from your account's default service
- **Signature**: `FetchConversation(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ConversationsV1Conversation`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchServiceConversation
- **HTTP**: `GET /v1/Services/{ChatServiceSid}/Conversations/{Sid}` (Default2 (conversations))
- **Notes**: Fetch a conversation from your service
- **Signature**: `FetchServiceConversation(string chatServiceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ConversationsV1ServiceServiceConversation`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListConversation
- **HTTP**: `GET /v1/Conversations` (Default2 (conversations))
- **Notes**: Retrieve a list of conversations in your account's default service
- **Signature**: `ListConversation(string? startDate, string? endDate, ConversationEnumState? state, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`startDate` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `StartDate` ← `startDate`, `EndDate` ← `endDate`, `State` ← `state`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListConversationResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### ListServiceConversation
- **HTTP**: `GET /v1/Services/{ChatServiceSid}/Conversations` (Default2 (conversations))
- **Notes**: Retrieve a list of conversations in your service
- **Signature**: `ListServiceConversation(string chatServiceSid, string? startDate, string? endDate, ServiceConversationEnumState? state, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`startDate` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `StartDate` ← `startDate`, `EndDate` ← `endDate`, `State` ← `state`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListServiceConversationResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateConversation
- **HTTP**: `POST /v1/Conversations/{Sid}` (Default2 (conversations))
- **Notes**: Update an existing conversation in your account's default service
- **Signature**: `UpdateConversation(string sid, Confirmation? xTwilioWebhookEnabled, string? friendlyName, DateTimeOffset? dateCreated, DateTimeOffset? dateUpdated, string? attributes, string? messagingServiceSid, ConversationEnumState? state, string? timersInactive, string? timersClosed, string? uniqueName, string? bindingsEmailAddress, string? bindingsEmailName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`xTwilioWebhookEnabled` … `bindingsEmailName`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `DateCreated` ← `dateCreated`, `DateUpdated` ← `dateUpdated`, `Attributes` ← `attributes`, `MessagingServiceSid` ← `messagingServiceSid`, `State` ← `state`, `Timers.Inactive` ← `timersInactive`, `Timers.Closed` ← `timersClosed`, `UniqueName` ← `uniqueName`, `Bindings.Email.Address` ← `bindingsEmailAddress`, `Bindings.Email.Name` ← `bindingsEmailName`
- **Returns**: `ConversationsV1Conversation`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateServiceConversation
- **HTTP**: `POST /v1/Services/{ChatServiceSid}/Conversations/{Sid}` (Default2 (conversations))
- **Notes**: Update an existing conversation in your service
- **Signature**: `UpdateServiceConversation(string chatServiceSid, string sid, Confirmation? xTwilioWebhookEnabled, string? friendlyName, DateTimeOffset? dateCreated, DateTimeOffset? dateUpdated, string? attributes, string? messagingServiceSid, ServiceConversationEnumState? state, string? timersInactive, string? timersClosed, string? uniqueName, string? bindingsEmailAddress, string? bindingsEmailName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`xTwilioWebhookEnabled` … `bindingsEmailName`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `DateCreated` ← `dateCreated`, `DateUpdated` ← `dateUpdated`, `Attributes` ← `attributes`, `MessagingServiceSid` ← `messagingServiceSid`, `State` ← `state`, `Timers.Inactive` ← `timersInactive`, `Timers.Closed` ← `timersClosed`, `UniqueName` ← `uniqueName`, `Bindings.Email.Address` ← `bindingsEmailAddress`, `Bindings.Email.Name` ← `bindingsEmailName`
- **Returns**: `ConversationsV1ServiceServiceConversation`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
