import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AnalyticsUtteranceAttributeResult = {
  /** The intent that the bot mapped the utterance to. */
  lastUsedIntent?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsUtteranceAttributeResultSchema: Schema<AnalyticsUtteranceAttributeResult> =
  s.object<AnalyticsUtteranceAttributeResult>(
    {
      lastUsedIntent: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
