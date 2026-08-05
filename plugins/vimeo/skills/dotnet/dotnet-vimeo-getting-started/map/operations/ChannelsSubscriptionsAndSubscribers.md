# ChannelsSubscriptionsAndSubscribers — operations

Accessor: `client.ChannelsSubscriptionsAndSubscribers` · Source: `Api/ChannelsSubscriptionsAndSubscribers.cs` · 7 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CheckIfUserSubscribedToChannel
- **HTTP**: `GET /users/{user_id}/channels/{channel_id}` (Default (api))
- **Notes**: This method determines whether the specified user is a follower of a particular channel.
- **Signature**: `CheckIfUserSubscribedToChannel(double channelId, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<CheckIfUserSubscribedToChannelError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CheckIfUserSubscribedToChannelAlt1
- **HTTP**: `GET /me/channels/{channel_id}` (Default (api))
- **Notes**: This method determines whether the specified user is a follower of a particular channel.
- **Signature**: `CheckIfUserSubscribedToChannelAlt1(double channelId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<CheckIfUserSubscribedToChannelAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetChannelSubscribers
- **HTTP**: `GET /channels/{channel_id}/users` (Default (api))
- **Notes**: This method returns every follower of the specified channel.
- **Signature**: `GetChannelSubscribers(double channelId, Filter2 filter, Direction? direction, double? page, double? perPage, string? query, Sort8? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`direction` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `filter` ← `filter`, `direction` ← `direction`, `page` ← `page`, `per_page` ← `perPage`, `query` ← `query`, `sort` ← `sort`
- **Returns**: `UserConnection`
- **Error**: `SdkException<GetChannelSubscribersError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### SubscribeToChannel
- **HTTP**: `PUT /users/{user_id}/channels/{channel_id}` (Default (api))
- **Notes**: This method subscribes the authenticated user to the specified channel.
- **Signature**: `SubscribeToChannel(double channelId, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<SubscribeToChannelError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SubscribeToChannelAlt1
- **HTTP**: `PUT /me/channels/{channel_id}` (Default (api))
- **Notes**: This method subscribes the authenticated user to the specified channel.
- **Signature**: `SubscribeToChannelAlt1(double channelId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<SubscribeToChannelAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UnsubscribeFromChannel
- **HTTP**: `DELETE /users/{user_id}/channels/{channel_id}` (Default (api))
- **Notes**: This method unsubscribes the authenticated user from the specified channel.
- **Signature**: `UnsubscribeFromChannel(double channelId, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UnsubscribeFromChannelError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UnsubscribeFromChannelAlt1
- **HTTP**: `DELETE /me/channels/{channel_id}` (Default (api))
- **Notes**: This method unsubscribes the authenticated user from the specified channel.
- **Signature**: `UnsubscribeFromChannelAlt1(double channelId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UnsubscribeFromChannelAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
