<!-- Generated file — do not edit; regenerated with the SDK. -->

# Podcasts — operations

Accessor: `client.podcasts` · Source: `beehiiv/apis/podcasts.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.podcasts.get_episode

- **Route**: `GET /publications/{publicationId}/podcasts/{podcastShowId}/episodes/{podcastEpisodeId}`
- **Server**: `default`
- **Signature**: `def get_episode(publication_id: str, podcast_show_id: str, podcast_episode_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `podcast_show_id`, `podcast_episode_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `podcast_show_id` — path `podcastShowId` · `podcast_episode_id` — path `podcastEpisodeId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `PodcastEpisodeGetResponse`
- **Returns (raw)**: `ApiResult[PodcastEpisodeGetResponse, GetEpisodeErrorBody]`
- **Error**: `GetEpisodeErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PodcastEpisodeGetResponse` | `beehiiv/models/podcast_episode_get_response.py` |
| `GetEpisodeErrorBody` | `beehiiv/errors/get_episode_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.podcasts.get_podcast

- **Route**: `GET /publications/{publicationId}/podcasts/{podcastShowId}`
- **Server**: `default`
- **Signature**: `def get_podcast(publication_id: str, podcast_show_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `podcast_show_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `podcast_show_id` — path `podcastShowId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `PodcastShowGetResponse`
- **Returns (raw)**: `ApiResult[PodcastShowGetResponse, GetPodcastErrorBody]`
- **Error**: `GetPodcastErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PodcastShowGetResponse` | `beehiiv/models/podcast_show_get_response.py` |
| `GetPodcastErrorBody` | `beehiiv/errors/get_podcast_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.podcasts.list_episodes

- **Route**: `GET /publications/{publicationId}/podcasts/{podcastShowId}/episodes`
- **Server**: `default`
- **Signature**: `def list_episodes(publication_id: str, podcast_show_id: str, authorization: str, *, limit: int | None = None, cursor: str | None = None, status: PodcastEpisodeStatusOrStr | None = None, order_by: PodcastEpisodeOrderByOrStr | None = PodcastEpisodeOrderBy.DISPLAYED_DATE, direction: RequestDirectionOrStr | None = RequestDirection.ASC, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `podcast_show_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `podcast_show_id` — path `podcastShowId` · `limit` — query · `cursor` — query · `status` — query · `order_by` — query · `direction` — query · `authorization` — header `Authorization`
- **Returns (parsed)**: `PodcastEpisodesListResponse`
- **Returns (raw)**: `ApiResult[PodcastEpisodesListResponse, ListEpisodesErrorBody]`
- **Error**: `ListEpisodesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PodcastEpisodeStatusOrStr` | `beehiiv/models/enums/podcast_episode_status.py` |
| `PodcastEpisodeOrderByOrStr` | `beehiiv/models/enums/podcast_episode_order_by.py` |
| `RequestDirectionOrStr` | `beehiiv/models/enums/request_direction.py` |
| `PodcastEpisodesListResponse` | `beehiiv/models/podcast_episodes_list_response.py` |
| `ListEpisodesErrorBody` | `beehiiv/errors/list_episodes_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.podcasts.list_podcasts

- **Route**: `GET /publications/{publicationId}/podcasts`
- **Server**: `default`
- **Signature**: `def list_podcasts(publication_id: str, authorization: str, *, limit: int | None = None, cursor: str | None = None, status: PodcastShowStatusOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `limit` — query · `cursor` — query · `status` — query · `authorization` — header `Authorization`
- **Returns (parsed)**: `PodcastShowsListResponse`
- **Returns (raw)**: `ApiResult[PodcastShowsListResponse, ListPodcastsErrorBody]`
- **Error**: `ListPodcastsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PodcastShowStatusOrStr` | `beehiiv/models/enums/podcast_show_status.py` |
| `PodcastShowsListResponse` | `beehiiv/models/podcast_shows_list_response.py` |
| `ListPodcastsErrorBody` | `beehiiv/errors/list_podcasts_error.py` |
| `Error` | `beehiiv/models/error.py` |

