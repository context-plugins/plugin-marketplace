<!-- Generated file — do not edit; regenerated with the SDK. -->

# Episodes — operations

Accessor: `client.episodes` · Source: `audioscrape/apis/episodes.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.episodes.get_episode_transcript

- **Route**: `GET /api/episodes/{episode_id}/transcript`
- **Auth**: `bearer_auth`
- **Signature**: `def get_episode_transcript(episode_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `episode_id`
- **Params**: `episode_id` — path
- **Returns (parsed)**: `Transcript`
- **Returns (raw)**: `ApiResult[Transcript, GetEpisodeTranscriptErrorBody]`
- **Error**: `GetEpisodeTranscriptErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorBody` [401, 402, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Transcript` | `audioscrape/models/transcript.py` |
| `GetEpisodeTranscriptErrorBody` | `audioscrape/errors/get_episode_transcript_error.py` |
| `ApiErrorBody` | `audioscrape/models/api_error_body.py` |

### client.episodes.get_public_episode

- **Route**: `GET /api/episodes/{episode_id}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_public_episode(episode_id: str, *, include: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `episode_id`
- **Params**: `episode_id` — path · `include` — query
- **Returns (parsed)**: `EpisodeDetail`
- **Returns (raw)**: `ApiResult[EpisodeDetail, GetPublicEpisodeErrorBody]`
- **Error**: `GetPublicEpisodeErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorBody` [401, 402, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EpisodeDetail` | `audioscrape/models/episode_detail.py` |
| `GetPublicEpisodeErrorBody` | `audioscrape/errors/get_public_episode_error.py` |
| `ApiErrorBody` | `audioscrape/models/api_error_body.py` |

### client.episodes.list_recent_episodes_v1

- **Route**: `GET /api/episodes`
- **Auth**: `bearer_auth`
- **Signature**: `def list_recent_episodes_v1(*, limit: int | None = None, offset: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `limit` — query · `offset` — query
- **Returns (parsed)**: `EpisodeList`
- **Returns (raw)**: `ApiResult[EpisodeList, ListRecentEpisodesV1ErrorBody]`
- **Error**: `ListRecentEpisodesV1ErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorBody` [401, 402, 403, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EpisodeList` | `audioscrape/models/episode_list.py` |
| `ListRecentEpisodesV1ErrorBody` | `audioscrape/errors/list_recent_episodes_v1_error.py` |
| `ApiErrorBody` | `audioscrape/models/api_error_body.py` |

