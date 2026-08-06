# Chat — operations

Accessor: `client.Chat` · Source: `Api/Chat.cs` · 10 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ChatDelete
- **HTTP**: `POST /chat.delete` (Default (slack))
- **Notes**: Deletes a message.
- **Signature**: `ChatDelete(ContentType contentType, string? token, double? ts, string? channel, bool? asUser, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`token` … `asUser`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ts` ← `ts`, `channel` ← `channel`, `as_user` ← `asUser`
- **Returns**: `ChatDeletesuccessschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ChatDeleteScheduledMessage
- **HTTP**: `POST /chat.deleteScheduledMessage` (Default (slack))
- **Notes**: Deletes a pending scheduled message from the queue.
- **Signature**: `ChatDeleteScheduledMessage(string token, ContentType contentType, string channel, string scheduledMessageId, bool? asUser, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `asUser` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `channel` ← `channel`, `scheduled_message_id` ← `scheduledMessageId`, `as_user` ← `asUser`
- **Returns**: `ChatDeleteScheduledMessageschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ChatGetPermalink
- **HTTP**: `GET /chat.getPermalink` (Default (slack))
- **Notes**: Retrieve a permalink URL for a specific extant message
- **Signature**: `ChatGetPermalink(string token, string channel, string messageTs, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `channel` ← `channel`, `message_ts` ← `messageTs`
- **Returns**: `ChatGetPermalinksuccessschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ChatMeMessage
- **HTTP**: `POST /chat.meMessage` (Default (slack))
- **Notes**: Share a me message into a channel.
- **Signature**: `ChatMeMessage(ContentType contentType, string? token, string? channel, string? text, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `token` — nullable, no default → **must pass explicitly**
  - `channel` — nullable, no default → **must pass explicitly**
  - `text` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `channel` ← `channel`, `text` ← `text`
- **Returns**: `ChatMeMessageschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ChatPostEphemeral
- **HTTP**: `POST /chat.postEphemeral` (Default (slack))
- **Notes**: Sends an ephemeral message to a user in a channel.
- **Signature**: `ChatPostEphemeral(string token, ContentType contentType, string channel, string user, bool? asUser, string? attachments, string? blocks, string? iconEmoji, string? iconUrl, bool? linkNames, string? parse, string? text, string? threadTs, string? username, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 10 params (`asUser` … `username`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `channel` ← `channel`, `user` ← `user`, `as_user` ← `asUser`, `attachments` ← `attachments`, `blocks` ← `blocks`, `icon_emoji` ← `iconEmoji`, `icon_url` ← `iconUrl`, `link_names` ← `linkNames`, `parse` ← `parse`, `text` ← `text`, `thread_ts` ← `threadTs`, `username` ← `username`
- **Returns**: `ChatPostEphemeralsuccessschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ChatPostMessage
- **HTTP**: `POST /chat.postMessage` (Default (slack))
- **Notes**: Sends a message to a channel.
- **Signature**: `ChatPostMessage(string token, ContentType contentType, string channel, string? asUser, string? attachments, string? blocks, string? iconEmoji, string? iconUrl, bool? linkNames, bool? mrkdwn, string? parse, bool? replyBroadcast, string? text, string? threadTs, bool? unfurlLinks, bool? unfurlMedia, string? username, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 14 params (`asUser` … `username`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `channel` ← `channel`, `as_user` ← `asUser`, `attachments` ← `attachments`, `blocks` ← `blocks`, `icon_emoji` ← `iconEmoji`, `icon_url` ← `iconUrl`, `link_names` ← `linkNames`, `mrkdwn` ← `mrkdwn`, `parse` ← `parse`, `reply_broadcast` ← `replyBroadcast`, `text` ← `text`, `thread_ts` ← `threadTs`, `unfurl_links` ← `unfurlLinks`, `unfurl_media` ← `unfurlMedia`, `username` ← `username`
- **Returns**: `ChatPostMessagesuccessschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ChatScheduleMessage
- **HTTP**: `POST /chat.scheduleMessage` (Default (slack))
- **Notes**: Schedules a message to be sent to a channel.
- **Signature**: `ChatScheduleMessage(ContentType contentType, string? token, string? channel, string? text, string? postAt, string? parse, bool? asUser, bool? linkNames, string? attachments, string? blocks, bool? unfurlLinks, bool? unfurlMedia, double? threadTs, bool? replyBroadcast, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 13 params (`token` … `replyBroadcast`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `channel` ← `channel`, `text` ← `text`, `post_at` ← `postAt`, `parse` ← `parse`, `as_user` ← `asUser`, `link_names` ← `linkNames`, `attachments` ← `attachments`, `blocks` ← `blocks`, `unfurl_links` ← `unfurlLinks`, `unfurl_media` ← `unfurlMedia`, `thread_ts` ← `threadTs`, `reply_broadcast` ← `replyBroadcast`
- **Returns**: `ChatScheduleMessagesuccessschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ChatScheduledMessagesList
- **HTTP**: `GET /chat.scheduledMessages.list` (Default (slack))
- **Notes**: Returns a list of scheduled messages.
- **Signature**: `ChatScheduledMessagesList(string? channel, double? latest, double? oldest, int? limit, string? cursor, ContentType contentType, string? token, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`channel` … `token`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `channel` ← `channel`, `latest` ← `latest`, `oldest` ← `oldest`, `limit` ← `limit`, `cursor` ← `cursor`
- **Returns**: `ChatScheduledMessagesListschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ChatUnfurl
- **HTTP**: `POST /chat.unfurl` (Default (slack))
- **Notes**: Provide custom unfurl behavior for user-posted URLs
- **Signature**: `ChatUnfurl(string token, ContentType contentType, string channel, string ts, string? unfurls, string? userAuthMessage, bool? userAuthRequired, string? userAuthUrl, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`unfurls` … `userAuthUrl`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `channel` ← `channel`, `ts` ← `ts`, `unfurls` ← `unfurls`, `user_auth_message` ← `userAuthMessage`, `user_auth_required` ← `userAuthRequired`, `user_auth_url` ← `userAuthUrl`
- **Returns**: `ChatUnfurlsuccessschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ChatUpdate
- **HTTP**: `POST /chat.update` (Default (slack))
- **Notes**: Updates a message.
- **Signature**: `ChatUpdate(string token, ContentType contentType, string channel, string ts, string? asUser, string? attachments, string? blocks, string? linkNames, string? parse, string? text, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`asUser` … `text`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `channel` ← `channel`, `ts` ← `ts`, `as_user` ← `asUser`, `attachments` ← `attachments`, `blocks` ← `blocks`, `link_names` ← `linkNames`, `parse` ← `parse`, `text` ← `text`
- **Returns**: `ChatUpdatesuccessschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
