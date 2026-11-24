# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [TranscriptFetchClient](transcript_fetch/client.py)

## System

> Source: [System](transcript_fetch/apis/system.py)

<details>
<summary><code>def get_api_v2_health(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Health, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Public liveness probe for uptime monitoring. Returns 200 whenever the API is serving. No authentication required and no credits used.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.system.with_raw_response.get_api_v2_health()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Health
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.system.with_raw_response.get_api_v2_health()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Health
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](transcript_fetch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](transcript_fetch/core/results.py)&#91;[Health](transcript_fetch/models/health.py), [RawError](transcript_fetch/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Health](transcript_fetch/models/health.py)</code> -- Success

**On `Failure`**: `error` is <code>[RawError](transcript_fetch/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v2_me(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SuccessEnvelope, GetApiV2MeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Validates the API key and returns the account's remaining credit balance. Free - never billed. Useful for programmatic balance checks and as a credential test in integrations.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.system.with_raw_response.get_api_v2_me()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessEnvelope
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV2MeErrorBody
```

**Async**

```python
result = await async_client.system.with_raw_response.get_api_v2_me()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessEnvelope
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV2MeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](transcript_fetch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](transcript_fetch/core/results.py)&#91;[SuccessEnvelope](transcript_fetch/models/success_envelope.py), [GetApiV2MeErrorBody](transcript_fetch/errors/get_api_v2_me_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SuccessEnvelope](transcript_fetch/models/success_envelope.py)</code> -- Success

**On `Failure`**: `error` is <code>[GetApiV2MeErrorBody](transcript_fetch/errors/get_api_v2_me_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorEnvelope](transcript_fetch/models/error_envelope.py)</code> |
| anything unmapped | <code>[RawError](transcript_fetch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def health_check(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Health, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Public liveness probe for uptime monitoring. Returns 200 whenever the API is serving. No authentication required and no credits used.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.system.with_raw_response.health_check()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Health
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.system.with_raw_response.health_check()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Health
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](transcript_fetch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](transcript_fetch/core/results.py)&#91;[Health](transcript_fetch/models/health.py), [RawError](transcript_fetch/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Health](transcript_fetch/models/health.py)</code> -- Success

**On `Failure`**: `error` is <code>[RawError](transcript_fetch/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def me(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SuccessEnvelope, MeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Validates the API key and returns the account's remaining credit balance. Free - never billed. Useful for programmatic balance checks and as a credential test in integrations.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.system.with_raw_response.me()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessEnvelope
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MeErrorBody
```

**Async**

```python
result = await async_client.system.with_raw_response.me()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessEnvelope
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](transcript_fetch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](transcript_fetch/core/results.py)&#91;[SuccessEnvelope](transcript_fetch/models/success_envelope.py), [MeErrorBody](transcript_fetch/errors/me_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SuccessEnvelope](transcript_fetch/models/success_envelope.py)</code> -- Success

**On `Failure`**: `error` is <code>[MeErrorBody](transcript_fetch/errors/me_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorEnvelope](transcript_fetch/models/error_envelope.py)</code> |
| anything unmapped | <code>[RawError](transcript_fetch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Transcripts

> Source: [Transcripts](transcript_fetch/apis/transcripts.py)

<details>
<summary><code>def fetch_channel_videos(body: ChannelRequest | ChannelRequestDict, *, idempotency_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SuccessEnvelope, FetchChannelVideosErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resolve a channel into a paginated list of videos (metadata only), newest first. Pass since_video_id to get back only the uploads newer than one you've already seen - a page with nothing new is free, which makes this safe to poll on a schedule.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.transcripts.with_raw_response.fetch_channel_videos(ChannelRequest(channel="@lexfridman", limit=10))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessEnvelope
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchChannelVideosErrorBody
```

**Async**

```python
result = await async_client.transcripts.with_raw_response.fetch_channel_videos(
    ChannelRequest(channel="@lexfridman", limit=10)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessEnvelope
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchChannelVideosErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ChannelRequest](transcript_fetch/models/channel_request.py) \| [ChannelRequestDict](transcript_fetch/models/channel_request.py)</code> | The request body. |
| <code>idempotency_key</code> | <code>str \| None</code> | Unique key (≤255 chars) to safely retry a request without being charged twice. Replays return the original response with `Idempotent-Replayed: true`. Reusing a key with a different body is a 409 conflict.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](transcript_fetch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](transcript_fetch/core/results.py)&#91;[SuccessEnvelope](transcript_fetch/models/success_envelope.py), [FetchChannelVideosErrorBody](transcript_fetch/errors/fetch_channel_videos_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SuccessEnvelope](transcript_fetch/models/success_envelope.py)</code> -- Success

**On `Failure`**: `error` is <code>[FetchChannelVideosErrorBody](transcript_fetch/errors/fetch_channel_videos_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 409, 422, 429, 502, 503 | <code>[ErrorEnvelope](transcript_fetch/models/error_envelope.py)</code> |
| anything unmapped | <code>[RawError](transcript_fetch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fetch_playlist_videos(body: PlaylistRequest | PlaylistRequestDict, *, idempotency_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SuccessEnvelope, FetchPlaylistVideosErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resolve a playlist into a paginated list of videos (metadata only).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.transcripts.with_raw_response.fetch_playlist_videos(
    PlaylistRequest(playlist="PLrAXtmRdnEQy6nuLMt9H1aZIuhcGOcZQ4", limit=10)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessEnvelope
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchPlaylistVideosErrorBody
```

**Async**

```python
result = await async_client.transcripts.with_raw_response.fetch_playlist_videos(
    PlaylistRequest(playlist="PLrAXtmRdnEQy6nuLMt9H1aZIuhcGOcZQ4", limit=10)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessEnvelope
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchPlaylistVideosErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PlaylistRequest](transcript_fetch/models/playlist_request.py) \| [PlaylistRequestDict](transcript_fetch/models/playlist_request.py)</code> | The request body. |
| <code>idempotency_key</code> | <code>str \| None</code> | Unique key (≤255 chars) to safely retry a request without being charged twice. Replays return the original response with `Idempotent-Replayed: true`. Reusing a key with a different body is a 409 conflict.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](transcript_fetch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](transcript_fetch/core/results.py)&#91;[SuccessEnvelope](transcript_fetch/models/success_envelope.py), [FetchPlaylistVideosErrorBody](transcript_fetch/errors/fetch_playlist_videos_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SuccessEnvelope](transcript_fetch/models/success_envelope.py)</code> -- Success

**On `Failure`**: `error` is <code>[FetchPlaylistVideosErrorBody](transcript_fetch/errors/fetch_playlist_videos_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 409, 422, 429, 502, 503 | <code>[ErrorEnvelope](transcript_fetch/models/error_envelope.py)</code> |
| anything unmapped | <code>[RawError](transcript_fetch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fetch_transcripts_batch(body: BatchRequest | BatchRequestDict, *, idempotency_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BatchEnvelope, FetchTranscriptsBatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch a batch of transcripts concurrently. Batch size follows your plan: up to 50 entries on the free tier, Basic and Pro, and up to 500 on Mega and Scale (a request over your plan's cap fails whole with a clear error before anything is fetched or charged). Accepts the same inputs as /transcripts/video - YouTube, TikTok and Instagram URLs as well as bare YouTube IDs. Charges 1 credit per successfully fetched transcript; failed videos are free. Entries with no caption track are transcribed from audio by default: those come back with outcome "processing" and a job_id, cost nothing on this call, and are charged on delivery at the audio rate. Re-send the same batch once they have finished and the text is returned normally - polling is optional. Send mode: "captions" to keep the old behaviour and have captionless entries fail as no_transcript instead.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.transcripts.with_raw_response.fetch_transcripts_batch(
    BatchRequest(video_ids=["dQw4w9WgXcQ", "https://www.tiktok.com/@user/video/7137723462233555205"], mode=Mode1.AUTO)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BatchEnvelope
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchTranscriptsBatchErrorBody
```

**Async**

```python
result = await async_client.transcripts.with_raw_response.fetch_transcripts_batch(
    BatchRequest(video_ids=["dQw4w9WgXcQ", "https://www.tiktok.com/@user/video/7137723462233555205"], mode=Mode1.AUTO)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BatchEnvelope
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchTranscriptsBatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BatchRequest](transcript_fetch/models/batch_request.py) \| [BatchRequestDict](transcript_fetch/models/batch_request.py)</code> | The request body. |
| <code>idempotency_key</code> | <code>str \| None</code> | Unique key (≤255 chars) to safely retry a request without being charged twice. Replays return the original response with `Idempotent-Replayed: true`. Reusing a key with a different body is a 409 conflict.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](transcript_fetch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](transcript_fetch/core/results.py)&#91;[BatchEnvelope](transcript_fetch/models/batch_envelope.py), [FetchTranscriptsBatchErrorBody](transcript_fetch/errors/fetch_transcripts_batch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BatchEnvelope](transcript_fetch/models/batch_envelope.py)</code> -- Success

**On `Failure`**: `error` is <code>[FetchTranscriptsBatchErrorBody](transcript_fetch/errors/fetch_transcripts_batch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 409, 429 | <code>[ErrorEnvelope](transcript_fetch/models/error_envelope.py)</code> |
| anything unmapped | <code>[RawError](transcript_fetch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fetch_video_transcript(body: VideoRequest | VideoRequestDict, *, idempotency_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SuccessEnvelope, FetchVideoTranscriptErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a transcript - text plus timestamped segments. Accepts YouTube, TikTok, and Instagram URLs (or a bare TikTok video id), direct media file URLs, and podcast links (Spotify, Apple Podcasts, or an RSS feed), which resolve to the episode's audio automatically and come back with a podcast block naming the show and episode. Podcast transcriptions may include best-effort speaker diarization: when labels were produced, each segment carries a `speaker` integer (0, 1, ...) identifying who is talking and a top-level `diarized: true` marks the transcript. Speaker ids are hints from voice separation, not named identification, and non-podcast sources never carry them. When no captions exist the audio is transcribed automatically: when we can determine the media length, media under 20 minutes simply waits (the request is held open for up to 45 seconds) and returns the finished transcript, so no polling is needed; when the length cannot be determined, only short-form platforms (TikTok and Instagram) are held inline. Longer media, or a transcription still running when the 45-second hold expires, returns 202 with a job to poll instead - the work continues either way, so the same request is safe to retry and will hit the cache once it finishes. Supply callback_url to have the finished transcript POSTed to you instead of polling. Every failure carries an ai_fallback block saying whether captions were definitively unavailable and whether retrying would work.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.transcripts.with_raw_response.fetch_video_transcript(VideoRequest(video="dQw4w9WgXcQ"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessEnvelope
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchVideoTranscriptErrorBody
```

**Async**

```python
result = await async_client.transcripts.with_raw_response.fetch_video_transcript(VideoRequest(video="dQw4w9WgXcQ"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessEnvelope
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchVideoTranscriptErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[VideoRequest](transcript_fetch/models/video_request.py) \| [VideoRequestDict](transcript_fetch/models/video_request.py)</code> | The request body. |
| <code>idempotency_key</code> | <code>str \| None</code> | Unique key (≤255 chars) to safely retry a request without being charged twice. Replays return the original response with `Idempotent-Replayed: true`. Reusing a key with a different body is a 409 conflict.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](transcript_fetch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](transcript_fetch/core/results.py)&#91;[SuccessEnvelope](transcript_fetch/models/success_envelope.py), [FetchVideoTranscriptErrorBody](transcript_fetch/errors/fetch_video_transcript_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SuccessEnvelope](transcript_fetch/models/success_envelope.py)</code> -- Success

**On `Failure`**: `error` is <code>[FetchVideoTranscriptErrorBody](transcript_fetch/errors/fetch_video_transcript_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 409, 422, 429, 502, 503 | <code>[ErrorEnvelope](transcript_fetch/models/error_envelope.py)</code> |
| anything unmapped | <code>[RawError](transcript_fetch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v2_transcripts_jobs_by_job_id(job_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[JobStatusEnvelope2, GetApiV2TranscriptsJobsByJobIdErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the state of a transcription job created when a request escalated to audio. 200 for any job your account owns (an unknown id, or a job belonging to someone else, is a 404): read the status field, which is "processing" while the job is running, "completed" with the transcript in data, or "failed" with an error. The job_id and a ready-to-use poll_url come back in the 202 that started it. Free to poll on our side - credits are charged once, on delivery (1 credit per started minute of audio, minimum 1). NOTE for RapidAPI subscribers: every poll is still a billable request on your Hub plan, so prefer callback_url, or simply re-send the original request once the job has had time to finish (the result is cached, so it returns instantly and the delivery is charged once, not twice). Most transcriptions never reach this endpoint at all: when we can determine the media length, media under 20 minutes is returned synchronously, and short-form platforms (TikTok and Instagram) are held inline even when we cannot.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.transcripts.with_raw_response.get_api_v2_transcripts_jobs_by_job_id("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type JobStatusEnvelope2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV2TranscriptsJobsByJobIdErrorBody
```

**Async**

```python
result = await async_client.transcripts.with_raw_response.get_api_v2_transcripts_jobs_by_job_id("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type JobStatusEnvelope2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV2TranscriptsJobsByJobIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>job_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](transcript_fetch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](transcript_fetch/core/results.py)&#91;[JobStatusEnvelope2](transcript_fetch/models/job_status_envelope2.py), [GetApiV2TranscriptsJobsByJobIdErrorBody](transcript_fetch/errors/get_api_v2_transcripts_jobs_by_job_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[JobStatusEnvelope2](transcript_fetch/models/job_status_envelope2.py)</code> -- Success

**On `Failure`**: `error` is <code>[GetApiV2TranscriptsJobsByJobIdErrorBody](transcript_fetch/errors/get_api_v2_transcripts_jobs_by_job_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 429 | <code>[ErrorEnvelope](transcript_fetch/models/error_envelope.py)</code> |
| anything unmapped | <code>[RawError](transcript_fetch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_transcript_job(job_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[JobStatusEnvelope, GetTranscriptJobErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the state of a transcription job created when a request escalated to audio. 200 for any job your account owns (an unknown id, or a job belonging to someone else, is a 404): read the status field, which is "processing" while the job is running, "completed" with the transcript in data, or "failed" with an error. The job_id and a ready-to-use poll_url come back in the 202 that started it. Free to poll on our side - credits are charged once, on delivery (1 credit per started minute of audio, minimum 1). NOTE for RapidAPI subscribers: every poll is still a billable request on your Hub plan, so prefer callback_url, or simply re-send the original request once the job has had time to finish (the result is cached, so it returns instantly and the delivery is charged once, not twice). Most transcriptions never reach this endpoint at all: when we can determine the media length, media under 20 minutes is returned synchronously, and short-form platforms (TikTok and Instagram) are held inline even when we cannot.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.transcripts.with_raw_response.get_transcript_job("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type JobStatusEnvelope
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTranscriptJobErrorBody
```

**Async**

```python
result = await async_client.transcripts.with_raw_response.get_transcript_job("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type JobStatusEnvelope
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTranscriptJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>job_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](transcript_fetch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](transcript_fetch/core/results.py)&#91;[JobStatusEnvelope](transcript_fetch/models/job_status_envelope.py), [GetTranscriptJobErrorBody](transcript_fetch/errors/get_transcript_job_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[JobStatusEnvelope](transcript_fetch/models/job_status_envelope.py)</code> -- Success

**On `Failure`**: `error` is <code>[GetTranscriptJobErrorBody](transcript_fetch/errors/get_transcript_job_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 429 | <code>[ErrorEnvelope](transcript_fetch/models/error_envelope.py)</code> |
| anything unmapped | <code>[RawError](transcript_fetch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v2_transcripts_batch(body: BatchRequest | BatchRequestDict, *, idempotency_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BatchEnvelope, PostApiV2TranscriptsBatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch a batch of transcripts concurrently. Batch size follows your plan: up to 50 entries on the free tier, Basic and Pro, and up to 500 on Mega and Scale (a request over your plan's cap fails whole with a clear error before anything is fetched or charged). Accepts the same inputs as /transcripts/video - YouTube, TikTok and Instagram URLs as well as bare YouTube IDs. Charges 1 credit per successfully fetched transcript; failed videos are free. Entries with no caption track are transcribed from audio by default: those come back with outcome "processing" and a job_id, cost nothing on this call, and are charged on delivery at the audio rate. Re-send the same batch once they have finished and the text is returned normally - polling is optional. Send mode: "captions" to keep the old behaviour and have captionless entries fail as no_transcript instead.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.transcripts.with_raw_response.post_api_v2_transcripts_batch(
    BatchRequest(video_ids=["dQw4w9WgXcQ", "https://www.tiktok.com/@user/video/7137723462233555205"], mode=Mode1.AUTO)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BatchEnvelope
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV2TranscriptsBatchErrorBody
```

**Async**

```python
result = await async_client.transcripts.with_raw_response.post_api_v2_transcripts_batch(
    BatchRequest(video_ids=["dQw4w9WgXcQ", "https://www.tiktok.com/@user/video/7137723462233555205"], mode=Mode1.AUTO)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BatchEnvelope
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV2TranscriptsBatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BatchRequest](transcript_fetch/models/batch_request.py) \| [BatchRequestDict](transcript_fetch/models/batch_request.py)</code> | The request body. |
| <code>idempotency_key</code> | <code>str \| None</code> | Unique key (≤255 chars) to safely retry a request without being charged twice. Replays return the original response with `Idempotent-Replayed: true`. Reusing a key with a different body is a 409 conflict.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](transcript_fetch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](transcript_fetch/core/results.py)&#91;[BatchEnvelope](transcript_fetch/models/batch_envelope.py), [PostApiV2TranscriptsBatchErrorBody](transcript_fetch/errors/post_api_v2_transcripts_batch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BatchEnvelope](transcript_fetch/models/batch_envelope.py)</code> -- Success

**On `Failure`**: `error` is <code>[PostApiV2TranscriptsBatchErrorBody](transcript_fetch/errors/post_api_v2_transcripts_batch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 409, 429 | <code>[ErrorEnvelope](transcript_fetch/models/error_envelope.py)</code> |
| anything unmapped | <code>[RawError](transcript_fetch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v2_transcripts_channel(body: ChannelRequest2 | ChannelRequest2Dict, *, idempotency_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SuccessEnvelope, PostApiV2TranscriptsChannelErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resolve a creator or show into a paginated list of videos or episodes (metadata only), newest first. The platform is read from the input: a YouTube channel, a TikTok or Instagram profile URL, a Spotify or Apple Podcasts show URL, or any podcast RSS/Atom feed URL. Every row's url is accepted by the transcript and batch endpoints as-is. Pass since_video_id to get back only the items newer than one you've already seen - a page with nothing new is free, which makes this safe to poll on a schedule.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.transcripts.with_raw_response.post_api_v2_transcripts_channel(
    ChannelRequest2(channel="@lexfridman", limit=10)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessEnvelope
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV2TranscriptsChannelErrorBody
```

**Async**

```python
result = await async_client.transcripts.with_raw_response.post_api_v2_transcripts_channel(
    ChannelRequest2(channel="@lexfridman", limit=10)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessEnvelope
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV2TranscriptsChannelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ChannelRequest2](transcript_fetch/models/channel_request2.py) \| [ChannelRequest2Dict](transcript_fetch/models/channel_request2.py)</code> | The request body. |
| <code>idempotency_key</code> | <code>str \| None</code> | Unique key (≤255 chars) to safely retry a request without being charged twice. Replays return the original response with `Idempotent-Replayed: true`. Reusing a key with a different body is a 409 conflict.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](transcript_fetch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](transcript_fetch/core/results.py)&#91;[SuccessEnvelope](transcript_fetch/models/success_envelope.py), [PostApiV2TranscriptsChannelErrorBody](transcript_fetch/errors/post_api_v2_transcripts_channel_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SuccessEnvelope](transcript_fetch/models/success_envelope.py)</code> -- Success

**On `Failure`**: `error` is <code>[PostApiV2TranscriptsChannelErrorBody](transcript_fetch/errors/post_api_v2_transcripts_channel_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 409, 422, 429, 502, 503 | <code>[ErrorEnvelope](transcript_fetch/models/error_envelope.py)</code> |
| anything unmapped | <code>[RawError](transcript_fetch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v2_transcripts_playlist(body: PlaylistRequest2 | PlaylistRequest2Dict, *, idempotency_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SuccessEnvelope, PostApiV2TranscriptsPlaylistErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resolve a playlist into a paginated list of videos or episodes (metadata only). The platform is read from the input: a YouTube playlist, a TikTok playlist URL, or a Spotify playlist URL. Instagram and Apple Podcasts have no public playlists; list the profile or show through the channel endpoint instead.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.transcripts.with_raw_response.post_api_v2_transcripts_playlist(
    PlaylistRequest2(playlist="PLrAXtmRdnEQy6nuLMt9H1aZIuhcGOcZQ4", limit=10)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessEnvelope
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV2TranscriptsPlaylistErrorBody
```

**Async**

```python
result = await async_client.transcripts.with_raw_response.post_api_v2_transcripts_playlist(
    PlaylistRequest2(playlist="PLrAXtmRdnEQy6nuLMt9H1aZIuhcGOcZQ4", limit=10)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessEnvelope
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV2TranscriptsPlaylistErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PlaylistRequest2](transcript_fetch/models/playlist_request2.py) \| [PlaylistRequest2Dict](transcript_fetch/models/playlist_request2.py)</code> | The request body. |
| <code>idempotency_key</code> | <code>str \| None</code> | Unique key (≤255 chars) to safely retry a request without being charged twice. Replays return the original response with `Idempotent-Replayed: true`. Reusing a key with a different body is a 409 conflict.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](transcript_fetch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](transcript_fetch/core/results.py)&#91;[SuccessEnvelope](transcript_fetch/models/success_envelope.py), [PostApiV2TranscriptsPlaylistErrorBody](transcript_fetch/errors/post_api_v2_transcripts_playlist_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SuccessEnvelope](transcript_fetch/models/success_envelope.py)</code> -- Success

**On `Failure`**: `error` is <code>[PostApiV2TranscriptsPlaylistErrorBody](transcript_fetch/errors/post_api_v2_transcripts_playlist_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 409, 422, 429, 502, 503 | <code>[ErrorEnvelope](transcript_fetch/models/error_envelope.py)</code> |
| anything unmapped | <code>[RawError](transcript_fetch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v2_transcripts_search(body: SearchRequest2 | SearchRequest2Dict, *, idempotency_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SuccessEnvelope, PostApiV2TranscriptsSearchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resolve a keyword search into a paginated list of videos or podcast episodes (metadata only). Searches YouTube by default; set platform to search TikTok, Instagram, Spotify, Apple Podcasts, or the open podcast index instead. Every row carries a url the transcript endpoint accepts unchanged, plus duration and publish time where the source provides them.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.transcripts.with_raw_response.post_api_v2_transcripts_search(
    SearchRequest2(query="how transformers work", platform=Platform1.TIKTOK, limit=10)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessEnvelope
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV2TranscriptsSearchErrorBody
```

**Async**

```python
result = await async_client.transcripts.with_raw_response.post_api_v2_transcripts_search(
    SearchRequest2(query="how transformers work", platform=Platform1.TIKTOK, limit=10)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessEnvelope
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV2TranscriptsSearchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SearchRequest2](transcript_fetch/models/search_request2.py) \| [SearchRequest2Dict](transcript_fetch/models/search_request2.py)</code> | The request body. |
| <code>idempotency_key</code> | <code>str \| None</code> | Unique key (≤255 chars) to safely retry a request without being charged twice. Replays return the original response with `Idempotent-Replayed: true`. Reusing a key with a different body is a 409 conflict.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](transcript_fetch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](transcript_fetch/core/results.py)&#91;[SuccessEnvelope](transcript_fetch/models/success_envelope.py), [PostApiV2TranscriptsSearchErrorBody](transcript_fetch/errors/post_api_v2_transcripts_search_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SuccessEnvelope](transcript_fetch/models/success_envelope.py)</code> -- Success

**On `Failure`**: `error` is <code>[PostApiV2TranscriptsSearchErrorBody](transcript_fetch/errors/post_api_v2_transcripts_search_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 409, 422, 429, 502, 503 | <code>[ErrorEnvelope](transcript_fetch/models/error_envelope.py)</code> |
| anything unmapped | <code>[RawError](transcript_fetch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v2_transcripts_video(body: VideoRequest | VideoRequestDict, *, idempotency_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SuccessEnvelope, PostApiV2TranscriptsVideoErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a transcript - text plus timestamped segments. Accepts YouTube, TikTok, and Instagram URLs (or a bare TikTok video id), direct media file URLs, and podcast links (Spotify, Apple Podcasts, or an RSS feed), which resolve to the episode's audio automatically and come back with a podcast block naming the show and episode. Podcast transcriptions may include best-effort speaker diarization: when labels were produced, each segment carries a `speaker` integer (0, 1, ...) identifying who is talking and a top-level `diarized: true` marks the transcript. Speaker ids are hints from voice separation, not named identification, and non-podcast sources never carry them. When no captions exist the audio is transcribed automatically: when we can determine the media length, media under 20 minutes simply waits (the request is held open for up to 45 seconds) and returns the finished transcript, so no polling is needed; when the length cannot be determined, only short-form platforms (TikTok and Instagram) are held inline. Longer media, or a transcription still running when the 45-second hold expires, returns 202 with a job to poll instead - the work continues either way, so the same request is safe to retry and will hit the cache once it finishes. Supply callback_url to have the finished transcript POSTed to you instead of polling. Every failure carries an ai_fallback block saying whether captions were definitively unavailable and whether retrying would work.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.transcripts.with_raw_response.post_api_v2_transcripts_video(VideoRequest(video="dQw4w9WgXcQ"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessEnvelope
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV2TranscriptsVideoErrorBody
```

**Async**

```python
result = await async_client.transcripts.with_raw_response.post_api_v2_transcripts_video(
    VideoRequest(video="dQw4w9WgXcQ")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessEnvelope
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV2TranscriptsVideoErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[VideoRequest](transcript_fetch/models/video_request.py) \| [VideoRequestDict](transcript_fetch/models/video_request.py)</code> | The request body. |
| <code>idempotency_key</code> | <code>str \| None</code> | Unique key (≤255 chars) to safely retry a request without being charged twice. Replays return the original response with `Idempotent-Replayed: true`. Reusing a key with a different body is a 409 conflict.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](transcript_fetch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](transcript_fetch/core/results.py)&#91;[SuccessEnvelope](transcript_fetch/models/success_envelope.py), [PostApiV2TranscriptsVideoErrorBody](transcript_fetch/errors/post_api_v2_transcripts_video_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SuccessEnvelope](transcript_fetch/models/success_envelope.py)</code> -- Success

**On `Failure`**: `error` is <code>[PostApiV2TranscriptsVideoErrorBody](transcript_fetch/errors/post_api_v2_transcripts_video_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 409, 422, 429, 502, 503 | <code>[ErrorEnvelope](transcript_fetch/models/error_envelope.py)</code> |
| anything unmapped | <code>[RawError](transcript_fetch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_videos(body: SearchRequest | SearchRequestDict, *, idempotency_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SuccessEnvelope, SearchVideosErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resolve a keyword search into a paginated list of videos (metadata only).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.transcripts.with_raw_response.search_videos(SearchRequest(query="how transformers work", limit=10))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessEnvelope
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchVideosErrorBody
```

**Async**

```python
result = await async_client.transcripts.with_raw_response.search_videos(
    SearchRequest(query="how transformers work", limit=10)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessEnvelope
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchVideosErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SearchRequest](transcript_fetch/models/search_request.py) \| [SearchRequestDict](transcript_fetch/models/search_request.py)</code> | The request body. |
| <code>idempotency_key</code> | <code>str \| None</code> | Unique key (≤255 chars) to safely retry a request without being charged twice. Replays return the original response with `Idempotent-Replayed: true`. Reusing a key with a different body is a 409 conflict.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](transcript_fetch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](transcript_fetch/core/results.py)&#91;[SuccessEnvelope](transcript_fetch/models/success_envelope.py), [SearchVideosErrorBody](transcript_fetch/errors/search_videos_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SuccessEnvelope](transcript_fetch/models/success_envelope.py)</code> -- Success

**On `Failure`**: `error` is <code>[SearchVideosErrorBody](transcript_fetch/errors/search_videos_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 409, 422, 429, 502, 503 | <code>[ErrorEnvelope](transcript_fetch/models/error_envelope.py)</code> |
| anything unmapped | <code>[RawError](transcript_fetch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

