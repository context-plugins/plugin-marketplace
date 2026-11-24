<!-- Generated file — do not edit; regenerated with the SDK. -->

# Transcripts — operations

Accessor: `client.transcripts` · Source: `src/resources/transcripts.ts` · 12 operations · Request and error types: namespace `Transcripts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `transcript-fetch`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### fetchChannelVideos

- **Signature**: `fetchChannelVideos(request: Transcripts.FetchChannelVideosRequest, options?: RequestOptions): ApiPromise<SuccessEnvelope, Transcripts.FetchChannelVideosError>`
- **Wire**: `POST /api/v1/transcripts/channel`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **Returns**: `SuccessEnvelope`
- **Error**: `TranscriptFetchError` with `kind: "api"`, an instance of `Transcripts.FetchChannelVideosError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorEnvelope"` [400] `ErrorEnvelope` · `"errorEnvelope2"` [401] `ErrorEnvelope` · `"errorEnvelope3"` [402] `ErrorEnvelope` · `"errorEnvelope4"` [409] `ErrorEnvelope` · `"errorEnvelope5"` [422] `ErrorEnvelope` · `"errorEnvelope6"` [429] `ErrorEnvelope` · `"errorEnvelope7"` [502] `ErrorEnvelope` · `"errorEnvelope8"` [503] `ErrorEnvelope` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transcripts.FetchChannelVideosRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |
| `body` | `body` | — | `ChannelRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChannelRequest` | `channelRequestSchema` | `src/models/channel-request.ts` |
| `SuccessEnvelope` | `successEnvelopeSchema` | `src/models/success-envelope.ts` |
| `ErrorEnvelope` | `errorEnvelopeSchema` | `src/models/error-envelope.ts` |

### fetchPlaylistVideos

- **Signature**: `fetchPlaylistVideos(request: Transcripts.FetchPlaylistVideosRequest, options?: RequestOptions): ApiPromise<SuccessEnvelope, Transcripts.FetchPlaylistVideosError>`
- **Wire**: `POST /api/v1/transcripts/playlist`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **Returns**: `SuccessEnvelope`
- **Error**: `TranscriptFetchError` with `kind: "api"`, an instance of `Transcripts.FetchPlaylistVideosError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorEnvelope"` [400] `ErrorEnvelope` · `"errorEnvelope2"` [401] `ErrorEnvelope` · `"errorEnvelope3"` [402] `ErrorEnvelope` · `"errorEnvelope4"` [409] `ErrorEnvelope` · `"errorEnvelope5"` [422] `ErrorEnvelope` · `"errorEnvelope6"` [429] `ErrorEnvelope` · `"errorEnvelope7"` [502] `ErrorEnvelope` · `"errorEnvelope8"` [503] `ErrorEnvelope` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transcripts.FetchPlaylistVideosRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |
| `body` | `body` | — | `PlaylistRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlaylistRequest` | `playlistRequestSchema` | `src/models/playlist-request.ts` |
| `SuccessEnvelope` | `successEnvelopeSchema` | `src/models/success-envelope.ts` |
| `ErrorEnvelope` | `errorEnvelopeSchema` | `src/models/error-envelope.ts` |

### fetchTranscriptsBatch

- **Signature**: `fetchTranscriptsBatch(request: Transcripts.FetchTranscriptsBatchRequest, options?: RequestOptions): ApiPromise<BatchEnvelope, Transcripts.FetchTranscriptsBatchError>`
- **Wire**: `POST /api/v1/transcripts/batch`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **Returns**: `BatchEnvelope`
- **Error**: `TranscriptFetchError` with `kind: "api"`, an instance of `Transcripts.FetchTranscriptsBatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorEnvelope"` [400] `ErrorEnvelope` · `"errorEnvelope2"` [401] `ErrorEnvelope` · `"errorEnvelope3"` [402] `ErrorEnvelope` · `"errorEnvelope4"` [409] `ErrorEnvelope` · `"errorEnvelope5"` [429] `ErrorEnvelope` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transcripts.FetchTranscriptsBatchRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |
| `body` | `body` | — | `BatchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BatchRequest` | `batchRequestSchema` | `src/models/batch-request.ts` |
| `BatchEnvelope` | `batchEnvelopeSchema` | `src/models/batch-envelope.ts` |
| `ErrorEnvelope` | `errorEnvelopeSchema` | `src/models/error-envelope.ts` |

