import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Feedback = {
  /** Whether the feedback is positive or negative. */
  positive: boolean;
  /** Optional text providing additional feedback details. */
  text?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const feedbackSchema: Schema<Feedback> = s.object<Feedback>(
  {
    positive: s.boolean(),
    text: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
