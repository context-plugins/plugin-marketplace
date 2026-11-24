import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreditUsage = {
  /** The API endpoint being consumed */
  endpoint?: string;
  /** Number of credits consumed by the endpoint call */
  requests?: number;
  /** The number of credits consumed through the corresponding endpoint */
  credits?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const creditUsageSchema: Schema<CreditUsage> = s.object<CreditUsage>(
  {
    endpoint: s.optional(s.string()),
    requests: s.optional(s.int()),
    credits: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
