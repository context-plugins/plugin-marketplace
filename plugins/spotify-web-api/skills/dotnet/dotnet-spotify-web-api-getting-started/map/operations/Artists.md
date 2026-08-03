# Artists — operations

Accessor: `client.Artists` · Source: `Api/Artists.cs` · 10 operations

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

### GetAnArtist
- **HTTP**: `GET /artists/{id}` (Default (api))
- **Notes**: Get Spotify catalog information for a single artist identified by their unique Spotify ID.
- **Signature**: `GetAnArtist(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ArtistObject`
- **Error**: `SdkException<GetAnArtistError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAnArtistsAlbums
- **HTTP**: `GET /artists/{id}/albums` (Default (api))
- **Notes**: Get Spotify catalog information about an artist's albums.
- **Signature**: `GetAnArtistsAlbums(string id, string? includeGroups, string? market, int? limit = 20, int? offset = 0, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `includeGroups` — nullable, no default → **must pass explicitly**
  - `market` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 20, `offset` = 0, `requestOptions` = null
- **Query params (wire ← C#)**: `include_groups` ← `includeGroups`, `market` ← `market`, `limit` ← `limit`, `offset` ← `offset`
- **Returns**: `PagingArtistDiscographyAlbumObject`
- **Error**: `SdkException<GetAnArtistsAlbumsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAnArtistsRelatedArtists
- **HTTP**: `GET /artists/{id}/related-artists` (Default (api))
- **Notes**: Get Spotify catalog information about artists similar to a given artist. Similarity is based on analysis of the Spotify community's listening history.
- **Signature**: `GetAnArtistsRelatedArtists(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ManyArtists`
- **Error**: `SdkException<GetAnArtistsRelatedArtistsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAnArtistsTopTracks
- **HTTP**: `GET /artists/{id}/top-tracks` (Default (api))
- **Notes**: Get Spotify catalog information about an artist's top tracks by country.
- **Signature**: `GetAnArtistsTopTracks(string id, string? market, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `market` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `market` ← `market`
- **Returns**: `ManyTracks`
- **Error**: `SdkException<GetAnArtistsTopTracksError>` — **Case A (typed)**
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

### GetMultipleArtists
- **HTTP**: `GET /artists` (Default (api))
- **Notes**: Get Spotify catalog information for several artists based on their Spotify IDs.
- **Signature**: `GetMultipleArtists(string ids, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ids` ← `ids`
- **Returns**: `ManyArtists`
- **Error**: `SdkException<GetMultipleArtistsError>` — **Case A (typed)**
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
