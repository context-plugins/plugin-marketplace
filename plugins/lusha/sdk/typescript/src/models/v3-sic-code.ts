import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V3SicCode = {
  code?: number;
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v3SicCodeSchema: Schema<V3SicCode> = s.object<V3SicCode>(
  {
    code: s.optional(s.int()),
    description: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
