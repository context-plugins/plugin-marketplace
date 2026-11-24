import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Usage = {
  period?: string;
  used?: number;
  overage?: number;
  limit?: number;
  plan?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usageSchema: Schema<Usage> = s.object<Usage>(
  {
    period: s.optional(s.string()),
    used: s.optional(s.int()),
    overage: s.optional(s.int()),
    limit: s.optional(s.int()),
    plan: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
