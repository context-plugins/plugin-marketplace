# MessagingV2TypingIndicator — operations

Accessor: `client.MessagingV2TypingIndicator` · Source: `Api/MessagingV2TypingIndicator.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateTypingIndicator
- **HTTP**: `POST /v2/Indicators/Typing.json` (Default1 (messaging))
- **Notes**: Send a typing indicator to notify the recipient that you are composing a message. Currently supported for whatsapp channel only. For WhatsApp, `messageId` is required.
- **Signature**: `CreateTypingIndicator(Channel channel, string messageId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `channel` ← `channel`, `messageId` ← `messageId`
- **Returns**: `V2IndicatorsTypingJsonResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
