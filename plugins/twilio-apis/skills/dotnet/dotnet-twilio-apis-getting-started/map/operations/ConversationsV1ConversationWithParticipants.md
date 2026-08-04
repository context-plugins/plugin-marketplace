# ConversationsV1ConversationWithParticipants — operations

Accessor: `client.ConversationsV1ConversationWithParticipants` · Source: `Api/ConversationsV1ConversationWithParticipants.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateConversationWithParticipants
- **HTTP**: `POST /v1/ConversationWithParticipants` (Default (accounts))
- **Notes**: Create a new conversation with the list of participants in your account's default service
- **Signature**: `CreateConversationWithParticipants(ContentType contentType, ChannelWebhookEnabledType1? xTwilioWebhookEnabled, string? friendlyName, string? uniqueName, DateTimeOffset? dateCreated, DateTimeOffset? dateUpdated, string? messagingServiceSid, string? attributes, ConversationState? state, string? timersInactive, string? timersClosed, string? bindingsEmailAddress, string? bindingsEmailName, IReadOnlyList<string>? participant, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 13 params (`xTwilioWebhookEnabled` … `participant`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `UniqueName` ← `uniqueName`, `DateCreated` ← `dateCreated`, `DateUpdated` ← `dateUpdated`, `MessagingServiceSid` ← `messagingServiceSid`, `Attributes` ← `attributes`, `State` ← `state`, `Timers.Inactive` ← `timersInactive`, `Timers.Closed` ← `timersClosed`, `Bindings.Email.Address` ← `bindingsEmailAddress`, `Bindings.Email.Name` ← `bindingsEmailName`, `Participant` ← `participant`
- **Returns**: `ConversationWithParticipants`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateServiceConversationWithParticipants
- **HTTP**: `POST /v1/Services/{ChatServiceSid}/ConversationWithParticipants` (Default (accounts))
- **Notes**: Create a new conversation with the list of participants in your account's default service
- **Signature**: `CreateServiceConversationWithParticipants(string chatServiceSid, ContentType contentType, ChannelWebhookEnabledType1? xTwilioWebhookEnabled, string? friendlyName, string? uniqueName, DateTimeOffset? dateCreated, DateTimeOffset? dateUpdated, string? messagingServiceSid, string? attributes, ConversationState? state, string? timersInactive, string? timersClosed, string? bindingsEmailAddress, string? bindingsEmailName, IReadOnlyList<string>? participant, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 13 params (`xTwilioWebhookEnabled` … `participant`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `UniqueName` ← `uniqueName`, `DateCreated` ← `dateCreated`, `DateUpdated` ← `dateUpdated`, `MessagingServiceSid` ← `messagingServiceSid`, `Attributes` ← `attributes`, `State` ← `state`, `Timers.Inactive` ← `timersInactive`, `Timers.Closed` ← `timersClosed`, `Bindings.Email.Address` ← `bindingsEmailAddress`, `Bindings.Email.Name` ← `bindingsEmailName`, `Participant` ← `participant`
- **Returns**: `ServiceConversationWithParticipants`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
