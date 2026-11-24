import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StatusDistribution = {
  successful?: number;
  pending?: number;
  failed?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const statusDistributionSchema: Schema<StatusDistribution> = s.object<StatusDistribution>(
  {
    successful: s.optional(s.int()),
    pending: s.optional(s.int()),
    failed: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
