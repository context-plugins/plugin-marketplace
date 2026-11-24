import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1ReadingtimeRequest = {
  /** The text to calculate reading time for */
  text: string;
  /** Words per minute reading speed */
  wpm?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1ReadingtimeRequestSchema: Schema<V1ReadingtimeRequest> = s.object<V1ReadingtimeRequest>(
  {
    text: s.string(),
    wpm: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
