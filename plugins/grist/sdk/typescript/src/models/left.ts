import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Left/local document state */
export type Left = {
  /** Sequential action number */
  n?: number;
  /** Hash identifier */
  h?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const leftSchema: Schema<Left> = s.object<Left>(
  {
    n: s.optional(s.int()),
    h: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
