import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Present for text/both runs; null otherwise */
export type TextDiff = {
  added?: string[];
  removed?: string[];
  summary?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const textDiffSchema: Schema<TextDiff> = s.object<TextDiff>(
  {
    added: s.optional(s.array(s.string())),
    removed: s.optional(s.array(s.string())),
    summary: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
