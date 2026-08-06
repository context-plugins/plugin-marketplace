# MessagingV2ChannelsSender — operations

Accessor: `client.MessagingV2ChannelsSender` · Source: `Api/MessagingV2ChannelsSender.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateChannelsSender
- **HTTP**: `POST /v2/Channels/Senders` (Default1 (messaging))
- **Notes**: Create a Sender.
- **Signature**: `CreateChannelsSender(MessagingV2ChannelsSenderRequestsCreate body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `MessagingV2ChannelsSenderResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteChannelsSender
- **HTTP**: `DELETE /v2/Channels/Senders/{Sid}` (Default1 (messaging))
- **Notes**: (WhatsApp only) Delete a Sender.
- **Signature**: `DeleteChannelsSender(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchChannelsSender
- **HTTP**: `GET /v2/Channels/Senders/{Sid}` (Default1 (messaging))
- **Notes**: Retrieve a Sender.
- **Signature**: `FetchChannelsSender(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `MessagingV2ChannelsSenderResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListChannelsSender
- **HTTP**: `GET /v2/Channels/Senders` (Default1 (messaging))
- **Notes**: Retrieve a list of Senders for an account.
- **Signature**: `ListChannelsSender(string channel, int? page, string? pageToken, long? pageSize = 50L, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `pageSize` = 50L, `requestOptions` = null
- **Query params (wire ← C#)**: `Channel` ← `channel`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListChannelsSenderResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateChannelsSender
- **HTTP**: `POST /v2/Channels/Senders/{Sid}` (Default1 (messaging))
- **Notes**: (WhatsApp only) Update a Sender. You can update a sender's information, including `profile`, `webhook`, and `configuration`. To verify a phone number, set `configuration.verification_code` to the One-time Password (OTP) that you received.
- **Signature**: `UpdateChannelsSender(string sid, MessagingV2ChannelsSenderRequestsUpdate? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `MessagingV2ChannelsSenderResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
