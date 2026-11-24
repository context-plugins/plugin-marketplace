<!-- Generated file — do not edit; regenerated with the SDK. -->

# Podcasts — operations

Accessor: `client.podcasts` · Source: `src/resources/podcasts.ts` · 4 operations · Request and error types: namespace `Podcasts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `beehiiv`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getEpisode

- **Signature**: `getEpisode(request: Podcasts.GetEpisodeRequest, options?: RequestOptions): ApiPromise<PodcastEpisodeGetResponse, Podcasts.GetEpisodeError>`
- **Wire**: `GET /publications/{publicationId}/podcasts/{podcastShowId}/episodes/{podcastEpisodeId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PodcastEpisodeGetResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Podcasts.GetEpisodeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Podcasts.GetEpisodeRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `podcastShowId` | `path` | — | `string` | yes |
| `podcastEpisodeId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PodcastEpisodeGetResponse` | `podcastEpisodeGetResponseSchema` | `src/models/podcast-episode-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getPodcast

- **Signature**: `getPodcast(request: Podcasts.GetPodcastRequest, options?: RequestOptions): ApiPromise<PodcastShowGetResponse, Podcasts.GetPodcastError>`
- **Wire**: `GET /publications/{publicationId}/podcasts/{podcastShowId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PodcastShowGetResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Podcasts.GetPodcastError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Podcasts.GetPodcastRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `podcastShowId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PodcastShowGetResponse` | `podcastShowGetResponseSchema` | `src/models/podcast-show-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listEpisodes

- **Signature**: `listEpisodes(request: Podcasts.ListEpisodesRequest, options?: RequestOptions): ApiPromise<PodcastEpisodesListResponse, Podcasts.ListEpisodesError>`
- **Wire**: `GET /publications/{publicationId}/podcasts/{podcastShowId}/episodes`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PodcastEpisodesListResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Podcasts.ListEpisodesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Podcasts.ListEpisodesRequest` (8):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes | — |
| `podcastShowId` | `path` | — | `string` | yes | — |
| `limit` | `query` | — | `number` | no | — |
| `cursor` | `query` | — | `string` | no | — |
| `status` | `query` | — | `PodcastEpisodeStatus` | no | — |
| `orderBy` | `query` | `order_by` | `PodcastEpisodeOrderBy` | no | `PodcastEpisodeOrderBy.DisplayedDate` |
| `direction` | `query` | — | `RequestDirection` | no | `RequestDirection.Asc` |
| `authorization` | `header` | `Authorization` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `PodcastEpisodeStatus` | `podcastEpisodeStatusSchema` | `src/models/podcast-episode-status.ts` |
| `PodcastEpisodeOrderBy` | `podcastEpisodeOrderBySchema` | `src/models/podcast-episode-order-by.ts` |
| `RequestDirection` | `requestDirectionSchema` | `src/models/request-direction.ts` |
| `PodcastEpisodesListResponse` | `podcastEpisodesListResponseSchema` | `src/models/podcast-episodes-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listPodcasts

- **Signature**: `listPodcasts(request: Podcasts.ListPodcastsRequest, options?: RequestOptions): ApiPromise<PodcastShowsListResponse, Podcasts.ListPodcastsError>`
- **Wire**: `GET /publications/{publicationId}/podcasts`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PodcastShowsListResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Podcasts.ListPodcastsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Podcasts.ListPodcastsRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `limit` | `query` | — | `number` | no |
| `cursor` | `query` | — | `string` | no |
| `status` | `query` | — | `PodcastShowStatus` | no |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PodcastShowStatus` | `podcastShowStatusSchema` | `src/models/podcast-show-status.ts` |
| `PodcastShowsListResponse` | `podcastShowsListResponseSchema` | `src/models/podcast-shows-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

