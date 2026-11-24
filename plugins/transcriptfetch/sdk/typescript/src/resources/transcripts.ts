import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { batchEnvelopeSchema, type BatchEnvelope } from "../models/batch-envelope.js";
import {
  batchRequestInternalSchema,
  batchRequestSchema,
  type BatchRequest,
} from "../models/batch-request.js";
import {
  channelRequestInternalSchema,
  channelRequestSchema,
  type ChannelRequest,
} from "../models/channel-request.js";
import {
  channelRequest2InternalSchema,
  channelRequest2Schema,
  type ChannelRequest2,
} from "../models/channel-request2.js";
import { errorEnvelopeSchema, type ErrorEnvelope } from "../models/error-envelope.js";
import { jobStatusEnvelopeInternalSchema, type JobStatusEnvelope } from "../models/job-status-envelope.js";
import { jobStatusEnvelope2InternalSchema, type JobStatusEnvelope2 } from "../models/job-status-envelope2.js";
import {
  playlistRequestInternalSchema,
  playlistRequestSchema,
  type PlaylistRequest,
} from "../models/playlist-request.js";
import {
  playlistRequest2InternalSchema,
  playlistRequest2Schema,
  type PlaylistRequest2,
} from "../models/playlist-request2.js";
import {
  searchRequestInternalSchema,
  searchRequestSchema,
  type SearchRequest,
} from "../models/search-request.js";
import {
  searchRequest2InternalSchema,
  searchRequest2Schema,
  type SearchRequest2,
} from "../models/search-request2.js";
import { successEnvelopeInternalSchema, type SuccessEnvelope } from "../models/success-envelope.js";
import {
  videoRequestInternalSchema,
  videoRequestSchema,
  type VideoRequest,
} from "../models/video-request.js";
import type { Servers } from "../servers.js";

/**
 * Transcript and video-list endpoints
 */
