<!-- Generated file — do not edit; regenerated with the SDK. -->

# AudioApi — operations

Accessor: `client.AudioApi` · Source: `Api/AudioApi.cs` · 17 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AddTrackCollectionItems

- **Signature**: `AddTrackCollectionItems(string id, CollectionItemRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<AddTrackCollectionItemsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CollectionItemRequest` | `Models/CollectionItemRequest.cs` |
| `AddTrackCollectionItemsError` | `Errors/AddTrackCollectionItemsError.cs` |

### CreateTrackCollection

- **Signature**: `CreateTrackCollection(CollectionCreateRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `CollectionCreateResponse`
- **Error**: `SdkException<CreateTrackCollectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CollectionCreateRequest` | `Models/CollectionCreateRequest.cs` |
| `CollectionCreateResponse` | `Models/CollectionCreateResponse.cs` |
| `CreateTrackCollectionError` | `Errors/CreateTrackCollectionError.cs` |

### DeleteTrackCollection

- **Signature**: `DeleteTrackCollection(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteTrackCollectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteTrackCollectionError` | `Errors/DeleteTrackCollectionError.cs` |

### DeleteTrackCollectionItems

- **Signature**: `DeleteTrackCollectionItems(string id, IReadOnlyList<string>? itemId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `itemId` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `item_id` ← `itemId`
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteTrackCollectionItemsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteTrackCollectionItemsError` | `Errors/DeleteTrackCollectionItemsError.cs` |

### DownloadTracks

- **Signature**: `DownloadTracks(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `AudioUrl`
- **Error**: `SdkException<DownloadTracksError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `AudioUrl` | `Models/AudioUrl.cs` |
| `DownloadTracksError` | `Errors/DownloadTracksError.cs` |

### GetTrack

- **Signature**: `GetTrack(int id, View2? view, string? searchId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `view` — nullable, no default → **must pass explicitly**
  - `searchId` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `view` ← `view`, `search_id` ← `searchId`
- **Returns**: `Audio`
- **Error**: `SdkException<GetTrackError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `View2` | `Models/Enums/View2.cs` |
| `Audio` | `Models/Audio.cs` |
| `GetTrackError` | `Errors/GetTrackError.cs` |

### GetTrackCollection

- **Signature**: `GetTrackCollection(string id, IReadOnlyList<Embed>? embed, string? shareCode, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `embed` — nullable, no default → **must pass explicitly**
  - `shareCode` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `embed` ← `embed`, `share_code` ← `shareCode`
- **Returns**: `Collection`
- **Error**: `SdkException<GetTrackCollectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Embed` | `Models/Enums/Embed.cs` |
| `Collection` | `Models/Collection.cs` |
| `GetTrackCollectionError` | `Errors/GetTrackCollectionError.cs` |

### GetTrackCollectionItems

- **Signature**: `GetTrackCollectionItems(string id, string? shareCode, Sort5? sort, int? page = 1, int? perPage = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `shareCode` — nullable, no default → **must pass explicitly**
  - `sort` — nullable, no default → **must pass explicitly**
  - defaults: `page` = `1`, `perPage` = `100`
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`, `share_code` ← `shareCode`, `sort` ← `sort`
- **Returns**: `CollectionItemDataList`
- **Error**: `SdkException<GetTrackCollectionItemsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Sort5` | `Models/Enums/Sort5.cs` |
| `CollectionItemDataList` | `Models/CollectionItemDataList.cs` |
| `GetTrackCollectionItemsError` | `Errors/GetTrackCollectionItemsError.cs` |

### GetTrackCollectionList

- **Signature**: `GetTrackCollectionList(IReadOnlyList<Embed>? embed, int? page = 1, int? perPage = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `embed` — nullable, no default → **must pass explicitly**
  - defaults: `page` = `1`, `perPage` = `100`
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`, `embed` ← `embed`
- **Returns**: `CollectionDataList`
- **Error**: `SdkException<GetTrackCollectionListError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Embed` | `Models/Enums/Embed.cs` |
| `CollectionDataList` | `Models/CollectionDataList.cs` |
| `GetTrackCollectionListError` | `Errors/GetTrackCollectionListError.cs` |

### GetTrackLicenseList

- **Signature**: `GetTrackLicenseList(string? audioId, string? license, Sort5? sort, string? username, DateTimeOffset? startDate, DateTimeOffset? endDate, DownloadAvailability? downloadAvailability, int? page = 1, int? perPage = 20, bool? teamHistory = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`audioId` … `downloadAvailability`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `page` = `1`, `perPage` = `20`, `teamHistory` = `false`
- **Query params (wire ← C#)**: `audio_id` ← `audioId`, `license` ← `license`, `page` ← `page`, `per_page` ← `perPage`, `sort` ← `sort`, `username` ← `username`, `start_date` ← `startDate`, `end_date` ← `endDate`, `download_availability` ← `downloadAvailability`, `team_history` ← `teamHistory`
- **Returns**: `DownloadHistoryDataList`
- **Error**: `SdkException<GetTrackLicenseListError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Sort5` | `Models/Enums/Sort5.cs` |
| `DownloadAvailability` | `Models/Enums/DownloadAvailability.cs` |
| `DownloadHistoryDataList` | `Models/DownloadHistoryDataList.cs` |
| `GetTrackLicenseListError` | `Errors/GetTrackLicenseListError.cs` |

### GetTrackList

- **Signature**: `GetTrackList(IReadOnlyList<string> id, View2? view, string? searchId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `view` — nullable, no default → **must pass explicitly**
  - `searchId` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `id` ← `id`, `view` ← `view`, `search_id` ← `searchId`
- **Returns**: `AudioDataList`
- **Error**: `SdkException<GetTrackListError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `View2` | `Models/Enums/View2.cs` |
| `AudioDataList` | `Models/AudioDataList.cs` |
| `GetTrackListError` | `Errors/GetTrackListError.cs` |

### LicenseTrack

- **Signature**: `LicenseTrack(License10? license, string? searchId, LicenseAudioRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `license` — nullable, no default → **must pass explicitly**
  - `searchId` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `license` ← `license`, `search_id` ← `searchId`
- **Returns**: `LicenseAudioResultDataList`
- **Error**: `SdkException<LicenseTrackError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `License10` | `Models/Enums/License10.cs` |
| `LicenseAudioRequest` | `Models/LicenseAudioRequest.cs` |
| `LicenseAudioResultDataList` | `Models/LicenseAudioResultDataList.cs` |
| `LicenseTrackError` | `Errors/LicenseTrackError.cs` |

### ListGenres

- **Signature**: `ListGenres(string? language, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `language` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `language` ← `language`
- **Returns**: `GenreList`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GenreList` | `Models/GenreList.cs` |

### ListInstruments

- **Signature**: `ListInstruments(string? language, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `language` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `language` ← `language`
- **Returns**: `InstrumentList`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `InstrumentList` | `Models/InstrumentList.cs` |

### ListMoods

- **Signature**: `ListMoods(string? language, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `language` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `language` ← `language`
- **Returns**: `MoodList`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `MoodList` | `Models/MoodList.cs` |

### RenameTrackCollection

- **Signature**: `RenameTrackCollection(string id, CollectionUpdateRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RenameTrackCollectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CollectionUpdateRequest` | `Models/CollectionUpdateRequest.cs` |
| `RenameTrackCollectionError` | `Errors/RenameTrackCollectionError.cs` |

### SearchTracks

- **Signature**: `SearchTracks(IReadOnlyList<string>? artists, int? bpm, int? bpmFrom, int? bpmTo, int? duration, int? durationFrom, int? durationTo, IReadOnlyList<string>? genre, bool? isInstrumental, IReadOnlyList<string>? instruments, IReadOnlyList<string>? moods, string? query, Sort12? sort, SortOrder? sortOrder, string? vocalDescription, View2? view, string? fields, Library1? library, string? language, int? page = 1, int? perPage = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 19 params (`artists` … `language`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `page` = `1`, `perPage` = `20`
- **Query params (wire ← C#)**: `artists` ← `artists`, `bpm` ← `bpm`, `bpm_from` ← `bpmFrom`, `bpm_to` ← `bpmTo`, `duration` ← `duration`, `duration_from` ← `durationFrom`, `duration_to` ← `durationTo`, `genre` ← `genre`, `is_instrumental` ← `isInstrumental`, `instruments` ← `instruments`, `moods` ← `moods`, `page` ← `page`, `per_page` ← `perPage`, `query` ← `query`, `sort` ← `sort`, `sort_order` ← `sortOrder`, `vocal_description` ← `vocalDescription`, `view` ← `view`, `fields` ← `fields`, `library` ← `library`, `language` ← `language`
- **Returns**: `AudioSearchResults`
- **Error**: `SdkException<SearchTracksError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Sort12` | `Models/Enums/Sort12.cs` |
| `SortOrder` | `Models/Enums/SortOrder.cs` |
| `View2` | `Models/Enums/View2.cs` |
| `Library1` | `Models/Enums/Library1.cs` |
| `AudioSearchResults` | `Models/AudioSearchResults.cs` |
| `SearchTracksError` | `Errors/SearchTracksError.cs` |

