# ChannelsModerators — operations

Accessor: `client.ChannelsModerators` · Source: `Api/ChannelsModerators.cs` · 7 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AddChannelModerator
- **HTTP**: `PUT /channels/{channel_id}/moderators/{user_id}` (Default (api))
- **Notes**: This method adds a single user as a moderator to the specified channel. The authenticated user must be a follower of the requested user to add them as a channel moderator.
- **Signature**: `AddChannelModerator(double channelId, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<AddChannelModeratorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### AddChannelModerators
- **HTTP**: `PUT /channels/{channel_id}/moderators` (Default (api))
- **Notes**: This method adds multiple users as moderators to the specified channel. Include the users by their URI as a JSON array in the body of the request using the user_uri field, like this: `[{ "user_uri": "/users/1234" }, { "user_uri": "/users/1235" }]`. The authenticated user must be a follower of a requested user to add this person as a moderator. For more information on batch requests like this one, see Using Common Formats and Parameters .
- **Signature**: `AddChannelModerators(double channelId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<AddChannelModeratorsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetLegacyError(out LegacyError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetChannelModerator
- **HTTP**: `GET /channels/{channel_id}/moderators/{user_id}` (Default (api))
- **Notes**: This method returns a single moderator of the specified channel.
- **Signature**: `GetChannelModerator(double channelId, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetChannelModerators
- **HTTP**: `GET /channels/{channel_id}/moderators` (Default (api))
- **Notes**: This method returns every moderator of the specified channel.
- **Signature**: `GetChannelModerators(double channelId, Direction? direction, double? page, double? perPage, string? query, Sort8? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`direction` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `page` ← `page`, `per_page` ← `perPage`, `query` ← `query`, `sort` ← `sort`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### RemoveChannelModerator
- **HTTP**: `DELETE /channels/{channel_id}/moderators/{user_id}` (Default (api))
- **Notes**: This method removes a single moderator from the specified channel. The authenticated user must be the owner of the channel.
- **Signature**: `RemoveChannelModerator(double channelId, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RemoveChannelModeratorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RemoveChannelModerators
- **HTTP**: `DELETE /channels/{channel_id}/moderators` (Default (api))
- **Notes**: This method removes multiple moderators from the specified channel. The authenticated user must be the owner of the channel.
- **Signature**: `RemoveChannelModerators(double channelId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RemoveChannelModeratorsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReplaceChannelModerators
- **HTTP**: `PATCH /channels/{channel_id}/moderators` (Default (api))
- **Notes**: This method replaces the current list of channel moderators with a new list. The authenticated user must be the owner of the channel and a follower of each requested user to add them as a channel moderator.
- **Signature**: `ReplaceChannelModerators(double channelId, ChannelsModeratorsRequest1 body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<User>`
- **Error**: `SdkException<ReplaceChannelModeratorsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetLegacyError(out LegacyError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
