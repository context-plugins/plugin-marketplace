# MessagingV3TypingIndicator — operations

Accessor: `client.MessagingV3TypingIndicator` · Source: `Api/MessagingV3TypingIndicator.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateV3TypingIndicator
- **HTTP**: `POST /v3/Indicators/Typing.json` (Default1 (messaging))
- **Notes**: Send a typing indicator to notify the recipient that you are composing a message. Supported channels: WhatsApp, Apple Messages for Business. The request body varies by channel — use the `channel` field as the discriminator.
- **Signature**: `CreateV3TypingIndicator(TypingIndicatorRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `V2IndicatorsTypingJsonResponse`
- **Error**: `SdkException<CreateV3TypingIndicatorError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
