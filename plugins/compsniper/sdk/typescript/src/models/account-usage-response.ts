import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AccountUsageResponse = {
  plan: string;
  quota: number;
  used: number;
  remaining: number;
  periodStart: Date;
  periodEnd?: Date | null;
  rateLimitPerMinute: number;
  sharedFreeQuota: boolean;
  /**
   * Unused monthly requests carried from a full-price upgrade. These expire at the next renewal.
   */
  rolloverBalance: number;
  creditBalance: number;
  /** Carryover plus monthly requests remaining plus purchased credits. */
  totalAvailable: number;
  purchaseCreditsUrl: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const accountUsageResponseProperties: s.Shape<AccountUsageResponse> = {
  plan: s.string(),
  quota: s.int(),
  used: s.int(),
  remaining: s.int(),
  periodStart: s.dateTime(),
  periodEnd: s.optionalNullable(s.dateTime()),
  rateLimitPerMinute: s.int(),
  sharedFreeQuota: s.boolean(),
  rolloverBalance: s.int(),
  creditBalance: s.int(),
  totalAvailable: s.int(),
  purchaseCreditsUrl: s.string(),
};

export const accountUsageResponseInternalSchema: Schema<AccountUsageResponse> =
  s.object<AccountUsageResponse>(accountUsageResponseProperties, { additionalProperties: s.json() });

export const accountUsageResponseSchema: Schema<AccountUsageResponse> = s.lazySchema(() =>
  s.object<AccountUsageResponse>(
    {
      ...accountUsageResponseProperties,
      purchaseCreditsUrl: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
