# Playlists — operations

Accessor: `client.Playlists` · Source: `Api/Playlists.cs` · 16 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AddTracksToPlaylist
- **HTTP**: `POST /playlists/{playlist_id}/tracks` (Default (api))
- **Notes**: Add one or more items to a user's playlist.
- **Signature**: `AddTracksToPlaylist(string playlistId, int? position, string? uris, PlaylistsTracksRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `position` — nullable, no default → **must pass explicitly**
  - `uris` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `position` ← `position`, `uris` ← `uris`
- **Returns**: `PlaylistSnapshotId`
- **Error**: `SdkException<AddTracksToPlaylistError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

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

### GetACategoriesPlaylists
- **HTTP**: `GET /browse/categories/{category_id}/playlists` (Default (api))
- **Notes**: Get a list of Spotify playlists tagged with a particular category.
- **Signature**: `GetACategoriesPlaylists(string categoryId, int? limit = 20, int? offset = 0, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 20, `offset` = 0, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`
- **Returns**: `PagingFeaturedPlaylistObject`
- **Error**: `SdkException<GetACategoriesPlaylistsError>` — **Case A (typed)**
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

### GetFeaturedPlaylists
- **HTTP**: `GET /browse/featured-playlists` (Default (api))
- **Notes**: Get a list of Spotify featured playlists (shown, for example, on a Spotify player's 'Browse' tab).
- **Signature**: `GetFeaturedPlaylists(string? locale, int? limit = 20, int? offset = 0, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `locale` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 20, `offset` = 0, `requestOptions` = null
- **Query params (wire ← C#)**: `locale` ← `locale`, `limit` ← `limit`, `offset` ← `offset`
- **Returns**: `PagingFeaturedPlaylistObject`
- **Error**: `SdkException<GetFeaturedPlaylistsError>` — **Case A (typed)**
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

### GetPlaylist
- **HTTP**: `GET /playlists/{playlist_id}` (Default (api))
- **Notes**: Get a playlist owned by a Spotify user.
- **Signature**: `GetPlaylist(string playlistId, string? market, string? fields, string? additionalTypes, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `market` — nullable, no default → **must pass explicitly**
  - `fields` — nullable, no default → **must pass explicitly**
  - `additionalTypes` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `market` ← `market`, `fields` ← `fields`, `additional_types` ← `additionalTypes`
- **Returns**: `PlaylistObject`
- **Error**: `SdkException<GetPlaylistError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetPlaylistCover
- **HTTP**: `GET /playlists/{playlist_id}/images` (Default (api))
- **Notes**: Get the current image associated with a specific playlist.
- **Signature**: `GetPlaylistCover(string playlistId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ImageObject>`
- **Error**: `SdkException<GetPlaylistCoverError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetPlaylistsTracks
- **HTTP**: `GET /playlists/{playlist_id}/tracks` (Default (api))
- **Notes**: Get full details of the items of a playlist owned by a Spotify user.
- **Signature**: `GetPlaylistsTracks(string playlistId, string? market, string? fields, string? additionalTypes, int? limit = 20, int? offset = 0, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `market` — nullable, no default → **must pass explicitly**
  - `fields` — nullable, no default → **must pass explicitly**
  - `additionalTypes` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 20, `offset` = 0, `requestOptions` = null
- **Query params (wire ← C#)**: `market` ← `market`, `fields` ← `fields`, `limit` ← `limit`, `offset` ← `offset`, `additional_types` ← `additionalTypes`
- **Returns**: `PagingPlaylistTrackObject`
- **Error**: `SdkException<GetPlaylistsTracksError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RemoveTracksPlaylist
- **HTTP**: `DELETE /playlists/{playlist_id}/tracks` (Default (api))
- **Notes**: Remove one or more items from a user's playlist.
- **Signature**: `RemoveTracksPlaylist(string playlistId, PlaylistsTracksRequest2? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PlaylistSnapshotId`
- **Error**: `SdkException<RemoveTracksPlaylistError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReorderOrReplacePlaylistsTracks
- **HTTP**: `PUT /playlists/{playlist_id}/tracks` (Default (api))
- **Notes**: Either reorder or replace items in a playlist depending on the request's parameters. To reorder items, include `range_start`, `insert_before`, `range_length` and `snapshot_id` in the request's body. To replace items, include `uris` as either a query parameter or in the request's body. Replacing items in a playlist will overwrite its existing items. This operation can be used for replacing or clearing items in a playlist. &lt;br/&gt; Note : Replace and reorder are mutually exclusive operations which share the same endpoint, but have different parameters. These operations can't be applied together in a single request.
- **Signature**: `ReorderOrReplacePlaylistsTracks(string playlistId, string? uris, PlaylistsTracksRequest1? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `uris` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `uris` ← `uris`
- **Returns**: `PlaylistSnapshotId`
- **Error**: `SdkException<ReorderOrReplacePlaylistsTracksError>` — **Case A (typed)**
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

### UploadCustomPlaylistCover
- **HTTP**: `PUT /playlists/{playlist_id}/images` (Default (api))
- **Notes**: Replace the image used to represent a specific playlist.
- **Signature**: `UploadCustomPlaylistCover(string playlistId, object body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UploadCustomPlaylistCoverError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
