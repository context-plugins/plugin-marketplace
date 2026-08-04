# ChannelsPrivateChannelMembers — operations

Accessor: `client.ChannelsPrivateChannelMembers` · Source: `Api/ChannelsPrivateChannelMembers.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteChannelPrivacyUser
- **HTTP**: `DELETE /channels/{channel_id}/privacy/users/{user_id}` (Default (api))
- **Notes**: This method prevents a single user from being able to access the specified private channel. The authenticated user must be the owner of the channel.
- **Signature**: `DeleteChannelPrivacyUser(double channelId, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteChannelPrivacyUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetChannelPrivacyUsers
- **HTTP**: `GET /channels/{channel_id}/privacy/users` (Default (api))
- **Notes**: This method returns all the users who have access to the specified private channel. The authenticated user must be the owner of the channel.
- **Signature**: `GetChannelPrivacyUsers(double channelId, Direction? direction, double? page, double? perPage, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `direction` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `perPage` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `page` ← `page`, `per_page` ← `perPage`
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetChannelPrivacyUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### SetChannelPrivacyUser
- **HTTP**: `PUT /channels/{channel_id}/privacy/users/{user_id}` (Default (api))
- **Notes**: This method gives a single user access to the specified private channel. The authenticated user must be the owner of the channel.
- **Signature**: `SetChannelPrivacyUser(double channelId, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<SetChannelPrivacyUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SetChannelPrivacyUsers
- **HTTP**: `PUT /channels/{channel_id}/privacy/users` (Default (api))
- **Notes**: This method gives multiple users access to the specified private channel. The authenticated user must be the owner of the channel.
- **Signature**: `SetChannelPrivacyUsers(double channelId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<SetChannelPrivacyUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
