import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { creditBalanceRecipientSchema, type CreditBalanceRecipient } from "./credit-balance-recipient.js";
import { creditGrantSchema, type CreditGrant } from "./credit-grant.js";

export type CreditBalance = {
  creditsCurrencyId: string;
  currencyName: string;
  currencyKey: string;
  /**
   * Effective spendable balance across all grants in this pool, rollover-capped during rollover
   * windows. Equals sum(grants[].available).
   */
  available: number;
  used: number;
  total: number;
  /**
   * Aggregate min(periodStart) across grants in this pool. Does not correspond to any real billing
   * period when grants overlap. Use grants[].periodStart instead. Will be removed in a future API
   * version.
   */
  periodStart: Date | null;
  /**
   * Aggregate max(periodEnd) across grants in this pool. Does not correspond to any real billing
   * period when grants overlap. Use grants[].periodEnd or grants[].expiresAt instead. Will be
   * removed in a future API version.
   */
  periodEnd: Date | null;
  /**
   * Aggregate max(rolloverEndDate) across grants in this pool. Use grants[].rolloverEndDate or
   * grants[].expiresAt instead. Will be removed in a future API version.
   */
  rolloverEndDate: Date | null;
  recipient: CreditBalanceRecipient;
  grants: CreditGrant[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const creditBalanceSchema: Schema<CreditBalance> = s.object<CreditBalance>(
  {
    creditsCurrencyId: s.string(),
    currencyName: s.string(),
    currencyKey: s.string(),
    available: s.float64(),
    used: s.float64(),
    total: s.float64(),
    periodStart: s.nullable(s.dateTime()),
    periodEnd: s.nullable(s.dateTime()),
    rolloverEndDate: s.nullable(s.dateTime()),
    recipient: creditBalanceRecipientSchema,
    grants: s.array(s.lazy(() => creditGrantSchema)),
  },
  { additionalProperties: s.json() },
);
