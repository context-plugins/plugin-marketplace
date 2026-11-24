import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { encryptionSettingSchema, type EncryptionSetting } from "./encryption-setting.js";

export type UpdateBotRecommendationRequest = {
  /** The unique identifier of the bot containing the bot recommendation to be updated. */
  botId: string;
  /** The version of the bot containing the bot recommendation to be updated. */
  botVersion: string;
  /**
   * The identifier of the language and locale of the bot recommendation to update. The string must
   * match one of the supported locales. For more information, see Supported languages
   */
  localeId: string;
  /** The unique identifier of the bot recommendation to be updated. */
  botRecommendationId: string;
  encryptionSetting: EncryptionSetting;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateBotRecommendationRequestSchema: Schema<UpdateBotRecommendationRequest> =
  s.object<UpdateBotRecommendationRequest>(
    {
      botId: s.string(),
      botVersion: s.string(),
      localeId: s.string(),
      botRecommendationId: s.string(),
      encryptionSetting: encryptionSettingSchema,
    },
    { additionalProperties: s.json() },
  );
