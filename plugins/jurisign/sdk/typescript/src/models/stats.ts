import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Stats = {
  total?: number;
  processed?: number;
  sent?: number;
  signed?: number;
  errors?: number;
  pending?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const statsSchema: Schema<Stats> = s.object<Stats>(
  {
    total: s.optional(s.int()),
    processed: s.optional(s.int()),
    sent: s.optional(s.int()),
    signed: s.optional(s.int()),
    errors: s.optional(s.int()),
    pending: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
