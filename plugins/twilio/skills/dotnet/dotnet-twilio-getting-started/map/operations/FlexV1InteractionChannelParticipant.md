# FlexV1InteractionChannelParticipant — operations

Accessor: `client.FlexV1InteractionChannelParticipant` · Source: `Api/FlexV1InteractionChannelParticipant.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateInteractionChannelParticipant
- **HTTP**: `POST /v1/Interactions/{InteractionSid}/Channels/{ChannelSid}/Participants` (Default13 (flex-api))
- **Notes**: Add a Participant to a Channel.
- **Signature**: `CreateInteractionChannelParticipant(string interactionSid, string channelSid, InteractionChannelParticipantEnumType type, object mediaProperties, object? routingProperties, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `routingProperties` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Type` ← `type`, `MediaProperties` ← `mediaProperties`, `RoutingProperties` ← `routingProperties`
- **Returns**: `FlexV1InteractionInteractionChannelInteractionChannelParticipant`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListInteractionChannelParticipant
- **HTTP**: `GET /v1/Interactions/{InteractionSid}/Channels/{ChannelSid}/Participants` (Default13 (flex-api))
- **Notes**: List all Participants for a Channel.
- **Signature**: `ListInteractionChannelParticipant(string interactionSid, string channelSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListInteractionChannelParticipantResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateInteractionChannelParticipant
- **HTTP**: `POST /v1/Interactions/{InteractionSid}/Channels/{ChannelSid}/Participants/{Sid}` (Default13 (flex-api))
- **Notes**: Update an existing Channel Participant.
- **Signature**: `UpdateInteractionChannelParticipant(string interactionSid, string channelSid, string sid, InteractionChannelParticipantEnumStatus status, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Status` ← `status`
- **Returns**: `FlexV1InteractionInteractionChannelInteractionChannelParticipant`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
