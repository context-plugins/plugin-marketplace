# FlexV1InteractionTransfer — operations

Accessor: `client.FlexV1InteractionTransfer` · Source: `Api/FlexV1InteractionTransfer.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateInteractionTransfer
- **HTTP**: `POST /v1/Interactions/{InteractionSid}/Channels/{ChannelSid}/Transfers` (Default13 (flex-api))
- **Notes**: Create a new Transfer.
- **Signature**: `CreateInteractionTransfer(string interactionSid, string channelSid, object? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `FlexV1InteractionInteractionChannelInteractionTransfer`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchInteractionTransfer
- **HTTP**: `GET /v1/Interactions/{InteractionSid}/Channels/{ChannelSid}/Transfers/{Sid}` (Default13 (flex-api))
- **Notes**: Fetch a specific Transfer by SID.
- **Signature**: `FetchInteractionTransfer(string interactionSid, string channelSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `FlexV1InteractionInteractionChannelInteractionTransfer`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateInteractionTransfer
- **HTTP**: `POST /v1/Interactions/{InteractionSid}/Channels/{ChannelSid}/Transfers/{Sid}` (Default13 (flex-api))
- **Notes**: Update an existing Transfer.
- **Signature**: `UpdateInteractionTransfer(string interactionSid, string channelSid, string sid, object? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `FlexV1InteractionInteractionChannelInteractionTransfer`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
