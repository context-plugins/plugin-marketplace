# ChatV3Channel — operations

Accessor: `client.ChatV3Channel` · Source: `Api/ChatV3Channel.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### UpdateChannel
- **HTTP**: `POST /v3/Services/{ServiceSid}/Channels/{Sid}` (Default (accounts))
- **Notes**: Update a specific Channel.
- **Signature**: `UpdateChannel(string serviceSid, string sid, ContentType contentType, ChannelWebhookEnabledType1? xTwilioWebhookEnabled, ChannelChannelType? type, string? messagingServiceSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xTwilioWebhookEnabled` — nullable, no default → **must pass explicitly**
  - `type` — nullable, no default → **must pass explicitly**
  - `messagingServiceSid` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Type` ← `type`, `MessagingServiceSid` ← `messagingServiceSid`
- **Returns**: `Channel`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
