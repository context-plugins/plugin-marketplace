import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  callAnalyticsTranscriptResultStreamSchema,
  type CallAnalyticsTranscriptResultStream,
} from "./call-analytics-transcript-result-stream.js";
import {
  contentIdentificationTypeAmazonTranscribeServiceOperationsApiSchema,
  type ContentIdentificationTypeAmazonTranscribeServiceOperationsApi,
} from "./content-identification-type-amazon-transcribe-service-operations-api.js";
import { contentRedactionTypeSchema, type ContentRedactionType } from "./content-redaction-type.js";
import { languageCode5Schema, type LanguageCode5 } from "./language-code5.js";
import { mediaEncoding1Schema, type MediaEncoding1 } from "./media-encoding1.js";
import { partialResultsStabilitySchema, type PartialResultsStability } from "./partial-results-stability.js";
import { preferredLanguageSchema, type PreferredLanguage } from "./preferred-language.js";
import { vocabularyFilterMethod2Schema, type VocabularyFilterMethod2 } from "./vocabulary-filter-method2.js";

export type StartCallAnalyticsStreamTranscriptionResponse = {
  /** Provides the identifier for your real-time Call Analytics request. */
  requestId?: string;
  /** Provides the language code that you specified in your Call Analytics request. */
  languageCode?: LanguageCode5;
  /** Provides the sample rate that you specified in your Call Analytics request. */
  mediaSampleRateHertz?: number;
  /** Provides the media encoding you specified in your Call Analytics request. */
  mediaEncoding?: MediaEncoding1;
  /**
   * Provides the name of the custom vocabulary that you specified in your Call Analytics request.
   */
  vocabularyName?: string;
  /** Provides the identifier for your Call Analytics transcription session. */
  sessionId?: string;
  /** Exactly one member is set. */
  callAnalyticsTranscriptResultStream?: CallAnalyticsTranscriptResultStream;
  /**
   * Provides the name of the custom vocabulary filter that you specified in your Call Analytics
   * request.
   */
  vocabularyFilterName?: string;
  /** Provides the vocabulary filtering method used in your Call Analytics transcription. */
  vocabularyFilterMethod?: VocabularyFilterMethod2;
  /**
   * Provides the name of the custom language model that you specified in your Call Analytics
   * request.
   */
  languageModelName?: string;
  /**
   * Shows whether automatic language identification was enabled for your Call Analytics
   * transcription.
   */
  identifyLanguage?: boolean;
  /** Provides the language codes that you specified in your Call Analytics request. */
  languageOptions?: string;
  /** Provides the preferred language that you specified in your Call Analytics request. */
  preferredLanguage?: PreferredLanguage;
  /**
   * Provides the names of the custom vocabularies that you specified in your Call Analytics
   * request.
   */
  vocabularyNames?: string;
  /**
   * Provides the names of the custom vocabulary filters that you specified in your Call Analytics
   * request.
   */
  vocabularyFilterNames?: string;
  /**
   * Shows whether partial results stabilization was enabled for your Call Analytics transcription.
   */
  enablePartialResultsStabilization?: boolean;
  /** Provides the stabilization level used for your transcription. */
  partialResultsStability?: PartialResultsStability;
  /** Shows whether content identification was enabled for your Call Analytics transcription. */
  contentIdentificationType?: ContentIdentificationTypeAmazonTranscribeServiceOperationsApi;
  /** Shows whether content redaction was enabled for your Call Analytics transcription. */
  contentRedactionType?: ContentRedactionType;
  /** Lists the PII entity types you specified in your Call Analytics request. */
  piiEntityTypes?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startCallAnalyticsStreamTranscriptionResponseSchema: Schema<StartCallAnalyticsStreamTranscriptionResponse> =
  s.object<StartCallAnalyticsStreamTranscriptionResponse>(
    {
      requestId: s.optional(s.string()),
      languageCode: s.optional(s.lazy(() => languageCode5Schema)),
      mediaSampleRateHertz: s.optional(s.int()),
      mediaEncoding: s.optional(s.lazy(() => mediaEncoding1Schema)),
      vocabularyName: s.optional(s.string()),
      sessionId: s.optional(s.string()),
      callAnalyticsTranscriptResultStream: s.optional(
        s.lazy(() => callAnalyticsTranscriptResultStreamSchema),
      ),
      vocabularyFilterName: s.optional(s.string()),
      vocabularyFilterMethod: s.optional(s.lazy(() => vocabularyFilterMethod2Schema)),
      languageModelName: s.optional(s.string()),
      identifyLanguage: s.optional(s.boolean()),
      languageOptions: s.optional(s.string()),
      preferredLanguage: s.optional(s.lazy(() => preferredLanguageSchema)),
      vocabularyNames: s.optional(s.string()),
      vocabularyFilterNames: s.optional(s.string()),
      enablePartialResultsStabilization: s.optional(s.boolean()),
      partialResultsStability: s.optional(s.lazy(() => partialResultsStabilitySchema)),
      contentIdentificationType: s.optional(
        s.lazy(() => contentIdentificationTypeAmazonTranscribeServiceOperationsApiSchema),
      ),
      contentRedactionType: s.optional(s.lazy(() => contentRedactionTypeSchema)),
      piiEntityTypes: s.optional(s.string()),
      _keysMap: {
        requestId: "RequestId",
        languageCode: "LanguageCode",
        mediaSampleRateHertz: "MediaSampleRateHertz",
        mediaEncoding: "MediaEncoding",
        vocabularyName: "VocabularyName",
        sessionId: "SessionId",
        callAnalyticsTranscriptResultStream: "CallAnalyticsTranscriptResultStream",
        vocabularyFilterName: "VocabularyFilterName",
        vocabularyFilterMethod: "VocabularyFilterMethod",
        languageModelName: "LanguageModelName",
        identifyLanguage: "IdentifyLanguage",
        languageOptions: "LanguageOptions",
        preferredLanguage: "PreferredLanguage",
        vocabularyNames: "VocabularyNames",
        vocabularyFilterNames: "VocabularyFilterNames",
        enablePartialResultsStabilization: "EnablePartialResultsStabilization",
        partialResultsStability: "PartialResultsStability",
        contentIdentificationType: "ContentIdentificationType",
        contentRedactionType: "ContentRedactionType",
        piiEntityTypes: "PiiEntityTypes",
      },
    },
    { additionalProperties: s.json() },
  );
