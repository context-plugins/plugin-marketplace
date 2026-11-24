<!-- Generated file — do not edit; regenerated with the SDK. -->

# Podcasts — operations

Accessor: `client.podcasts` · Source: `src/resources/podcasts.ts` · 4 operations · Request and error types: namespace `Podcasts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `audioscrape`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getPodcastRankingHistory

- **Signature**: `getPodcastRankingHistory(request: Podcasts.GetPodcastRankingHistoryRequest, options?: RequestOptions): ApiPromise<PodcastRankingHistoryEntry[], Podcasts.GetPodcastRankingHistoryError>`
- **Wire**: `GET /api/podcasts/{podcast_id}/rankings`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PodcastRankingHistoryEntry[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `AudioscrapeError` with `kind: "api"`, an instance of `Podcasts.GetPodcastRankingHistoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorBody"` [401] `ApiErrorBody` · `"apiErrorBody2"` [402] `ApiErrorBody` · `"apiErrorBody3"` [403] `ApiErrorBody` · `"apiErrorBody4"` [404] `ApiErrorBody` · `"apiErrorBody5"` [429] `ApiErrorBody` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Podcasts.GetPodcastRankingHistoryRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `podcastId` | `path` | `podcast_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PodcastRankingHistoryEntry` | `podcastRankingHistoryEntrySchema` | `src/models/podcast-ranking-history-entry.ts` |
| `ApiErrorBody` | `apiErrorBodySchema` | `src/models/api-error-body.ts` |

### getPublicPodcast

- **Signature**: `getPublicPodcast(request: Podcasts.GetPublicPodcastRequest, options?: RequestOptions): ApiPromise<PodcastDetail, Podcasts.GetPublicPodcastError>`
- **Wire**: `GET /api/podcasts/{podcast_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PodcastDetail`
- **Error**: `AudioscrapeError` with `kind: "api"`, an instance of `Podcasts.GetPublicPodcastError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorBody"` [401] `ApiErrorBody` · `"apiErrorBody2"` [402] `ApiErrorBody` · `"apiErrorBody3"` [403] `ApiErrorBody` · `"apiErrorBody4"` [404] `ApiErrorBody` · `"apiErrorBody5"` [429] `ApiErrorBody` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Podcasts.GetPublicPodcastRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `podcastId` | `path` | `podcast_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PodcastDetail` | `podcastDetailSchema` | `src/models/podcast-detail.ts` |
| `ApiErrorBody` | `apiErrorBodySchema` | `src/models/api-error-body.ts` |

### listPodcastEpisodesV1

- **Signature**: `listPodcastEpisodesV1(request: Podcasts.ListPodcastEpisodesV1Request, options?: RequestOptions): ApiPromise<EpisodeList, Podcasts.ListPodcastEpisodesV1Error>`
- **Wire**: `GET /api/podcasts/{podcast_id}/episodes`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EpisodeList`
- **Error**: `AudioscrapeError` with `kind: "api"`, an instance of `Podcasts.ListPodcastEpisodesV1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorBody"` [401] `ApiErrorBody` · `"apiErrorBody2"` [402] `ApiErrorBody` · `"apiErrorBody3"` [403] `ApiErrorBody` · `"apiErrorBody4"` [404] `ApiErrorBody` · `"apiErrorBody5"` [429] `ApiErrorBody` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Podcasts.ListPodcastEpisodesV1Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `podcastId` | `path` | `podcast_id` | `string` | yes |
| `limit` | `query` | — | `number` | no |
| `offset` | `query` | — | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EpisodeList` | `episodeListSchema` | `src/models/episode-list.ts` |
| `ApiErrorBody` | `apiErrorBodySchema` | `src/models/api-error-body.ts` |

### searchPodcastsV1

- **Signature**: `searchPodcastsV1(request?: Podcasts.SearchPodcastsV1Request, options?: RequestOptions): ApiPromise<PodcastList, Podcasts.SearchPodcastsV1Error>`
- **Wire**: `GET /api/podcasts`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PodcastList`
- **Error**: `AudioscrapeError` with `kind: "api"`, an instance of `Podcasts.SearchPodcastsV1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorBody"` [401] `ApiErrorBody` · `"apiErrorBody2"` [402] `ApiErrorBody` · `"apiErrorBody3"` [403] `ApiErrorBody` · `"apiErrorBody4"` [429] `ApiErrorBody` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Podcasts.SearchPodcastsV1Request` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `q` | `query` | `string` | no |
| `language` | `query` | `string` | no |
| `limit` | `query` | `number` | no |
| `offset` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PodcastList` | `podcastListSchema` | `src/models/podcast-list.ts` |
| `ApiErrorBody` | `apiErrorBodySchema` | `src/models/api-error-body.ts` |

