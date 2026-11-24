import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type LinkedinActivityIntentTopic = {
  topic?: string;
  category?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const linkedinActivityIntentTopicSchema: Schema<LinkedinActivityIntentTopic> =
  s.object<LinkedinActivityIntentTopic>(
    {
      topic: s.optional(s.string()),
      category: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
