import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Data = {
  make?: string;
  model?: string;
  modelYear?: string;
  recallCount?: number;
  hasRecalls?: boolean;
  recalls?: Record<string, unknown>[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataSchema: Schema<Data> = s.object<Data>(
  {
    make: s.optional(s.string()),
    model: s.optional(s.string()),
    modelYear: s.optional(s.string()),
    recallCount: s.optional(s.int()),
    hasRecalls: s.optional(s.boolean()),
    recalls: s.optional(s.array(s.record(s.string(), s.unknown()))),
    _keysMap: {
      modelYear: "model_year",
      recallCount: "recall_count",
      hasRecalls: "has_recalls",
    },
  },
  { additionalProperties: s.json() },
);
