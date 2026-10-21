import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { FileInput } from "../core/binary.js";
import type { EventStream } from "../core/event-stream.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  audioTranscriptionResultSchema,
  type AudioTranscriptionResult,
} from "../models/audio-transcription-result.js";
import {
  streamedAudioTranscriptionResultSchema,
  type StreamedAudioTranscriptionResult,
} from "../models/streamed-audio-transcription-result.js";
import { chunkingStrategy1Schema, type ChunkingStrategy1 } from "../models/unions/chunking-strategy1.js";
import { languageSchema, type Language } from "../models/unions/language.js";
import { model1Schema, type Model1 } from "../models/unions/model1.js";
import { stream6Schema, type Stream6 } from "../models/unions/stream6.js";
import { temperature12Schema, type Temperature12 } from "../models/unions/temperature12.js";
import type { Servers } from "../servers.js";

export class ContainerAudio {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Audio transcriptions
   *
   * @remarks
   * Transcribe an audio file into text.
   *
   * @returns Successfully transcribed the audio file.
   *
   * @throws {@link ContainerAudio.ContainerAudioTranscriptionsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  containerAudioTranscriptions(
    request: ContainerAudio.ContainerAudioTranscriptionsRequest,
    options?: RequestOptions,
  ): ApiPromise<AudioTranscriptionResult, ContainerAudio.ContainerAudioTranscriptionsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/audio/transcriptions"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            { kind: "file", name: "file", value: request.file },
            {
              kind: "text",
              name: "model",
              value: request.model,
              schema: s.optional(s.lazy(() => model1Schema)),
            },
            {
              kind: "text",
              name: "chunking_strategy",
              value: request.chunkingStrategy,
              schema: s.optional(s.lazy(() => chunkingStrategy1Schema)),
            },
            {
              kind: "text",
              name: "language",
              value: request.language,
              schema: s.optional(s.lazy(() => languageSchema)),
            },
            {
              kind: "text",
              name: "stream",
              value: request.stream,
              schema: s.optional(s.lazy(() => stream6Schema)),
            },
            {
              kind: "text",
              name: "temperature",
              value: request.temperature,
              schema: s.optional(s.lazy(() => temperature12Schema)),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: audioTranscriptionResultSchema },
        errorFactory: ContainerAudio.ContainerAudioTranscriptionsError,
      },
      options,
    );
  }

  /**
   * Stream audio transcriptions
   *
   * @remarks
   * Transcribe an audio file into text.
   *
   * @returns Successfully transcribed the audio file.
   *
   * @throws {@link ContainerAudio.ContainerAudioTranscriptionsStreamError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  containerAudioTranscriptionsStream(
    request: ContainerAudio.ContainerAudioTranscriptionsStreamRequest,
    options?: RequestOptions,
  ): ApiPromise<
    EventStream<StreamedAudioTranscriptionResult>,
    ContainerAudio.ContainerAudioTranscriptionsStreamError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/audio/transcriptions#stream"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            { kind: "file", name: "file", value: request.file },
            {
              kind: "text",
              name: "model",
              value: request.model,
              schema: s.optional(s.lazy(() => model1Schema)),
            },
            {
              kind: "text",
              name: "chunking_strategy",
              value: request.chunkingStrategy,
              schema: s.optional(s.lazy(() => chunkingStrategy1Schema)),
            },
            {
              kind: "text",
              name: "language",
              value: request.language,
              schema: s.optional(s.lazy(() => languageSchema)),
            },
            { kind: "text", name: "stream", value: request.stream, schema: s.defaulted(s.boolean(), true) },
            {
              kind: "text",
              name: "temperature",
              value: request.temperature,
              schema: s.optional(s.lazy(() => temperature12Schema)),
            },
          ],
        },
      },
      {
        success: { kind: "eventStreamJson", dataSchema: streamedAudioTranscriptionResultSchema },
        errorFactory: ContainerAudio.ContainerAudioTranscriptionsStreamError,
      },
      options,
    );
  }
}

export namespace ContainerAudio {
  export type ContainerAudioTranscriptionsRequest = {
    /**
     * The audio file object (not file name) to transcribe, in one of these formats: mp3, wav, flac,
     * ogg, and many other standard audio formats.
     */
    file: FileInput;
    /** Routes the request to a specific adapter. */
    model?: Model1;
    /**
     * Controls how the audio is cut into chunks. When set to `"auto"`, the server first normalizes
     * loudness and then uses voice activity detection (VAD) to choose boundaries. `server_vad`
     * object can be provided to tweak VAD detection parameters manually. If unset, the audio is
     * transcribed as a single block.
     */
    chunkingStrategy?: ChunkingStrategy1;
    /**
     * The language of the input audio. Supplying the input language in
     * [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) (e.g. `en`) format will
     * improve accuracy and latency.
     */
    language?: Language;
    /**
     * Whether to stream the transcription result. When set to `true`, the transcription is sent as
     * [server-sent
     * events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#event_stream_format)
     * once generated.
     */
    stream?: Stream6;
    /**
     * The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more
     * random, while lower values like 0.2 will make it more focused and deterministic.
     */
    temperature?: Temperature12;
  };

  export class ContainerAudioTranscriptionsError extends ApiError {
    declare readonly payload: Declared<"error422", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ContainerAudioTranscriptionsError> = [
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type ContainerAudioTranscriptionsStreamRequest = {
    /**
     * The audio file object (not file name) to transcribe, in one of these formats: mp3, wav, flac,
     * ogg, and many other standard audio formats.
     */
    file: FileInput;
    /** Routes the request to a specific adapter. */
    model?: Model1;
    /**
     * Controls how the audio is cut into chunks. When set to `"auto"`, the server first normalizes
     * loudness and then uses voice activity detection (VAD) to choose boundaries. `server_vad`
     * object can be provided to tweak VAD detection parameters manually. If unset, the audio is
     * transcribed as a single block.
     */
    chunkingStrategy?: ChunkingStrategy1;
    /**
     * The language of the input audio. Supplying the input language in
     * [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) (e.g. `en`) format will
     * improve accuracy and latency.
     */
    language?: Language;
    /**
     * Whether to stream the transcription result. When set to `true`, the transcription is sent as
     * [server-sent
     * events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#event_stream_format)
     * once generated.
     *
     * @default true
     */
    stream?: boolean;
    /**
     * The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more
     * random, while lower values like 0.2 will make it more focused and deterministic.
     */
    temperature?: Temperature12;
  };

  export class ContainerAudioTranscriptionsStreamError extends ApiError {
    declare readonly payload: Declared<"error422", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ContainerAudioTranscriptionsStreamError> = [
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }
}
