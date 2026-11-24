# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [TranscriptFetchClient](src/TranscriptFetch/TranscriptFetchClient.cs)

## SystemApi

> Source: [SystemApi](src/TranscriptFetch/Api/SystemApi.cs)

<details>
<summary><code>Task&lt;Health&gt; GetApiV2Health(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.SystemApi.GetApiV2Health();
    // TODO: Handle 'response' of type Health
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Health](src/TranscriptFetch/Models/Health.cs)</code>

**OnError**: <code>[ApiException](src/TranscriptFetch/Core/Exceptions/ApiException.cs)&lt;[RawError](src/TranscriptFetch/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SuccessEnvelope&gt; GetApiV2Me(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.SystemApi.GetApiV2Me();
    // TODO: Handle 'response' of type SuccessEnvelope
}
catch (ApiException<GetApiV2MeError> ex)
{
    if (ex.Error.TryGetErrorEnvelope(out var error))
    {
        // TODO: Handle 'error' of type ErrorEnvelope
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SuccessEnvelope](src/TranscriptFetch/Models/SuccessEnvelope.cs)</code>

**OnError**: <code>[ApiException](src/TranscriptFetch/Core/Exceptions/ApiException.cs)&lt;[GetApiV2MeError](src/TranscriptFetch/Errors/GetApiV2MeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Health&gt; HealthCheck(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.SystemApi.HealthCheck();
    // TODO: Handle 'response' of type Health
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Health](src/TranscriptFetch/Models/Health.cs)</code>

**OnError**: <code>[ApiException](src/TranscriptFetch/Core/Exceptions/ApiException.cs)&lt;[RawError](src/TranscriptFetch/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SuccessEnvelope&gt; Me(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.SystemApi.Me();
    // TODO: Handle 'response' of type SuccessEnvelope
}
catch (ApiException<MeError> ex)
{
    if (ex.Error.TryGetErrorEnvelope(out var error))
    {
        // TODO: Handle 'error' of type ErrorEnvelope
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SuccessEnvelope](src/TranscriptFetch/Models/SuccessEnvelope.cs)</code>

**OnError**: <code>[ApiException](src/TranscriptFetch/Core/Exceptions/ApiException.cs)&lt;[MeError](src/TranscriptFetch/Errors/MeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Transcripts

> Source: [Transcripts](src/TranscriptFetch/Api/Transcripts.cs)

<details>
<summary><code>Task&lt;SuccessEnvelope&gt; FetchChannelVideos(FetchChannelVideosRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Transcripts.FetchChannelVideos(new FetchChannelVideosRequest
    {
        Body = new ChannelRequest { Channel = "@lexfridman", Limit = 10 },
    });
    // TODO: Handle 'response' of type SuccessEnvelope
}
catch (ApiException<FetchChannelVideosError> ex)
{
    if (ex.Error.TryGetErrorEnvelope(out var error))
    {
        // TODO: Handle 'error' of type ErrorEnvelope
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchChannelVideosRequest](src/TranscriptFetch/Requests/Transcripts/FetchChannelVideosRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SuccessEnvelope](src/TranscriptFetch/Models/SuccessEnvelope.cs)</code>

**OnError**: <code>[ApiException](src/TranscriptFetch/Core/Exceptions/ApiException.cs)&lt;[FetchChannelVideosError](src/TranscriptFetch/Errors/FetchChannelVideosError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SuccessEnvelope&gt; FetchPlaylistVideos(FetchPlaylistVideosRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Transcripts.FetchPlaylistVideos(new FetchPlaylistVideosRequest
    {
        Body = new PlaylistRequest { Playlist = "PLrAXtmRdnEQy6nuLMt9H1aZIuhcGOcZQ4", Limit = 10 },
    });
    // TODO: Handle 'response' of type SuccessEnvelope
}
catch (ApiException<FetchPlaylistVideosError> ex)
{
    if (ex.Error.TryGetErrorEnvelope(out var error))
    {
        // TODO: Handle 'error' of type ErrorEnvelope
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchPlaylistVideosRequest](src/TranscriptFetch/Requests/Transcripts/FetchPlaylistVideosRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SuccessEnvelope](src/TranscriptFetch/Models/SuccessEnvelope.cs)</code>

**OnError**: <code>[ApiException](src/TranscriptFetch/Core/Exceptions/ApiException.cs)&lt;[FetchPlaylistVideosError](src/TranscriptFetch/Errors/FetchPlaylistVideosError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BatchEnvelope&gt; FetchTranscriptsBatch(FetchTranscriptsBatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Transcripts.FetchTranscriptsBatch(new FetchTranscriptsBatchRequest
    {
        Body = new BatchRequest
        {
            VideoIds = ["dQw4w9WgXcQ", "https://www.tiktok.com/@user/video/7137723462233555205"],
            Mode = Mode1.Auto,
        },
    });
    // TODO: Handle 'response' of type BatchEnvelope
}
catch (ApiException<FetchTranscriptsBatchError> ex)
{
    if (ex.Error.TryGetErrorEnvelope(out var error))
    {
        // TODO: Handle 'error' of type ErrorEnvelope
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchTranscriptsBatchRequest](src/TranscriptFetch/Requests/Transcripts/FetchTranscriptsBatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BatchEnvelope](src/TranscriptFetch/Models/BatchEnvelope.cs)</code>

**OnError**: <code>[ApiException](src/TranscriptFetch/Core/Exceptions/ApiException.cs)&lt;[FetchTranscriptsBatchError](src/TranscriptFetch/Errors/FetchTranscriptsBatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SuccessEnvelope&gt; FetchVideoTranscript(FetchVideoTranscriptRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Transcripts.FetchVideoTranscript(new FetchVideoTranscriptRequest
    {
        Body = new VideoRequest { Video = "dQw4w9WgXcQ" },
    });
    // TODO: Handle 'response' of type SuccessEnvelope
}
catch (ApiException<FetchVideoTranscriptError> ex)
{
    if (ex.Error.TryGetErrorEnvelope(out var error))
    {
        // TODO: Handle 'error' of type ErrorEnvelope
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchVideoTranscriptRequest](src/TranscriptFetch/Requests/Transcripts/FetchVideoTranscriptRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SuccessEnvelope](src/TranscriptFetch/Models/SuccessEnvelope.cs)</code>

**OnError**: <code>[ApiException](src/TranscriptFetch/Core/Exceptions/ApiException.cs)&lt;[FetchVideoTranscriptError](src/TranscriptFetch/Errors/FetchVideoTranscriptError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;JobStatusEnvelope2&gt; GetApiV2TranscriptsJobsByJobId(GetApiV2TranscriptsJobsByJobIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Transcripts.GetApiV2TranscriptsJobsByJobId(new GetApiV2TranscriptsJobsByJobIdRequest
    {
        JobId = "some example string",
    });
    // TODO: Handle 'response' of type JobStatusEnvelope2
}
catch (ApiException<GetApiV2TranscriptsJobsByJobIdError> ex)
{
    if (ex.Error.TryGetErrorEnvelope(out var error))
    {
        // TODO: Handle 'error' of type ErrorEnvelope
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV2TranscriptsJobsByJobIdRequest](src/TranscriptFetch/Requests/Transcripts/GetApiV2TranscriptsJobsByJobIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[JobStatusEnvelope2](src/TranscriptFetch/Models/JobStatusEnvelope2.cs)</code>

**OnError**: <code>[ApiException](src/TranscriptFetch/Core/Exceptions/ApiException.cs)&lt;[GetApiV2TranscriptsJobsByJobIdError](src/TranscriptFetch/Errors/GetApiV2TranscriptsJobsByJobIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;JobStatusEnvelope&gt; GetTranscriptJob(GetTranscriptJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Transcripts.GetTranscriptJob(new GetTranscriptJobRequest
    {
        JobId = "some example string",
    });
    // TODO: Handle 'response' of type JobStatusEnvelope
}
catch (ApiException<GetTranscriptJobError> ex)
{
    if (ex.Error.TryGetErrorEnvelope(out var error))
    {
        // TODO: Handle 'error' of type ErrorEnvelope
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetTranscriptJobRequest](src/TranscriptFetch/Requests/Transcripts/GetTranscriptJobRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[JobStatusEnvelope](src/TranscriptFetch/Models/JobStatusEnvelope.cs)</code>

**OnError**: <code>[ApiException](src/TranscriptFetch/Core/Exceptions/ApiException.cs)&lt;[GetTranscriptJobError](src/TranscriptFetch/Errors/GetTranscriptJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BatchEnvelope&gt; PostApiV2TranscriptsBatch(PostApiV2TranscriptsBatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Transcripts.PostApiV2TranscriptsBatch(new PostApiV2TranscriptsBatchRequest
    {
        Body = new BatchRequest
        {
            VideoIds = ["dQw4w9WgXcQ", "https://www.tiktok.com/@user/video/7137723462233555205"],
            Mode = Mode1.Auto,
        },
    });
    // TODO: Handle 'response' of type BatchEnvelope
}
catch (ApiException<PostApiV2TranscriptsBatchError> ex)
{
    if (ex.Error.TryGetErrorEnvelope(out var error))
    {
        // TODO: Handle 'error' of type ErrorEnvelope
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV2TranscriptsBatchRequest](src/TranscriptFetch/Requests/Transcripts/PostApiV2TranscriptsBatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BatchEnvelope](src/TranscriptFetch/Models/BatchEnvelope.cs)</code>

**OnError**: <code>[ApiException](src/TranscriptFetch/Core/Exceptions/ApiException.cs)&lt;[PostApiV2TranscriptsBatchError](src/TranscriptFetch/Errors/PostApiV2TranscriptsBatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SuccessEnvelope&gt; PostApiV2TranscriptsChannel(PostApiV2TranscriptsChannelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Transcripts.PostApiV2TranscriptsChannel(new PostApiV2TranscriptsChannelRequest
    {
        Body = new ChannelRequest2 { Channel = "@lexfridman", Limit = 10 },
    });
    // TODO: Handle 'response' of type SuccessEnvelope
}
catch (ApiException<PostApiV2TranscriptsChannelError> ex)
{
    if (ex.Error.TryGetErrorEnvelope(out var error))
    {
        // TODO: Handle 'error' of type ErrorEnvelope
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV2TranscriptsChannelRequest](src/TranscriptFetch/Requests/Transcripts/PostApiV2TranscriptsChannelRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SuccessEnvelope](src/TranscriptFetch/Models/SuccessEnvelope.cs)</code>

**OnError**: <code>[ApiException](src/TranscriptFetch/Core/Exceptions/ApiException.cs)&lt;[PostApiV2TranscriptsChannelError](src/TranscriptFetch/Errors/PostApiV2TranscriptsChannelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SuccessEnvelope&gt; PostApiV2TranscriptsPlaylist(PostApiV2TranscriptsPlaylistRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Transcripts.PostApiV2TranscriptsPlaylist(new PostApiV2TranscriptsPlaylistRequest
    {
        Body = new PlaylistRequest2 { Playlist = "PLrAXtmRdnEQy6nuLMt9H1aZIuhcGOcZQ4", Limit = 10 },
    });
    // TODO: Handle 'response' of type SuccessEnvelope
}
catch (ApiException<PostApiV2TranscriptsPlaylistError> ex)
{
    if (ex.Error.TryGetErrorEnvelope(out var error))
    {
        // TODO: Handle 'error' of type ErrorEnvelope
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV2TranscriptsPlaylistRequest](src/TranscriptFetch/Requests/Transcripts/PostApiV2TranscriptsPlaylistRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SuccessEnvelope](src/TranscriptFetch/Models/SuccessEnvelope.cs)</code>

**OnError**: <code>[ApiException](src/TranscriptFetch/Core/Exceptions/ApiException.cs)&lt;[PostApiV2TranscriptsPlaylistError](src/TranscriptFetch/Errors/PostApiV2TranscriptsPlaylistError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SuccessEnvelope&gt; PostApiV2TranscriptsSearch(PostApiV2TranscriptsSearchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Transcripts.PostApiV2TranscriptsSearch(new PostApiV2TranscriptsSearchRequest
    {
        Body = new SearchRequest2 { Query = "how transformers work", Platform = Platform1.Tiktok, Limit = 10 },
    });
    // TODO: Handle 'response' of type SuccessEnvelope
}
catch (ApiException<PostApiV2TranscriptsSearchError> ex)
{
    if (ex.Error.TryGetErrorEnvelope(out var error))
    {
        // TODO: Handle 'error' of type ErrorEnvelope
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV2TranscriptsSearchRequest](src/TranscriptFetch/Requests/Transcripts/PostApiV2TranscriptsSearchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SuccessEnvelope](src/TranscriptFetch/Models/SuccessEnvelope.cs)</code>

**OnError**: <code>[ApiException](src/TranscriptFetch/Core/Exceptions/ApiException.cs)&lt;[PostApiV2TranscriptsSearchError](src/TranscriptFetch/Errors/PostApiV2TranscriptsSearchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SuccessEnvelope&gt; PostApiV2TranscriptsVideo(PostApiV2TranscriptsVideoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Transcripts.PostApiV2TranscriptsVideo(new PostApiV2TranscriptsVideoRequest
    {
        Body = new VideoRequest { Video = "dQw4w9WgXcQ" },
    });
    // TODO: Handle 'response' of type SuccessEnvelope
}
catch (ApiException<PostApiV2TranscriptsVideoError> ex)
{
    if (ex.Error.TryGetErrorEnvelope(out var error))
    {
        // TODO: Handle 'error' of type ErrorEnvelope
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV2TranscriptsVideoRequest](src/TranscriptFetch/Requests/Transcripts/PostApiV2TranscriptsVideoRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SuccessEnvelope](src/TranscriptFetch/Models/SuccessEnvelope.cs)</code>

**OnError**: <code>[ApiException](src/TranscriptFetch/Core/Exceptions/ApiException.cs)&lt;[PostApiV2TranscriptsVideoError](src/TranscriptFetch/Errors/PostApiV2TranscriptsVideoError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SuccessEnvelope&gt; SearchVideos(SearchVideosRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Transcripts.SearchVideos(new SearchVideosRequest
    {
        Body = new SearchRequest { Query = "how transformers work", Limit = 10 },
    });
    // TODO: Handle 'response' of type SuccessEnvelope
}
catch (ApiException<SearchVideosError> ex)
{
    if (ex.Error.TryGetErrorEnvelope(out var error))
    {
        // TODO: Handle 'error' of type ErrorEnvelope
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchVideosRequest](src/TranscriptFetch/Requests/Transcripts/SearchVideosRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SuccessEnvelope](src/TranscriptFetch/Models/SuccessEnvelope.cs)</code>

**OnError**: <code>[ApiException](src/TranscriptFetch/Core/Exceptions/ApiException.cs)&lt;[SearchVideosError](src/TranscriptFetch/Errors/SearchVideosError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

