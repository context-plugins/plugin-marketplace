import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  contentIdentificationType1AmazonTranscribeServiceOperationsApiSchema,
  type ContentIdentificationType1AmazonTranscribeServiceOperationsApi,
} from "./content-identification-type1-amazon-transcribe-service-operations-api.js";
import { languageCode7Schema, type LanguageCode7 } from "./language-code7.js";
import { mediaEncoding3Schema, type MediaEncoding3 } from "./media-encoding3.js";
import {
  medicalTranscriptResultStreamSchema,
  type MedicalTranscriptResultStream,
} from "./medical-transcript-result-stream.js";
import {
  specialtyAmazonTranscribeServiceOperationsApiSchema,
  type SpecialtyAmazonTranscribeServiceOperationsApi,
} from "./specialty-amazon-transcribe-service-operations-api.js";
import { type4Schema, type Type4 } from "./type4.js";

export type StartMedicalStreamTranscriptionResponse = {
  /** Provides the identifier for your streaming request. */
  requestId?: string;
  /** Provides the language code that you specified in your request. This must be en-US. */
  languageCode?: LanguageCode7;
  /** Provides the sample rate that you specified in your request. */
  mediaSampleRateHertz?: number;
  /** Provides the media encoding you specified in your request. */
  mediaEncoding?: MediaEncoding3;
  /** Provides the name of the custom vocabulary that you specified in your request. */
  vocabularyName?: string;
  /** Provides the medical specialty that you specified in your request. */
  specialty?: SpecialtyAmazonTranscribeServiceOperationsApi;
  /** Provides the type of audio you specified in your request. */
  type?: Type4;
  /** Shows whether speaker partitioning was enabled for your transcription. */
  showSpeakerLabel?: boolean;
  /** Provides the identifier for your transcription session. */
  sessionId?: string;
  /** Exactly one member is set. */
  transcriptResultStream?: MedicalTranscriptResultStream;
  /** Shows whether channel identification was enabled for your transcription. */
  enableChannelIdentification?: boolean;
  /** Provides the number of channels that you specified in your request. */
  numberOfChannels?: number;
  /** Shows whether content identification was enabled for your transcription. */
  contentIdentificationType?: ContentIdentificationType1AmazonTranscribeServiceOperationsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startMedicalStreamTranscriptionResponseSchema: Schema<StartMedicalStreamTranscriptionResponse> =
  s.object<StartMedicalStreamTranscriptionResponse>(
    {
      requestId: s.optional(s.string()),
      languageCode: s.optional(s.lazy(() => languageCode7Schema)),
      mediaSampleRateHertz: s.optional(s.int()),
      mediaEncoding: s.optional(s.lazy(() => mediaEncoding3Schema)),
      vocabularyName: s.optional(s.string()),
      specialty: s.optional(s.lazy(() => specialtyAmazonTranscribeServiceOperationsApiSchema)),
      type: s.optional(s.lazy(() => type4Schema)),
      showSpeakerLabel: s.optional(s.boolean()),
      sessionId: s.optional(s.string()),
      transcriptResultStream: s.optional(s.lazy(() => medicalTranscriptResultStreamSchema)),
      enableChannelIdentification: s.optional(s.boolean()),
      numberOfChannels: s.optional(s.int()),
      contentIdentificationType: s.optional(
        s.lazy(() => contentIdentificationType1AmazonTranscribeServiceOperationsApiSchema),
      ),
      _keysMap: {
        requestId: "RequestId",
        languageCode: "LanguageCode",
        mediaSampleRateHertz: "MediaSampleRateHertz",
        mediaEncoding: "MediaEncoding",
        vocabularyName: "VocabularyName",
        specialty: "Specialty",
        type: "Type",
        showSpeakerLabel: "ShowSpeakerLabel",
        sessionId: "SessionId",
        transcriptResultStream: "TranscriptResultStream",
        enableChannelIdentification: "EnableChannelIdentification",
        numberOfChannels: "NumberOfChannels",
        contentIdentificationType: "ContentIdentificationType",
      },
    },
    { additionalProperties: s.json() },
  );
