import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Result1 = {
  type?: string;
  url?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const result1Schema: Schema<Result1> = s.object<Result1>(
  {
    type: s.optional(s.string()),
    url: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