### fetchVideoTranscript

- **Signature**: `fetchVideoTranscript(request: Transcripts.FetchVideoTranscriptRequest, options?: RequestOptions): ApiPromise<SuccessEnvelope, Transcripts.FetchVideoTranscriptError>`
- **Wire**: `POST /api/v1/transcripts/video`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **Returns**: `SuccessEnvelope`
- **Error**: `TranscriptFetchError` with `kind: "api"`, an instance of `Transcripts.FetchVideoTranscriptError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorEnvelope"` [400] `ErrorEnvelope` · `"errorEnvelope2"` [401] `ErrorEnvelope` · `"errorEnvelope3"` [402] `ErrorEnvelope` · `"errorEnvelope4"` [409] `ErrorEnvelope` · `"errorEnvelope5"` [422] `ErrorEnvelope` · `"errorEnvelope6"` [429] `ErrorEnvelope` · `"errorEnvelope7"` [502] `ErrorEnvelope` · `"errorEnvelope8"` [503] `ErrorEnvelope` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transcripts.FetchVideoTranscriptRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |
| `body` | `body` | — | `VideoRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideoRequest` | `videoRequestSchema` | `src/models/video-request.ts` |
| `SuccessEnvelope` | `successEnvelopeSchema` | `src/models/success-envelope.ts` |
| `ErrorEnvelope` | `errorEnvelopeSchema` | `src/models/error-envelope.ts` |

### getApiV2TranscriptsJobsByJobId

- **Signature**: `getApiV2TranscriptsJobsByJobId(request: Transcripts.GetApiV2TranscriptsJobsByJobIdRequest, options?: RequestOptions): ApiPromise<JobStatusEnvelope2, Transcripts.GetApiV2TranscriptsJobsByJobIdError>`
- **Wire**: `GET /api/v2/transcripts/jobs/{jobId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `JobStatusEnvelope2`
- **Error**: `TranscriptFetchError` with `kind: "api"`, an instance of `Transcripts.GetApiV2TranscriptsJobsByJobIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorEnvelope"` [401] `ErrorEnvelope` · `"errorEnvelope2"` [404] `ErrorEnvelope` · `"errorEnvelope3"` [429] `ErrorEnvelope` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transcripts.GetApiV2TranscriptsJobsByJobIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `jobId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `JobStatusEnvelope2` | `jobStatusEnvelope2Schema` | `src/models/job-status-envelope2.ts` |
| `ErrorEnvelope` | `errorEnvelopeSchema` | `src/models/error-envelope.ts` |

### getTranscriptJob

- **Signature**: `getTranscriptJob(request: Transcripts.GetTranscriptJobRequest, options?: RequestOptions): ApiPromise<JobStatusEnvelope, Transcripts.GetTranscriptJobError>`
- **Wire**: `GET /api/v1/transcripts/jobs/{jobId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `JobStatusEnvelope`
- **Error**: `TranscriptFetchError` with `kind: "api"`, an instance of `Transcripts.GetTranscriptJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorEnvelope"` [401] `ErrorEnvelope` · `"errorEnvelope2"` [404] `ErrorEnvelope` · `"errorEnvelope3"` [429] `ErrorEnvelope` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transcripts.GetTranscriptJobRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `jobId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `JobStatusEnvelope` | `jobStatusEnvelopeSchema` | `src/models/job-status-envelope.ts` |
| `ErrorEnvelope` | `errorEnvelopeSchema` | `src/models/error-envelope.ts` |

### postApiV2TranscriptsBatch

