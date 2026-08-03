# AudioApi — operations

Accessor: `client.AudioApi` · Source: `Api/AudioApi.cs` · 17 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AddTrackCollectionItems
- **HTTP**: `POST /v2/audio/collections/{id}/items` (Default (api))
- **Notes**: This endpoint adds one or more tracks to a collection by track IDs.
- **Signature**: `AddTrackCollectionItems(string id, CollectionItemRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<AddTrackCollectionItemsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateTrackCollection
- **HTTP**: `POST /v2/audio/collections` (Default (api))
- **Notes**: This endpoint creates one or more collections (soundboxes). To add tracks, use `POST /v2/audio/collections/{id}/items`.
- **Signature**: `CreateTrackCollection(CollectionCreateRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CollectionCreateResponse`
- **Error**: `SdkException<CreateTrackCollectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteTrackCollection
- **HTTP**: `DELETE /v2/audio/collections/{id}` (Default (api))
- **Notes**: This endpoint deletes a collection.
- **Signature**: `DeleteTrackCollection(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteTrackCollectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteTrackCollectionItems
- **HTTP**: `DELETE /v2/audio/collections/{id}/items` (Default (api))
- **Notes**: This endpoint removes one or more tracks from a collection.
- **Signature**: `DeleteTrackCollectionItems(string id, IReadOnlyList<string>? itemId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `itemId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `item_id` ← `itemId`
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteTrackCollectionItemsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DownloadTracks
- **HTTP**: `POST /v2/audio/licenses/{id}/downloads` (Default (api))
- **Notes**: This endpoint redownloads tracks that you have already received a license for. The download links in the response are valid for 8 hours.
- **Signature**: `DownloadTracks(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AudioUrl`
- **Error**: `SdkException<DownloadTracksError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetTrack
- **HTTP**: `GET /v2/audio/{id}` (Default (api))
- **Notes**: This endpoint shows information about a track, including its genres, instruments, and other attributes.
- **Signature**: `GetTrack(int id, View2? view, string? searchId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `view` — nullable, no default → **must pass explicitly**
  - `searchId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `view` ← `view`, `search_id` ← `searchId`
- **Returns**: `Audio`
- **Error**: `SdkException<GetTrackError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetTrackCollection
- **HTTP**: `GET /v2/audio/collections/{id}` (Default (api))
- **Notes**: This endpoint gets more detailed information about a collection, including the number of items in it and when it was last updated. To get the tracks in collections, use `GET /v2/audio/collections/{id}/items`.
- **Signature**: `GetTrackCollection(string id, IReadOnlyList<Embed>? embed, string? shareCode, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `embed` — nullable, no default → **must pass explicitly**
  - `shareCode` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `embed` ← `embed`, `share_code` ← `shareCode`
- **Returns**: `Collection`
- **Error**: `SdkException<GetTrackCollectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetTrackCollectionItems
- **HTTP**: `GET /v2/audio/collections/{id}/items` (Default (api))
- **Notes**: This endpoint lists the IDs of tracks in a collection and the date that each was added.
- **Signature**: `GetTrackCollectionItems(string id, string? shareCode, Sort5? sort, int? page = 1, int? perPage = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `shareCode` — nullable, no default → **must pass explicitly**
  - `sort` — nullable, no default → **must pass explicitly**
  - defaults: `page` = 1, `perPage` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`, `share_code` ← `shareCode`, `sort` ← `sort`
- **Returns**: `CollectionItemDataList`
- **Error**: `SdkException<GetTrackCollectionItemsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetTrackCollectionList
- **HTTP**: `GET /v2/audio/collections` (Default (api))
- **Notes**: This endpoint lists your collections of audio tracks and their basic attributes.
- **Signature**: `GetTrackCollectionList(IReadOnlyList<Embed>? embed, int? page = 1, int? perPage = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `embed` — nullable, no default → **must pass explicitly**
  - defaults: `page` = 1, `perPage` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`, `embed` ← `embed`
- **Returns**: `CollectionDataList`
- **Error**: `SdkException<GetTrackCollectionListError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetTrackLicenseList
- **HTTP**: `GET /v2/audio/licenses` (Default (api))
- **Notes**: This endpoint lists existing licenses. You can filter the results according to the track ID to see if you have an existing license for a specific track.
- **Signature**: `GetTrackLicenseList(string? audioId, string? license, Sort5? sort, string? username, DateTimeOffset? startDate, DateTimeOffset? endDate, DownloadAvailability? downloadAvailability, int? page = 1, int? perPage = 20, bool? teamHistory = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`audioId` … `downloadAvailability`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `page` = 1, `perPage` = 20, `teamHistory` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `audio_id` ← `audioId`, `license` ← `license`, `page` ← `page`, `per_page` ← `perPage`, `sort` ← `sort`, `username` ← `username`, `start_date` ← `startDate`, `end_date` ← `endDate`, `download_availability` ← `downloadAvailability`, `team_history` ← `teamHistory`
- **Returns**: `DownloadHistoryDataList`
- **Error**: `SdkException<GetTrackLicenseListError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetTrackList
- **HTTP**: `GET /v2/audio` (Default (api))
- **Notes**: This endpoint lists information about one or more audio tracks, including the description and publication date.
- **Signature**: `GetTrackList(IReadOnlyList<string> id, View2? view, string? searchId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `view` — nullable, no default → **must pass explicitly**
  - `searchId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `id` ← `id`, `view` ← `view`, `search_id` ← `searchId`
- **Returns**: `AudioDataList`
- **Error**: `SdkException<GetTrackListError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### LicenseTrack
- **HTTP**: `POST /v2/audio/licenses` (Default (api))
- **Notes**: This endpoint gets licenses for one or more tracks. The download links in the response are valid for 8 hours.
- **Signature**: `LicenseTrack(License10? license, string? searchId, LicenseAudioRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `license` — nullable, no default → **must pass explicitly**
  - `searchId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `license` ← `license`, `search_id` ← `searchId`
- **Returns**: `LicenseAudioResultDataList`
- **Error**: `SdkException<LicenseTrackError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListGenres
- **HTTP**: `GET /v2/audio/genres` (Default (api))
- **Notes**: This endpoint returns a list of all audio genres.
- **Signature**: `ListGenres(string? language, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `language` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `language` ← `language`
- **Returns**: `GenreList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListInstruments
- **HTTP**: `GET /v2/audio/instruments` (Default (api))
- **Notes**: This endpoint returns a list of all audio instruments.
- **Signature**: `ListInstruments(string? language, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `language` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `language` ← `language`
- **Returns**: `InstrumentList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListMoods
- **HTTP**: `GET /v2/audio/moods` (Default (api))
- **Notes**: This endpoint returns a list of all audio moods.
- **Signature**: `ListMoods(string? language, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `language` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `language` ← `language`
- **Returns**: `MoodList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RenameTrackCollection
- **HTTP**: `POST /v2/audio/collections/{id}` (Default (api))
- **Notes**: This endpoint sets a new name for a collection.
- **Signature**: `RenameTrackCollection(string id, CollectionUpdateRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RenameTrackCollectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchTracks
- **HTTP**: `GET /v2/audio/search` (Default (api))
- **Notes**: This endpoint searches for tracks. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter.
- **Signature**: `SearchTracks(IReadOnlyList<string>? artists, int? bpm, int? bpmFrom, int? bpmTo, int? duration, int? durationFrom, int? durationTo, IReadOnlyList<string>? genre, bool? isInstrumental, IReadOnlyList<string>? instruments, IReadOnlyList<string>? moods, string? query, Sort12? sort, SortOrder? sortOrder, string? vocalDescription, View2? view, string? fields, Library1? library, string? language, int? page = 1, int? perPage = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 19 params (`artists` … `language`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `page` = 1, `perPage` = 20, `requestOptions` = null
- **Query params (wire ← C#)**: `artists` ← `artists`, `bpm` ← `bpm`, `bpm_from` ← `bpmFrom`, `bpm_to` ← `bpmTo`, `duration` ← `duration`, `duration_from` ← `durationFrom`, `duration_to` ← `durationTo`, `genre` ← `genre`, `is_instrumental` ← `isInstrumental`, `instruments` ← `instruments`, `moods` ← `moods`, `page` ← `page`, `per_page` ← `perPage`, `query` ← `query`, `sort` ← `sort`, `sort_order` ← `sortOrder`, `vocal_description` ← `vocalDescription`, `view` ← `view`, `fields` ← `fields`, `library` ← `library`, `language` ← `language`
- **Returns**: `AudioSearchResults`
- **Error**: `SdkException<SearchTracksError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`
