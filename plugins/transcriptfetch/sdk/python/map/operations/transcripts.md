<!-- Generated file — do not edit; regenerated with the SDK. -->

# Transcripts — operations

Accessor: `client.transcripts` · Source: `transcript_fetch/apis/transcripts.py` · 12 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.transcripts.fetch_channel_videos

- **Route**: `POST /api/v1/transcripts/channel`
- **Auth**: `bearer_auth`
- **Signature**: `def fetch_channel_videos(body: ChannelRequest | ChannelRequestDict, *, idempotency_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `idempotency_key` — header `Idempotency-Key` · `body` — JSON body
- **Returns (parsed)**: `SuccessEnvelope`
- **Returns (raw)**: `ApiResult[SuccessEnvelope, FetchChannelVideosErrorBody]`
- **Error**: `FetchChannelVideosErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorEnvelope` [400, 401, 402, 409, 422, 429, 502, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ChannelRequest` | `transcript_fetch/models/channel_request.py` |
| `ChannelRequestDict` | `transcript_fetch/models/channel_request.py` |
| `SuccessEnvelope` | `transcript_fetch/models/success_envelope.py` |
| `FetchChannelVideosErrorBody` | `transcript_fetch/errors/fetch_channel_videos_error.py` |
| `ErrorEnvelope` | `transcript_fetch/models/error_envelope.py` |

### client.transcripts.fetch_playlist_videos

- **Route**: `POST /api/v1/transcripts/playlist`
- **Auth**: `bearer_auth`
- **Signature**: `def fetch_playlist_videos(body: PlaylistRequest | PlaylistRequestDict, *, idempotency_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `idempotency_key` — header `Idempotency-Key` · `body` — JSON body
- **Returns (parsed)**: `SuccessEnvelope`
- **Returns (raw)**: `ApiResult[SuccessEnvelope, FetchPlaylistVideosErrorBody]`
- **Error**: `FetchPlaylistVideosErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorEnvelope` [400, 401, 402, 409, 422, 429, 502, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PlaylistRequest` | `transcript_fetch/models/playlist_request.py` |
| `PlaylistRequestDict` | `transcript_fetch/models/playlist_request.py` |
| `SuccessEnvelope` | `transcript_fetch/models/success_envelope.py` |
| `FetchPlaylistVideosErrorBody` | `transcript_fetch/errors/fetch_playlist_videos_error.py` |
| `ErrorEnvelope` | `transcript_fetch/models/error_envelope.py` |

### client.transcripts.fetch_transcripts_batch

- **Route**: `POST /api/v1/transcripts/batch`
- **Auth**: `bearer_auth`
- **Signature**: `def fetch_transcripts_batch(body: BatchRequest | BatchRequestDict, *, idempotency_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `idempotency_key` — header `Idempotency-Key` · `body` — JSON body
- **Returns (parsed)**: `BatchEnvelope`
- **Returns (raw)**: `ApiResult[BatchEnvelope, FetchTranscriptsBatchErrorBody]`
- **Error**: `FetchTranscriptsBatchErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorEnvelope` [400, 401, 402, 409, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BatchRequest` | `transcript_fetch/models/batch_request.py` |
| `BatchRequestDict` | `transcript_fetch/models/batch_request.py` |
| `BatchEnvelope` | `transcript_fetch/models/batch_envelope.py` |
| `FetchTranscriptsBatchErrorBody` | `transcript_fetch/errors/fetch_transcripts_batch_error.py` |
| `ErrorEnvelope` | `transcript_fetch/models/error_envelope.py` |

### client.transcripts.fetch_video_transcript

