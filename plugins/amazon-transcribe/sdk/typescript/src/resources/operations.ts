import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { audioStreamSchema, type AudioStream } from "../models/audio-stream.js";
import { badRequestExceptionSchema, type BadRequestException } from "../models/bad-request-exception.js";
import { conflictExceptionSchema, type ConflictException } from "../models/conflict-exception.js";
import {
  getMedicalScribeStreamResponseSchema,
  type GetMedicalScribeStreamResponse,
} from "../models/get-medical-scribe-stream-response.js";
import {
  internalFailureExceptionSchema,
  type InternalFailureException,
} from "../models/internal-failure-exception.js";
import {
  limitExceededExceptionSchema,
  type LimitExceededException,
} from "../models/limit-exceeded-exception.js";
import {
  medicalScribeInputStreamSchema,
  type MedicalScribeInputStream,
} from "../models/medical-scribe-input-stream.js";
import {
  resourceNotFoundExceptionSchema,
  type ResourceNotFoundException,
} from "../models/resource-not-found-exception.js";
import {
  serviceUnavailableExceptionSchema,
  type ServiceUnavailableException,
} from "../models/service-unavailable-exception.js";
import {
  startCallAnalyticsStreamTranscriptionResponseSchema,
  type StartCallAnalyticsStreamTranscriptionResponse,
} from "../models/start-call-analytics-stream-transcription-response.js";
import {
  startMedicalScribeStreamResponseSchema,
  type StartMedicalScribeStreamResponse,
} from "../models/start-medical-scribe-stream-response.js";
import {
  startMedicalStreamTranscriptionResponseSchema,
  type StartMedicalStreamTranscriptionResponse,
} from "../models/start-medical-stream-transcription-response.js";
import {
  startStreamTranscriptionResponseSchema,
  type StartStreamTranscriptionResponse,
} from "../models/start-stream-transcription-response.js";
import {
  xAmzTargetAmazonTranscribeServiceOperationsApiSchema,
  type XAmzTargetAmazonTranscribeServiceOperationsApi,
} from "../models/xamz-target-amazon-transcribe-service-operations-api.js";
import {
  xAmzTarget1AmazonTranscribeServiceOperationsApiSchema,
  type XAmzTarget1AmazonTranscribeServiceOperationsApi,
} from "../models/xamz-target1-amazon-transcribe-service-operations-api.js";
import {
  xAmzTarget2AmazonTranscribeServiceOperationsApiSchema,
  type XAmzTarget2AmazonTranscribeServiceOperationsApi,
} from "../models/xamz-target2-amazon-transcribe-service-operations-api.js";
import {
  xAmznTranscribeContentIdentificationTypeSchema,
  type XAmznTranscribeContentIdentificationType,
} from "../models/xamzn-transcribe-content-identification-type.js";
import {
  xAmznTranscribeContentIdentificationType1Schema,
  type XAmznTranscribeContentIdentificationType1,
} from "../models/xamzn-transcribe-content-identification-type1.js";
import {
  xAmznTranscribeContentRedactionTypeSchema,
  type XAmznTranscribeContentRedactionType,
} from "../models/xamzn-transcribe-content-redaction-type.js";
import {
  xAmznTranscribeLanguageCodeSchema,
  type XAmznTranscribeLanguageCode,
} from "../models/xamzn-transcribe-language-code.js";
import {
  xAmznTranscribeLanguageCode1Schema,
  type XAmznTranscribeLanguageCode1,
} from "../models/xamzn-transcribe-language-code1.js";
import {
  xAmznTranscribeLanguageCode2Schema,
  type XAmznTranscribeLanguageCode2,
} from "../models/xamzn-transcribe-language-code2.js";
import {
  xAmznTranscribeMediaEncodingSchema,
  type XAmznTranscribeMediaEncoding,
} from "../models/xamzn-transcribe-media-encoding.js";
import {
  xAmznTranscribeMediaEncoding1Schema,
  type XAmznTranscribeMediaEncoding1,
} from "../models/xamzn-transcribe-media-encoding1.js";
import {
  xAmznTranscribePartialResultsStabilitySchema,
  type XAmznTranscribePartialResultsStability,
} from "../models/xamzn-transcribe-partial-results-stability.js";
import {
  xAmznTranscribePreferredLanguageSchema,
  type XAmznTranscribePreferredLanguage,
} from "../models/xamzn-transcribe-preferred-language.js";
import {
  xAmznTranscribePreferredLanguage1Schema,
  type XAmznTranscribePreferredLanguage1,
} from "../models/xamzn-transcribe-preferred-language1.js";
import {
  xAmznTranscribeSpecialtySchema,
  type XAmznTranscribeSpecialty,
} from "../models/xamzn-transcribe-specialty.js";
import {
  xAmznTranscribeTranscriptFormatSchema,
  type XAmznTranscribeTranscriptFormat,
} from "../models/xamzn-transcribe-transcript-format.js";
import { xAmznTranscribeTypeSchema, type XAmznTranscribeType } from "../models/xamzn-transcribe-type.js";
import {
  xAmznTranscribeVocabularyFilterMethodSchema,
  type XAmznTranscribeVocabularyFilterMethod,
} from "../models/xamzn-transcribe-vocabulary-filter-method.js";
import type { Servers } from "../servers.js";

