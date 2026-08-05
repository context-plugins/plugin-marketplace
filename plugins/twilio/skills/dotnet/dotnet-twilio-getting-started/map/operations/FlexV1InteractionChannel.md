# FlexV1InteractionChannel — operations

Accessor: `client.FlexV1InteractionChannel` · Source: `Api/FlexV1InteractionChannel.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchInteractionChannel
- **HTTP**: `GET /v1/Interactions/{InteractionSid}/Channels/{Sid}` (Default3 (flex-api))
- **Notes**: Fetch a Channel for an Interaction.
- **Signature**: `FetchInteractionChannel(string interactionSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `FlexV1InteractionInteractionChannel`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListInteractionChannel
- **HTTP**: `GET /v1/Interactions/{InteractionSid}/Channels` (Default3 (flex-api))
- **Notes**: List all Channels for an Interaction.
- **Signature**: `ListInteractionChannel(string interactionSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListInteractionChannelResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateInteractionChannel
- **HTTP**: `POST /v1/Interactions/{InteractionSid}/Channels/{Sid}` (Default3 (flex-api))
- **Notes**: Update an existing Interaction Channel.
- **Signature**: `UpdateInteractionChannel(string interactionSid, string sid, InteractionChannelEnumUpdateChannelStatus status, object? routing, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `routing` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Status` ← `status`, `Routing` ← `routing`
- **Returns**: `FlexV1InteractionInteractionChannel`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