- **Route**: `POST /api/v1/transcripts/video`
- **Auth**: `bearer_auth`
- **Signature**: `def fetch_video_transcript(body: VideoRequest | VideoRequestDict, *, idempotency_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `idempotency_key` — header `Idempotency-Key` · `body` — JSON body
- **Returns (parsed)**: `SuccessEnvelope`
- **Returns (raw)**: `ApiResult[SuccessEnvelope, FetchVideoTranscriptErrorBody]`
- **Error**: `FetchVideoTranscriptErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorEnvelope` [400, 401, 402, 409, 422, 429, 502, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `VideoRequest` | `transcript_fetch/models/video_request.py` |
| `VideoRequestDict` | `transcript_fetch/models/video_request.py` |
| `SuccessEnvelope` | `transcript_fetch/models/success_envelope.py` |
| `FetchVideoTranscriptErrorBody` | `transcript_fetch/errors/fetch_video_transcript_error.py` |
| `ErrorEnvelope` | `transcript_fetch/models/error_envelope.py` |

### client.transcripts.get_api_v2_transcripts_jobs_by_job_id

- **Route**: `GET /api/v2/transcripts/jobs/{jobId}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v2_transcripts_jobs_by_job_id(job_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `job_id`
- **Params**: `job_id` — path `jobId`
- **Returns (parsed)**: `JobStatusEnvelope2`
- **Returns (raw)**: `ApiResult[JobStatusEnvelope2, GetApiV2TranscriptsJobsByJobIdErrorBody]`
- **Error**: `GetApiV2TranscriptsJobsByJobIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorEnvelope` [401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `JobStatusEnvelope2` | `transcript_fetch/models/job_status_envelope2.py` |
| `GetApiV2TranscriptsJobsByJobIdErrorBody` | `transcript_fetch/errors/get_api_v2_transcripts_jobs_by_job_id_error.py` |
| `ErrorEnvelope` | `transcript_fetch/models/error_envelope.py` |

### client.transcripts.get_transcript_job

- **Route**: `GET /api/v1/transcripts/jobs/{jobId}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_transcript_job(job_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `job_id`
- **Params**: `job_id` — path `jobId`
- **Returns (parsed)**: `JobStatusEnvelope`
- **Returns (raw)**: `ApiResult[JobStatusEnvelope, GetTranscriptJobErrorBody]`
- **Error**: `GetTranscriptJobErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorEnvelope` [401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `JobStatusEnvelope` | `transcript_fetch/models/job_status_envelope.py` |
| `GetTranscriptJobErrorBody` | `transcript_fetch/errors/get_transcript_job_error.py` |
| `ErrorEnvelope` | `transcript_fetch/models/error_envelope.py` |

### client.transcripts.post_api_v2_transcripts_batch

- **Route**: `POST /api/v2/transcripts/batch`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v2_transcripts_batch(body: BatchRequest | BatchRequestDict, *, idempotency_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `idempotency_key` — header `Idempotency-Key` · `body` — JSON body
- **Returns (parsed)**: `BatchEnvelope`
- **Returns (raw)**: `ApiResult[BatchEnvelope, PostApiV2TranscriptsBatchErrorBody]`
- **Error**: `PostApiV2TranscriptsBatchErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorEnvelope` [400, 401, 402, 409, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BatchRequest` | `transcript_fetch/models/batch_request.py` |
| `BatchRequestDict` | `transcript_fetch/models/batch_request.py` |
| `BatchEnvelope` | `transcript_fetch/models/batch_envelope.py` |
| `PostApiV2TranscriptsBatchErrorBody` | `transcript_fetch/errors/post_api_v2_transcripts_batch_error.py` |
| `ErrorEnvelope` | `transcript_fetch/models/error_envelope.py` |

### client.transcripts.post_api_v2_transcripts_channel

- **Route**: `POST /api/v2/transcripts/channel`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v2_transcripts_channel(body: ChannelRequest2 | ChannelRequest2Dict, *, idempotency_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `idempotency_key` — header `Idempotency-Key` · `body` — JSON body
- **Returns (parsed)**: `SuccessEnvelope`
- **Returns (raw)**: `ApiResult[SuccessEnvelope, PostApiV2TranscriptsChannelErrorBody]`
- **Error**: `PostApiV2TranscriptsChannelErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorEnvelope` [400, 401, 402, 409, 422, 429, 502, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ChannelRequest2` | `transcript_fetch/models/channel_request2.py` |
| `ChannelRequest2Dict` | `transcript_fetch/models/channel_request2.py` |
| `SuccessEnvelope` | `transcript_fetch/models/success_envelope.py` |
| `PostApiV2TranscriptsChannelErrorBody` | `transcript_fetch/errors/post_api_v2_transcripts_channel_error.py` |
| `ErrorEnvelope` | `transcript_fetch/models/error_envelope.py` |

### client.transcripts.post_api_v2_transcripts_playlist

- **Route**: `POST /api/v2/transcripts/playlist`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v2_transcripts_playlist(body: PlaylistRequest2 | PlaylistRequest2Dict, *, idempotency_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `idempotency_key` — header `Idempotency-Key` · `body` — JSON body
- **Returns (parsed)**: `SuccessEnvelope`
- **Returns (raw)**: `ApiResult[SuccessEnvelope, PostApiV2TranscriptsPlaylistErrorBody]`
- **Error**: `PostApiV2TranscriptsPlaylistErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorEnvelope` [400, 401, 402, 409, 422, 429, 502, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PlaylistRequest2` | `transcript_fetch/models/playlist_request2.py` |
| `PlaylistRequest2Dict` | `transcript_fetch/models/playlist_request2.py` |
| `SuccessEnvelope` | `transcript_fetch/models/success_envelope.py` |
| `PostApiV2TranscriptsPlaylistErrorBody` | `transcript_fetch/errors/post_api_v2_transcripts_playlist_error.py` |
| `ErrorEnvelope` | `transcript_fetch/models/error_envelope.py` |

### client.transcripts.post_api_v2_transcripts_search

- **Route**: `POST /api/v2/transcripts/search`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v2_transcripts_search(body: SearchRequest2 | SearchRequest2Dict, *, idempotency_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `idempotency_key` — header `Idempotency-Key` · `body` — JSON body
- **Returns (parsed)**: `SuccessEnvelope`
- **Returns (raw)**: `ApiResult[SuccessEnvelope, PostApiV2TranscriptsSearchErrorBody]`
- **Error**: `PostApiV2TranscriptsSearchErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorEnvelope` [400, 401, 402, 409, 422, 429, 502, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SearchRequest2` | `transcript_fetch/models/search_request2.py` |
| `SearchRequest2Dict` | `transcript_fetch/models/search_request2.py` |
| `SuccessEnvelope` | `transcript_fetch/models/success_envelope.py` |
| `PostApiV2TranscriptsSearchErrorBody` | `transcript_fetch/errors/post_api_v2_transcripts_search_error.py` |
| `ErrorEnvelope` | `transcript_fetch/models/error_envelope.py` |

### client.transcripts.post_api_v2_transcripts_video

- **Route**: `POST /api/v2/transcripts/video`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v2_transcripts_video(body: VideoRequest | VideoRequestDict, *, idempotency_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `idempotency_key` — header `Idempotency-Key` · `body` — JSON body
- **Returns (parsed)**: `SuccessEnvelope`
- **Returns (raw)**: `ApiResult[SuccessEnvelope, PostApiV2TranscriptsVideoErrorBody]`
- **Error**: `PostApiV2TranscriptsVideoErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorEnvelope` [400, 401, 402, 409, 422, 429, 502, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `VideoRequest` | `transcript_fetch/models/video_request.py` |
| `VideoRequestDict` | `transcript_fetch/models/video_request.py` |
| `SuccessEnvelope` | `transcript_fetch/models/success_envelope.py` |
| `PostApiV2TranscriptsVideoErrorBody` | `transcript_fetch/errors/post_api_v2_transcripts_video_error.py` |
| `ErrorEnvelope` | `transcript_fetch/models/error_envelope.py` |

### client.transcripts.search_videos

- **Route**: `POST /api/v1/transcripts/search`
- **Auth**: `bearer_auth`
- **Signature**: `def search_videos(body: SearchRequest | SearchRequestDict, *, idempotency_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `idempotency_key` — header `Idempotency-Key` · `body` — JSON body
- **Returns (parsed)**: `SuccessEnvelope`
- **Returns (raw)**: `ApiResult[SuccessEnvelope, SearchVideosErrorBody]`
- **Error**: `SearchVideosErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorEnvelope` [400, 401, 402, 409, 422, 429, 502, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SearchRequest` | `transcript_fetch/models/search_request.py` |
| `SearchRequestDict` | `transcript_fetch/models/search_request.py` |
| `SuccessEnvelope` | `transcript_fetch/models/success_envelope.py` |
| `SearchVideosErrorBody` | `transcript_fetch/errors/search_videos_error.py` |
| `ErrorEnvelope` | `transcript_fetch/models/error_envelope.py` |

