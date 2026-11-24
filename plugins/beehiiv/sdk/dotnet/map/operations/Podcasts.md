<!-- Generated file — do not edit; regenerated with the SDK. -->

# Podcasts — operations

Accessor: `client.Podcasts` · Source: `src/Beehiiv/Api/Podcasts.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetEpisode

- **Signature**: `GetEpisode(GetEpisodeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `PodcastShowId`, `PodcastEpisodeId`, `Authorization`
- **Returns**: `PodcastEpisodeGetResponse`
- **Error**: `ApiException<GetEpisodeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetEpisodeRequest` | `src/Beehiiv/Requests/Podcasts/GetEpisodeRequest.cs` |
| `PodcastEpisodeGetResponse` | `src/Beehiiv/Models/PodcastEpisodeGetResponse.cs` |
| `GetEpisodeError` | `src/Beehiiv/Errors/GetEpisodeError.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### GetPodcast

- **Signature**: `GetPodcast(GetPodcastRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `PodcastShowId`, `Authorization`
- **Returns**: `PodcastShowGetResponse`
- **Error**: `ApiException<GetPodcastError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPodcastRequest` | `src/Beehiiv/Requests/Podcasts/GetPodcastRequest.cs` |
| `PodcastShowGetResponse` | `src/Beehiiv/Models/PodcastShowGetResponse.cs` |
| `GetPodcastError` | `src/Beehiiv/Errors/GetPodcastError.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### ListEpisodes

- **Signature**: `ListEpisodes(ListEpisodesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `PodcastShowId`, `Authorization`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `cursor` ← `Cursor`, `status` ← `Status`, `order_by` ← `OrderBy`, `direction` ← `Direction`
- **Returns**: `PodcastEpisodesListResponse`
- **Error**: `ApiException<ListEpisodesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListEpisodesRequest` | `src/Beehiiv/Requests/Podcasts/ListEpisodesRequest.cs` |
| `PodcastEpisodeStatus` | `src/Beehiiv/Models/Enums/PodcastEpisodeStatus.cs` |
| `PodcastEpisodeOrderBy` | `src/Beehiiv/Models/Enums/PodcastEpisodeOrderBy.cs` |
| `RequestDirection` | `src/Beehiiv/Models/Enums/RequestDirection.cs` |
| `PodcastEpisodesListResponse` | `src/Beehiiv/Models/PodcastEpisodesListResponse.cs` |
| `ListEpisodesError` | `src/Beehiiv/Errors/ListEpisodesError.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### ListPodcasts

- **Signature**: `ListPodcasts(ListPodcastsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `Authorization`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `cursor` ← `Cursor`, `status` ← `Status`
- **Returns**: `PodcastShowsListResponse`
- **Error**: `ApiException<ListPodcastsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListPodcastsRequest` | `src/Beehiiv/Requests/Podcasts/ListPodcastsRequest.cs` |
| `PodcastShowStatus` | `src/Beehiiv/Models/Enums/PodcastShowStatus.cs` |
| `PodcastShowsListResponse` | `src/Beehiiv/Models/PodcastShowsListResponse.cs` |
| `ListPodcastsError` | `src/Beehiiv/Errors/ListPodcastsError.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

