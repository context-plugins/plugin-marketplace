# Tracks — operations

Accessor: `client.Tracks` · Source: `Api/Tracks.cs` · 17 operations

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

### GetAnAlbumsTracks
- **HTTP**: `GET /albums/{id}/tracks` (Default (api))
- **Notes**: Get Spotify catalog information about an album’s tracks. Optional parameters can be used to limit the number of tracks returned.
- **Signature**: `GetAnAlbumsTracks(string id, string? market, int? limit = 20, int? offset = 0, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `market` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 20, `offset` = 0, `requestOptions` = null
- **Query params (wire ← C#)**: `market` ← `market`, `limit` ← `limit`, `offset` ← `offset`
- **Returns**: `PagingSimplifiedTrackObject`
- **Error**: `SdkException<GetAnAlbumsTracksError>` — **Case A (typed)**
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

### GetAudioAnalysis
- **HTTP**: `GET /audio-analysis/{id}` (Default (api))
- **Notes**: Get a low-level audio analysis for a track in the Spotify catalog. The audio analysis describes the track’s structure and musical content, including rhythm, pitch, and timbre.
- **Signature**: `GetAudioAnalysis(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AudioAnalysisObject`
- **Error**: `SdkException<GetAudioAnalysisError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAudioFeatures
- **HTTP**: `GET /audio-features/{id}` (Default (api))
- **Notes**: Get audio feature information for a single track identified by its unique Spotify ID.
- **Signature**: `GetAudioFeatures(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AudioFeaturesObject`
- **Error**: `SdkException<GetAudioFeaturesError>` — **Case A (typed)**
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

### GetRecommendations
- **HTTP**: `GET /recommendations` (Default (api))
- **Notes**: Recommendations are generated based on the available information for a given seed entity and matched against similar artists and tracks. If there is sufficient information about the provided seeds, a list of tracks will be returned together with pool size details. For artists and tracks that are very new or obscure there might not be enough data to generate a list of tracks.
- **Signature**: `GetRecommendations(string? market, string? seedArtists, string? seedGenres, string? seedTracks, double? minAcousticness, double? maxAcousticness, double? targetAcousticness, double? minDanceability, double? maxDanceability, double? targetDanceability, int? minDurationMs, int? maxDurationMs, int? targetDurationMs, double? minEnergy, double? maxEnergy, double? targetEnergy, double? minInstrumentalness, double? maxInstrumentalness, double? targetInstrumentalness, int? minKey, int? maxKey, int? targetKey, double? minLiveness, double? maxLiveness, double? targetLiveness, double? minLoudness, double? maxLoudness, double? targetLoudness, int? minMode, int? maxMode, int? targetMode, int? minPopularity, int? maxPopularity, int? targetPopularity, double? minSpeechiness, double? maxSpeechiness, double? targetSpeechiness, double? minTempo, double? maxTempo, double? targetTempo, int? minTimeSignature, int? maxTimeSignature, int? targetTimeSignature, double? minValence, double? maxValence, double? targetValence, int? limit = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 46 params (`market` … `targetValence`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 20, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `market` ← `market`, `seed_artists` ← `seedArtists`, `seed_genres` ← `seedGenres`, `seed_tracks` ← `seedTracks`, `min_acousticness` ← `minAcousticness`, `max_acousticness` ← `maxAcousticness`, `target_acousticness` ← `targetAcousticness`, `min_danceability` ← `minDanceability`, `max_danceability` ← `maxDanceability`, `target_danceability` ← `targetDanceability`, `min_duration_ms` ← `minDurationMs`, `max_duration_ms` ← `maxDurationMs`, `target_duration_ms` ← `targetDurationMs`, `min_energy` ← `minEnergy`, `max_energy` ← `maxEnergy`, `target_energy` ← `targetEnergy`, `min_instrumentalness` ← `minInstrumentalness`, `max_instrumentalness` ← `maxInstrumentalness`, `target_instrumentalness` ← `targetInstrumentalness`, `min_key` ← `minKey`, `max_key` ← `maxKey`, `target_key` ← `targetKey`, `min_liveness` ← `minLiveness`, `max_liveness` ← `maxLiveness`, `target_liveness` ← `targetLiveness`, `min_loudness` ← `minLoudness`, `max_loudness` ← `maxLoudness`, `target_loudness` ← `targetLoudness`, `min_mode` ← `minMode`, `max_mode` ← `maxMode`, `target_mode` ← `targetMode`, `min_popularity` ← `minPopularity`, `max_popularity` ← `maxPopularity`, `target_popularity` ← `targetPopularity`, `min_speechiness` ← `minSpeechiness`, `max_speechiness` ← `maxSpeechiness`, `target_speechiness` ← `targetSpeechiness`, `min_tempo` ← `minTempo`, `max_tempo` ← `maxTempo`, `target_tempo` ← `targetTempo`, `min_time_signature` ← `minTimeSignature`, `max_time_signature` ← `maxTimeSignature`, `target_time_signature` ← `targetTimeSignature`, `min_valence` ← `minValence`, `max_valence` ← `maxValence`, `target_valence` ← `targetValence`
- **Returns**: `RecommendationsObject`
- **Error**: `SdkException<GetRecommendationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSeveralAudioFeatures
- **HTTP**: `GET /audio-features` (Default (api))
- **Notes**: Get audio features for multiple tracks based on their Spotify IDs.
- **Signature**: `GetSeveralAudioFeatures(string ids, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ids` ← `ids`
- **Returns**: `ManyAudioFeatures`
- **Error**: `SdkException<GetSeveralAudioFeaturesError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSeveralTracks
- **HTTP**: `GET /tracks` (Default (api))
- **Notes**: Get Spotify catalog information for multiple tracks based on their Spotify IDs.
- **Signature**: `GetSeveralTracks(string ids, string? market, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `market` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ids` ← `ids`, `market` ← `market`
- **Returns**: `ManyTracks`
- **Error**: `SdkException<GetSeveralTracksError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetTrack
- **HTTP**: `GET /tracks/{id}` (Default (api))
- **Notes**: Get Spotify catalog information for a single track identified by its unique Spotify ID.
- **Signature**: `GetTrack(string id, string? market, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `market` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `market` ← `market`
- **Returns**: `TrackObject`
- **Error**: `SdkException<GetTrackError>` — **Case A (typed)**
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
