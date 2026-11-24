import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SentimentAnalysisSettings = {
  /** Sets whether Amazon Lex uses Amazon Comprehend to detect the sentiment of user utterances. */
  detectSentiment: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sentimentAnalysisSettingsSchema: Schema<SentimentAnalysisSettings> =
  s.object<SentimentAnalysisSettings>(
    {
      detectSentiment: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
