# ConversationsV1ParticipantConversationApi — operations

Accessor: `client.ConversationsV1ParticipantConversationApi` · Source: `Api/ConversationsV1ParticipantConversationApi.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ListParticipantConversation
- **HTTP**: `GET /v1/ParticipantConversations` (Default7 (conversations))
- **Notes**: Retrieve a list of all Conversations that this Participant belongs to by identity or by address. Only one parameter should be specified.
- **Signature**: `ListParticipantConversation(string? identity, string? address, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`identity` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Identity` ← `identity`, `Address` ← `address`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListParticipantConversationResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### ListServiceParticipantConversation
- **HTTP**: `GET /v1/Services/{ChatServiceSid}/ParticipantConversations` (Default7 (conversations))
- **Notes**: Retrieve a list of all Conversations that this Participant belongs to by identity or by address. Only one parameter should be specified.
- **Signature**: `ListServiceParticipantConversation(string chatServiceSid, string? identity, string? address, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`identity` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Identity` ← `identity`, `Address` ← `address`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListServiceParticipantConversationResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