export class Transcripts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List a channel's videos
   *
   * @remarks
   * Resolve a channel into a paginated list of videos (metadata only), newest first. Pass
   * since_video_id to get back only the uploads newer than one you've already seen - a page with
   * nothing new is free, which makes this safe to poll on a schedule.
   *
   * @returns Success
   *
   * @throws {@link Transcripts.FetchChannelVideosError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link TranscriptFetchError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  fetchChannelVideos(
    request: Transcripts.FetchChannelVideosRequest,
    options?: RequestOptions,
  ): ApiPromise<SuccessEnvelope, Transcripts.FetchChannelVideosError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/transcripts/channel"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "json", value: request.body, schema: channelRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: successEnvelopeInternalSchema },
        errorFactory: Transcripts.FetchChannelVideosError,
      },
      options,
    );
  }

  /**
   * List a playlist's videos
   *
   * @remarks
   * Resolve a playlist into a paginated list of videos (metadata only).
   *
   * @returns Success
   *
   * @throws {@link Transcripts.FetchPlaylistVideosError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link TranscriptFetchError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  fetchPlaylistVideos(
    request: Transcripts.FetchPlaylistVideosRequest,
    options?: RequestOptions,
  ): ApiPromise<SuccessEnvelope, Transcripts.FetchPlaylistVideosError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/transcripts/playlist"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "json", value: request.body, schema: playlistRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: successEnvelopeInternalSchema },
        errorFactory: Transcripts.FetchPlaylistVideosError,
      },
      options,
    );
  }

  /**
   * Fetch up to 500 transcripts in one call (plan-dependent)
   *
   * @remarks
   * Fetch a batch of transcripts concurrently. Batch size follows your plan: up to 50 entries on
   * the free tier, Basic and Pro, and up to 500 on Mega and Scale (a request over your plan's cap
   * fails whole with a clear error before anything is fetched or charged). Accepts the same inputs
   * as /transcripts/video - YouTube, TikTok and Instagram URLs as well as bare YouTube IDs. Charges
   * 1 credit per successfully fetched transcript; failed videos are free. Entries with no caption
   * track are transcribed from audio by default: those come back with outcome "processing" and a
   * job_id, cost nothing on this call, and are charged on delivery at the audio rate. Re-send the
   * same batch once they have finished and the text is returned normally - polling is optional.
   * Send mode: "captions" to keep the old behaviour and have captionless entries fail as
   * no_transcript instead.
   *
   * @returns Success
   *
   * @throws {@link Transcripts.FetchTranscriptsBatchError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link TranscriptFetchError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  fetchTranscriptsBatch(
    request: Transcripts.FetchTranscriptsBatchRequest,
    options?: RequestOptions,
  ): ApiPromise<BatchEnvelope, Transcripts.FetchTranscriptsBatchError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/transcripts/batch"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "json", value: request.body, schema: batchRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: batchEnvelopeSchema },
        errorFactory: Transcripts.FetchTranscriptsBatchError,
      },
      options,
    );
  }

  /**
   * Fetch a transcript (YouTube, TikTok, Instagram, podcast, or file URL)
   *
   * @remarks
   * Returns a transcript - text plus timestamped segments. Accepts YouTube, TikTok, and Instagram
   * URLs (or a bare TikTok video id), direct media file URLs, and podcast links (Spotify, Apple
   * Podcasts, or an RSS feed), which resolve to the episode's audio automatically and come back
   * with a podcast block naming the show and episode. Podcast transcriptions may include
   * best-effort speaker diarization: when labels were produced, each segment carries a `speaker`
   * integer (0, 1, ...) identifying who is talking and a top-level `diarized: true` marks the
   * transcript. Speaker ids are hints from voice separation, not named identification, and
   * non-podcast sources never carry them. When no captions exist the audio is transcribed
   * automatically: when we can determine the media length, media under 20 minutes simply waits (the
   * request is held open for up to 45 seconds) and returns the finished transcript, so no polling
   * is needed; when the length cannot be determined, only short-form platforms (TikTok and
   * Instagram) are held inline. Longer media, or a transcription still running when the 45-second
   * hold expires, returns 202 with a job to poll instead - the work continues either way, so the
   * same request is safe to retry and will hit the cache once it finishes. Supply callback_url to
   * have the finished transcript POSTed to you instead of polling. Every failure carries an
   * ai_fallback block saying whether captions were definitively unavailable and whether retrying
   * would work.
   *
   * @returns Success
   *
   * @throws {@link Transcripts.FetchVideoTranscriptError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link TranscriptFetchError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  fetchVideoTranscript(
    request: Transcripts.FetchVideoTranscriptRequest,
    options?: RequestOptions,
  ): ApiPromise<SuccessEnvelope, Transcripts.FetchVideoTranscriptError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/transcripts/video"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "json", value: request.body, schema: videoRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: successEnvelopeInternalSchema },
        errorFactory: Transcripts.FetchVideoTranscriptError,
      },
      options,
    );
  }

  /**
   * Poll an audio-transcription job
   *
   * @remarks
   * Returns the state of a transcription job created when a request escalated to audio. 200 for any
   * job your account owns (an unknown id, or a job belonging to someone else, is a 404): read the
   * status field, which is "processing" while the job is running, "completed" with the transcript
   * in data, or "failed" with an error. The job_id and a ready-to-use poll_url come back in the 202
   * that started it. Free to poll on our side - credits are charged once, on delivery (1 credit per
   * started minute of audio, minimum 1). NOTE for RapidAPI subscribers: every poll is still a
   * billable request on your Hub plan, so prefer callback_url, or simply re-send the original
   * request once the job has had time to finish (the result is cached, so it returns instantly and
   * the delivery is charged once, not twice). Most transcriptions never reach this endpoint at all:
   * when we can determine the media length, media under 20 minutes is returned synchronously, and
   * short-form platforms (TikTok and Instagram) are held inline even when we cannot.
   *
   * @returns Success
   *
   * @throws {@link Transcripts.GetApiV2TranscriptsJobsByJobIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link TranscriptFetchError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getApiV2TranscriptsJobsByJobId(
    request: Transcripts.GetApiV2TranscriptsJobsByJobIdRequest,
    options?: RequestOptions,
  ): ApiPromise<JobStatusEnvelope2, Transcripts.GetApiV2TranscriptsJobsByJobIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/transcripts/jobs/{jobId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "jobId", value: request.jobId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: jobStatusEnvelope2InternalSchema },
        errorFactory: Transcripts.GetApiV2TranscriptsJobsByJobIdError,
      },
      options,
    );
  }

  /**
   * Poll an audio-transcription job
   *
   * @remarks
   * Returns the state of a transcription job created when a request escalated to audio. 200 for any
   * job your account owns (an unknown id, or a job belonging to someone else, is a 404): read the
   * status field, which is "processing" while the job is running, "completed" with the transcript
   * in data, or "failed" with an error. The job_id and a ready-to-use poll_url come back in the 202
   * that started it. Free to poll on our side - credits are charged once, on delivery (1 credit per
   * started minute of audio, minimum 1). NOTE for RapidAPI subscribers: every poll is still a
   * billable request on your Hub plan, so prefer callback_url, or simply re-send the original
   * request once the job has had time to finish (the result is cached, so it returns instantly and
   * the delivery is charged once, not twice). Most transcriptions never reach this endpoint at all:
   * when we can determine the media length, media under 20 minutes is returned synchronously, and
   * short-form platforms (TikTok and Instagram) are held inline even when we cannot.
   *
   * @returns Success
   *
   * @throws {@link Transcripts.GetTranscriptJobError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link TranscriptFetchError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getTranscriptJob(
    request: Transcripts.GetTranscriptJobRequest,
    options?: RequestOptions,
  ): ApiPromise<JobStatusEnvelope, Transcripts.GetTranscriptJobError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/transcripts/jobs/{jobId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "jobId", value: request.jobId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: jobStatusEnvelopeInternalSchema },
        errorFactory: Transcripts.GetTranscriptJobError,
      },
      options,
    );
  }

  /**
   * Fetch up to 500 transcripts in one call (plan-dependent)
   *
   * @remarks
   * Fetch a batch of transcripts concurrently. Batch size follows your plan: up to 50 entries on
   * the free tier, Basic and Pro, and up to 500 on Mega and Scale (a request over your plan's cap
   * fails whole with a clear error before anything is fetched or charged). Accepts the same inputs
   * as /transcripts/video - YouTube, TikTok and Instagram URLs as well as bare YouTube IDs. Charges
   * 1 credit per successfully fetched transcript; failed videos are free. Entries with no caption
   * track are transcribed from audio by default: those come back with outcome "processing" and a
   * job_id, cost nothing on this call, and are charged on delivery at the audio rate. Re-send the
   * same batch once they have finished and the text is returned normally - polling is optional.
   * Send mode: "captions" to keep the old behaviour and have captionless entries fail as
   * no_transcript instead.
   *
   * @returns Success
   *
   * @throws {@link Transcripts.PostApiV2TranscriptsBatchError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link TranscriptFetchError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  postApiV2TranscriptsBatch(
    request: Transcripts.PostApiV2TranscriptsBatchRequest,
    options?: RequestOptions,
  ): ApiPromise<BatchEnvelope, Transcripts.PostApiV2TranscriptsBatchError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/transcripts/batch"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "json", value: request.body, schema: batchRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: batchEnvelopeSchema },
        errorFactory: Transcripts.PostApiV2TranscriptsBatchError,
      },
      options,
    );
  }

  /**
   * List a channel's, profile's, show's, or feed's items
   *
   * @remarks
   * Resolve a creator or show into a paginated list of videos or episodes (metadata only), newest
   * first. The platform is read from the input: a YouTube channel, a TikTok or Instagram profile
   * URL, a Spotify or Apple Podcasts show URL, or any podcast RSS/Atom feed URL. Every row's url is
   * accepted by the transcript and batch endpoints as-is. Pass since_video_id to get back only the
   * items newer than one you've already seen - a page with nothing new is free, which makes this
   * safe to poll on a schedule.
   *
   * @returns Success
   *
   * @throws {@link Transcripts.PostApiV2TranscriptsChannelError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link TranscriptFetchError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  postApiV2TranscriptsChannel(
    request: Transcripts.PostApiV2TranscriptsChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<SuccessEnvelope, Transcripts.PostApiV2TranscriptsChannelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/transcripts/channel"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "json", value: request.body, schema: channelRequest2InternalSchema },
      },
      {
        success: { kind: "json", schema: successEnvelopeInternalSchema },
        errorFactory: Transcripts.PostApiV2TranscriptsChannelError,
      },
      options,
    );
  }

  /**
   * List a playlist's videos or episodes
   *
   * @remarks
   * Resolve a playlist into a paginated list of videos or episodes (metadata only). The platform is
   * read from the input: a YouTube playlist, a TikTok playlist URL, or a Spotify playlist URL.
   * Instagram and Apple Podcasts have no public playlists; list the profile or show through the
   * channel endpoint instead.
   *
   * @returns Success
   *
   * @throws {@link Transcripts.PostApiV2TranscriptsPlaylistError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link TranscriptFetchError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  postApiV2TranscriptsPlaylist(
    request: Transcripts.PostApiV2TranscriptsPlaylistRequest,
    options?: RequestOptions,
  ): ApiPromise<SuccessEnvelope, Transcripts.PostApiV2TranscriptsPlaylistError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/transcripts/playlist"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "json", value: request.body, schema: playlistRequest2InternalSchema },
      },
      {
        success: { kind: "json", schema: successEnvelopeInternalSchema },
        errorFactory: Transcripts.PostApiV2TranscriptsPlaylistError,
      },
      options,
    );
  }

  /**
   * Search for videos or episodes
   *
   * @remarks
   * Resolve a keyword search into a paginated list of videos or podcast episodes (metadata only).
   * Searches YouTube by default; set platform to search TikTok, Instagram, Spotify, Apple Podcasts,
   * or the open podcast index instead. Every row carries a url the transcript endpoint accepts
   * unchanged, plus duration and publish time where the source provides them.
   *
   * @returns Success
   *
   * @throws {@link Transcripts.PostApiV2TranscriptsSearchError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link TranscriptFetchError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  postApiV2TranscriptsSearch(
    request: Transcripts.PostApiV2TranscriptsSearchRequest,
    options?: RequestOptions,
  ): ApiPromise<SuccessEnvelope, Transcripts.PostApiV2TranscriptsSearchError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/transcripts/search"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "json", value: request.body, schema: searchRequest2InternalSchema },
      },
      {
        success: { kind: "json", schema: successEnvelopeInternalSchema },
        errorFactory: Transcripts.PostApiV2TranscriptsSearchError,
      },
      options,
    );
  }

  /**
   * Fetch a transcript (YouTube, TikTok, Instagram, podcast, or file URL)
   *
   * @remarks
   * Returns a transcript - text plus timestamped segments. Accepts YouTube, TikTok, and Instagram
   * URLs (or a bare TikTok video id), direct media file URLs, and podcast links (Spotify, Apple
   * Podcasts, or an RSS feed), which resolve to the episode's audio automatically and come back
   * with a podcast block naming the show and episode. Podcast transcriptions may include
   * best-effort speaker diarization: when labels were produced, each segment carries a `speaker`
   * integer (0, 1, ...) identifying who is talking and a top-level `diarized: true` marks the
   * transcript. Speaker ids are hints from voice separation, not named identification, and
   * non-podcast sources never carry them. When no captions exist the audio is transcribed
   * automatically: when we can determine the media length, media under 20 minutes simply waits (the
   * request is held open for up to 45 seconds) and returns the finished transcript, so no polling
   * is needed; when the length cannot be determined, only short-form platforms (TikTok and
   * Instagram) are held inline. Longer media, or a transcription still running when the 45-second
   * hold expires, returns 202 with a job to poll instead - the work continues either way, so the
   * same request is safe to retry and will hit the cache once it finishes. Supply callback_url to
   * have the finished transcript POSTed to you instead of polling. Every failure carries an
   * ai_fallback block saying whether captions were definitively unavailable and whether retrying
   * would work.
   *
   * @returns Success
   *
   * @throws {@link Transcripts.PostApiV2TranscriptsVideoError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link TranscriptFetchError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  postApiV2TranscriptsVideo(
    request: Transcripts.PostApiV2TranscriptsVideoRequest,
    options?: RequestOptions,
  ): ApiPromise<SuccessEnvelope, Transcripts.PostApiV2TranscriptsVideoError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/transcripts/video"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "json", value: request.body, schema: videoRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: successEnvelopeInternalSchema },
        errorFactory: Transcripts.PostApiV2TranscriptsVideoError,
      },
      options,
    );
  }

  /**
   * Search YouTube for videos
   *
   * @remarks
   * Resolve a keyword search into a paginated list of videos (metadata only).
   *
   * @returns Success
   *
   * @throws {@link Transcripts.SearchVideosError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link TranscriptFetchError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  searchVideos(
    request: Transcripts.SearchVideosRequest,
    options?: RequestOptions,
  ): ApiPromise<SuccessEnvelope, Transcripts.SearchVideosError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/transcripts/search"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "json", value: request.body, schema: searchRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: successEnvelopeInternalSchema },
        errorFactory: Transcripts.SearchVideosError,
      },
      options,
    );
  }
}

export namespace Transcripts {
  export type FetchChannelVideosRequest = {
    /**
     * Unique key (≤255 chars) to safely retry a request without being charged twice. Replays return
     * the original response with `Idempotent-Replayed: true`. Reusing a key with a different body
     * is a 409 conflict.
     */
    idempotencyKey?: string;
    body: ChannelRequest;
  };

  export const fetchChannelVideosRequestSchema: Schema<FetchChannelVideosRequest> = s.lazySchema(() =>
    s.object<FetchChannelVideosRequest>({
      idempotencyKey: s.optional(s.string().check(s.maxLength(255))),
      body: channelRequestSchema,
    }),
  );

  export class FetchChannelVideosError extends ApiError {
    declare readonly payload:
      | Declared<"errorEnvelope", ErrorEnvelope>
      | Declared<"errorEnvelope2", ErrorEnvelope>
      | Declared<"errorEnvelope3", ErrorEnvelope>
      | Declared<"errorEnvelope4", ErrorEnvelope>
      | Declared<"errorEnvelope5", ErrorEnvelope>
      | Declared<"errorEnvelope6", ErrorEnvelope>
      | Declared<"errorEnvelope7", ErrorEnvelope>
      | Declared<"errorEnvelope8", ErrorEnvelope>
      | Undeclared;

    static readonly errors: ErrorDecoders<FetchChannelVideosError> = [
      { on: 400, kind: "errorEnvelope", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 401, kind: "errorEnvelope2", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 402, kind: "errorEnvelope3", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 409, kind: "errorEnvelope4", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 422, kind: "errorEnvelope5", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 429, kind: "errorEnvelope6", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 502, kind: "errorEnvelope7", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 503, kind: "errorEnvelope8", decode: { kind: "json", schema: errorEnvelopeSchema } },
    ];
  }

  export type FetchPlaylistVideosRequest = {
    /**
     * Unique key (≤255 chars) to safely retry a request without being charged twice. Replays return
     * the original response with `Idempotent-Replayed: true`. Reusing a key with a different body
     * is a 409 conflict.
     */
    idempotencyKey?: string;
    body: PlaylistRequest;
  };

  export const fetchPlaylistVideosRequestSchema: Schema<FetchPlaylistVideosRequest> = s.lazySchema(() =>
    s.object<FetchPlaylistVideosRequest>({
      idempotencyKey: s.optional(s.string().check(s.maxLength(255))),
      body: playlistRequestSchema,
    }),
  );

  export class FetchPlaylistVideosError extends ApiError {
    declare readonly payload:
      | Declared<"errorEnvelope", ErrorEnvelope>
      | Declared<"errorEnvelope2", ErrorEnvelope>
      | Declared<"errorEnvelope3", ErrorEnvelope>
      | Declared<"errorEnvelope4", ErrorEnvelope>
      | Declared<"errorEnvelope5", ErrorEnvelope>
      | Declared<"errorEnvelope6", ErrorEnvelope>
      | Declared<"errorEnvelope7", ErrorEnvelope>
      | Declared<"errorEnvelope8", ErrorEnvelope>
      | Undeclared;

    static readonly errors: ErrorDecoders<FetchPlaylistVideosError> = [
      { on: 400, kind: "errorEnvelope", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 401, kind: "errorEnvelope2", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 402, kind: "errorEnvelope3", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 409, kind: "errorEnvelope4", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 422, kind: "errorEnvelope5", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 429, kind: "errorEnvelope6", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 502, kind: "errorEnvelope7", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 503, kind: "errorEnvelope8", decode: { kind: "json", schema: errorEnvelopeSchema } },
    ];
  }

  export type FetchTranscriptsBatchRequest = {
    /**
     * Unique key (≤255 chars) to safely retry a request without being charged twice. Replays return
     * the original response with `Idempotent-Replayed: true`. Reusing a key with a different body
     * is a 409 conflict.
     */
    idempotencyKey?: string;
    body: BatchRequest;
  };

  export const fetchTranscriptsBatchRequestSchema: Schema<FetchTranscriptsBatchRequest> = s.lazySchema(() =>
    s.object<FetchTranscriptsBatchRequest>({
      idempotencyKey: s.optional(s.string().check(s.maxLength(255))),
      body: batchRequestSchema,
    }),
  );

  export class FetchTranscriptsBatchError extends ApiError {
    declare readonly payload:
      | Declared<"errorEnvelope", ErrorEnvelope>
      | Declared<"errorEnvelope2", ErrorEnvelope>
      | Declared<"errorEnvelope3", ErrorEnvelope>
      | Declared<"errorEnvelope4", ErrorEnvelope>
      | Declared<"errorEnvelope5", ErrorEnvelope>
      | Undeclared;

    static readonly errors: ErrorDecoders<FetchTranscriptsBatchError> = [
      { on: 400, kind: "errorEnvelope", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 401, kind: "errorEnvelope2", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 402, kind: "errorEnvelope3", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 409, kind: "errorEnvelope4", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 429, kind: "errorEnvelope5", decode: { kind: "json", schema: errorEnvelopeSchema } },
    ];
  }

  export type FetchVideoTranscriptRequest = {
    /**
     * Unique key (≤255 chars) to safely retry a request without being charged twice. Replays return
     * the original response with `Idempotent-Replayed: true`. Reusing a key with a different body
     * is a 409 conflict.
     */
    idempotencyKey?: string;
    body: VideoRequest;
  };

  export const fetchVideoTranscriptRequestSchema: Schema<FetchVideoTranscriptRequest> = s.lazySchema(() =>
    s.object<FetchVideoTranscriptRequest>({
      idempotencyKey: s.optional(s.string().check(s.maxLength(255))),
      body: videoRequestSchema,
    }),
  );

  export class FetchVideoTranscriptError extends ApiError {
    declare readonly payload:
      | Declared<"errorEnvelope", ErrorEnvelope>
      | Declared<"errorEnvelope2", ErrorEnvelope>
      | Declared<"errorEnvelope3", ErrorEnvelope>
      | Declared<"errorEnvelope4", ErrorEnvelope>
      | Declared<"errorEnvelope5", ErrorEnvelope>
      | Declared<"errorEnvelope6", ErrorEnvelope>
      | Declared<"errorEnvelope7", ErrorEnvelope>
      | Declared<"errorEnvelope8", ErrorEnvelope>
      | Undeclared;

    static readonly errors: ErrorDecoders<FetchVideoTranscriptError> = [
      { on: 400, kind: "errorEnvelope", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 401, kind: "errorEnvelope2", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 402, kind: "errorEnvelope3", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 409, kind: "errorEnvelope4", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 422, kind: "errorEnvelope5", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 429, kind: "errorEnvelope6", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 502, kind: "errorEnvelope7", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 503, kind: "errorEnvelope8", decode: { kind: "json", schema: errorEnvelopeSchema } },
    ];
  }

  export type GetApiV2TranscriptsJobsByJobIdRequest = {
    jobId: string;
  };

  export class GetApiV2TranscriptsJobsByJobIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorEnvelope", ErrorEnvelope>
      | Declared<"errorEnvelope2", ErrorEnvelope>
      | Declared<"errorEnvelope3", ErrorEnvelope>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV2TranscriptsJobsByJobIdError> = [
      { on: 401, kind: "errorEnvelope", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 404, kind: "errorEnvelope2", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 429, kind: "errorEnvelope3", decode: { kind: "json", schema: errorEnvelopeSchema } },
    ];
  }

  export type GetTranscriptJobRequest = {
    jobId: string;
  };

  export class GetTranscriptJobError extends ApiError {
    declare readonly payload:
      | Declared<"errorEnvelope", ErrorEnvelope>
      | Declared<"errorEnvelope2", ErrorEnvelope>
      | Declared<"errorEnvelope3", ErrorEnvelope>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTranscriptJobError> = [
      { on: 401, kind: "errorEnvelope", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 404, kind: "errorEnvelope2", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 429, kind: "errorEnvelope3", decode: { kind: "json", schema: errorEnvelopeSchema } },
    ];
  }

  export type PostApiV2TranscriptsBatchRequest = {
    /**
     * Unique key (≤255 chars) to safely retry a request without being charged twice. Replays return
     * the original response with `Idempotent-Replayed: true`. Reusing a key with a different body
     * is a 409 conflict.
     */
    idempotencyKey?: string;
    body: BatchRequest;
  };

  export const postApiV2TranscriptsBatchRequestSchema: Schema<PostApiV2TranscriptsBatchRequest> =
    s.lazySchema(() =>
      s.object<PostApiV2TranscriptsBatchRequest>({
        idempotencyKey: s.optional(s.string().check(s.maxLength(255))),
        body: batchRequestSchema,
      }),
    );

  export class PostApiV2TranscriptsBatchError extends ApiError {
    declare readonly payload:
      | Declared<"errorEnvelope", ErrorEnvelope>
      | Declared<"errorEnvelope2", ErrorEnvelope>
      | Declared<"errorEnvelope3", ErrorEnvelope>
      | Declared<"errorEnvelope4", ErrorEnvelope>
      | Declared<"errorEnvelope5", ErrorEnvelope>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV2TranscriptsBatchError> = [
      { on: 400, kind: "errorEnvelope", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 401, kind: "errorEnvelope2", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 402, kind: "errorEnvelope3", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 409, kind: "errorEnvelope4", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 429, kind: "errorEnvelope5", decode: { kind: "json", schema: errorEnvelopeSchema } },
    ];
  }

  export type PostApiV2TranscriptsChannelRequest = {
    /**
     * Unique key (≤255 chars) to safely retry a request without being charged twice. Replays return
     * the original response with `Idempotent-Replayed: true`. Reusing a key with a different body
     * is a 409 conflict.
     */
    idempotencyKey?: string;
    body: ChannelRequest2;
  };

  export const postApiV2TranscriptsChannelRequestSchema: Schema<PostApiV2TranscriptsChannelRequest> =
    s.lazySchema(() =>
      s.object<PostApiV2TranscriptsChannelRequest>({
        idempotencyKey: s.optional(s.string().check(s.maxLength(255))),
        body: channelRequest2Schema,
      }),
    );

  export class PostApiV2TranscriptsChannelError extends ApiError {
    declare readonly payload:
      | Declared<"errorEnvelope", ErrorEnvelope>
      | Declared<"errorEnvelope2", ErrorEnvelope>
      | Declared<"errorEnvelope3", ErrorEnvelope>
      | Declared<"errorEnvelope4", ErrorEnvelope>
      | Declared<"errorEnvelope5", ErrorEnvelope>
      | Declared<"errorEnvelope6", ErrorEnvelope>
      | Declared<"errorEnvelope7", ErrorEnvelope>
      | Declared<"errorEnvelope8", ErrorEnvelope>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV2TranscriptsChannelError> = [
      { on: 400, kind: "errorEnvelope", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 401, kind: "errorEnvelope2", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 402, kind: "errorEnvelope3", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 409, kind: "errorEnvelope4", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 422, kind: "errorEnvelope5", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 429, kind: "errorEnvelope6", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 502, kind: "errorEnvelope7", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 503, kind: "errorEnvelope8", decode: { kind: "json", schema: errorEnvelopeSchema } },
    ];
  }

  export type PostApiV2TranscriptsPlaylistRequest = {
    /**
     * Unique key (≤255 chars) to safely retry a request without being charged twice. Replays return
     * the original response with `Idempotent-Replayed: true`. Reusing a key with a different body
     * is a 409 conflict.
     */
    idempotencyKey?: string;
    body: PlaylistRequest2;
  };

  export const postApiV2TranscriptsPlaylistRequestSchema: Schema<PostApiV2TranscriptsPlaylistRequest> =
    s.lazySchema(() =>
      s.object<PostApiV2TranscriptsPlaylistRequest>({
        idempotencyKey: s.optional(s.string().check(s.maxLength(255))),
        body: playlistRequest2Schema,
      }),
    );

  export class PostApiV2TranscriptsPlaylistError extends ApiError {
    declare readonly payload:
      | Declared<"errorEnvelope", ErrorEnvelope>
      | Declared<"errorEnvelope2", ErrorEnvelope>
      | Declared<"errorEnvelope3", ErrorEnvelope>
      | Declared<"errorEnvelope4", ErrorEnvelope>
      | Declared<"errorEnvelope5", ErrorEnvelope>
      | Declared<"errorEnvelope6", ErrorEnvelope>
      | Declared<"errorEnvelope7", ErrorEnvelope>
      | Declared<"errorEnvelope8", ErrorEnvelope>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV2TranscriptsPlaylistError> = [
      { on: 400, kind: "errorEnvelope", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 401, kind: "errorEnvelope2", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 402, kind: "errorEnvelope3", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 409, kind: "errorEnvelope4", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 422, kind: "errorEnvelope5", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 429, kind: "errorEnvelope6", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 502, kind: "errorEnvelope7", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 503, kind: "errorEnvelope8", decode: { kind: "json", schema: errorEnvelopeSchema } },
    ];
  }

  export type PostApiV2TranscriptsSearchRequest = {
    /**
     * Unique key (≤255 chars) to safely retry a request without being charged twice. Replays return
     * the original response with `Idempotent-Replayed: true`. Reusing a key with a different body
     * is a 409 conflict.
     */
    idempotencyKey?: string;
    body: SearchRequest2;
  };

  export const postApiV2TranscriptsSearchRequestSchema: Schema<PostApiV2TranscriptsSearchRequest> =
    s.lazySchema(() =>
      s.object<PostApiV2TranscriptsSearchRequest>({
        idempotencyKey: s.optional(s.string().check(s.maxLength(255))),
        body: searchRequest2Schema,
      }),
    );

  export class PostApiV2TranscriptsSearchError extends ApiError {
    declare readonly payload:
      | Declared<"errorEnvelope", ErrorEnvelope>
      | Declared<"errorEnvelope2", ErrorEnvelope>
      | Declared<"errorEnvelope3", ErrorEnvelope>
      | Declared<"errorEnvelope4", ErrorEnvelope>
      | Declared<"errorEnvelope5", ErrorEnvelope>
      | Declared<"errorEnvelope6", ErrorEnvelope>
      | Declared<"errorEnvelope7", ErrorEnvelope>
      | Declared<"errorEnvelope8", ErrorEnvelope>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV2TranscriptsSearchError> = [
      { on: 400, kind: "errorEnvelope", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 401, kind: "errorEnvelope2", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 402, kind: "errorEnvelope3", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 409, kind: "errorEnvelope4", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 422, kind: "errorEnvelope5", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 429, kind: "errorEnvelope6", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 502, kind: "errorEnvelope7", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 503, kind: "errorEnvelope8", decode: { kind: "json", schema: errorEnvelopeSchema } },
    ];
  }

  export type PostApiV2TranscriptsVideoRequest = {
    /**
     * Unique key (≤255 chars) to safely retry a request without being charged twice. Replays return
     * the original response with `Idempotent-Replayed: true`. Reusing a key with a different body
     * is a 409 conflict.
     */
    idempotencyKey?: string;
    body: VideoRequest;
  };

  export const postApiV2TranscriptsVideoRequestSchema: Schema<PostApiV2TranscriptsVideoRequest> =
    s.lazySchema(() =>
      s.object<PostApiV2TranscriptsVideoRequest>({
        idempotencyKey: s.optional(s.string().check(s.maxLength(255))),
        body: videoRequestSchema,
      }),
    );

  export class PostApiV2TranscriptsVideoError extends ApiError {
    declare readonly payload:
      | Declared<"errorEnvelope", ErrorEnvelope>
      | Declared<"errorEnvelope2", ErrorEnvelope>
      | Declared<"errorEnvelope3", ErrorEnvelope>
      | Declared<"errorEnvelope4", ErrorEnvelope>
      | Declared<"errorEnvelope5", ErrorEnvelope>
      | Declared<"errorEnvelope6", ErrorEnvelope>
      | Declared<"errorEnvelope7", ErrorEnvelope>
      | Declared<"errorEnvelope8", ErrorEnvelope>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV2TranscriptsVideoError> = [
      { on: 400, kind: "errorEnvelope", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 401, kind: "errorEnvelope2", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 402, kind: "errorEnvelope3", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 409, kind: "errorEnvelope4", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 422, kind: "errorEnvelope5", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 429, kind: "errorEnvelope6", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 502, kind: "errorEnvelope7", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 503, kind: "errorEnvelope8", decode: { kind: "json", schema: errorEnvelopeSchema } },
    ];
  }

  export type SearchVideosRequest = {
    /**
     * Unique key (≤255 chars) to safely retry a request without being charged twice. Replays return
     * the original response with `Idempotent-Replayed: true`. Reusing a key with a different body
     * is a 409 conflict.
     */
    idempotencyKey?: string;
    body: SearchRequest;
  };

  export const searchVideosRequestSchema: Schema<SearchVideosRequest> = s.lazySchema(() =>
    s.object<SearchVideosRequest>({
      idempotencyKey: s.optional(s.string().check(s.maxLength(255))),
      body: searchRequestSchema,
    }),
  );

  export class SearchVideosError extends ApiError {
    declare readonly payload:
      | Declared<"errorEnvelope", ErrorEnvelope>
      | Declared<"errorEnvelope2", ErrorEnvelope>
      | Declared<"errorEnvelope3", ErrorEnvelope>
      | Declared<"errorEnvelope4", ErrorEnvelope>
      | Declared<"errorEnvelope5", ErrorEnvelope>
      | Declared<"errorEnvelope6", ErrorEnvelope>
      | Declared<"errorEnvelope7", ErrorEnvelope>
      | Declared<"errorEnvelope8", ErrorEnvelope>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchVideosError> = [
      { on: 400, kind: "errorEnvelope", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 401, kind: "errorEnvelope2", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 402, kind: "errorEnvelope3", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 409, kind: "errorEnvelope4", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 422, kind: "errorEnvelope5", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 429, kind: "errorEnvelope6", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 502, kind: "errorEnvelope7", decode: { kind: "json", schema: errorEnvelopeSchema } },
      { on: 503, kind: "errorEnvelope8", decode: { kind: "json", schema: errorEnvelopeSchema } },
    ];
  }
}
