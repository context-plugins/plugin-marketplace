import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { encryptionSettingSchema, type EncryptionSetting } from "./encryption-setting.js";
import { transcriptSourceSettingSchema, type TranscriptSourceSetting } from "./transcript-source-setting.js";

export type StartBotRecommendationRequest = {
  /** The unique identifier of the bot containing the bot recommendation. */
  botId: string;
  /** The version of the bot containing the bot recommendation. */
  botVersion: string;
  /**
   * The identifier of the language and locale of the bot recommendation to start. The string must
   * match one of the supported locales. For more information, see Supported languages
   */
  localeId: string;
  transcriptSourceSetting: TranscriptSourceSetting;
  encryptionSetting?: EncryptionSetting;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startBotRecommendationRequestSchema: Schema<StartBotRecommendationRequest> =
  s.object<StartBotRecommendationRequest>(
    {
      botId: s.string(),
      botVersion: s.string(),
      localeId: s.string(),
      transcriptSourceSetting: transcriptSourceSettingSchema,
      encryptionSetting: s.optional(s.lazy(() => encryptionSettingSchema)),
    },
    { additionalProperties: s.json() },
  );