- **Signature**: `postApiV2TranscriptsBatch(request: Transcripts.PostApiV2TranscriptsBatchRequest, options?: RequestOptions): ApiPromise<BatchEnvelope, Transcripts.PostApiV2TranscriptsBatchError>`
- **Wire**: `POST /api/v2/transcripts/batch`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **Returns**: `BatchEnvelope`
- **Error**: `TranscriptFetchError` with `kind: "api"`, an instance of `Transcripts.PostApiV2TranscriptsBatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorEnvelope"` [400] `ErrorEnvelope` · `"errorEnvelope2"` [401] `ErrorEnvelope` · `"errorEnvelope3"` [402] `ErrorEnvelope` · `"errorEnvelope4"` [409] `ErrorEnvelope` · `"errorEnvelope5"` [429] `ErrorEnvelope` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transcripts.PostApiV2TranscriptsBatchRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |
| `body` | `body` | — | `BatchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BatchRequest` | `batchRequestSchema` | `src/models/batch-request.ts` |
| `BatchEnvelope` | `batchEnvelopeSchema` | `src/models/batch-envelope.ts` |
| `ErrorEnvelope` | `errorEnvelopeSchema` | `src/models/error-envelope.ts` |

### postApiV2TranscriptsChannel

- **Signature**: `postApiV2TranscriptsChannel(request: Transcripts.PostApiV2TranscriptsChannelRequest, options?: RequestOptions): ApiPromise<SuccessEnvelope, Transcripts.PostApiV2TranscriptsChannelError>`
- **Wire**: `POST /api/v2/transcripts/channel`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **Returns**: `SuccessEnvelope`
- **Error**: `TranscriptFetchError` with `kind: "api"`, an instance of `Transcripts.PostApiV2TranscriptsChannelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorEnvelope"` [400] `ErrorEnvelope` · `"errorEnvelope2"` [401] `ErrorEnvelope` · `"errorEnvelope3"` [402] `ErrorEnvelope` · `"errorEnvelope4"` [409] `ErrorEnvelope` · `"errorEnvelope5"` [422] `ErrorEnvelope` · `"errorEnvelope6"` [429] `ErrorEnvelope` · `"errorEnvelope7"` [502] `ErrorEnvelope` · `"errorEnvelope8"` [503] `ErrorEnvelope` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transcripts.PostApiV2TranscriptsChannelRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |
| `body` | `body` | — | `ChannelRequest2` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChannelRequest2` | `channelRequest2Schema` | `src/models/channel-request2.ts` |
| `SuccessEnvelope` | `successEnvelopeSchema` | `src/models/success-envelope.ts` |
| `ErrorEnvelope` | `errorEnvelopeSchema` | `src/models/error-envelope.ts` |

### postApiV2TranscriptsPlaylist

- **Signature**: `postApiV2TranscriptsPlaylist(request: Transcripts.PostApiV2TranscriptsPlaylistRequest, options?: RequestOptions): ApiPromise<SuccessEnvelope, Transcripts.PostApiV2TranscriptsPlaylistError>`
- **Wire**: `POST /api/v2/transcripts/playlist`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **Returns**: `SuccessEnvelope`
- **Error**: `TranscriptFetchError` with `kind: "api"`, an instance of `Transcripts.PostApiV2TranscriptsPlaylistError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorEnvelope"` [400] `ErrorEnvelope` · `"errorEnvelope2"` [401] `ErrorEnvelope` · `"errorEnvelope3"` [402] `ErrorEnvelope` · `"errorEnvelope4"` [409] `ErrorEnvelope` · `"errorEnvelope5"` [422] `ErrorEnvelope` · `"errorEnvelope6"` [429] `ErrorEnvelope` · `"errorEnvelope7"` [502] `ErrorEnvelope` · `"errorEnvelope8"` [503] `ErrorEnvelope` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transcripts.PostApiV2TranscriptsPlaylistRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |
| `body` | `body` | — | `PlaylistRequest2` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlaylistRequest2` | `playlistRequest2Schema` | `src/models/playlist-request2.ts` |
| `SuccessEnvelope` | `successEnvelopeSchema` | `src/models/success-envelope.ts` |
| `ErrorEnvelope` | `errorEnvelopeSchema` | `src/models/error-envelope.ts` |

### postApiV2TranscriptsSearch

- **Signature**: `postApiV2TranscriptsSearch(request: Transcripts.PostApiV2TranscriptsSearchRequest, options?: RequestOptions): ApiPromise<SuccessEnvelope, Transcripts.PostApiV2TranscriptsSearchError>`
- **Wire**: `POST /api/v2/transcripts/search`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **Returns**: `SuccessEnvelope`
- **Error**: `TranscriptFetchError` with `kind: "api"`, an instance of `Transcripts.PostApiV2TranscriptsSearchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorEnvelope"` [400] `ErrorEnvelope` · `"errorEnvelope2"` [401] `ErrorEnvelope` · `"errorEnvelope3"` [402] `ErrorEnvelope` · `"errorEnvelope4"` [409] `ErrorEnvelope` · `"errorEnvelope5"` [422] `ErrorEnvelope` · `"errorEnvelope6"` [429] `ErrorEnvelope` · `"errorEnvelope7"` [502] `ErrorEnvelope` · `"errorEnvelope8"` [503] `ErrorEnvelope` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transcripts.PostApiV2TranscriptsSearchRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |
| `body` | `body` | — | `SearchRequest2` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchRequest2` | `searchRequest2Schema` | `src/models/search-request2.ts` |
| `SuccessEnvelope` | `successEnvelopeSchema` | `src/models/success-envelope.ts` |
| `ErrorEnvelope` | `errorEnvelopeSchema` | `src/models/error-envelope.ts` |

### postApiV2TranscriptsVideo

- **Signature**: `postApiV2TranscriptsVideo(request: Transcripts.PostApiV2TranscriptsVideoRequest, options?: RequestOptions): ApiPromise<SuccessEnvelope, Transcripts.PostApiV2TranscriptsVideoError>`
- **Wire**: `POST /api/v2/transcripts/video`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **Returns**: `SuccessEnvelope`
- **Error**: `TranscriptFetchError` with `kind: "api"`, an instance of `Transcripts.PostApiV2TranscriptsVideoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorEnvelope"` [400] `ErrorEnvelope` · `"errorEnvelope2"` [401] `ErrorEnvelope` · `"errorEnvelope3"` [402] `ErrorEnvelope` · `"errorEnvelope4"` [409] `ErrorEnvelope` · `"errorEnvelope5"` [422] `ErrorEnvelope` · `"errorEnvelope6"` [429] `ErrorEnvelope` · `"errorEnvelope7"` [502] `ErrorEnvelope` · `"errorEnvelope8"` [503] `ErrorEnvelope` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transcripts.PostApiV2TranscriptsVideoRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |
| `body` | `body` | — | `VideoRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideoRequest` | `videoRequestSchema` | `src/models/video-request.ts` |
| `SuccessEnvelope` | `successEnvelopeSchema` | `src/models/success-envelope.ts` |
| `ErrorEnvelope` | `errorEnvelopeSchema` | `src/models/error-envelope.ts` |

