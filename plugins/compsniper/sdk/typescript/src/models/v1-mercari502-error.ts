import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1Mercari502Error = {
  error: string;
  detail?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1Mercari502ErrorSchema: Schema<V1Mercari502Error> = s.object<V1Mercari502Error>(
  {
    error: s.string(),
    detail: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
