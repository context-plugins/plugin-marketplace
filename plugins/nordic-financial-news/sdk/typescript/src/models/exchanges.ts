import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Exchanges = {
  count?: number;
  limit?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const exchangesSchema: Schema<Exchanges> = s.object<Exchanges>(
  {
    count: s.optional(s.int()),
    limit: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