### searchVideos

- **Signature**: `searchVideos(request: Transcripts.SearchVideosRequest, options?: RequestOptions): ApiPromise<SuccessEnvelope, Transcripts.SearchVideosError>`
- **Wire**: `POST /api/v1/transcripts/search`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **Returns**: `SuccessEnvelope`
- **Error**: `TranscriptFetchError` with `kind: "api"`, an instance of `Transcripts.SearchVideosError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorEnvelope"` [400] `ErrorEnvelope` · `"errorEnvelope2"` [401] `ErrorEnvelope` · `"errorEnvelope3"` [402] `ErrorEnvelope` · `"errorEnvelope4"` [409] `ErrorEnvelope` · `"errorEnvelope5"` [422] `ErrorEnvelope` · `"errorEnvelope6"` [429] `ErrorEnvelope` · `"errorEnvelope7"` [502] `ErrorEnvelope` · `"errorEnvelope8"` [503] `ErrorEnvelope` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transcripts.SearchVideosRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |
| `body` | `body` | — | `SearchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchRequest` | `searchRequestSchema` | `src/models/search-request.ts` |
| `SuccessEnvelope` | `successEnvelopeSchema` | `src/models/success-envelope.ts` |
| `ErrorEnvelope` | `errorEnvelopeSchema` | `src/models/error-envelope.ts` |

