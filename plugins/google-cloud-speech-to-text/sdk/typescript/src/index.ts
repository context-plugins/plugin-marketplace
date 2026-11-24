export { GoogleCloudSpeechToTextClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export {
  PkceMethod,
  type SecretProvider,
  type OAuth2AuthorizationCodeCredentials,
  type AuthorizationCodePrompt,
} from "./core/auth/credentials.js";
export type {
  OAuth2RefreshableTokenStrategy,
  OAuthToken,
  OAuth2CredentialPlacement,
  OAuthTokenRefreshable,
} from "./core/auth/oauth2-strategies.js";

export { Operations } from "./resources/operations.js";
export { Projects } from "./resources/projects.js";
export { Speech } from "./resources/speech.js";

export { abnfGrammarSchema, type AbnfGrammar } from "./models/abnf-grammar.js";
export { abnfGrammar2Schema, type AbnfGrammar2 } from "./models/abnf-grammar2.js";
export { classItemSchema, type ClassItem } from "./models/class-item.js";
export {
  createCustomClassRequestSchema,
  type CreateCustomClassRequest,
} from "./models/create-custom-class-request.js";
export {
  createPhraseSetRequestSchema,
  type CreatePhraseSetRequest,
} from "./models/create-phrase-set-request.js";
export { customClassSchema, type CustomClass } from "./models/custom-class.js";
export { customClass2Schema, type CustomClass2 } from "./models/custom-class2.js";
export { Encoding, encodingSchema } from "./models/encoding.js";
export { entryModelSchema, type EntryModel } from "./models/entry-model.js";
export { errorSchema, type Error } from "./models/error.js";
export { googleRpcErrorSchema, type GoogleRpcError } from "./models/google-rpc-error.js";
export { googleRpcErrorErrorSchema, type GoogleRpcErrorError } from "./models/google-rpc-error-error.js";
export { InteractionType, interactionTypeSchema } from "./models/interaction-type.js";
export {
  listCustomClassesResponseSchema,
  type ListCustomClassesResponse,
} from "./models/list-custom-classes-response.js";
export {
  listOperationsResponseSchema,
  type ListOperationsResponse,
} from "./models/list-operations-response.js";
export {
  listPhraseSetResponseSchema,
  type ListPhraseSetResponse,
} from "./models/list-phrase-set-response.js";
export {
  longRunningRecognizeRequestSchema,
  type LongRunningRecognizeRequest,
} from "./models/long-running-recognize-request.js";
export { MicrophoneDistance, microphoneDistanceSchema } from "./models/microphone-distance.js";
export { operationSchema, type Operation } from "./models/operation.js";
export { OriginalMediaType, originalMediaTypeSchema } from "./models/original-media-type.js";
export { phraseSchema, type Phrase } from "./models/phrase.js";
export { phraseSetSchema, type PhraseSet } from "./models/phrase-set.js";
export { phraseSet2Schema, type PhraseSet2 } from "./models/phrase-set2.js";
export { recognitionAudioSchema, type RecognitionAudio } from "./models/recognition-audio.js";
export { recognitionAudio2Schema, type RecognitionAudio2 } from "./models/recognition-audio2.js";
export { recognitionConfigSchema, type RecognitionConfig } from "./models/recognition-config.js";
export { recognitionConfig2Schema, type RecognitionConfig2 } from "./models/recognition-config2.js";
export { recognitionMetadataSchema, type RecognitionMetadata } from "./models/recognition-metadata.js";
export { recognitionMetadata2Schema, type RecognitionMetadata2 } from "./models/recognition-metadata2.js";
export { recognizeRequestSchema, type RecognizeRequest } from "./models/recognize-request.js";
export { recognizeResponseSchema, type RecognizeResponse } from "./models/recognize-response.js";
export { RecordingDeviceType, recordingDeviceTypeSchema } from "./models/recording-device-type.js";
export {
  speakerDiarizationConfigSchema,
  type SpeakerDiarizationConfig,
} from "./models/speaker-diarization-config.js";
export {
  speakerDiarizationConfig2Schema,
  type SpeakerDiarizationConfig2,
} from "./models/speaker-diarization-config2.js";
export { speechAdaptationSchema, type SpeechAdaptation } from "./models/speech-adaptation.js";
export { speechAdaptation2Schema, type SpeechAdaptation2 } from "./models/speech-adaptation2.js";
export { speechAdaptationInfoSchema, type SpeechAdaptationInfo } from "./models/speech-adaptation-info.js";
export { speechAdaptationInfo2Schema, type SpeechAdaptationInfo2 } from "./models/speech-adaptation-info2.js";
export { speechContextSchema, type SpeechContext } from "./models/speech-context.js";
export {
  speechRecognitionAlternativeSchema,
  type SpeechRecognitionAlternative,
} from "./models/speech-recognition-alternative.js";
export {
  speechRecognitionResultSchema,
  type SpeechRecognitionResult,
} from "./models/speech-recognition-result.js";
export { State, stateSchema } from "./models/state.js";
export { statusSchema, type Status } from "./models/status.js";
export { status2Schema, type Status2 } from "./models/status2.js";
export {
  transcriptNormalizationSchema,
  type TranscriptNormalization,
} from "./models/transcript-normalization.js";
export {
  transcriptNormalization2Schema,
  type TranscriptNormalization2,
} from "./models/transcript-normalization2.js";
export {
  transcriptOutputConfigSchema,
  type TranscriptOutputConfig,
} from "./models/transcript-output-config.js";
export {
  transcriptOutputConfig2Schema,
  type TranscriptOutputConfig2,
} from "./models/transcript-output-config2.js";
export { wordInfoSchema, type WordInfo } from "./models/word-info.js";

export {
  CoreError as GoogleCloudSpeechToTextError,
  ResponseError,
  DecodeError,
  EncodeError,
  ConnectionError,
  TimeoutError,
  AuthError,
  PaginationError,
  ConfigurationError,
} from "./core/errors.js";
export { ApiError } from "./core/api-error.js";
export { SchemaError } from "./core/validation/schema-error.js";
export {
  defaultLoggingOptions,
  type LoggingOptions,
  type RequestLoggingOptions,
  type Logger,
  type LogDetails,
  type HttpRequestDetails,
  type RequestHeadersDetails,
  type RequestBodyDetails,
  type HttpResponseDetails,
  type ResponseHeadersDetails,
  type HttpRetryingDetails,
  type HttpFailedDetails,
  type LogLevel,
} from "./core/logging.js";
export type { ApiPromise, ApiResult } from "./core/api-promise.js";
export type { Pageable, PageableApiResult } from "./core/pagination/pageable.js";
export type { HttpMethod, RequestOptions } from "./core/api-request.js";
export type { RetryOptions, RequestRetryOptions, RetryAttempt, RetryReason } from "./core/retry.js";
export type { HookOptions, BeforeRequestHook, AfterResponseHook, HookContext } from "./core/hooks.js";
export type { BinaryContent, BinaryData, BinaryErrorContent, FileData, FileInput } from "./core/binary.js";
export type { ErrorKind } from "./core/errors.js";
export type { Declared, Undeclared } from "./core/api-error.js";
export type { Schema, EnumSchema, Encoded, ValidationResult, JsonValue } from "./core/validation/schema.js";
