import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  clinicalNoteGenerationSettingsSchema,
  type ClinicalNoteGenerationSettings,
} from "./clinical-note-generation-settings.js";
import { vocabularyFilterMethodSchema, type VocabularyFilterMethod } from "./vocabulary-filter-method.js";

export type MedicalScribeSettings = {
  /**
   * Enables speaker partitioning (diarization) in your Medical Scribe output. Speaker partitioning
   * labels the speech from individual speakers in your media file. If you enable ShowSpeakerLabels
   * in your request, you must also include MaxSpeakerLabels. For more information, see Partitioning
   * speakers (diarization).
   */
  showSpeakerLabels?: boolean;
  /**
   * Specify the maximum number of speakers you want to partition in your media. Note that if your
   * media contains more speakers than the specified number, multiple speakers are treated as a
   * single speaker. If you specify the MaxSpeakerLabels field, you must set the ShowSpeakerLabels
   * field to true.
   */
  maxSpeakerLabels?: number;
  /**
   * Enables channel identification in multi-channel audio. Channel identification transcribes the
   * audio on each channel independently, then appends the output for each channel into one
   * transcript. For more information, see Transcribing multi-channel audio.
   */
  channelIdentification?: boolean;
  /**
   * The name of the custom vocabulary you want to include in your Medical Scribe request. Custom
   * vocabulary names are case sensitive.
   */
  vocabularyName?: string;
  /**
   * The name of the custom vocabulary filter you want to include in your Medical Scribe request.
   * Custom vocabulary filter names are case sensitive. Note that if you include
   * VocabularyFilterName in your request, you must also include VocabularyFilterMethod.
   */
  vocabularyFilterName?: string;
  /**
   * Specify how you want your custom vocabulary filter applied to your transcript. To replace words
   * with ***, choose mask. To delete words, choose remove. To flag words without changing them,
   * choose tag.
   */
  vocabularyFilterMethod?: VocabularyFilterMethod;
  clinicalNoteGenerationSettings?: ClinicalNoteGenerationSettings;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const medicalScribeSettingsSchema: Schema<MedicalScribeSettings> = s.object<MedicalScribeSettings>(
  {
    showSpeakerLabels: s.optional(s.boolean()),
    maxSpeakerLabels: s.optional(s.int()),
    channelIdentification: s.optional(s.boolean()),
    vocabularyName: s.optional(s.string()),
    vocabularyFilterName: s.optional(s.string()),
    vocabularyFilterMethod: s.optional(s.lazy(() => vocabularyFilterMethodSchema)),
    clinicalNoteGenerationSettings: s.optional(s.lazy(() => clinicalNoteGenerationSettingsSchema)),
    _keysMap: {
      showSpeakerLabels: "ShowSpeakerLabels",
      maxSpeakerLabels: "MaxSpeakerLabels",
      channelIdentification: "ChannelIdentification",
      vocabularyName: "VocabularyName",
      vocabularyFilterName: "VocabularyFilterName",
      vocabularyFilterMethod: "VocabularyFilterMethod",
      clinicalNoteGenerationSettings: "ClinicalNoteGenerationSettings",
    },
  },
  { additionalProperties: s.json() },
);
