<!-- Generated file — do not edit; regenerated with the SDK. -->

# Podcasts — operations

Accessor: `client.podcasts` · Source: `audioscrape/apis/podcasts.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.podcasts.get_podcast_ranking_history

- **Route**: `GET /api/podcasts/{podcast_id}/rankings`
- **Auth**: `bearer_auth`
- **Signature**: `def get_podcast_ranking_history(podcast_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `podcast_id`
- **Params**: `podcast_id` — path
- **Returns (parsed)**: `list[PodcastRankingHistoryEntry]`
- **Returns (raw)**: `ApiResult[list[PodcastRankingHistoryEntry], GetPodcastRankingHistoryErrorBody]`
- **Error**: `GetPodcastRankingHistoryErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorBody` [401, 402, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PodcastRankingHistoryEntry` | `audioscrape/models/podcast_ranking_history_entry.py` |
| `GetPodcastRankingHistoryErrorBody` | `audioscrape/errors/get_podcast_ranking_history_error.py` |
| `ApiErrorBody` | `audioscrape/models/api_error_body.py` |

### client.podcasts.get_public_podcast

- **Route**: `GET /api/podcasts/{podcast_id}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_public_podcast(podcast_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `podcast_id`
- **Params**: `podcast_id` — path
- **Returns (parsed)**: `PodcastDetail`
- **Returns (raw)**: `ApiResult[PodcastDetail, GetPublicPodcastErrorBody]`
- **Error**: `GetPublicPodcastErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorBody` [401, 402, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PodcastDetail` | `audioscrape/models/podcast_detail.py` |
| `GetPublicPodcastErrorBody` | `audioscrape/errors/get_public_podcast_error.py` |
| `ApiErrorBody` | `audioscrape/models/api_error_body.py` |

### client.podcasts.list_podcast_episodes_v1

- **Route**: `GET /api/podcasts/{podcast_id}/episodes`
- **Auth**: `bearer_auth`
- **Signature**: `def list_podcast_episodes_v1(podcast_id: str, *, limit: int | None = None, offset: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `podcast_id`
- **Params**: `podcast_id` — path · `limit` — query · `offset` — query
- **Returns (parsed)**: `EpisodeList`
- **Returns (raw)**: `ApiResult[EpisodeList, ListPodcastEpisodesV1ErrorBody]`
- **Error**: `ListPodcastEpisodesV1ErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorBody` [401, 402, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EpisodeList` | `audioscrape/models/episode_list.py` |
| `ListPodcastEpisodesV1ErrorBody` | `audioscrape/errors/list_podcast_episodes_v1_error.py` |
| `ApiErrorBody` | `audioscrape/models/api_error_body.py` |

### client.podcasts.search_podcasts_v1

- **Route**: `GET /api/podcasts`
- **Auth**: `bearer_auth`
- **Signature**: `def search_podcasts_v1(*, q: str | None = None, language: str | None = None, limit: int | None = None, offset: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `q` — query · `language` — query · `limit` — query · `offset` — query
- **Returns (parsed)**: `PodcastList`
- **Returns (raw)**: `ApiResult[PodcastList, SearchPodcastsV1ErrorBody]`
- **Error**: `SearchPodcastsV1ErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorBody` [401, 402, 403, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PodcastList` | `audioscrape/models/podcast_list.py` |
| `SearchPodcastsV1ErrorBody` | `audioscrape/errors/search_podcasts_v1_error.py` |
| `ApiErrorBody` | `audioscrape/models/api_error_body.py` |

