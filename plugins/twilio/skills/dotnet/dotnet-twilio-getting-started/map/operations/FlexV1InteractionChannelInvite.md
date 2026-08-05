# FlexV1InteractionChannelInvite — operations

Accessor: `client.FlexV1InteractionChannelInvite` · Source: `Api/FlexV1InteractionChannelInvite.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateInteractionChannelInvite
- **HTTP**: `POST /v1/Interactions/{InteractionSid}/Channels/{ChannelSid}/Invites` (Default3 (flex-api))
- **Notes**: Invite an Agent or a TaskQueue to a Channel.
- **Signature**: `CreateInteractionChannelInvite(string interactionSid, string channelSid, object routing, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Routing` ← `routing`
- **Returns**: `FlexV1InteractionInteractionChannelInteractionChannelInvite`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListInteractionChannelInvite
- **HTTP**: `GET /v1/Interactions/{InteractionSid}/Channels/{ChannelSid}/Invites` (Default3 (flex-api))
- **Notes**: List all Invites for a Channel.
- **Signature**: `ListInteractionChannelInvite(string interactionSid, string channelSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListInteractionChannelInviteResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
