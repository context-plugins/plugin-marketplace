# Library — operations

Accessor: `client.Library` · Source: `Api/Library.cs` · 29 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ChangePlaylistDetails
- **HTTP**: `PUT /playlists/{playlist_id}` (Default (api))
- **Notes**: Change a playlist's name and public/private state. (The user must, of course, own the playlist.)
- **Signature**: `ChangePlaylistDetails(string playlistId, PlaylistsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<ChangePlaylistDetailsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

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

### CheckUsersSavedAlbums
- **HTTP**: `GET /me/albums/contains` (Default (api))
- **Notes**: Check if one or more albums is already saved in the current Spotify user's 'Your Music' library.
- **Signature**: `CheckUsersSavedAlbums(string ids, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ids` ← `ids`
- **Returns**: `IReadOnlyList<bool>`
- **Error**: `SdkException<CheckUsersSavedAlbumsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CheckUsersSavedAudiobooks
- **HTTP**: `GET /me/audiobooks/contains` (Default (api))
- **Notes**: Check if one or more audiobooks are already saved in the current Spotify user's library.
- **Signature**: `CheckUsersSavedAudiobooks(string ids, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ids` ← `ids`
- **Returns**: `IReadOnlyList<bool>`
- **Error**: `SdkException<CheckUsersSavedAudiobooksError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CheckUsersSavedEpisodes
- **HTTP**: `GET /me/episodes/contains` (Default (api))
- **Notes**: Check if one or more episodes is already saved in the current Spotify user's 'Your Episodes' library.&lt;br/&gt; This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our developer community forum ..
- **Signature**: `CheckUsersSavedEpisodes(string ids, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ids` ← `ids`
- **Returns**: `IReadOnlyList<bool>`
- **Error**: `SdkException<CheckUsersSavedEpisodesError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CheckUsersSavedShows
- **HTTP**: `GET /me/shows/contains` (Default (api))
- **Notes**: Check if one or more shows is already saved in the current Spotify user's library.
- **Signature**: `CheckUsersSavedShows(string ids, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ids` ← `ids`
- **Returns**: `IReadOnlyList<bool>`
- **Error**: `SdkException<CheckUsersSavedShowsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CheckUsersSavedTracks
- **HTTP**: `GET /me/tracks/contains` (Default (api))
- **Notes**: Check if one or more tracks is already saved in the current Spotify user's 'Your Music' library.
- **Signature**: `CheckUsersSavedTracks(string ids, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ids` ← `ids`
- **Returns**: `IReadOnlyList<bool>`
- **Error**: `SdkException<CheckUsersSavedTracksError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreatePlaylist
- **HTTP**: `POST /users/{user_id}/playlists` (Default (api))
- **Notes**: Create a playlist for a Spotify user. (The playlist will be empty until you add tracks .) Each user is generally limited to a maximum of 11000 playlists.
- **Signature**: `CreatePlaylist(string userId, UsersPlaylistsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PlaylistObject`
- **Error**: `SdkException<CreatePlaylistError>` — **Case A (typed)**
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

### GetAListOfCurrentUsersPlaylists
- **HTTP**: `GET /me/playlists` (Default (api))
- **Notes**: Get a list of the playlists owned or followed by the current Spotify user.
- **Signature**: `GetAListOfCurrentUsersPlaylists(int? limit = 20, int? offset = 0, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 20, `offset` = 0, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`
- **Returns**: `PagingPlaylistObject`
- **Error**: `SdkException<GetAListOfCurrentUsersPlaylistsError>` — **Case A (typed)**
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

### GetUsersSavedAlbums
- **HTTP**: `GET /me/albums` (Default (api))
- **Notes**: Get a list of the albums saved in the current Spotify user's 'Your Music' library.
- **Signature**: `GetUsersSavedAlbums(string? market, int? limit = 20, int? offset = 0, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `market` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 20, `offset` = 0, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`, `market` ← `market`
- **Returns**: `PagingSavedAlbumObject`
- **Error**: `SdkException<GetUsersSavedAlbumsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetUsersSavedAudiobooks
- **HTTP**: `GET /me/audiobooks` (Default (api))
- **Notes**: Get a list of the audiobooks saved in the current Spotify user's 'Your Music' library.
- **Signature**: `GetUsersSavedAudiobooks(int? limit = 20, int? offset = 0, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 20, `offset` = 0, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`
- **Returns**: `PagingSavedAudiobookObject`
- **Error**: `SdkException<GetUsersSavedAudiobooksError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetUsersSavedEpisodes
- **HTTP**: `GET /me/episodes` (Default (api))
- **Notes**: Get a list of the episodes saved in the current Spotify user's library.&lt;br/&gt; This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our developer community forum .
- **Signature**: `GetUsersSavedEpisodes(string? market, int? limit = 20, int? offset = 0, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `market` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 20, `offset` = 0, `requestOptions` = null
- **Query params (wire ← C#)**: `market` ← `market`, `limit` ← `limit`, `offset` ← `offset`
- **Returns**: `PagingSavedEpisodeObject`
- **Error**: `SdkException<GetUsersSavedEpisodesError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetUsersSavedShows
- **HTTP**: `GET /me/shows` (Default (api))
- **Notes**: Get a list of shows saved in the current Spotify user's library. Optional parameters can be used to limit the number of shows returned.
- **Signature**: `GetUsersSavedShows(int? limit = 20, int? offset = 0, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 20, `offset` = 0, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`
- **Returns**: `PagingSavedShowObject`
- **Error**: `SdkException<GetUsersSavedShowsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetUsersSavedTracks
- **HTTP**: `GET /me/tracks` (Default (api))
- **Notes**: Get a list of the songs saved in the current Spotify user's 'Your Music' library.
- **Signature**: `GetUsersSavedTracks(string? market, int? limit = 20, int? offset = 0, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `market` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 20, `offset` = 0, `requestOptions` = null
- **Query params (wire ← C#)**: `market` ← `market`, `limit` ← `limit`, `offset` ← `offset`
- **Returns**: `PagingSavedTrackObject`
- **Error**: `SdkException<GetUsersSavedTracksError>` — **Case A (typed)**
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

### RemoveAlbumsUser
- **HTTP**: `DELETE /me/albums` (Default (api))
- **Notes**: Remove one or more albums from the current user's 'Your Music' library.
- **Signature**: `RemoveAlbumsUser(string ids, RemoveAlbumsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ids` ← `ids`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RemoveAlbumsUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RemoveAudiobooksUser
- **HTTP**: `DELETE /me/audiobooks` (Default (api))
- **Notes**: Remove one or more audiobooks from the Spotify user's library.
- **Signature**: `RemoveAudiobooksUser(string ids, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ids` ← `ids`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RemoveAudiobooksUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RemoveEpisodesUser
- **HTTP**: `DELETE /me/episodes` (Default (api))
- **Notes**: Remove one or more episodes from the current user's library.&lt;br/&gt; This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our developer community forum .
- **Signature**: `RemoveEpisodesUser(string ids, RemoveEpisodesRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ids` ← `ids`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RemoveEpisodesUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RemoveShowsUser
- **HTTP**: `DELETE /me/shows` (Default (api))
- **Notes**: Delete one or more shows from current Spotify user's library.
- **Signature**: `RemoveShowsUser(string ids, string? market, RemoveShowsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `market` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ids` ← `ids`, `market` ← `market`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RemoveShowsUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RemoveTracksUser
- **HTTP**: `DELETE /me/tracks` (Default (api))
- **Notes**: Remove one or more tracks from the current user's 'Your Music' library.
- **Signature**: `RemoveTracksUser(string ids, RemoveTracksRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ids` ← `ids`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RemoveTracksUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SaveAlbumsUser
- **HTTP**: `PUT /me/albums` (Default (api))
- **Notes**: Save one or more albums to the current user's 'Your Music' library.
- **Signature**: `SaveAlbumsUser(string ids, SaveAlbumsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ids` ← `ids`
- **Returns**: `void` (Task)
- **Error**: `SdkException<SaveAlbumsUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SaveAudiobooksUser
- **HTTP**: `PUT /me/audiobooks` (Default (api))
- **Notes**: Save one or more audiobooks to the current Spotify user's library.
- **Signature**: `SaveAudiobooksUser(string ids, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ids` ← `ids`
- **Returns**: `void` (Task)
- **Error**: `SdkException<SaveAudiobooksUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SaveEpisodesUser
- **HTTP**: `PUT /me/episodes` (Default (api))
- **Notes**: Save one or more episodes to the current user's library.&lt;br/&gt; This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our developer community forum .
- **Signature**: `SaveEpisodesUser(string ids, SaveEpisodesRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ids` ← `ids`
- **Returns**: `void` (Task)
- **Error**: `SdkException<SaveEpisodesUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SaveShowsUser
- **HTTP**: `PUT /me/shows` (Default (api))
- **Notes**: Save one or more shows to current Spotify user's library.
- **Signature**: `SaveShowsUser(string ids, SaveShowsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ids` ← `ids`
- **Returns**: `void` (Task)
- **Error**: `SdkException<SaveShowsUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SaveTracksUser
- **HTTP**: `PUT /me/tracks` (Default (api))
- **Notes**: Save one or more tracks to the current user's 'Your Music' library.
- **Signature**: `SaveTracksUser(string ids, SaveTracksRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ids` ← `ids`
- **Returns**: `void` (Task)
- **Error**: `SdkException<SaveTracksUserError>` — **Case A (typed)**
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
