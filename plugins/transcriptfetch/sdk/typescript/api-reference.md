# Reference

> Source: [TranscriptFetchClient](src/client.ts)

## System

> Source: [System](src/resources/system.ts)

<details>
<summary><code>getApiV2Health(options?: RequestOptions): ApiPromise&lt;Health, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Public liveness probe for uptime monitoring. Returns 200 whenever the API is serving. No authentication required and no credits used.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.system.getApiV2Health();
  // TODO: Handle 'response' of type Health
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.system.getApiV2Health().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Health
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.system.getApiV2Health()`

- **OnSuccess**: <code>[Health](src/models/health.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.system.getApiV2Health().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Health, ApiError&gt;</code>, with `result.value` of type <code>[Health](src/models/health.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[TranscriptFetchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV2Me(options?: RequestOptions): ApiPromise&lt;SuccessEnvelope, System.GetApiV2MeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Validates the API key and returns the account's remaining credit balance. Free - never billed. Useful for programmatic balance checks and as a credential test in integrations.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.system.getApiV2Me();
  // TODO: Handle 'response' of type SuccessEnvelope
} catch (err) {
  // TODO: Handle 'err' of type System.GetApiV2MeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.system.getApiV2Me().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SuccessEnvelope
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.system.getApiV2Me()`

