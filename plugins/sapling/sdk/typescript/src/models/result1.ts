import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Result1 = {
  hash?: string;
  modelVersion?: string;
  original?: string;
  rephraseType?: string;
  replacement?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const result1Schema: Schema<Result1> = s.object<Result1>(
  {
    hash: s.optional(s.string()),
    modelVersion: s.optional(s.string()),
    original: s.optional(s.string()),
    rephraseType: s.optional(s.string()),
    replacement: s.optional(s.string()),
    _keysMap: {
      modelVersion: "model_version",
      rephraseType: "rephrase_type",
    },
  },
  { additionalProperties: s.json() },
);
