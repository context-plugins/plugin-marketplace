import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1Mercari502Error1 = {
  error: string;
  detail?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1Mercari502Error1Schema: Schema<V1Mercari502Error1> = s.object<V1Mercari502Error1>(
  {
    error: s.string(),
    detail: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
