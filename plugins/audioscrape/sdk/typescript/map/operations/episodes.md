<!-- Generated file — do not edit; regenerated with the SDK. -->

# Episodes — operations

Accessor: `client.episodes` · Source: `src/resources/episodes.ts` · 3 operations · Request and error types: namespace `Episodes`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `audioscrape`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getEpisodeTranscript

- **Signature**: `getEpisodeTranscript(request: Episodes.GetEpisodeTranscriptRequest, options?: RequestOptions): ApiPromise<Transcript, Episodes.GetEpisodeTranscriptError>`
- **Wire**: `GET /api/episodes/{episode_id}/transcript`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Transcript`
- **Error**: `AudioscrapeError` with `kind: "api"`, an instance of `Episodes.GetEpisodeTranscriptError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorBody"` [401] `ApiErrorBody` · `"apiErrorBody2"` [402] `ApiErrorBody` · `"apiErrorBody3"` [403] `ApiErrorBody` · `"apiErrorBody4"` [404] `ApiErrorBody` · `"apiErrorBody5"` [429] `ApiErrorBody` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Episodes.GetEpisodeTranscriptRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `episodeId` | `path` | `episode_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Transcript` | `transcriptSchema` | `src/models/transcript.ts` |
| `ApiErrorBody` | `apiErrorBodySchema` | `src/models/api-error-body.ts` |

### getPublicEpisode

- **Signature**: `getPublicEpisode(request: Episodes.GetPublicEpisodeRequest, options?: RequestOptions): ApiPromise<EpisodeDetail, Episodes.GetPublicEpisodeError>`
- **Wire**: `GET /api/episodes/{episode_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EpisodeDetail`
- **Error**: `AudioscrapeError` with `kind: "api"`, an instance of `Episodes.GetPublicEpisodeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorBody"` [401] `ApiErrorBody` · `"apiErrorBody2"` [402] `ApiErrorBody` · `"apiErrorBody3"` [403] `ApiErrorBody` · `"apiErrorBody4"` [404] `ApiErrorBody` · `"apiErrorBody5"` [429] `ApiErrorBody` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Episodes.GetPublicEpisodeRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `episodeId` | `path` | `episode_id` | `string` | yes |
| `include` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EpisodeDetail` | `episodeDetailSchema` | `src/models/episode-detail.ts` |
| `ApiErrorBody` | `apiErrorBodySchema` | `src/models/api-error-body.ts` |

### listRecentEpisodesV1

- **Signature**: `listRecentEpisodesV1(request?: Episodes.ListRecentEpisodesV1Request, options?: RequestOptions): ApiPromise<EpisodeList, Episodes.ListRecentEpisodesV1Error>`
- **Wire**: `GET /api/episodes`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EpisodeList`
- **Error**: `AudioscrapeError` with `kind: "api"`, an instance of `Episodes.ListRecentEpisodesV1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorBody"` [401] `ApiErrorBody` · `"apiErrorBody2"` [402] `ApiErrorBody` · `"apiErrorBody3"` [403] `ApiErrorBody` · `"apiErrorBody4"` [429] `ApiErrorBody` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Episodes.ListRecentEpisodesV1Request` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `limit` | `query` | `number` | no |
| `offset` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EpisodeList` | `episodeListSchema` | `src/models/episode-list.ts` |
| `ApiErrorBody` | `apiErrorBodySchema` | `src/models/api-error-body.ts` |