export class Operations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Medical Scribe Stream
   *
   * @remarks
   * Provides details about the specified Amazon Web Services HealthScribe streaming session. To
   * view the status of the streaming session, check the StreamStatus field in the response. To get
   * the details of post-stream analytics, including its status, check the PostStreamAnalyticsResult
   * field in the response.
   *
   * @returns Success
   *
   * @throws {@link Operations.GetMedicalScribeStreamError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonTranscribeError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getMedicalScribeStream(
    request: Operations.GetMedicalScribeStreamRequest,
    options?: RequestOptions,
  ): ApiPromise<GetMedicalScribeStreamResponse, Operations.GetMedicalScribeStreamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultAmazonTranscribeServiceOperationsApi(
          "/medical-scribe-stream/{SessionId}",
        ),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "SessionId", value: request.sessionId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getMedicalScribeStreamResponseSchema },
        errorFactory: Operations.GetMedicalScribeStreamError,
      },
      options,
    );
  }

  /**
   * List Tags For Resource
   *
   * @remarks
   * Lists all tags associated with the specified transcription job, vocabulary, model, or resource.
   * To learn more about using tags with Amazon Transcribe, refer to Tagging resources.
   *
   * @returns Success
   *
   * @throws {@link Operations.ListTagsForResourceError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonTranscribeError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listTagsForResource(
    request: Operations.ListTagsForResourceRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.ListTagsForResourceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonTranscribeServiceOperationsApi("/#ListTagsForResource"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAmazonTranscribeServiceOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.ListTagsForResourceError,
      },
      options,
    );
  }

  /**
   * Start Call Analytics Stream Transcription
   *
   * @remarks
   * Starts a bidirectional HTTP/2 or WebSocket stream where audio is streamed to Amazon Transcribe
   * and the transcription results are streamed to your application. Use this operation for Call
   * Analytics transcriptions. The following parameters are required: language-code or
   * identify-language media-encoding sample-rate For more information on streaming with Amazon
   * Transcribe, see Transcribing streaming audio.
   *
   * @returns Success
   *
   * @throws {@link Operations.StartCallAnalyticsStreamTranscriptionError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonTranscribeError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  startCallAnalyticsStreamTranscription(
    request: Operations.StartCallAnalyticsStreamTranscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<
    StartCallAnalyticsStreamTranscriptionResponse,
    Operations.StartCallAnalyticsStreamTranscriptionError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonTranscribeServiceOperationsApi(
          "/call-analytics-stream-transcription",
        ),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "x-amzn-transcribe-sample-rate",
            value: request.xAmznTranscribeSampleRate,
            schema: s.int(),
          },
          {
            name: "x-amzn-transcribe-media-encoding",
            value: request.xAmznTranscribeMediaEncoding,
            schema: xAmznTranscribeMediaEncoding1Schema,
          },
          {
            name: "x-amzn-transcribe-language-code",
            value: request.xAmznTranscribeLanguageCode,
            schema: s.optional(s.lazy(() => xAmznTranscribeLanguageCode1Schema)),
          },
          {
            name: "x-amzn-transcribe-vocabulary-name",
            value: request.xAmznTranscribeVocabularyName,
            schema: s.optional(s.string()),
          },
          {
            name: "x-amzn-transcribe-session-id",
            value: request.xAmznTranscribeSessionId,
            schema: s.optional(s.string()),
          },
          {
            name: "x-amzn-transcribe-vocabulary-filter-name",
            value: request.xAmznTranscribeVocabularyFilterName,
            schema: s.optional(s.string()),
          },
          {
            name: "x-amzn-transcribe-vocabulary-filter-method",
            value: request.xAmznTranscribeVocabularyFilterMethod,
            schema: s.optional(s.lazy(() => xAmznTranscribeVocabularyFilterMethodSchema)),
          },
          {
            name: "x-amzn-transcribe-language-model-name",
            value: request.xAmznTranscribeLanguageModelName,
            schema: s.optional(s.string()),
          },
          {
            name: "x-amzn-transcribe-identify-language",
            value: request.xAmznTranscribeIdentifyLanguage,
            schema: s.optional(s.boolean()),
          },
          {
            name: "x-amzn-transcribe-language-options",
            value: request.xAmznTranscribeLanguageOptions,
            schema: s.optional(s.string()),
          },
          {
            name: "x-amzn-transcribe-preferred-language",
            value: request.xAmznTranscribePreferredLanguage,
            schema: s.optional(s.lazy(() => xAmznTranscribePreferredLanguageSchema)),
          },
          {
            name: "x-amzn-transcribe-vocabulary-names",
            value: request.xAmznTranscribeVocabularyNames,
            schema: s.optional(s.string()),
          },
          {
            name: "x-amzn-transcribe-vocabulary-filter-names",
            value: request.xAmznTranscribeVocabularyFilterNames,
            schema: s.optional(s.string()),
          },
          {
            name: "x-amzn-transcribe-enable-partial-results-stabilization",
            value: request.xAmznTranscribeEnablePartialResultsStabilization,
            schema: s.optional(s.boolean()),
          },
          {
            name: "x-amzn-transcribe-partial-results-stability",
            value: request.xAmznTranscribePartialResultsStability,
            schema: s.optional(s.lazy(() => xAmznTranscribePartialResultsStabilitySchema)),
          },
          {
            name: "x-amzn-transcribe-content-identification-type",
            value: request.xAmznTranscribeContentIdentificationType,
            schema: s.optional(s.lazy(() => xAmznTranscribeContentIdentificationTypeSchema)),
          },
          {
            name: "x-amzn-transcribe-content-redaction-type",
            value: request.xAmznTranscribeContentRedactionType,
            schema: s.optional(s.lazy(() => xAmznTranscribeContentRedactionTypeSchema)),
          },
          {
            name: "x-amzn-transcribe-pii-entity-types",
            value: request.xAmznTranscribePiiEntityTypes,
            schema: s.optional(s.string()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => audioStreamSchema)) },
      },
      {
        success: { kind: "json", schema: startCallAnalyticsStreamTranscriptionResponseSchema },
        errorFactory: Operations.StartCallAnalyticsStreamTranscriptionError,
      },
      options,
    );
  }

  /**
   * Start Medical Scribe Stream
   *
   * @remarks
   * Starts a bidirectional HTTP/2 stream, where audio is streamed to Amazon Web Services
   * HealthScribe and the transcription results are streamed to your application. When you start a
   * stream, you first specify the stream configuration in a MedicalScribeConfigurationEvent. This
   * event includes channel definitions, encryption settings, medical scribe context, and
   * post-stream analytics settings, such as the output configuration for aggregated transcript and
   * clinical note generation. These are additional streaming session configurations beyond those
   * provided in your initial start request headers. Whether you are starting a new session or
   * resuming an existing session, your first event must be a MedicalScribeConfigurationEvent. After
   * you send a MedicalScribeConfigurationEvent, you start AudioEvents and Amazon Web Services
   * HealthScribe responds with real-time transcription results. When you are finished, to start
   * processing the results with the post-stream analytics, send a MedicalScribeSessionControlEvent
   * with a Type of END_OF_SESSION and Amazon Web Services HealthScribe starts the analytics. You
   * can pause or resume streaming. To pause streaming, complete the input stream without sending
   * the M
   *
   * @returns Success
   *
   * @throws {@link Operations.StartMedicalScribeStreamError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonTranscribeError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  startMedicalScribeStream(
    request: Operations.StartMedicalScribeStreamRequest,
    options?: RequestOptions,
  ): ApiPromise<StartMedicalScribeStreamResponse, Operations.StartMedicalScribeStreamError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonTranscribeServiceOperationsApi("/medical-scribe-stream"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "x-amzn-transcribe-language-code",
            value: request.xAmznTranscribeLanguageCode,
            schema: xAmznTranscribeLanguageCodeSchema,
          },
          {
            name: "x-amzn-transcribe-sample-rate",
            value: request.xAmznTranscribeSampleRate,
            schema: s.int(),
          },
          {
            name: "x-amzn-transcribe-media-encoding",
            value: request.xAmznTranscribeMediaEncoding,
            schema: xAmznTranscribeMediaEncodingSchema,
          },
          {
            name: "x-amzn-transcribe-session-id",
            value: request.xAmznTranscribeSessionId,
            schema: s.optional(s.string()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => medicalScribeInputStreamSchema)),
        },
      },
      {
        success: { kind: "json", schema: startMedicalScribeStreamResponseSchema },
        errorFactory: Operations.StartMedicalScribeStreamError,
      },
      options,
    );
  }

  /**
   * Start Medical Stream Transcription
   *
   * @remarks
   * Starts a bidirectional HTTP/2 or WebSocket stream where audio is streamed to Amazon Transcribe
   * Medical and the transcription results are streamed to your application. The following
   * parameters are required: language-code media-encoding sample-rate For more information on
   * streaming with Amazon Transcribe Medical, see Transcribing streaming audio.
   *
   * @returns Success
   *
   * @throws {@link Operations.StartMedicalStreamTranscriptionError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonTranscribeError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  startMedicalStreamTranscription(
    request: Operations.StartMedicalStreamTranscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<StartMedicalStreamTranscriptionResponse, Operations.StartMedicalStreamTranscriptionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonTranscribeServiceOperationsApi(
          "/medical-stream-transcription",
        ),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "x-amzn-transcribe-language-code",
            value: request.xAmznTranscribeLanguageCode,
            schema: xAmznTranscribeLanguageCode2Schema,
          },
          {
            name: "x-amzn-transcribe-sample-rate",
            value: request.xAmznTranscribeSampleRate,
            schema: s.int(),
          },
          {
            name: "x-amzn-transcribe-media-encoding",
            value: request.xAmznTranscribeMediaEncoding,
            schema: xAmznTranscribeMediaEncoding1Schema,
          },
          {
            name: "x-amzn-transcribe-specialty",
            value: request.xAmznTranscribeSpecialty,
            schema: xAmznTranscribeSpecialtySchema,
          },
          {
            name: "x-amzn-transcribe-type",
            value: request.xAmznTranscribeType,
            schema: xAmznTranscribeTypeSchema,
          },
          {
            name: "x-amzn-transcribe-vocabulary-name",
            value: request.xAmznTranscribeVocabularyName,
            schema: s.optional(s.string()),
          },
          {
            name: "x-amzn-transcribe-show-speaker-label",
            value: request.xAmznTranscribeShowSpeakerLabel,
            schema: s.optional(s.boolean()),
          },
          {
            name: "x-amzn-transcribe-session-id",
            value: request.xAmznTranscribeSessionId,
            schema: s.optional(s.string()),
          },
          {
            name: "x-amzn-transcribe-enable-channel-identification",
            value: request.xAmznTranscribeEnableChannelIdentification,
            schema: s.optional(s.boolean()),
          },
          {
            name: "x-amzn-transcribe-number-of-channels",
            value: request.xAmznTranscribeNumberOfChannels,
            schema: s.optional(s.int()),
          },
          {
            name: "x-amzn-transcribe-content-identification-type",
            value: request.xAmznTranscribeContentIdentificationType,
            schema: s.optional(s.lazy(() => xAmznTranscribeContentIdentificationType1Schema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => audioStreamSchema)) },
      },
      {
        success: { kind: "json", schema: startMedicalStreamTranscriptionResponseSchema },
        errorFactory: Operations.StartMedicalStreamTranscriptionError,
      },
      options,
    );
  }

  /**
   * Start Stream Transcription
   *
   * @remarks
   * Starts a bidirectional HTTP/2 or WebSocket stream where audio is streamed to Amazon Transcribe
   * and the transcription results are streamed to your application. The following parameters are
   * required: language-code or identify-language or identify-multiple-language media-encoding
   * sample-rate For more information on streaming with Amazon Transcribe, see Transcribing
   * streaming audio.
   *
   * @returns Success
   *
   * @throws {@link Operations.StartStreamTranscriptionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonTranscribeError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  startStreamTranscription(
    request: Operations.StartStreamTranscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<StartStreamTranscriptionResponse, Operations.StartStreamTranscriptionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonTranscribeServiceOperationsApi("/stream-transcription"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "x-amzn-transcribe-sample-rate",
            value: request.xAmznTranscribeSampleRate,
            schema: s.int(),
          },
          {
            name: "x-amzn-transcribe-media-encoding",
            value: request.xAmznTranscribeMediaEncoding,
            schema: xAmznTranscribeMediaEncoding1Schema,
          },
          {
            name: "x-amzn-transcribe-language-code",
            value: request.xAmznTranscribeLanguageCode,
            schema: s.optional(s.lazy(() => xAmznTranscribeLanguageCode2Schema)),
          },
          {
            name: "x-amzn-transcribe-vocabulary-name",
            value: request.xAmznTranscribeVocabularyName,
            schema: s.optional(s.string()),
          },
          {
            name: "x-amzn-transcribe-session-id",
            value: request.xAmznTranscribeSessionId,
            schema: s.optional(s.string()),
          },
          {
            name: "x-amzn-transcribe-vocabulary-filter-name",
            value: request.xAmznTranscribeVocabularyFilterName,
            schema: s.optional(s.string()),
          },
          {
            name: "x-amzn-transcribe-vocabulary-filter-method",
            value: request.xAmznTranscribeVocabularyFilterMethod,
            schema: s.optional(s.lazy(() => xAmznTranscribeVocabularyFilterMethodSchema)),
          },
          {
            name: "x-amzn-transcribe-show-speaker-label",
            value: request.xAmznTranscribeShowSpeakerLabel,
            schema: s.optional(s.boolean()),
          },
          {
            name: "x-amzn-transcribe-enable-channel-identification",
            value: request.xAmznTranscribeEnableChannelIdentification,
            schema: s.optional(s.boolean()),
          },
          {
            name: "x-amzn-transcribe-number-of-channels",
            value: request.xAmznTranscribeNumberOfChannels,
            schema: s.optional(s.int()),
          },
          {
            name: "x-amzn-transcribe-enable-partial-results-stabilization",
            value: request.xAmznTranscribeEnablePartialResultsStabilization,
            schema: s.optional(s.boolean()),
          },
          {
            name: "x-amzn-transcribe-partial-results-stability",
            value: request.xAmznTranscribePartialResultsStability,
            schema: s.optional(s.lazy(() => xAmznTranscribePartialResultsStabilitySchema)),
          },
          {
            name: "x-amzn-transcribe-content-identification-type",
            value: request.xAmznTranscribeContentIdentificationType,
            schema: s.optional(s.lazy(() => xAmznTranscribeContentIdentificationTypeSchema)),
          },
          {
            name: "x-amzn-transcribe-content-redaction-type",
            value: request.xAmznTranscribeContentRedactionType,
            schema: s.optional(s.lazy(() => xAmznTranscribeContentRedactionTypeSchema)),
          },
          {
            name: "x-amzn-transcribe-pii-entity-types",
            value: request.xAmznTranscribePiiEntityTypes,
            schema: s.optional(s.string()),
          },
          {
            name: "x-amzn-transcribe-language-model-name",
            value: request.xAmznTranscribeLanguageModelName,
            schema: s.optional(s.string()),
          },
          {
            name: "x-amzn-transcribe-identify-language",
            value: request.xAmznTranscribeIdentifyLanguage,
            schema: s.optional(s.boolean()),
          },
          {
            name: "x-amzn-transcribe-language-options",
            value: request.xAmznTranscribeLanguageOptions,
            schema: s.optional(s.string()),
          },
          {
            name: "x-amzn-transcribe-preferred-language",
            value: request.xAmznTranscribePreferredLanguage,
            schema: s.optional(s.lazy(() => xAmznTranscribePreferredLanguage1Schema)),
          },
          {
            name: "x-amzn-transcribe-identify-multiple-languages",
            value: request.xAmznTranscribeIdentifyMultipleLanguages,
            schema: s.optional(s.boolean()),
          },
          {
            name: "x-amzn-transcribe-vocabulary-names",
            value: request.xAmznTranscribeVocabularyNames,
            schema: s.optional(s.string()),
          },
          {
            name: "x-amzn-transcribe-vocabulary-filter-names",
            value: request.xAmznTranscribeVocabularyFilterNames,
            schema: s.optional(s.string()),
          },
          {
            name: "x-amzn-transcribe-session-resume-window",
            value: request.xAmznTranscribeSessionResumeWindow,
            schema: s.optional(s.int()),
          },
          {
            name: "x-amzn-transcribe-transcript-format",
            value: request.xAmznTranscribeTranscriptFormat,
            schema: s.optional(s.lazy(() => xAmznTranscribeTranscriptFormatSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => audioStreamSchema)) },
      },
      {
        success: { kind: "json", schema: startStreamTranscriptionResponseSchema },
        errorFactory: Operations.StartStreamTranscriptionError,
      },
      options,
    );
  }

  /**
   * Tag Resource
   *
   * @remarks
   * Adds one or more custom tags, each in the form of a key:value pair, to the specified resource.
   * To learn more about using tags with Amazon Transcribe, refer to Tagging resources.
   *
   * @returns Success
   *
   * @throws {@link Operations.TagResourceError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonTranscribeError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  tagResource(
    request: Operations.TagResourceRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.TagResourceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonTranscribeServiceOperationsApi("/#TagResource"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AmazonTranscribeServiceOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.TagResourceError,
      },
      options,
    );
  }

  /**
   * Untag Resource
   *
   * @remarks
   * Removes the specified tags from the specified Amazon Transcribe resource. If you include
   * UntagResource in your request, you must also include ResourceArn and TagKeys.
   *
   * @returns Success
   *
   * @throws {@link Operations.UntagResourceError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonTranscribeError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  untagResource(
    request: Operations.UntagResourceRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.UntagResourceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonTranscribeServiceOperationsApi("/#UntagResource"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget2AmazonTranscribeServiceOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.UntagResourceError,
      },
      options,
    );
  }
}

export namespace Operations {
  export type GetMedicalScribeStreamRequest = {
    /** The identifier of the HealthScribe streaming session you want information about. */
    sessionId: string;
  };

  export class GetMedicalScribeStreamError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMedicalScribeStreamError> = [
      { on: 400, kind: "badRequestException", decode: { kind: "json", schema: badRequestExceptionSchema } },
      {
        on: 500,
        kind: "internalFailureException",
        decode: { kind: "json", schema: internalFailureExceptionSchema },
      },
      {
        on: 429,
        kind: "limitExceededException",
        decode: { kind: "json", schema: limitExceededExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
    ];
  }

  export type ListTagsForResourceRequestParams = {
    xAmzTarget: XAmzTargetAmazonTranscribeServiceOperationsApi;
  };

  export class ListTagsForResourceError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error500", undefined>
      | Declared<"error429", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListTagsForResourceError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type StartCallAnalyticsStreamTranscriptionRequest = {
    /**
     * The sample rate of the input audio (in hertz). Low-quality audio, such as telephone audio, is
     * typically around 8,000 Hz. High-quality audio typically ranges from 16,000 Hz to 48,000 Hz.
     * Note that the sample rate you specify must match that of your audio.
     */
    xAmznTranscribeSampleRate: number;
    /**
     * Specify the encoding of your input audio. Supported formats are: FLAC OPUS-encoded audio in
     * an Ogg container PCM (only signed 16-bit little-endian audio formats, which does not include
     * WAV) For more information, see Media formats.
     */
    xAmznTranscribeMediaEncoding: XAmznTranscribeMediaEncoding1;
    /**
     * Specify the language code that represents the language spoken in your audio. For a list of
     * languages supported with real-time Call Analytics, refer to the Supported languages table.
     */
    xAmznTranscribeLanguageCode?: XAmznTranscribeLanguageCode1;
    /**
     * Specify the name of the custom vocabulary that you want to use when processing your
     * transcription. Note that vocabulary names are case sensitive. If the language of the
     * specified custom vocabulary doesn't match the language identified in your media, the custom
     * vocabulary is not applied to your transcription. For more information, see Custom
     * vocabularies.
     */
    xAmznTranscribeVocabularyName?: string;
    /**
     * Specify a name for your Call Analytics transcription session. If you don't include this
     * parameter in your request, Amazon Transcribe generates an ID and returns it in the response.
     */
    xAmznTranscribeSessionId?: string;
    /**
     * Specify the name of the custom vocabulary filter that you want to use when processing your
     * transcription. Note that vocabulary filter names are case sensitive. If the language of the
     * specified custom vocabulary filter doesn't match the language identified in your media, the
     * vocabulary filter is not applied to your transcription. For more information, see Using
     * vocabulary filtering with unwanted words.
     */
    xAmznTranscribeVocabularyFilterName?: string;
    /**
     * Specify how you want your vocabulary filter applied to your transcript. To replace words with
     * ***, choose mask. To delete words, choose remove. To flag words without changing them, choose
     * tag.
     */
    xAmznTranscribeVocabularyFilterMethod?: XAmznTranscribeVocabularyFilterMethod;
    /**
     * Specify the name of the custom language model that you want to use when processing your
     * transcription. Note that language model names are case sensitive. The language of the
     * specified language model must match the language code you specify in your transcription
     * request. If the languages don't match, the custom language model isn't applied. There are no
     * errors or warnings associated with a language mismatch. For more information, see Custom
     * language models.
     */
    xAmznTranscribeLanguageModelName?: string;
    /**
     * Enables automatic language identification for your Call Analytics transcription. If you
     * include IdentifyLanguage, you must include a list of language codes, using LanguageOptions,
     * that you think may be present in your audio stream. You must provide a minimum of two
     * language selections. You can also include a preferred language using PreferredLanguage.
     * Adding a preferred language can help Amazon Transcribe identify the language faster than if
     * you omit this parameter. Note that you must include either LanguageCode or IdentifyLanguage
     * in your request. If you include both parameters, your transcri
     */
    xAmznTranscribeIdentifyLanguage?: boolean;
    /**
     * Specify two or more language codes that represent the languages you think may be present in
     * your media. Including language options can improve the accuracy of language identification.
     * If you include LanguageOptions in your request, you must also include IdentifyLanguage. For a
     * list of languages supported with Call Analytics streaming, refer to the Supported languages
     * table. You can only include one language dialect per language per stream. For example, you
     * cannot include en-US and en-AU in the same request.
     */
    xAmznTranscribeLanguageOptions?: string;
    /**
     * Specify a preferred language from the subset of languages codes you specified in
     * LanguageOptions. You can only use this parameter if you've included IdentifyLanguage and
     * LanguageOptions in your request.
     */
    xAmznTranscribePreferredLanguage?: XAmznTranscribePreferredLanguage;
    /**
     * Specify the names of the custom vocabularies that you want to use when processing your Call
     * Analytics transcription. Note that vocabulary names are case sensitive. If the custom
     * vocabulary's language doesn't match the identified media language, it won't be applied to the
     * transcription. This parameter is only intended for use with the IdentifyLanguage parameter.
     * If you're not including IdentifyLanguage in your request and want to use a custom vocabulary
     * with your transcription, use the VocabularyName parameter instead. For more information, see
     * Custom vocabularies.
     */
    xAmznTranscribeVocabularyNames?: string;
    /**
     * Specify the names of the custom vocabulary filters that you want to use when processing your
     * Call Analytics transcription. Note that vocabulary filter names are case sensitive. These
     * filters serve to customize the transcript output. This parameter is only intended for use
     * with the IdentifyLanguage parameter. If you're not including IdentifyLanguage in your request
     * and want to use a custom vocabulary filter with your transcription, use the
     * VocabularyFilterName parameter instead. For more information, see Using vocabulary filtering
     * with unwanted words.
     */
    xAmznTranscribeVocabularyFilterNames?: string;
    /**
     * Enables partial result stabilization for your transcription. Partial result stabilization can
     * reduce latency in your output, but may impact accuracy. For more information, see
     * Partial-result stabilization.
     */
    xAmznTranscribeEnablePartialResultsStabilization?: boolean;
    /**
     * Specify the level of stability to use when you enable partial results stabilization
     * (EnablePartialResultsStabilization). Low stability provides the highest accuracy. High
     * stability transcribes faster, but with slightly lower accuracy. For more information, see
     * Partial-result stabilization.
     */
    xAmznTranscribePartialResultsStability?: XAmznTranscribePartialResultsStability;
    /**
     * Labels all personally identifiable information (PII) identified in your transcript. Content
     * identification is performed at the segment level; PII specified in PiiEntityTypes is flagged
     * upon complete transcription of an audio segment. If you don't include PiiEntityTypes in your
     * request, all PII is identified. You can’t set ContentIdentificationType and
     * ContentRedactionType in the same request. If you set both, your request returns a
     * BadRequestException. For more information, see Redacting or identifying personally
     * identifiable information.
     */
    xAmznTranscribeContentIdentificationType?: XAmznTranscribeContentIdentificationType;
    /**
     * Redacts all personally identifiable information (PII) identified in your transcript. Content
     * redaction is performed at the segment level; PII specified in PiiEntityTypes is redacted upon
     * complete transcription of an audio segment. If you don't include PiiEntityTypes in your
     * request, all PII is redacted. You can’t set ContentRedactionType and
     * ContentIdentificationType in the same request. If you set both, your request returns a
     * BadRequestException. For more information, see Redacting or identifying personally
     * identifiable information.
     */
    xAmznTranscribeContentRedactionType?: XAmznTranscribeContentRedactionType;
    /**
     * Specify which types of personally identifiable information (PII) you want to redact in your
     * transcript. You can include as many types as you'd like, or you can select ALL. Values must
     * be comma-separated and can include: ADDRESS, BANK_ACCOUNT_NUMBER, BANK_ROUTING,
     * CREDIT_DEBIT_CVV, CREDIT_DEBIT_EXPIRY, CREDIT_DEBIT_NUMBER, EMAIL, NAME, PHONE, PIN, SSN, or
     * ALL. Note that if you include PiiEntityTypes in your request, you must also include
     * ContentIdentificationType or ContentRedactionType. If you include ContentRedactionType or
     * ContentIdentificationType in your request, but do not include PiiEnti
     */
    xAmznTranscribePiiEntityTypes?: string;
    body?: AudioStream;
  };

  export class StartCallAnalyticsStreamTranscriptionError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"conflictException", ConflictException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"serviceUnavailableException", ServiceUnavailableException>
      | Undeclared;

    static readonly errors: ErrorDecoders<StartCallAnalyticsStreamTranscriptionError> = [
      { on: 400, kind: "badRequestException", decode: { kind: "json", schema: badRequestExceptionSchema } },
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 500,
        kind: "internalFailureException",
        decode: { kind: "json", schema: internalFailureExceptionSchema },
      },
      {
        on: 429,
        kind: "limitExceededException",
        decode: { kind: "json", schema: limitExceededExceptionSchema },
      },
      {
        on: 503,
        kind: "serviceUnavailableException",
        decode: { kind: "json", schema: serviceUnavailableExceptionSchema },
      },
    ];
  }

  export type StartMedicalScribeStreamRequest = {
    /** Specify the language code for your HealthScribe streaming session. */
    xAmznTranscribeLanguageCode: XAmznTranscribeLanguageCode;
    /**
     * Specify the sample rate of the input audio (in hertz). Amazon Web Services HealthScribe
     * supports a range from 16,000 Hz to 48,000 Hz. The sample rate you specify must match that of
     * your audio.
     */
    xAmznTranscribeSampleRate: number;
    /**
     * Specify the encoding used for the input audio. Supported formats are: FLAC OPUS-encoded audio
     * in an Ogg container PCM (only signed 16-bit little-endian audio formats, which does not
     * include WAV) For more information, see Media formats.
     */
    xAmznTranscribeMediaEncoding: XAmznTranscribeMediaEncoding;
    /**
     * Specify an identifier for your streaming session (in UUID format). If you don't include a
     * SessionId in your request, Amazon Web Services HealthScribe generates an ID and returns it in
     * the response.
     */
    xAmznTranscribeSessionId?: string;
    body?: MedicalScribeInputStream;
  };

  export class StartMedicalScribeStreamError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"conflictException", ConflictException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"serviceUnavailableException", ServiceUnavailableException>
      | Undeclared;

    static readonly errors: ErrorDecoders<StartMedicalScribeStreamError> = [
      { on: 400, kind: "badRequestException", decode: { kind: "json", schema: badRequestExceptionSchema } },
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 500,
        kind: "internalFailureException",
        decode: { kind: "json", schema: internalFailureExceptionSchema },
      },
      {
        on: 429,
        kind: "limitExceededException",
        decode: { kind: "json", schema: limitExceededExceptionSchema },
      },
      {
        on: 503,
        kind: "serviceUnavailableException",
        decode: { kind: "json", schema: serviceUnavailableExceptionSchema },
      },
    ];
  }

  export type StartMedicalStreamTranscriptionRequest = {
    /**
     * Specify the language code that represents the language spoken in your audio. Amazon
     * Transcribe Medical only supports US English (en-US).
     */
    xAmznTranscribeLanguageCode: XAmznTranscribeLanguageCode2;
    /**
     * The sample rate of the input audio (in hertz). Amazon Transcribe Medical supports a range
     * from 16,000 Hz to 48,000 Hz. Note that the sample rate you specify must match that of your
     * audio.
     */
    xAmznTranscribeSampleRate: number;
    /**
     * Specify the encoding used for the input audio. Supported formats are: FLAC OPUS-encoded audio
     * in an Ogg container PCM (only signed 16-bit little-endian audio formats, which does not
     * include WAV) For more information, see Media formats.
     */
    xAmznTranscribeMediaEncoding: XAmznTranscribeMediaEncoding1;
    /** Specify the medical specialty contained in your audio. */
    xAmznTranscribeSpecialty: XAmznTranscribeSpecialty;
    /**
     * Specify the type of input audio. For example, choose DICTATION for a provider dictating
     * patient notes and CONVERSATION for a dialogue between a patient and a medical professional.
     */
    xAmznTranscribeType: XAmznTranscribeType;
    /**
     * Specify the name of the custom vocabulary that you want to use when processing your
     * transcription. Note that vocabulary names are case sensitive.
     */
    xAmznTranscribeVocabularyName?: string;
    /**
     * Enables speaker partitioning (diarization) in your transcription output. Speaker partitioning
     * labels the speech from individual speakers in your media file. For more information, see
     * Partitioning speakers (diarization).
     */
    xAmznTranscribeShowSpeakerLabel?: boolean;
    /**
     * Specify a name for your transcription session. If you don't include this parameter in your
     * request, Amazon Transcribe Medical generates an ID and returns it in the response.
     */
    xAmznTranscribeSessionId?: string;
    /**
     * Enables channel identification in multi-channel audio. Channel identification transcribes the
     * audio on each channel independently, then appends the output for each channel into one
     * transcript. If you have multi-channel audio and do not enable channel identification, your
     * audio is transcribed in a continuous manner and your transcript is not separated by channel.
     * If you include EnableChannelIdentification in your request, you must also include
     * NumberOfChannels. For more information, see Transcribing multi-channel audio.
     */
    xAmznTranscribeEnableChannelIdentification?: boolean;
    /**
     * Specify the number of channels in your audio stream. This value must be 2, as only two
     * channels are supported. If your audio doesn't contain multiple channels, do not include this
     * parameter in your request. If you include NumberOfChannels in your request, you must also
     * include EnableChannelIdentification.
     */
    xAmznTranscribeNumberOfChannels?: number;
    /**
     * Labels all personal health information (PHI) identified in your transcript. Content
     * identification is performed at the segment level; PHI is flagged upon complete transcription
     * of an audio segment. For more information, see Identifying personal health information (PHI)
     * in a transcription.
     */
    xAmznTranscribeContentIdentificationType?: XAmznTranscribeContentIdentificationType1;
    body?: AudioStream;
  };

  export class StartMedicalStreamTranscriptionError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"conflictException", ConflictException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"serviceUnavailableException", ServiceUnavailableException>
      | Undeclared;

    static readonly errors: ErrorDecoders<StartMedicalStreamTranscriptionError> = [
      { on: 400, kind: "badRequestException", decode: { kind: "json", schema: badRequestExceptionSchema } },
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 500,
        kind: "internalFailureException",
        decode: { kind: "json", schema: internalFailureExceptionSchema },
      },
      {
        on: 429,
        kind: "limitExceededException",
        decode: { kind: "json", schema: limitExceededExceptionSchema },
      },
      {
        on: 503,
        kind: "serviceUnavailableException",
        decode: { kind: "json", schema: serviceUnavailableExceptionSchema },
      },
    ];
  }

  export type StartStreamTranscriptionRequest = {
    /**
     * The sample rate of the input audio (in hertz). Low-quality audio, such as telephone audio, is
     * typically around 8,000 Hz. High-quality audio typically ranges from 16,000 Hz to 48,000 Hz.
     * Note that the sample rate you specify must match that of your audio.
     */
    xAmznTranscribeSampleRate: number;
    /**
     * Specify the encoding of your input audio. Supported formats are: FLAC OPUS-encoded audio in
     * an Ogg container PCM (only signed 16-bit little-endian audio formats, which does not include
     * WAV) For more information, see Media formats.
     */
    xAmznTranscribeMediaEncoding: XAmznTranscribeMediaEncoding1;
    /**
     * Specify the language code that represents the language spoken in your audio. If you're unsure
     * of the language spoken in your audio, consider using IdentifyLanguage to enable automatic
     * language identification. For a list of languages supported with Amazon Transcribe streaming,
     * refer to the Supported languages table.
     */
    xAmznTranscribeLanguageCode?: XAmznTranscribeLanguageCode2;
    /**
     * Specify the name of the custom vocabulary that you want to use when processing your
     * transcription. Note that vocabulary names are case sensitive. If the language of the
     * specified custom vocabulary doesn't match the language identified in your media, the custom
     * vocabulary is not applied to your transcription. This parameter is not intended for use with
     * the IdentifyLanguage parameter. If you're including IdentifyLanguage in your request and want
     * to use one or more custom vocabularies with your transcription, use the VocabularyNames
     * parameter instead. For more information, see Custom vocabularies
     */
    xAmznTranscribeVocabularyName?: string;
    /**
     * Specify a name for your transcription session. If you don't include this parameter in your
     * request, Amazon Transcribe generates an ID and returns it in the response.
     */
    xAmznTranscribeSessionId?: string;
    /**
     * Specify the name of the custom vocabulary filter that you want to use when processing your
     * transcription. Note that vocabulary filter names are case sensitive. If the language of the
     * specified custom vocabulary filter doesn't match the language identified in your media, the
     * vocabulary filter is not applied to your transcription. This parameter is not intended for
     * use with the IdentifyLanguage parameter. If you're including IdentifyLanguage in your request
     * and want to use one or more vocabulary filters with your transcription, use the
     * VocabularyFilterNames parameter instead. For more informatio
     */
    xAmznTranscribeVocabularyFilterName?: string;
    /**
     * Specify how you want your vocabulary filter applied to your transcript. To replace words with
     * ***, choose mask. To delete words, choose remove. To flag words without changing them, choose
     * tag.
     */
    xAmznTranscribeVocabularyFilterMethod?: XAmznTranscribeVocabularyFilterMethod;
    /**
     * Enables speaker partitioning (diarization) in your transcription output. Speaker partitioning
     * labels the speech from individual speakers in your media file. For more information, see
     * Partitioning speakers (diarization).
     */
    xAmznTranscribeShowSpeakerLabel?: boolean;
    /**
     * Enables channel identification in multi-channel audio. Channel identification transcribes the
     * audio on each channel independently, then appends the output for each channel into one
     * transcript. If you have multi-channel audio and do not enable channel identification, your
     * audio is transcribed in a continuous manner and your transcript is not separated by channel.
     * If you include EnableChannelIdentification in your request, you must also include
     * NumberOfChannels. For more information, see Transcribing multi-channel audio.
     */
    xAmznTranscribeEnableChannelIdentification?: boolean;
    /**
     * Specify the number of channels in your audio stream. This value must be 2, as only two
     * channels are supported. If your audio doesn't contain multiple channels, do not include this
     * parameter in your request. If you include NumberOfChannels in your request, you must also
     * include EnableChannelIdentification.
     */
    xAmznTranscribeNumberOfChannels?: number;
    /**
     * Enables partial result stabilization for your transcription. Partial result stabilization can
     * reduce latency in your output, but may impact accuracy. For more information, see
     * Partial-result stabilization.
     */
    xAmznTranscribeEnablePartialResultsStabilization?: boolean;
    /**
     * Specify the level of stability to use when you enable partial results stabilization
     * (EnablePartialResultsStabilization). Low stability provides the highest accuracy. High
     * stability transcribes faster, but with slightly lower accuracy. For more information, see
     * Partial-result stabilization.
     */
    xAmznTranscribePartialResultsStability?: XAmznTranscribePartialResultsStability;
    /**
     * Labels all personally identifiable information (PII) identified in your transcript. Content
     * identification is performed at the segment level; PII specified in PiiEntityTypes is flagged
     * upon complete transcription of an audio segment. If you don't include PiiEntityTypes in your
     * request, all PII is identified. You can’t set ContentIdentificationType and
     * ContentRedactionType in the same request. If you set both, your request returns a
     * BadRequestException. For more information, see Redacting or identifying personally
     * identifiable information.
     */
    xAmznTranscribeContentIdentificationType?: XAmznTranscribeContentIdentificationType;
    /**
     * Redacts all personally identifiable information (PII) identified in your transcript. Content
     * redaction is performed at the segment level; PII specified in PiiEntityTypes is redacted upon
     * complete transcription of an audio segment. If you don't include PiiEntityTypes in your
     * request, all PII is redacted. You can’t set ContentRedactionType and
     * ContentIdentificationType in the same request. If you set both, your request returns a
     * BadRequestException. For more information, see Redacting or identifying personally
     * identifiable information.
     */
    xAmznTranscribeContentRedactionType?: XAmznTranscribeContentRedactionType;
    /**
     * Specify which types of personally identifiable information (PII) you want to redact in your
     * transcript. You can include as many types as you'd like, or you can select ALL. Values must
     * be comma-separated and can include: ADDRESS, BANK_ACCOUNT_NUMBER, BANK_ROUTING,
     * CREDIT_DEBIT_CVV, CREDIT_DEBIT_EXPIRY, CREDIT_DEBIT_NUMBER, EMAIL, NAME, PHONE, PIN, SSN,
     * AGE, DATE_TIME, LICENSE_PLATE, PASSPORT_NUMBER, PASSWORD, USERNAME,
     * VEHICLE_IDENTIFICATION_NUMBER, or ALL. Note that if you include PiiEntityTypes in your
     * request, you must also include ContentIdentificationType or ContentRedactionType. If you in
     */
    xAmznTranscribePiiEntityTypes?: string;
    /**
     * Specify the name of the custom language model that you want to use when processing your
     * transcription. Note that language model names are case sensitive. The language of the
     * specified language model must match the language code you specify in your transcription
     * request. If the languages don't match, the custom language model isn't applied. There are no
     * errors or warnings associated with a language mismatch. For more information, see Custom
     * language models.
     */
    xAmznTranscribeLanguageModelName?: string;
    /**
     * Enables automatic language identification for your transcription. If you include
     * IdentifyLanguage, you must include a list of language codes, using LanguageOptions, that you
     * think may be present in your audio stream. You can also include a preferred language using
     * PreferredLanguage. Adding a preferred language can help Amazon Transcribe identify the
     * language faster than if you omit this parameter. If you have multi-channel audio that
     * contains different languages on each channel, and you've enabled channel identification,
     * automatic language identification identifies the dominant language on eac
     */
    xAmznTranscribeIdentifyLanguage?: boolean;
    /**
     * Specify two or more language codes that represent the languages you think may be present in
     * your media; including more than five is not recommended. Including language options can
     * improve the accuracy of language identification. If you include LanguageOptions in your
     * request, you must also include IdentifyLanguage or IdentifyMultipleLanguages. For a list of
     * languages supported with Amazon Transcribe streaming, refer to the Supported languages table.
     * You can only include one language dialect per language per stream. For example, you cannot
     * include en-US and en-AU in the same request.
     */
    xAmznTranscribeLanguageOptions?: string;
    /**
     * Specify a preferred language from the subset of languages codes you specified in
     * LanguageOptions. You can only use this parameter if you've included IdentifyLanguage and
     * LanguageOptions in your request.
     */
    xAmznTranscribePreferredLanguage?: XAmznTranscribePreferredLanguage1;
    /**
     * Enables automatic multi-language identification in your transcription job request. Use this
     * parameter if your stream contains more than one language. If your stream contains only one
     * language, use IdentifyLanguage instead. If you include IdentifyMultipleLanguages, you must
     * include a list of language codes, using LanguageOptions, that you think may be present in
     * your stream. If you want to apply a custom vocabulary or a custom vocabulary filter to your
     * automatic multiple language identification request, include VocabularyNames or
     * VocabularyFilterNames. Note that you must include one of Language
     */
    xAmznTranscribeIdentifyMultipleLanguages?: boolean;
    /**
     * Specify the names of the custom vocabularies that you want to use when processing your
     * transcription. Note that vocabulary names are case sensitive. If none of the languages of the
     * specified custom vocabularies match the language identified in your media, your job fails.
     * This parameter is only intended for use with the IdentifyLanguage parameter. If you're not
     * including IdentifyLanguage in your request and want to use a custom vocabulary with your
     * transcription, use the VocabularyName parameter instead. For more information, see Custom
     * vocabularies.
     */
    xAmznTranscribeVocabularyNames?: string;
    /**
     * Specify the names of the custom vocabulary filters that you want to use when processing your
     * transcription. Note that vocabulary filter names are case sensitive. If none of the languages
     * of the specified custom vocabulary filters match the language identified in your media, your
     * job fails. This parameter is only intended for use with the IdentifyLanguage parameter. If
     * you're not including IdentifyLanguage in your request and want to use a custom vocabulary
     * filter with your transcription, use the VocabularyFilterName parameter instead. For more
     * information, see Using vocabulary filtering with u
     */
    xAmznTranscribeVocabularyFilterNames?: string;
    /**
     * Specify the time window, in minutes, during which your transcription session can be resumed,
     * measured from the stream start time. This optional parameter accepts integer values from 1 to
     * 300 (5 hours). For example, if your stream starts at 1 PM and you specify a
     * SessionResumeWindow of 30 minutes, you can reconnect to the session as many times as you want
     * until 1:30 PM.
     */
    xAmznTranscribeSessionResumeWindow?: number;
    /**
     * Specify how numbers, dates, and other alphanumeric entities are rendered in your
     * transcription results. WRITTEN renders these entities in their standard written form (for
     * example, $50, 10:30 AM, and 101). SPOKEN renders these entities as words, exactly as they
     * were spoken (for example, fifty dollars, ten thirty a m, and one oh one). If you don't
     * specify a value, Amazon Transcribe uses WRITTEN by default.
     */
    xAmznTranscribeTranscriptFormat?: XAmznTranscribeTranscriptFormat;
    body?: AudioStream;
  };

  export class StartStreamTranscriptionError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"conflictException", ConflictException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"serviceUnavailableException", ServiceUnavailableException>
      | Undeclared;

    static readonly errors: ErrorDecoders<StartStreamTranscriptionError> = [
      { on: 400, kind: "badRequestException", decode: { kind: "json", schema: badRequestExceptionSchema } },
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 500,
        kind: "internalFailureException",
        decode: { kind: "json", schema: internalFailureExceptionSchema },
      },
      {
        on: 429,
        kind: "limitExceededException",
        decode: { kind: "json", schema: limitExceededExceptionSchema },
      },
      {
        on: 503,
        kind: "serviceUnavailableException",
        decode: { kind: "json", schema: serviceUnavailableExceptionSchema },
      },
    ];
  }

  export type TagResourceRequestParams = {
    xAmzTarget: XAmzTarget1AmazonTranscribeServiceOperationsApi;
  };

  export class TagResourceError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error409", undefined>
      | Declared<"error500", undefined>
      | Declared<"error429", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<TagResourceError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type UntagResourceRequestParams = {
    xAmzTarget: XAmzTarget2AmazonTranscribeServiceOperationsApi;
  };

  export class UntagResourceError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error409", undefined>
      | Declared<"error500", undefined>
      | Declared<"error429", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UntagResourceError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }
}
