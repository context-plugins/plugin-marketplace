import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1Mercari400Error = {
  error: string;
  detail?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1Mercari400ErrorSchema: Schema<V1Mercari400Error> = s.object<V1Mercari400Error>(
  {
    error: s.string(),
    detail: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
