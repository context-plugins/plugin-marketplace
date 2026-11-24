import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Result1 = {
  id?: string;
  companyChange?: Record<string, unknown>[];
  promotion?: Record<string, unknown>[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const result1Schema: Schema<Result1> = s.object<Result1>(
  {
    id: s.optional(s.string()),
    companyChange: s.optional(s.array(s.record(s.string(), s.unknown()))),
    promotion: s.optional(s.array(s.record(s.string(), s.unknown()))),
  },
  { additionalProperties: s.json() },
);
