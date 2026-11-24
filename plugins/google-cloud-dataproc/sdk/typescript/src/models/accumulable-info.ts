import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AccumulableInfo = {
  name?: string;
  accumullableInfoId?: string;
  value?: string;
  update?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const accumulableInfoSchema: Schema<AccumulableInfo> = s.object<AccumulableInfo>(
  {
    name: s.optional(s.string()),
    accumullableInfoId: s.optional(s.string()),
    value: s.optional(s.string()),
    update: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
