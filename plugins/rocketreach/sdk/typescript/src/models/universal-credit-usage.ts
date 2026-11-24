import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UniversalCreditUsage = {
  /** Total credits allocated to the user */
  creditsAllocated?: number;
  /** Total credits used by the user */
  creditsUsed?: number;
  /** Total credits remaining for the user */
  creditsRemaining?: number;
  /** Timestamp of the last sync of the user credit usage data */
  lastSynced?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const universalCreditUsageSchema: Schema<UniversalCreditUsage> = s.object<UniversalCreditUsage>(
  {
    creditsAllocated: s.optional(s.int()),
    creditsUsed: s.optional(s.int()),
    creditsRemaining: s.optional(s.int()),
    lastSynced: s.optional(s.dateTime()),
    _keysMap: {
      creditsAllocated: "credits_allocated",
      creditsUsed: "credits_used",
      creditsRemaining: "credits_remaining",
      lastSynced: "last_synced",
    },
  },
  { additionalProperties: s.json() },
);
