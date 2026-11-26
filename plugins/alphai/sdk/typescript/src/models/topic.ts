import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Topic = {
  topic: string;
  relevance: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const topicSchema: Schema<Topic> = s.object<Topic>(
  {
    topic: s.string(),
    relevance: s.float64(),
  },
  { additionalProperties: s.json() },
);
