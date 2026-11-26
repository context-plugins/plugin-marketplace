import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Unauthorized = {
  error?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const unauthorizedSchema: Schema<Unauthorized> = s.object<Unauthorized>(
  {
    error: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
