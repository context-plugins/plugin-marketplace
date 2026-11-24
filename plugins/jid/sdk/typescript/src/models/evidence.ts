import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Evidence = {
  text?: string;
  source?: string;
  sourceUrl?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const evidenceSchema: Schema<Evidence> = s.object<Evidence>(
  {
    text: s.optional(s.string()),
    source: s.optional(s.string()),
    sourceUrl: s.optionalNullable(s.string()),
    _keysMap: {
      sourceUrl: "source_url",
    },
  },
  { additionalProperties: s.json() },
);
