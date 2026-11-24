import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Result = {
  vin?: string;
  hasRecalls?: boolean;
  recallCount?: number;
  recalls?: Record<string, unknown>[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resultSchema: Schema<Result> = s.object<Result>(
  {
    vin: s.optional(s.string()),
    hasRecalls: s.optional(s.boolean()),
    recallCount: s.optional(s.int()),
    recalls: s.optional(s.array(s.record(s.string(), s.unknown()))),
  },
  { additionalProperties: s.json() },
);
