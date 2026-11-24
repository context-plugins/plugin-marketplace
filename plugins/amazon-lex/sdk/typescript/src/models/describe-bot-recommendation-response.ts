import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  botRecommendationResultsSchema,
  type BotRecommendationResults,
} from "./bot-recommendation-results.js";
import { botRecommendationStatusSchema, type BotRecommendationStatus } from "./bot-recommendation-status.js";
import { encryptionSettingSchema, type EncryptionSetting } from "./encryption-setting.js";
import { transcriptSourceSettingSchema, type TranscriptSourceSetting } from "./transcript-source-setting.js";

export type DescribeBotRecommendationResponse = {
  /** The identifier of the bot associated with the bot recommendation. */
  botId?: string;
  /** The version of the bot associated with the bot recommendation. */
  botVersion?: string;
  /** The identifier of the language and locale of the bot recommendation to describe. */
  localeId?: string;
  /**
   * The status of the bot recommendation. If the status is Failed, then the reasons for the failure
   * are listed in the failureReasons field.
   */
  botRecommendationStatus?: BotRecommendationStatus;
  /** The identifier of the bot recommendation being described. */
  botRecommendationId?: string;
  /** If botRecommendationStatus is Failed, Amazon Lex explains why. */
  failureReasons?: string[];
  /** The date and time that the bot recommendation was created. */
  creationDateTime?: Date;
  /** The date and time that the bot recommendation was last updated. */
  lastUpdatedDateTime?: Date;
  transcriptSourceSetting?: TranscriptSourceSetting;
  encryptionSetting?: EncryptionSetting;
  botRecommendationResults?: BotRecommendationResults;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeBotRecommendationResponseSchema: Schema<DescribeBotRecommendationResponse> =
  s.object<DescribeBotRecommendationResponse>(
    {
      botId: s.optional(s.string()),
      botVersion: s.optional(s.string()),
      localeId: s.optional(s.string()),
      botRecommendationStatus: s.optional(s.lazy(() => botRecommendationStatusSchema)),
      botRecommendationId: s.optional(s.string()),
      failureReasons: s.optional(s.array(s.string())),
      creationDateTime: s.optional(s.dateTime()),
      lastUpdatedDateTime: s.optional(s.dateTime()),
      transcriptSourceSetting: s.optional(s.lazy(() => transcriptSourceSettingSchema)),
      encryptionSetting: s.optional(s.lazy(() => encryptionSettingSchema)),
      botRecommendationResults: s.optional(s.lazy(() => botRecommendationResultsSchema)),
    },
    { additionalProperties: s.json() },
  );
