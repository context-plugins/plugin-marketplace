import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1ReversetextRequest = {
  /** Text to reverse */
  text: string;
  /** Reversal mode */
  mode?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1ReversetextRequestSchema: Schema<V1ReversetextRequest> = s.object<V1ReversetextRequest>(
  {
    text: s.string(),
    mode: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
