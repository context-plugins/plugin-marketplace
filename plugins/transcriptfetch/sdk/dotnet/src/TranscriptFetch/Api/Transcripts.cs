using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using TranscriptFetch.Core;
using TranscriptFetch.Core.Exceptions;
using TranscriptFetch.Core.Models;
using TranscriptFetch.Core.Request;
using TranscriptFetch.Core.Response;
using TranscriptFetch.Errors;
using TranscriptFetch.Models;
using TranscriptFetch.Requests.Transcripts;

namespace TranscriptFetch.Api;

/// <summary>
/// Transcript and video-list endpoints
/// </summary>
public sealed class Transcripts
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Transcripts(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List a channel's videos
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SuccessEnvelope"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FetchChannelVideosError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Resolve a channel into a paginated list of videos (metadata only), newest first. Pass since_video_id to get back only the uploads newer than one you've already seen - a page with nothing new is free, which makes this safe to poll on a schedule.
    /// </remarks>
    public Task<SuccessEnvelope> FetchChannelVideos(FetchChannelVideosRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/transcripts/channel"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", request.IdempotencyKey)],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SuccessEnvelope>(),
            FetchChannelVideosError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List a playlist's videos
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SuccessEnvelope"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FetchPlaylistVideosError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Resolve a playlist into a paginated list of videos (metadata only).
    /// </remarks>
    public Task<SuccessEnvelope> FetchPlaylistVideos(FetchPlaylistVideosRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/transcripts/playlist"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", request.IdempotencyKey)],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SuccessEnvelope>(),
            FetchPlaylistVideosError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch up to 500 transcripts in one call (plan-dependent)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BatchEnvelope"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FetchTranscriptsBatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetch a batch of transcripts concurrently. Batch size follows your plan: up to 50 entries on the free tier, Basic and Pro, and up to 500 on Mega and Scale (a request over your plan's cap fails whole with a clear error before anything is fetched or charged). Accepts the same inputs as /transcripts/video - YouTube, TikTok and Instagram URLs as well as bare YouTube IDs. Charges 1 credit per successfully fetched transcript; failed videos are free. Entries with no caption track are transcribed from audio by default: those come back with outcome "processing" and a job_id, cost nothing on this call, and are charged on delivery at the audio rate. Re-send the same batch once they have finished and the text is returned normally - polling is optional. Send mode: "captions" to keep the old behaviour and have captionless entries fail as no_transcript instead.
    /// </remarks>
    public Task<BatchEnvelope> FetchTranscriptsBatch(FetchTranscriptsBatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/transcripts/batch"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", request.IdempotencyKey)],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BatchEnvelope>(),
            FetchTranscriptsBatchError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch a transcript (YouTube, TikTok, Instagram, podcast, or file URL)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SuccessEnvelope"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FetchVideoTranscriptError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a transcript - text plus timestamped segments. Accepts YouTube, TikTok, and Instagram URLs (or a bare TikTok video id), direct media file URLs, and podcast links (Spotify, Apple Podcasts, or an RSS feed), which resolve to the episode's audio automatically and come back with a podcast block naming the show and episode. Podcast transcriptions may include best-effort speaker diarization: when labels were produced, each segment carries a <c>speaker</c> integer (0, 1, ...) identifying who is talking and a top-level <c>diarized: true</c> marks the transcript. Speaker ids are hints from voice separation, not named identification, and non-podcast sources never carry them. When no captions exist the audio is transcribed automatically: when we can determine the media length, media under 20 minutes simply waits (the request is held open for up to 45 seconds) and returns the finished transcript, so no polling is needed; when the length cannot be determined, only short-form platforms (TikTok and Instagram) are held inline. Longer media, or a transcription still running when the 45-second hold expires, returns 202 with a job to poll instead - the work continues either way, so the same request is safe to retry and will hit the cache once it finishes. Supply callback_url to have the finished transcript POSTed to you instead of polling. Every failure carries an ai_fallback block saying whether captions were definitively unavailable and whether retrying would work.
    /// </remarks>
    public Task<SuccessEnvelope> FetchVideoTranscript(FetchVideoTranscriptRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/transcripts/video"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", request.IdempotencyKey)],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SuccessEnvelope>(),
            FetchVideoTranscriptError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Poll an audio-transcription job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="JobStatusEnvelope2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV2TranscriptsJobsByJobIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the state of a transcription job created when a request escalated to audio. 200 for any job your account owns (an unknown id, or a job belonging to someone else, is a 404): read the status field, which is "processing" while the job is running, "completed" with the transcript in data, or "failed" with an error. The job_id and a ready-to-use poll_url come back in the 202 that started it. Free to poll on our side - credits are charged once, on delivery (1 credit per started minute of audio, minimum 1). NOTE for RapidAPI subscribers: every poll is still a billable request on your Hub plan, so prefer callback_url, or simply re-send the original request once the job has had time to finish (the result is cached, so it returns instantly and the delivery is charged once, not twice). Most transcriptions never reach this endpoint at all: when we can determine the media length, media under 20 minutes is returned synchronously, and short-form platforms (TikTok and Instagram) are held inline even when we cannot.
    /// </remarks>
    public Task<JobStatusEnvelope2> GetApiV2TranscriptsJobsByJobId(GetApiV2TranscriptsJobsByJobIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/transcripts/jobs/{jobId}"),
            [new TemplateParam("jobId", request.JobId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<JobStatusEnvelope2>(),
            GetApiV2TranscriptsJobsByJobIdError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Poll an audio-transcription job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="JobStatusEnvelope"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTranscriptJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the state of a transcription job created when a request escalated to audio. 200 for any job your account owns (an unknown id, or a job belonging to someone else, is a 404): read the status field, which is "processing" while the job is running, "completed" with the transcript in data, or "failed" with an error. The job_id and a ready-to-use poll_url come back in the 202 that started it. Free to poll on our side - credits are charged once, on delivery (1 credit per started minute of audio, minimum 1). NOTE for RapidAPI subscribers: every poll is still a billable request on your Hub plan, so prefer callback_url, or simply re-send the original request once the job has had time to finish (the result is cached, so it returns instantly and the delivery is charged once, not twice). Most transcriptions never reach this endpoint at all: when we can determine the media length, media under 20 minutes is returned synchronously, and short-form platforms (TikTok and Instagram) are held inline even when we cannot.
    /// </remarks>
    public Task<JobStatusEnvelope> GetTranscriptJob(GetTranscriptJobRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/transcripts/jobs/{jobId}"),
            [new TemplateParam("jobId", request.JobId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<JobStatusEnvelope>(),
            GetTranscriptJobError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch up to 500 transcripts in one call (plan-dependent)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BatchEnvelope"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV2TranscriptsBatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetch a batch of transcripts concurrently. Batch size follows your plan: up to 50 entries on the free tier, Basic and Pro, and up to 500 on Mega and Scale (a request over your plan's cap fails whole with a clear error before anything is fetched or charged). Accepts the same inputs as /transcripts/video - YouTube, TikTok and Instagram URLs as well as bare YouTube IDs. Charges 1 credit per successfully fetched transcript; failed videos are free. Entries with no caption track are transcribed from audio by default: those come back with outcome "processing" and a job_id, cost nothing on this call, and are charged on delivery at the audio rate. Re-send the same batch once they have finished and the text is returned normally - polling is optional. Send mode: "captions" to keep the old behaviour and have captionless entries fail as no_transcript instead.
    /// </remarks>
    public Task<BatchEnvelope> PostApiV2TranscriptsBatch(PostApiV2TranscriptsBatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/transcripts/batch"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", request.IdempotencyKey)],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BatchEnvelope>(),
            PostApiV2TranscriptsBatchError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List a channel's, profile's, show's, or feed's items
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SuccessEnvelope"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV2TranscriptsChannelError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Resolve a creator or show into a paginated list of videos or episodes (metadata only), newest first. The platform is read from the input: a YouTube channel, a TikTok or Instagram profile URL, a Spotify or Apple Podcasts show URL, or any podcast RSS/Atom feed URL. Every row's url is accepted by the transcript and batch endpoints as-is. Pass since_video_id to get back only the items newer than one you've already seen - a page with nothing new is free, which makes this safe to poll on a schedule.
    /// </remarks>
    public Task<SuccessEnvelope> PostApiV2TranscriptsChannel(PostApiV2TranscriptsChannelRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/transcripts/channel"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", request.IdempotencyKey)],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SuccessEnvelope>(),
            PostApiV2TranscriptsChannelError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List a playlist's videos or episodes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SuccessEnvelope"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV2TranscriptsPlaylistError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Resolve a playlist into a paginated list of videos or episodes (metadata only). The platform is read from the input: a YouTube playlist, a TikTok playlist URL, or a Spotify playlist URL. Instagram and Apple Podcasts have no public playlists; list the profile or show through the channel endpoint instead.
    /// </remarks>
    public Task<SuccessEnvelope> PostApiV2TranscriptsPlaylist(PostApiV2TranscriptsPlaylistRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/transcripts/playlist"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", request.IdempotencyKey)],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SuccessEnvelope>(),
            PostApiV2TranscriptsPlaylistError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search for videos or episodes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SuccessEnvelope"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV2TranscriptsSearchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Resolve a keyword search into a paginated list of videos or podcast episodes (metadata only). Searches YouTube by default; set platform to search TikTok, Instagram, Spotify, Apple Podcasts, or the open podcast index instead. Every row carries a url the transcript endpoint accepts unchanged, plus duration and publish time where the source provides them.
    /// </remarks>
    public Task<SuccessEnvelope> PostApiV2TranscriptsSearch(PostApiV2TranscriptsSearchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/transcripts/search"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", request.IdempotencyKey)],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SuccessEnvelope>(),
            PostApiV2TranscriptsSearchError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch a transcript (YouTube, TikTok, Instagram, podcast, or file URL)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SuccessEnvelope"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV2TranscriptsVideoError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a transcript - text plus timestamped segments. Accepts YouTube, TikTok, and Instagram URLs (or a bare TikTok video id), direct media file URLs, and podcast links (Spotify, Apple Podcasts, or an RSS feed), which resolve to the episode's audio automatically and come back with a podcast block naming the show and episode. Podcast transcriptions may include best-effort speaker diarization: when labels were produced, each segment carries a <c>speaker</c> integer (0, 1, ...) identifying who is talking and a top-level <c>diarized: true</c> marks the transcript. Speaker ids are hints from voice separation, not named identification, and non-podcast sources never carry them. When no captions exist the audio is transcribed automatically: when we can determine the media length, media under 20 minutes simply waits (the request is held open for up to 45 seconds) and returns the finished transcript, so no polling is needed; when the length cannot be determined, only short-form platforms (TikTok and Instagram) are held inline. Longer media, or a transcription still running when the 45-second hold expires, returns 202 with a job to poll instead - the work continues either way, so the same request is safe to retry and will hit the cache once it finishes. Supply callback_url to have the finished transcript POSTed to you instead of polling. Every failure carries an ai_fallback block saying whether captions were definitively unavailable and whether retrying would work.
    /// </remarks>
    public Task<SuccessEnvelope> PostApiV2TranscriptsVideo(PostApiV2TranscriptsVideoRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/transcripts/video"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", request.IdempotencyKey)],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SuccessEnvelope>(),
            PostApiV2TranscriptsVideoError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search YouTube for videos
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SuccessEnvelope"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchVideosError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Resolve a keyword search into a paginated list of videos (metadata only).
    /// </remarks>
    public Task<SuccessEnvelope> SearchVideos(SearchVideosRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/transcripts/search"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", request.IdempotencyKey)],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SuccessEnvelope>(),
            SearchVideosError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
