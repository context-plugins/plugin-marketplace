# ChannelsEssentials — operations

Accessor: `client.ChannelsEssentials` · Source: `Api/ChannelsEssentials.cs` · 7 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateChannel
- **HTTP**: `POST /channels` (Default (api))
- **Notes**: This method creates a new channel.
- **Signature**: `CreateChannel(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<CreateChannelError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteChannel
- **HTTP**: `DELETE /channels/{channel_id}` (Default (api))
- **Notes**: This method deletes the specified channel. The authenticated user must own the channel.
- **Signature**: `DeleteChannel(double channelId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteChannelError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### EditChannel
- **HTTP**: `PATCH /channels/{channel_id}` (Default (api))
- **Notes**: This method edits the specified channel.
- **Signature**: `EditChannel(double channelId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<EditChannelError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetChannel
- **HTTP**: `GET /channels/{channel_id}` (Default (api))
- **Notes**: This method returns a single channel.
- **Signature**: `GetChannel(double channelId, string? sizes, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `sizes` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `sizes` ← `sizes`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetChannelSubscriptions
- **HTTP**: `GET /users/{user_id}/channels` (Default (api))
- **Notes**: This method returns all the channels to which the specified user subscribes.
- **Signature**: `GetChannelSubscriptions(double userId, Direction? direction, Filter12? filter, double? page, double? perPage, string? query, Sort4? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`direction` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `filter` ← `filter`, `page` ← `page`, `per_page` ← `perPage`, `query` ← `query`, `sort` ← `sort`
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetChannelSubscriptionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetChannelSubscriptionsAlt1
- **HTTP**: `GET /me/channels` (Default (api))
- **Notes**: This method returns all the channels to which the specified user subscribes.
- **Signature**: `GetChannelSubscriptionsAlt1(Direction? direction, Filter12? filter, double? page, double? perPage, string? query, Sort4? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`direction` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `filter` ← `filter`, `page` ← `page`, `per_page` ← `perPage`, `query` ← `query`, `sort` ← `sort`
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetChannelSubscriptionsAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetChannels
- **HTTP**: `GET /channels` (Default (api))
- **Notes**: This method returns all available channels.
- **Signature**: `GetChannels(Direction? direction, Filter1? filter, double? page, double? perPage, string? query, Sort7? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`direction` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `filter` ← `filter`, `page` ← `page`, `per_page` ← `perPage`, `query` ← `query`, `sort` ← `sort`
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetChannelsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`
