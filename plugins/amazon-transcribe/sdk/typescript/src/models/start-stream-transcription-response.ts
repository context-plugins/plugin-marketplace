import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  contentIdentificationType2Schema,
  type ContentIdentificationType2,
} from "./content-identification-type2.js";
import { contentRedactionType1Schema, type ContentRedactionType1 } from "./content-redaction-type1.js";
import { languageCode8Schema, type LanguageCode8 } from "./language-code8.js";
import { mediaEncoding3Schema, type MediaEncoding3 } from "./media-encoding3.js";
import { partialResultsStabilitySchema, type PartialResultsStability } from "./partial-results-stability.js";
import { preferredLanguage1Schema, type PreferredLanguage1 } from "./preferred-language1.js";
import { transcriptFormatSchema, type TranscriptFormat } from "./transcript-format.js";
import { transcriptResultStreamSchema, type TranscriptResultStream } from "./transcript-result-stream.js";
import { vocabularyFilterMethod3Schema, type VocabularyFilterMethod3 } from "./vocabulary-filter-method3.js";

export type StartStreamTranscriptionResponse = {
  /** Provides the identifier for your streaming request. */
  requestId?: string;
  /** Provides the language code that you specified in your request. */
  languageCode?: LanguageCode8;
  /** Provides the sample rate that you specified in your request. */
  mediaSampleRateHertz?: number;
  /** Provides the media encoding you specified in your request. */
  mediaEncoding?: MediaEncoding3;
  /** Provides the name of the custom vocabulary that you specified in your request. */
  vocabularyName?: string;
  /** Provides the identifier for your transcription session. */
  sessionId?: string;
  /** Exactly one member is set. */
  transcriptResultStream?: TranscriptResultStream;
  /** Provides the name of the custom vocabulary filter that you specified in your request. */
  vocabularyFilterName?: string;
  /** Provides the vocabulary filtering method used in your transcription. */
  vocabularyFilterMethod?: VocabularyFilterMethod3;
  /** Shows whether speaker partitioning was enabled for your transcription. */
  showSpeakerLabel?: boolean;
  /** Shows whether channel identification was enabled for your transcription. */
  enableChannelIdentification?: boolean;
  /** Provides the number of channels that you specified in your request. */
  numberOfChannels?: number;
  /** Shows whether partial results stabilization was enabled for your transcription. */
  enablePartialResultsStabilization?: boolean;
  /** Provides the stabilization level used for your transcription. */
  partialResultsStability?: PartialResultsStability;
  /** Shows whether content identification was enabled for your transcription. */
  contentIdentificationType?: ContentIdentificationType2;
  /** Shows whether content redaction was enabled for your transcription. */
  contentRedactionType?: ContentRedactionType1;
  /** Lists the PII entity types you specified in your request. */
  piiEntityTypes?: string;
  /** Provides the name of the custom language model that you specified in your request. */
  languageModelName?: string;
  /** Shows whether automatic language identification was enabled for your transcription. */
  identifyLanguage?: boolean;
  /** Provides the language codes that you specified in your request. */
  languageOptions?: string;
  /** Provides the preferred language that you specified in your request. */
  preferredLanguage?: PreferredLanguage1;
  /** Shows whether automatic multi-language identification was enabled for your transcription. */
  identifyMultipleLanguages?: boolean;
  /** Provides the names of the custom vocabularies that you specified in your request. */
  vocabularyNames?: string;
  /** Provides the names of the custom vocabulary filters that you specified in your request. */
  vocabularyFilterNames?: string;
  /** Provides the session resume window, in minutes, that you specified in your request. */
  sessionResumeWindow?: number;
  /** Provides the transcript format that you specified in your request. */
  transcriptFormat?: TranscriptFormat;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startStreamTranscriptionResponseSchema: Schema<StartStreamTranscriptionResponse> =
  s.object<StartStreamTranscriptionResponse>(
    {
      requestId: s.optional(s.string()),
      languageCode: s.optional(s.lazy(() => languageCode8Schema)),
      mediaSampleRateHertz: s.optional(s.int()),
      mediaEncoding: s.optional(s.lazy(() => mediaEncoding3Schema)),
      vocabularyName: s.optional(s.string()),
      sessionId: s.optional(s.string()),
      transcriptResultStream: s.optional(s.lazy(() => transcriptResultStreamSchema)),
      vocabularyFilterName: s.optional(s.string()),
      vocabularyFilterMethod: s.optional(s.lazy(() => vocabularyFilterMethod3Schema)),
      showSpeakerLabel: s.optional(s.boolean()),
      enableChannelIdentification: s.optional(s.boolean()),
      numberOfChannels: s.optional(s.int()),
      enablePartialResultsStabilization: s.optional(s.boolean()),
      partialResultsStability: s.optional(s.lazy(() => partialResultsStabilitySchema)),
      contentIdentificationType: s.optional(s.lazy(() => contentIdentificationType2Schema)),
      contentRedactionType: s.optional(s.lazy(() => contentRedactionType1Schema)),
      piiEntityTypes: s.optional(s.string()),
      languageModelName: s.optional(s.string()),
      identifyLanguage: s.optional(s.boolean()),
      languageOptions: s.optional(s.string()),
      preferredLanguage: s.optional(s.lazy(() => preferredLanguage1Schema)),
      identifyMultipleLanguages: s.optional(s.boolean()),
      vocabularyNames: s.optional(s.string()),
      vocabularyFilterNames: s.optional(s.string()),
      sessionResumeWindow: s.optional(s.int()),
      transcriptFormat: s.optional(s.lazy(() => transcriptFormatSchema)),
      _keysMap: {
        requestId: "RequestId",
        languageCode: "LanguageCode",
        mediaSampleRateHertz: "MediaSampleRateHertz",
        mediaEncoding: "MediaEncoding",
        vocabularyName: "VocabularyName",
        sessionId: "SessionId",
        transcriptResultStream: "TranscriptResultStream",
        vocabularyFilterName: "VocabularyFilterName",
        vocabularyFilterMethod: "VocabularyFilterMethod",
        showSpeakerLabel: "ShowSpeakerLabel",
        enableChannelIdentification: "EnableChannelIdentification",
        numberOfChannels: "NumberOfChannels",
        enablePartialResultsStabilization: "EnablePartialResultsStabilization",
        partialResultsStability: "PartialResultsStability",
        contentIdentificationType: "ContentIdentificationType",
        contentRedactionType: "ContentRedactionType",
        piiEntityTypes: "PiiEntityTypes",
        languageModelName: "LanguageModelName",
        identifyLanguage: "IdentifyLanguage",
        languageOptions: "LanguageOptions",
        preferredLanguage: "PreferredLanguage",
        identifyMultipleLanguages: "IdentifyMultipleLanguages",
        vocabularyNames: "VocabularyNames",
        vocabularyFilterNames: "VocabularyFilterNames",
        sessionResumeWindow: "SessionResumeWindow",
        transcriptFormat: "TranscriptFormat",
      },
    },
    { additionalProperties: s.json() },
  );
