# Users — operations

Accessor: `client.Users` · Source: `Api/Users.cs` · 12 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CheckCurrentUserFollows
- **HTTP**: `GET /me/following/contains` (Default (api))
- **Notes**: Check to see if the current user is following one or more artists or other Spotify users.
- **Signature**: `CheckCurrentUserFollows(ItemType3 type, string ids, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `type` ← `type`, `ids` ← `ids`
- **Returns**: `IReadOnlyList<bool>`
- **Error**: `SdkException<CheckCurrentUserFollowsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CheckIfUserFollowsPlaylist
- **HTTP**: `GET /playlists/{playlist_id}/followers/contains` (Default (api))
- **Notes**: Check to see if one or more Spotify users are following a specified playlist.
- **Signature**: `CheckIfUserFollowsPlaylist(string playlistId, string ids, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ids` ← `ids`
- **Returns**: `IReadOnlyList<bool>`
- **Error**: `SdkException<CheckIfUserFollowsPlaylistError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### FollowArtistsUsers
- **HTTP**: `PUT /me/following` (Default (api))
- **Notes**: Add the current user as a follower of one or more artists or other Spotify users.
- **Signature**: `FollowArtistsUsers(ItemType2 type, string ids, FollowArtistsOrUsersRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `type` ← `type`, `ids` ← `ids`
- **Returns**: `void` (Task)
- **Error**: `SdkException<FollowArtistsUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### FollowPlaylist
- **HTTP**: `PUT /playlists/{playlist_id}/followers` (Default (api))
- **Notes**: Add the current user as a follower of a playlist.
- **Signature**: `FollowPlaylist(string playlistId, PlaylistsFollowersRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<FollowPlaylistError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCurrentUsersProfile
- **HTTP**: `GET /me` (Default (api))
- **Notes**: Get detailed profile information about the current user (including the current user's username).
- **Signature**: `GetCurrentUsersProfile(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PrivateUserObject`
- **Error**: `SdkException<GetCurrentUsersProfileError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetFollowed
- **HTTP**: `GET /me/following` (Default (api))
- **Notes**: Get the current user's followed artists.
- **Signature**: `GetFollowed(ItemType1 type, string? after, int? limit = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `after` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 20, `requestOptions` = null
- **Query params (wire ← C#)**: `type` ← `type`, `after` ← `after`, `limit` ← `limit`
- **Returns**: `CursorPagedArtists`
- **Error**: `SdkException<GetFollowedError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetListUsersPlaylists
- **HTTP**: `GET /users/{user_id}/playlists` (Default (api))
- **Notes**: Get a list of the playlists owned or followed by a Spotify user.
- **Signature**: `GetListUsersPlaylists(string userId, int? limit = 20, int? offset = 0, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 20, `offset` = 0, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`
- **Returns**: `PagingPlaylistObject`
- **Error**: `SdkException<GetListUsersPlaylistsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetUsersProfile
- **HTTP**: `GET /users/{user_id}` (Default (api))
- **Notes**: Get public profile information about a Spotify user.
- **Signature**: `GetUsersProfile(string userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PublicUserObject`
- **Error**: `SdkException<GetUsersProfileError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetUsersTopArtists
- **HTTP**: `GET /me/top/artists` (Default (api))
- **Notes**: Get the current user's top artists based on calculated affinity.
- **Signature**: `GetUsersTopArtists(string? timeRange = "medium_term", int? limit = 20, int? offset = 0, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `timeRange` = "medium_term", `limit` = 20, `offset` = 0, `requestOptions` = null
- **Query params (wire ← C#)**: `time_range` ← `timeRange`, `limit` ← `limit`, `offset` ← `offset`
- **Returns**: `PagingArtistObject`
- **Error**: `SdkException<GetUsersTopArtistsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetUsersTopTracks
- **HTTP**: `GET /me/top/tracks` (Default (api))
- **Notes**: Get the current user's top tracks based on calculated affinity.
- **Signature**: `GetUsersTopTracks(string? timeRange = "medium_term", int? limit = 20, int? offset = 0, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `timeRange` = "medium_term", `limit` = 20, `offset` = 0, `requestOptions` = null
- **Query params (wire ← C#)**: `time_range` ← `timeRange`, `limit` ← `limit`, `offset` ← `offset`
- **Returns**: `PagingTrackObject`
- **Error**: `SdkException<GetUsersTopTracksError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UnfollowArtistsUsers
- **HTTP**: `DELETE /me/following` (Default (api))
- **Notes**: Remove the current user as a follower of one or more artists or other Spotify users.
- **Signature**: `UnfollowArtistsUsers(ItemType3 type, string ids, UnfollowArtistsOrUsersRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `type` ← `type`, `ids` ← `ids`
- **Returns**: `void` (Task)
- **Error**: `SdkException<UnfollowArtistsUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UnfollowPlaylist
- **HTTP**: `DELETE /playlists/{playlist_id}/followers` (Default (api))
- **Notes**: Remove the current user as a follower of a playlist.
- **Signature**: `UnfollowPlaylist(string playlistId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UnfollowPlaylistError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
