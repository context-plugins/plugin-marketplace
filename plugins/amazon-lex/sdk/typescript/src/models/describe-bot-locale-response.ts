import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { audioFillerSettingsSchema, type AudioFillerSettings } from "./audio-filler-settings.js";
import { botLocaleHistoryEventSchema, type BotLocaleHistoryEvent } from "./bot-locale-history-event.js";
import { botLocaleStatus4Schema, type BotLocaleStatus4 } from "./bot-locale-status4.js";
import { generativeAiSettingsSchema, type GenerativeAiSettings } from "./generative-ai-settings.js";
import {
  speakerDiarizationSettingsSchema,
  type SpeakerDiarizationSettings,
} from "./speaker-diarization-settings.js";
import {
  speechDetectionSensitivity2Schema,
  type SpeechDetectionSensitivity2,
} from "./speech-detection-sensitivity2.js";
import {
  speechRecognitionSettingsSchema,
  type SpeechRecognitionSettings,
} from "./speech-recognition-settings.js";
import { unifiedSpeechSettingsSchema, type UnifiedSpeechSettings } from "./unified-speech-settings.js";
import { voiceSettingsSchema, type VoiceSettings } from "./voice-settings.js";

export type DescribeBotLocaleResponse = {
  /** The identifier of the bot associated with the locale. */
  botId?: string;
  /** The version of the bot associated with the locale. */
  botVersion?: string;
  /** The unique identifier of the described locale. */
  localeId?: string;
  /** The name of the locale. */
  localeName?: string;
  /** The description of the locale. */
  description?: string;
  /**
   * The confidence threshold where Amazon Lex inserts the AMAZON.FallbackIntent and
   * AMAZON.KendraSearchIntent intents in the list of possible intents for an utterance.
   */
  nluIntentConfidenceThreshold?: number;
  voiceSettings?: VoiceSettings;
  unifiedSpeechSettings?: UnifiedSpeechSettings;
  audioFillerSettings?: AudioFillerSettings;
  speechRecognitionSettings?: SpeechRecognitionSettings;
  /** The number of intents defined for the locale. */
  intentsCount?: number;
  /** The number of slot types defined for the locale. */
  slotTypesCount?: number;
  /**
   * The status of the bot. If the status is Failed, the reasons for the failure are listed in the
   * failureReasons field.
   */
  botLocaleStatus?: BotLocaleStatus4;
  /** if botLocaleStatus is Failed, Amazon Lex explains why it failed to build the bot. */
  failureReasons?: string[];
  /** The date and time that the locale was created. */
  creationDateTime?: Date;
  /** The date and time that the locale was last updated. */
  lastUpdatedDateTime?: Date;
  /** The date and time that the locale was last submitted for building. */
  lastBuildSubmittedDateTime?: Date;
  /**
   * History of changes, such as when a locale is used in an alias, that have taken place for the
   * locale.
   */
  botLocaleHistoryEvents?: BotLocaleHistoryEvent[];
  /** Recommended actions to take to resolve an error in the failureReasons field. */
  recommendedActions?: string[];
  generativeAiSettings?: GenerativeAiSettings;
  /** The sensitivity level for voice activity detection (VAD) configured for the bot locale. */
  speechDetectionSensitivity?: SpeechDetectionSensitivity2;
  speakerDiarizationSettings?: SpeakerDiarizationSettings;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeBotLocaleResponseSchema: Schema<DescribeBotLocaleResponse> =
  s.object<DescribeBotLocaleResponse>(
    {
      botId: s.optional(s.string()),
      botVersion: s.optional(s.string()),
      localeId: s.optional(s.string()),
      localeName: s.optional(s.string()),
      description: s.optional(s.string()),
      nluIntentConfidenceThreshold: s.optional(s.float64()),
      voiceSettings: s.optional(s.lazy(() => voiceSettingsSchema)),
      unifiedSpeechSettings: s.optional(s.lazy(() => unifiedSpeechSettingsSchema)),
      audioFillerSettings: s.optional(s.lazy(() => audioFillerSettingsSchema)),
      speechRecognitionSettings: s.optional(s.lazy(() => speechRecognitionSettingsSchema)),
      intentsCount: s.optional(s.int()),
      slotTypesCount: s.optional(s.int()),
      botLocaleStatus: s.optional(s.lazy(() => botLocaleStatus4Schema)),
      failureReasons: s.optional(s.array(s.string())),
      creationDateTime: s.optional(s.dateTime()),
      lastUpdatedDateTime: s.optional(s.dateTime()),
      lastBuildSubmittedDateTime: s.optional(s.dateTime()),
      botLocaleHistoryEvents: s.optional(s.array(s.lazy(() => botLocaleHistoryEventSchema))),
      recommendedActions: s.optional(s.array(s.string())),
      generativeAiSettings: s.optional(s.lazy(() => generativeAiSettingsSchema)),
      speechDetectionSensitivity: s.optional(s.lazy(() => speechDetectionSensitivity2Schema)),
      speakerDiarizationSettings: s.optional(s.lazy(() => speakerDiarizationSettingsSchema)),
      _keysMap: {
        generativeAiSettings: "generativeAISettings",
      },
    },
    { additionalProperties: s.json() },
  );
