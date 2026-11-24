import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1LeetspeakRequest = {
  /** The text to encode or decode in Leet Speak */
  text: string;
  /** The mode to use */
  mode: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1LeetspeakRequestSchema: Schema<V1LeetspeakRequest> = s.object<V1LeetspeakRequest>(
  {
    text: s.string(),
    mode: s.string(),
  },
  { additionalProperties: s.json() },
);
