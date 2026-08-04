# DirectMessages — operations

Accessor: `client.DirectMessages` · Source: `Api/DirectMessages.cs` · 9 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateDirectMessagesByConversationId
- **HTTP**: `POST /2/dm_conversations/{dm_conversation_id}/messages` (Default (api))
- **Signature**: `CreateDirectMessagesByConversationId(string dmConversationId, CreateDirectMessagesByConversationIdRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateDirectMessagesByConversationIdResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateDirectMessagesByParticipantId
- **HTTP**: `POST /2/dm_conversations/with/{participant_id}/messages` (Default (api))
- **Notes**: Sends a new direct message to a specific participant by their ID.
- **Signature**: `CreateDirectMessagesByParticipantId(string participantId, CreateDirectMessagesByParticipantIdRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateDirectMessagesByParticipantIdResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateDirectMessagesConversation
- **HTTP**: `POST /2/dm_conversations` (Default (api))
- **Notes**: Initiates a new direct message conversation with specified participants.
- **Signature**: `CreateDirectMessagesConversation(CreateDirectMessagesConversationRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateDirectMessagesConversationResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteDirectMessagesEvents
- **HTTP**: `DELETE /2/dm_events/{event_id}` (Default (api))
- **Notes**: Deletes a specific direct message event by its ID, if owned by the authenticated user.
- **Signature**: `DeleteDirectMessagesEvents(string eventId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeleteDirectMessagesEventsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DmConversationsMediaDownload
- **HTTP**: `GET /2/dm_conversations/media/{dm_id}/{media_id}/{resource_id}` (Default (api))
- **Notes**: Downloads media attached to a legacy Direct Message. The requesting user must be a participant in the conversation containing the specified DM event. The response body contains raw binary bytes.
- **Signature**: `DmConversationsMediaDownload(string dmId, string mediaId, string resourceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BinaryContent`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetDirectMessagesEvents
- **HTTP**: `GET /2/dm_events` (Default (api))
- **Signature**: `GetDirectMessagesEvents(string? paginationToken, IReadOnlyList<EventType1>? eventTypes, IReadOnlyList<DmEventField>? dmEventFields, IReadOnlyList<Expansions2>? expansions, IReadOnlyList<UserField>? userFields, IReadOnlyList<PostField>? postFields, IReadOnlyList<MediaField>? mediaFields, int? maxResults = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`paginationToken` … `mediaFields`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `maxResults` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `max_results` ← `maxResults`, `pagination_token` ← `paginationToken`, `event_types` ← `eventTypes`, `dm_event.fields` ← `dmEventFields`, `expansions` ← `expansions`, `user.fields` ← `userFields`, `post.fields` ← `postFields`, `media.fields` ← `mediaFields`
- **Returns**: `GetDirectMessagesEventsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetDirectMessagesEventsByConversationId
- **HTTP**: `GET /2/dm_conversations/{id}/dm_events` (Default (api))
- **Signature**: `GetDirectMessagesEventsByConversationId(string id, string? paginationToken, IReadOnlyList<EventType1>? eventTypes, IReadOnlyList<DmEventField>? dmEventFields, IReadOnlyList<Expansions2>? expansions, IReadOnlyList<UserField>? userFields, IReadOnlyList<PostField>? postFields, IReadOnlyList<MediaField>? mediaFields, int? maxResults = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`paginationToken` … `mediaFields`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `maxResults` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `max_results` ← `maxResults`, `pagination_token` ← `paginationToken`, `event_types` ← `eventTypes`, `dm_event.fields` ← `dmEventFields`, `expansions` ← `expansions`, `user.fields` ← `userFields`, `post.fields` ← `postFields`, `media.fields` ← `mediaFields`
- **Returns**: `GetDirectMessagesEventsByConversationIdResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetDirectMessagesEventsById
- **HTTP**: `GET /2/dm_events/{event_id}` (Default (api))
- **Signature**: `GetDirectMessagesEventsById(string eventId, IReadOnlyList<DmEventField>? dmEventFields, IReadOnlyList<Expansions2>? expansions, IReadOnlyList<UserField>? userFields, IReadOnlyList<PostField>? postFields, IReadOnlyList<MediaField>? mediaFields, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`dmEventFields` … `mediaFields`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dm_event.fields` ← `dmEventFields`, `expansions` ← `expansions`, `user.fields` ← `userFields`, `post.fields` ← `postFields`, `media.fields` ← `mediaFields`
- **Returns**: `GetDirectMessagesEventsByIdResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetDirectMessagesEventsByParticipantId
- **HTTP**: `GET /2/dm_conversations/with/{participant_id}/dm_events` (Default (api))
- **Signature**: `GetDirectMessagesEventsByParticipantId(string participantId, string? paginationToken, IReadOnlyList<EventType1>? eventTypes, IReadOnlyList<DmEventField>? dmEventFields, IReadOnlyList<Expansions2>? expansions, IReadOnlyList<UserField>? userFields, IReadOnlyList<PostField>? postFields, IReadOnlyList<MediaField>? mediaFields, int? maxResults = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`paginationToken` … `mediaFields`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `maxResults` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `max_results` ← `maxResults`, `pagination_token` ← `paginationToken`, `event_types` ← `eventTypes`, `dm_event.fields` ← `dmEventFields`, `expansions` ← `expansions`, `user.fields` ← `userFields`, `post.fields` ← `postFields`, `media.fields` ← `mediaFields`
- **Returns**: `GetDirectMessagesEventsByParticipantIdResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
