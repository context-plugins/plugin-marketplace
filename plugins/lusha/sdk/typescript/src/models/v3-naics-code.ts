import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V3NaicsCode = {
  code?: number;
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v3NaicsCodeSchema: Schema<V3NaicsCode> = s.object<V3NaicsCode>(
  {
    code: s.optional(s.int()),
    description: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
