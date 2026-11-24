<!-- Generated file — do not edit; regenerated with the SDK. -->

# Podcasts — operations

Accessor: `client.Podcasts` · Source: `src/Audioscrape/Api/Podcasts.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetPodcastRankingHistory

- **Auth**: `options.BearerAuth`
- **Signature**: `GetPodcastRankingHistory(GetPodcastRankingHistoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PodcastId`
- **Returns**: `IReadOnlyList<PodcastRankingHistoryEntry>`
- **Error**: `ApiException<GetPodcastRankingHistoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorBody([NotNullWhen(true)] out ApiErrorBody? value)` [401, 402, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPodcastRankingHistoryRequest` | `src/Audioscrape/Requests/Podcasts/GetPodcastRankingHistoryRequest.cs` |
| `PodcastRankingHistoryEntry` | `src/Audioscrape/Models/PodcastRankingHistoryEntry.cs` |
| `GetPodcastRankingHistoryError` | `src/Audioscrape/Errors/GetPodcastRankingHistoryError.cs` |
| `ApiErrorBody` | `src/Audioscrape/Models/ApiErrorBody.cs` |

### GetPublicPodcast

- **Auth**: `options.BearerAuth`
- **Signature**: `GetPublicPodcast(GetPublicPodcastRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PodcastId`
- **Returns**: `PodcastDetail`
- **Error**: `ApiException<GetPublicPodcastError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorBody([NotNullWhen(true)] out ApiErrorBody? value)` [401, 402, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPublicPodcastRequest` | `src/Audioscrape/Requests/Podcasts/GetPublicPodcastRequest.cs` |
| `PodcastDetail` | `src/Audioscrape/Models/PodcastDetail.cs` |
| `GetPublicPodcastError` | `src/Audioscrape/Errors/GetPublicPodcastError.cs` |
| `ApiErrorBody` | `src/Audioscrape/Models/ApiErrorBody.cs` |

### ListPodcastEpisodesV1

- **Auth**: `options.BearerAuth`
- **Signature**: `ListPodcastEpisodesV1(ListPodcastEpisodesV1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PodcastId`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `EpisodeList`
- **Error**: `ApiException<ListPodcastEpisodesV1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorBody([NotNullWhen(true)] out ApiErrorBody? value)` [401, 402, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListPodcastEpisodesV1Request` | `src/Audioscrape/Requests/Podcasts/ListPodcastEpisodesV1Request.cs` |
| `EpisodeList` | `src/Audioscrape/Models/EpisodeList.cs` |
| `ListPodcastEpisodesV1Error` | `src/Audioscrape/Errors/ListPodcastEpisodesV1Error.cs` |
| `ApiErrorBody` | `src/Audioscrape/Models/ApiErrorBody.cs` |

### SearchPodcastsV1

- **Auth**: `options.BearerAuth`
- **Signature**: `SearchPodcastsV1(SearchPodcastsV1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `q` ← `Q`, `language` ← `Language`, `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `PodcastList`
- **Error**: `ApiException<SearchPodcastsV1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorBody([NotNullWhen(true)] out ApiErrorBody? value)` [401, 402, 403, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchPodcastsV1Request` | `src/Audioscrape/Requests/Podcasts/SearchPodcastsV1Request.cs` |
| `PodcastList` | `src/Audioscrape/Models/PodcastList.cs` |
| `SearchPodcastsV1Error` | `src/Audioscrape/Errors/SearchPodcastsV1Error.cs` |
| `ApiErrorBody` | `src/Audioscrape/Models/ApiErrorBody.cs` |

