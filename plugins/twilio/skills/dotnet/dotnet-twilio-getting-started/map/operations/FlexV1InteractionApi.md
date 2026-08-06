# FlexV1InteractionApi — operations

Accessor: `client.FlexV1InteractionApi` · Source: `Api/FlexV1InteractionApi.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateInteraction
- **HTTP**: `POST /v1/Interactions` (Default13 (flex-api))
- **Notes**: Create a new Interaction.
- **Signature**: `CreateInteraction(object channel, object? routing, string? interactionContextSid, string? webhookTtid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `routing` — nullable, no default → **must pass explicitly**
  - `interactionContextSid` — nullable, no default → **must pass explicitly**
  - `webhookTtid` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Channel` ← `channel`, `Routing` ← `routing`, `InteractionContextSid` ← `interactionContextSid`, `WebhookTtid` ← `webhookTtid`
- **Returns**: `FlexV1Interaction`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchInteraction2
- **HTTP**: `GET /v1/Interactions/{Sid}` (Default13 (flex-api))
- **Signature**: `FetchInteraction2(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `FlexV1Interaction`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateInteraction
- **HTTP**: `POST /v1/Interactions/{Sid}` (Default13 (flex-api))
- **Notes**: Updates an interaction.
- **Signature**: `UpdateInteraction(string sid, string? webhookTtid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `webhookTtid` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `WebhookTtid` ← `webhookTtid`
- **Returns**: `FlexV1Interaction`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
