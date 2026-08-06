# ConversationsV1ConversationWithParticipantsApi — operations

Accessor: `client.ConversationsV1ConversationWithParticipantsApi` · Source: `Api/ConversationsV1ConversationWithParticipantsApi.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateConversationWithParticipants
- **HTTP**: `POST /v1/ConversationWithParticipants` (Default7 (conversations))
- **Notes**: Create a new conversation with the list of participants in your account's default service
- **Signature**: `CreateConversationWithParticipants(Confirmation? xTwilioWebhookEnabled, string? friendlyName, string? uniqueName, DateTimeOffset? dateCreated, DateTimeOffset? dateUpdated, string? messagingServiceSid, string? attributes, ConversationWithParticipantsEnumState? state, string? timersInactive, string? timersClosed, string? bindingsEmailAddress, string? bindingsEmailName, IReadOnlyList<string>? participant, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 13 params (`xTwilioWebhookEnabled` … `participant`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `UniqueName` ← `uniqueName`, `DateCreated` ← `dateCreated`, `DateUpdated` ← `dateUpdated`, `MessagingServiceSid` ← `messagingServiceSid`, `Attributes` ← `attributes`, `State` ← `state`, `Timers.Inactive` ← `timersInactive`, `Timers.Closed` ← `timersClosed`, `Bindings.Email.Address` ← `bindingsEmailAddress`, `Bindings.Email.Name` ← `bindingsEmailName`, `Participant` ← `participant`
- **Returns**: `ConversationsV1ConversationWithParticipants`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateServiceConversationWithParticipants
- **HTTP**: `POST /v1/Services/{ChatServiceSid}/ConversationWithParticipants` (Default7 (conversations))
- **Notes**: Create a new conversation with the list of participants in your account's default service
- **Signature**: `CreateServiceConversationWithParticipants(string chatServiceSid, Confirmation? xTwilioWebhookEnabled, string? friendlyName, string? uniqueName, DateTimeOffset? dateCreated, DateTimeOffset? dateUpdated, string? messagingServiceSid, string? attributes, ServiceConversationWithParticipantsEnumState? state, string? timersInactive, string? timersClosed, string? bindingsEmailAddress, string? bindingsEmailName, IReadOnlyList<string>? participant, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 13 params (`xTwilioWebhookEnabled` … `participant`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `UniqueName` ← `uniqueName`, `DateCreated` ← `dateCreated`, `DateUpdated` ← `dateUpdated`, `MessagingServiceSid` ← `messagingServiceSid`, `Attributes` ← `attributes`, `State` ← `state`, `Timers.Inactive` ← `timersInactive`, `Timers.Closed` ← `timersClosed`, `Bindings.Email.Address` ← `bindingsEmailAddress`, `Bindings.Email.Name` ← `bindingsEmailName`, `Participant` ← `participant`
- **Returns**: `ConversationsV1ServiceServiceConversationWithParticipants`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
