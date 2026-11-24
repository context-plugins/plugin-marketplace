import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { botRecommendationStatusSchema, type BotRecommendationStatus } from "./bot-recommendation-status.js";
import { encryptionSettingSchema, type EncryptionSetting } from "./encryption-setting.js";
import { transcriptSourceSettingSchema, type TranscriptSourceSetting } from "./transcript-source-setting.js";

export type UpdateBotRecommendationResponse = {
  /** The unique identifier of the bot containing the bot recommendation that has been updated. */
  botId?: string;
  /** The version of the bot containing the bot recommendation that has been updated. */
  botVersion?: string;
  /**
   * The identifier of the language and locale of the bot recommendation to update. The string must
   * match one of the supported locales. For more information, see Supported languages
   */
  localeId?: string;
  /**
   * The status of the bot recommendation. If the status is Failed, then the reasons for the failure
   * are listed in the failureReasons field.
   */
  botRecommendationStatus?: BotRecommendationStatus;
  /** The unique identifier of the bot recommendation to be updated. */
  botRecommendationId?: string;
  /** A timestamp of the date and time that the bot recommendation was created. */
  creationDateTime?: Date;
  /** A timestamp of the date and time that the bot recommendation was last updated. */
  lastUpdatedDateTime?: Date;
  transcriptSourceSetting?: TranscriptSourceSetting;
  encryptionSetting?: EncryptionSetting;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateBotRecommendationResponseSchema: Schema<UpdateBotRecommendationResponse> =
  s.object<UpdateBotRecommendationResponse>(
    {
      botId: s.optional(s.string()),
      botVersion: s.optional(s.string()),
      localeId: s.optional(s.string()),
      botRecommendationStatus: s.optional(s.lazy(() => botRecommendationStatusSchema)),
      botRecommendationId: s.optional(s.string()),
      creationDateTime: s.optional(s.dateTime()),
      lastUpdatedDateTime: s.optional(s.dateTime()),
      transcriptSourceSetting: s.optional(s.lazy(() => transcriptSourceSettingSchema)),
      encryptionSetting: s.optional(s.lazy(() => encryptionSettingSchema)),
    },
    { additionalProperties: s.json() },
  );