- **OnSuccess**: <code>[SuccessEnvelope](src/models/success-envelope.ts)</code>
- **OnError**: throws <code>[System.GetApiV2MeError](src/resources/system.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.system.getApiV2Me().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SuccessEnvelope, System.GetApiV2MeError&gt;</code>, with `result.value` of type <code>[SuccessEnvelope](src/models/success-envelope.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TranscriptFetchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>healthCheck(options?: RequestOptions): ApiPromise&lt;Health, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Public liveness probe for uptime monitoring. Returns 200 whenever the API is serving. No authentication required and no credits used.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.system.healthCheck();
  // TODO: Handle 'response' of type Health
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.system.healthCheck().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Health
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.system.healthCheck()`

- **OnSuccess**: <code>[Health](src/models/health.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.system.healthCheck().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Health, ApiError&gt;</code>, with `result.value` of type <code>[Health](src/models/health.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[TranscriptFetchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>me(options?: RequestOptions): ApiPromise&lt;SuccessEnvelope, System.MeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Validates the API key and returns the account's remaining credit balance. Free - never billed. Useful for programmatic balance checks and as a credential test in integrations.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.system.me();
  // TODO: Handle 'response' of type SuccessEnvelope
} catch (err) {
  // TODO: Handle 'err' of type System.MeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.system.me().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SuccessEnvelope
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.system.me()`

- **OnSuccess**: <code>[SuccessEnvelope](src/models/success-envelope.ts)</code>
- **OnError**: throws <code>[System.MeError](src/resources/system.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.system.me().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SuccessEnvelope, System.MeError&gt;</code>, with `result.value` of type <code>[SuccessEnvelope](src/models/success-envelope.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TranscriptFetchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Transcripts

> Source: [Transcripts](src/resources/transcripts.ts)

<details>
<summary><code>fetchChannelVideos(request: Transcripts.FetchChannelVideosRequest, options?: RequestOptions): ApiPromise&lt;SuccessEnvelope, Transcripts.FetchChannelVideosError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resolve a channel into a paginated list of videos (metadata only), newest first. Pass since_video_id to get back only the uploads newer than one you've already seen - a page with nothing new is free, which makes this safe to poll on a schedule.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transcripts.fetchChannelVideos({
    body: { channel: "@lexfridman", limit: 10 },
  });
  // TODO: Handle 'response' of type SuccessEnvelope
} catch (err) {
  // TODO: Handle 'err' of type Transcripts.FetchChannelVideosError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transcripts
  .fetchChannelVideos({ body: { channel: "@lexfridman", limit: 10 } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SuccessEnvelope
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idempotencyKey?</code> | <code>string</code> | Unique key (≤255 chars) to safely retry a request without being charged twice. Replays return the original response with `Idempotent-Replayed: true`. Reusing a key with a different body is a 409 conflict. |
| <code>body</code> | <code>[ChannelRequest](src/models/channel-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transcripts.fetchChannelVideos(request)`

- **OnSuccess**: <code>[SuccessEnvelope](src/models/success-envelope.ts)</code>
- **OnError**: throws <code>[Transcripts.FetchChannelVideosError](src/resources/transcripts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transcripts.fetchChannelVideos(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SuccessEnvelope, Transcripts.FetchChannelVideosError&gt;</code>, with `result.value` of type <code>[SuccessEnvelope](src/models/success-envelope.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TranscriptFetchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fetchPlaylistVideos(request: Transcripts.FetchPlaylistVideosRequest, options?: RequestOptions): ApiPromise&lt;SuccessEnvelope, Transcripts.FetchPlaylistVideosError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resolve a playlist into a paginated list of videos (metadata only).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transcripts.fetchPlaylistVideos({
    body: { playlist: "PLrAXtmRdnEQy6nuLMt9H1aZIuhcGOcZQ4", limit: 10 },
  });
  // TODO: Handle 'response' of type SuccessEnvelope
} catch (err) {
  // TODO: Handle 'err' of type Transcripts.FetchPlaylistVideosError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transcripts
  .fetchPlaylistVideos({ body: { playlist: "PLrAXtmRdnEQy6nuLMt9H1aZIuhcGOcZQ4", limit: 10 } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SuccessEnvelope
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idempotencyKey?</code> | <code>string</code> | Unique key (≤255 chars) to safely retry a request without being charged twice. Replays return the original response with `Idempotent-Replayed: true`. Reusing a key with a different body is a 409 conflict. |
| <code>body</code> | <code>[PlaylistRequest](src/models/playlist-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transcripts.fetchPlaylistVideos(request)`

- **OnSuccess**: <code>[SuccessEnvelope](src/models/success-envelope.ts)</code>
- **OnError**: throws <code>[Transcripts.FetchPlaylistVideosError](src/resources/transcripts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transcripts.fetchPlaylistVideos(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SuccessEnvelope, Transcripts.FetchPlaylistVideosError&gt;</code>, with `result.value` of type <code>[SuccessEnvelope](src/models/success-envelope.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TranscriptFetchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fetchTranscriptsBatch(request: Transcripts.FetchTranscriptsBatchRequest, options?: RequestOptions): ApiPromise&lt;BatchEnvelope, Transcripts.FetchTranscriptsBatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch a batch of transcripts concurrently. Batch size follows your plan: up to 50 entries on the free tier, Basic and Pro, and up to 500 on Mega and Scale (a request over your plan's cap fails whole with a clear error before anything is fetched or charged). Accepts the same inputs as /transcripts/video - YouTube, TikTok and Instagram URLs as well as bare YouTube IDs. Charges 1 credit per successfully fetched transcript; failed videos are free. Entries with no caption track are transcribed from audio by default: those come back with outcome "processing" and a job_id, cost nothing on this call, and are charged on delivery at the audio rate. Re-send the same batch once they have finished and the text is returned normally - polling is optional. Send mode: "captions" to keep the old behaviour and have captionless entries fail as no_transcript instead.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transcripts.fetchTranscriptsBatch({
    body: {
      videoIds: ["dQw4w9WgXcQ", "https://www.tiktok.com/@user/video/7137723462233555205"],
      mode: Mode1.Auto,
    },
  });
  // TODO: Handle 'response' of type BatchEnvelope
} catch (err) {
  // TODO: Handle 'err' of type Transcripts.FetchTranscriptsBatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transcripts
  .fetchTranscriptsBatch({
    body: {
      videoIds: ["dQw4w9WgXcQ", "https://www.tiktok.com/@user/video/7137723462233555205"],
      mode: Mode1.Auto,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BatchEnvelope
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idempotencyKey?</code> | <code>string</code> | Unique key (≤255 chars) to safely retry a request without being charged twice. Replays return the original response with `Idempotent-Replayed: true`. Reusing a key with a different body is a 409 conflict. |
| <code>body</code> | <code>[BatchRequest](src/models/batch-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transcripts.fetchTranscriptsBatch(request)`

- **OnSuccess**: <code>[BatchEnvelope](src/models/batch-envelope.ts)</code>
- **OnError**: throws <code>[Transcripts.FetchTranscriptsBatchError](src/resources/transcripts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transcripts.fetchTranscriptsBatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BatchEnvelope, Transcripts.FetchTranscriptsBatchError&gt;</code>, with `result.value` of type <code>[BatchEnvelope](src/models/batch-envelope.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TranscriptFetchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fetchVideoTranscript(request: Transcripts.FetchVideoTranscriptRequest, options?: RequestOptions): ApiPromise&lt;SuccessEnvelope, Transcripts.FetchVideoTranscriptError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a transcript - text plus timestamped segments. Accepts YouTube, TikTok, and Instagram URLs (or a bare TikTok video id), direct media file URLs, and podcast links (Spotify, Apple Podcasts, or an RSS feed), which resolve to the episode's audio automatically and come back with a podcast block naming the show and episode. Podcast transcriptions may include best-effort speaker diarization: when labels were produced, each segment carries a `speaker` integer (0, 1, ...) identifying who is talking and a top-level `diarized: true` marks the transcript. Speaker ids are hints from voice separation, not named identification, and non-podcast sources never carry them. When no captions exist the audio is transcribed automatically: when we can determine the media length, media under 20 minutes simply waits (the request is held open for up to 45 seconds) and returns the finished transcript, so no polling is needed; when the length cannot be determined, only short-form platforms (TikTok and Instagram) are held inline. Longer media, or a transcription still running when the 45-second hold expires, returns 202 with a job to poll instead - the work continues either way, so the same request is safe to retry and will hit the cache once it finishes. Supply callback_url to have the finished transcript POSTed to you instead of polling. Every failure carries an ai_fallback block saying whether captions were definitively unavailable and whether retrying would work.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transcripts.fetchVideoTranscript({ body: { video: "dQw4w9WgXcQ" } });
  // TODO: Handle 'response' of type SuccessEnvelope
} catch (err) {
  // TODO: Handle 'err' of type Transcripts.FetchVideoTranscriptError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transcripts
  .fetchVideoTranscript({ body: { video: "dQw4w9WgXcQ" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SuccessEnvelope
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idempotencyKey?</code> | <code>string</code> | Unique key (≤255 chars) to safely retry a request without being charged twice. Replays return the original response with `Idempotent-Replayed: true`. Reusing a key with a different body is a 409 conflict. |
| <code>body</code> | <code>[VideoRequest](src/models/video-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transcripts.fetchVideoTranscript(request)`

- **OnSuccess**: <code>[SuccessEnvelope](src/models/success-envelope.ts)</code>
- **OnError**: throws <code>[Transcripts.FetchVideoTranscriptError](src/resources/transcripts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transcripts.fetchVideoTranscript(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SuccessEnvelope, Transcripts.FetchVideoTranscriptError&gt;</code>, with `result.value` of type <code>[SuccessEnvelope](src/models/success-envelope.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TranscriptFetchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV2TranscriptsJobsByJobId(request: Transcripts.GetApiV2TranscriptsJobsByJobIdRequest, options?: RequestOptions): ApiPromise&lt;JobStatusEnvelope2, Transcripts.GetApiV2TranscriptsJobsByJobIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the state of a transcription job created when a request escalated to audio. 200 for any job your account owns (an unknown id, or a job belonging to someone else, is a 404): read the status field, which is "processing" while the job is running, "completed" with the transcript in data, or "failed" with an error. The job_id and a ready-to-use poll_url come back in the 202 that started it. Free to poll on our side - credits are charged once, on delivery (1 credit per started minute of audio, minimum 1). NOTE for RapidAPI subscribers: every poll is still a billable request on your Hub plan, so prefer callback_url, or simply re-send the original request once the job has had time to finish (the result is cached, so it returns instantly and the delivery is charged once, not twice). Most transcriptions never reach this endpoint at all: when we can determine the media length, media under 20 minutes is returned synchronously, and short-form platforms (TikTok and Instagram) are held inline even when we cannot.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transcripts.getApiV2TranscriptsJobsByJobId({ jobId: "some example string" });
  // TODO: Handle 'response' of type JobStatusEnvelope2
} catch (err) {
  // TODO: Handle 'err' of type Transcripts.GetApiV2TranscriptsJobsByJobIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transcripts
  .getApiV2TranscriptsJobsByJobId({ jobId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type JobStatusEnvelope2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>jobId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transcripts.getApiV2TranscriptsJobsByJobId(request)`

- **OnSuccess**: <code>[JobStatusEnvelope2](src/models/job-status-envelope2.ts)</code>
- **OnError**: throws <code>[Transcripts.GetApiV2TranscriptsJobsByJobIdError](src/resources/transcripts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transcripts.getApiV2TranscriptsJobsByJobId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;JobStatusEnvelope2, Transcripts.GetApiV2TranscriptsJobsByJobIdError&gt;</code>, with `result.value` of type <code>[JobStatusEnvelope2](src/models/job-status-envelope2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TranscriptFetchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTranscriptJob(request: Transcripts.GetTranscriptJobRequest, options?: RequestOptions): ApiPromise&lt;JobStatusEnvelope, Transcripts.GetTranscriptJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the state of a transcription job created when a request escalated to audio. 200 for any job your account owns (an unknown id, or a job belonging to someone else, is a 404): read the status field, which is "processing" while the job is running, "completed" with the transcript in data, or "failed" with an error. The job_id and a ready-to-use poll_url come back in the 202 that started it. Free to poll on our side - credits are charged once, on delivery (1 credit per started minute of audio, minimum 1). NOTE for RapidAPI subscribers: every poll is still a billable request on your Hub plan, so prefer callback_url, or simply re-send the original request once the job has had time to finish (the result is cached, so it returns instantly and the delivery is charged once, not twice). Most transcriptions never reach this endpoint at all: when we can determine the media length, media under 20 minutes is returned synchronously, and short-form platforms (TikTok and Instagram) are held inline even when we cannot.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transcripts.getTranscriptJob({ jobId: "some example string" });
  // TODO: Handle 'response' of type JobStatusEnvelope
} catch (err) {
  // TODO: Handle 'err' of type Transcripts.GetTranscriptJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transcripts.getTranscriptJob({ jobId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type JobStatusEnvelope
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>jobId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transcripts.getTranscriptJob(request)`

- **OnSuccess**: <code>[JobStatusEnvelope](src/models/job-status-envelope.ts)</code>
- **OnError**: throws <code>[Transcripts.GetTranscriptJobError](src/resources/transcripts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transcripts.getTranscriptJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;JobStatusEnvelope, Transcripts.GetTranscriptJobError&gt;</code>, with `result.value` of type <code>[JobStatusEnvelope](src/models/job-status-envelope.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TranscriptFetchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV2TranscriptsBatch(request: Transcripts.PostApiV2TranscriptsBatchRequest, options?: RequestOptions): ApiPromise&lt;BatchEnvelope, Transcripts.PostApiV2TranscriptsBatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch a batch of transcripts concurrently. Batch size follows your plan: up to 50 entries on the free tier, Basic and Pro, and up to 500 on Mega and Scale (a request over your plan's cap fails whole with a clear error before anything is fetched or charged). Accepts the same inputs as /transcripts/video - YouTube, TikTok and Instagram URLs as well as bare YouTube IDs. Charges 1 credit per successfully fetched transcript; failed videos are free. Entries with no caption track are transcribed from audio by default: those come back with outcome "processing" and a job_id, cost nothing on this call, and are charged on delivery at the audio rate. Re-send the same batch once they have finished and the text is returned normally - polling is optional. Send mode: "captions" to keep the old behaviour and have captionless entries fail as no_transcript instead.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transcripts.postApiV2TranscriptsBatch({
    body: {
      videoIds: ["dQw4w9WgXcQ", "https://www.tiktok.com/@user/video/7137723462233555205"],
      mode: Mode1.Auto,
    },
  });
  // TODO: Handle 'response' of type BatchEnvelope
} catch (err) {
  // TODO: Handle 'err' of type Transcripts.PostApiV2TranscriptsBatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transcripts
  .postApiV2TranscriptsBatch({
    body: {
      videoIds: ["dQw4w9WgXcQ", "https://www.tiktok.com/@user/video/7137723462233555205"],
      mode: Mode1.Auto,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BatchEnvelope
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idempotencyKey?</code> | <code>string</code> | Unique key (≤255 chars) to safely retry a request without being charged twice. Replays return the original response with `Idempotent-Replayed: true`. Reusing a key with a different body is a 409 conflict. |
| <code>body</code> | <code>[BatchRequest](src/models/batch-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transcripts.postApiV2TranscriptsBatch(request)`

- **OnSuccess**: <code>[BatchEnvelope](src/models/batch-envelope.ts)</code>
- **OnError**: throws <code>[Transcripts.PostApiV2TranscriptsBatchError](src/resources/transcripts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transcripts.postApiV2TranscriptsBatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BatchEnvelope, Transcripts.PostApiV2TranscriptsBatchError&gt;</code>, with `result.value` of type <code>[BatchEnvelope](src/models/batch-envelope.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TranscriptFetchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV2TranscriptsChannel(request: Transcripts.PostApiV2TranscriptsChannelRequest, options?: RequestOptions): ApiPromise&lt;SuccessEnvelope, Transcripts.PostApiV2TranscriptsChannelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resolve a creator or show into a paginated list of videos or episodes (metadata only), newest first. The platform is read from the input: a YouTube channel, a TikTok or Instagram profile URL, a Spotify or Apple Podcasts show URL, or any podcast RSS/Atom feed URL. Every row's url is accepted by the transcript and batch endpoints as-is. Pass since_video_id to get back only the items newer than one you've already seen - a page with nothing new is free, which makes this safe to poll on a schedule.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transcripts.postApiV2TranscriptsChannel({
    body: { channel: "@lexfridman", limit: 10 },
  });
  // TODO: Handle 'response' of type SuccessEnvelope
} catch (err) {
  // TODO: Handle 'err' of type Transcripts.PostApiV2TranscriptsChannelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transcripts
  .postApiV2TranscriptsChannel({ body: { channel: "@lexfridman", limit: 10 } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SuccessEnvelope
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idempotencyKey?</code> | <code>string</code> | Unique key (≤255 chars) to safely retry a request without being charged twice. Replays return the original response with `Idempotent-Replayed: true`. Reusing a key with a different body is a 409 conflict. |
| <code>body</code> | <code>[ChannelRequest2](src/models/channel-request2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transcripts.postApiV2TranscriptsChannel(request)`

- **OnSuccess**: <code>[SuccessEnvelope](src/models/success-envelope.ts)</code>
- **OnError**: throws <code>[Transcripts.PostApiV2TranscriptsChannelError](src/resources/transcripts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transcripts.postApiV2TranscriptsChannel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SuccessEnvelope, Transcripts.PostApiV2TranscriptsChannelError&gt;</code>, with `result.value` of type <code>[SuccessEnvelope](src/models/success-envelope.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TranscriptFetchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV2TranscriptsPlaylist(request: Transcripts.PostApiV2TranscriptsPlaylistRequest, options?: RequestOptions): ApiPromise&lt;SuccessEnvelope, Transcripts.PostApiV2TranscriptsPlaylistError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resolve a playlist into a paginated list of videos or episodes (metadata only). The platform is read from the input: a YouTube playlist, a TikTok playlist URL, or a Spotify playlist URL. Instagram and Apple Podcasts have no public playlists; list the profile or show through the channel endpoint instead.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transcripts.postApiV2TranscriptsPlaylist({
    body: { playlist: "PLrAXtmRdnEQy6nuLMt9H1aZIuhcGOcZQ4", limit: 10 },
  });
  // TODO: Handle 'response' of type SuccessEnvelope
} catch (err) {
  // TODO: Handle 'err' of type Transcripts.PostApiV2TranscriptsPlaylistError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transcripts
  .postApiV2TranscriptsPlaylist({ body: { playlist: "PLrAXtmRdnEQy6nuLMt9H1aZIuhcGOcZQ4", limit: 10 } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SuccessEnvelope
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idempotencyKey?</code> | <code>string</code> | Unique key (≤255 chars) to safely retry a request without being charged twice. Replays return the original response with `Idempotent-Replayed: true`. Reusing a key with a different body is a 409 conflict. |
| <code>body</code> | <code>[PlaylistRequest2](src/models/playlist-request2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transcripts.postApiV2TranscriptsPlaylist(request)`

- **OnSuccess**: <code>[SuccessEnvelope](src/models/success-envelope.ts)</code>
- **OnError**: throws <code>[Transcripts.PostApiV2TranscriptsPlaylistError](src/resources/transcripts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transcripts.postApiV2TranscriptsPlaylist(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SuccessEnvelope, Transcripts.PostApiV2TranscriptsPlaylistError&gt;</code>, with `result.value` of type <code>[SuccessEnvelope](src/models/success-envelope.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TranscriptFetchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV2TranscriptsSearch(request: Transcripts.PostApiV2TranscriptsSearchRequest, options?: RequestOptions): ApiPromise&lt;SuccessEnvelope, Transcripts.PostApiV2TranscriptsSearchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resolve a keyword search into a paginated list of videos or podcast episodes (metadata only). Searches YouTube by default; set platform to search TikTok, Instagram, Spotify, Apple Podcasts, or the open podcast index instead. Every row carries a url the transcript endpoint accepts unchanged, plus duration and publish time where the source provides them.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transcripts.postApiV2TranscriptsSearch({
    body: { query: "how transformers work", platform: Platform1.Tiktok, limit: 10 },
  });
  // TODO: Handle 'response' of type SuccessEnvelope
} catch (err) {
  // TODO: Handle 'err' of type Transcripts.PostApiV2TranscriptsSearchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transcripts
  .postApiV2TranscriptsSearch({
    body: { query: "how transformers work", platform: Platform1.Tiktok, limit: 10 },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SuccessEnvelope
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idempotencyKey?</code> | <code>string</code> | Unique key (≤255 chars) to safely retry a request without being charged twice. Replays return the original response with `Idempotent-Replayed: true`. Reusing a key with a different body is a 409 conflict. |
| <code>body</code> | <code>[SearchRequest2](src/models/search-request2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transcripts.postApiV2TranscriptsSearch(request)`

- **OnSuccess**: <code>[SuccessEnvelope](src/models/success-envelope.ts)</code>
- **OnError**: throws <code>[Transcripts.PostApiV2TranscriptsSearchError](src/resources/transcripts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transcripts.postApiV2TranscriptsSearch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SuccessEnvelope, Transcripts.PostApiV2TranscriptsSearchError&gt;</code>, with `result.value` of type <code>[SuccessEnvelope](src/models/success-envelope.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TranscriptFetchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV2TranscriptsVideo(request: Transcripts.PostApiV2TranscriptsVideoRequest, options?: RequestOptions): ApiPromise&lt;SuccessEnvelope, Transcripts.PostApiV2TranscriptsVideoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a transcript - text plus timestamped segments. Accepts YouTube, TikTok, and Instagram URLs (or a bare TikTok video id), direct media file URLs, and podcast links (Spotify, Apple Podcasts, or an RSS feed), which resolve to the episode's audio automatically and come back with a podcast block naming the show and episode. Podcast transcriptions may include best-effort speaker diarization: when labels were produced, each segment carries a `speaker` integer (0, 1, ...) identifying who is talking and a top-level `diarized: true` marks the transcript. Speaker ids are hints from voice separation, not named identification, and non-podcast sources never carry them. When no captions exist the audio is transcribed automatically: when we can determine the media length, media under 20 minutes simply waits (the request is held open for up to 45 seconds) and returns the finished transcript, so no polling is needed; when the length cannot be determined, only short-form platforms (TikTok and Instagram) are held inline. Longer media, or a transcription still running when the 45-second hold expires, returns 202 with a job to poll instead - the work continues either way, so the same request is safe to retry and will hit the cache once it finishes. Supply callback_url to have the finished transcript POSTed to you instead of polling. Every failure carries an ai_fallback block saying whether captions were definitively unavailable and whether retrying would work.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transcripts.postApiV2TranscriptsVideo({ body: { video: "dQw4w9WgXcQ" } });
  // TODO: Handle 'response' of type SuccessEnvelope
} catch (err) {
  // TODO: Handle 'err' of type Transcripts.PostApiV2TranscriptsVideoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transcripts
  .postApiV2TranscriptsVideo({ body: { video: "dQw4w9WgXcQ" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SuccessEnvelope
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idempotencyKey?</code> | <code>string</code> | Unique key (≤255 chars) to safely retry a request without being charged twice. Replays return the original response with `Idempotent-Replayed: true`. Reusing a key with a different body is a 409 conflict. |
| <code>body</code> | <code>[VideoRequest](src/models/video-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transcripts.postApiV2TranscriptsVideo(request)`

- **OnSuccess**: <code>[SuccessEnvelope](src/models/success-envelope.ts)</code>
- **OnError**: throws <code>[Transcripts.PostApiV2TranscriptsVideoError](src/resources/transcripts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transcripts.postApiV2TranscriptsVideo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SuccessEnvelope, Transcripts.PostApiV2TranscriptsVideoError&gt;</code>, with `result.value` of type <code>[SuccessEnvelope](src/models/success-envelope.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TranscriptFetchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchVideos(request: Transcripts.SearchVideosRequest, options?: RequestOptions): ApiPromise&lt;SuccessEnvelope, Transcripts.SearchVideosError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resolve a keyword search into a paginated list of videos (metadata only).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transcripts.searchVideos({
    body: { query: "how transformers work", limit: 10 },
  });
  // TODO: Handle 'response' of type SuccessEnvelope
} catch (err) {
  // TODO: Handle 'err' of type Transcripts.SearchVideosError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transcripts
  .searchVideos({ body: { query: "how transformers work", limit: 10 } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SuccessEnvelope
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idempotencyKey?</code> | <code>string</code> | Unique key (≤255 chars) to safely retry a request without being charged twice. Replays return the original response with `Idempotent-Replayed: true`. Reusing a key with a different body is a 409 conflict. |
| <code>body</code> | <code>[SearchRequest](src/models/search-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transcripts.searchVideos(request)`

- **OnSuccess**: <code>[SuccessEnvelope](src/models/success-envelope.ts)</code>
- **OnError**: throws <code>[Transcripts.SearchVideosError](src/resources/transcripts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transcripts.searchVideos(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SuccessEnvelope, Transcripts.SearchVideosError&gt;</code>, with `result.value` of type <code>[SuccessEnvelope](src/models/success-envelope.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TranscriptFetchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

