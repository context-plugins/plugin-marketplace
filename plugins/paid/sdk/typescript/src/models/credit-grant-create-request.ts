import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreditGrantCreateRequest = {
  /** Stable machine-readable key for the active credit currency to grant. */
  creditCurrencyKey: string;
  /** Number of credits to grant. This is not a monetary amount. */
  amount: number;
  /**
   * When these credits become spendable, as an RFC3339 datetime with timezone. Must be at or before
   * the current server time. Defaults to the current server time when omitted.
   */
  startsAt?: Date;
  /**
   * When these credits expire, as an RFC3339 datetime with timezone. Omit or set null for credits
   * that do not expire.
   */
  expiresAt?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const creditGrantCreateRequestSchema: Schema<CreditGrantCreateRequest> =
  s.object<CreditGrantCreateRequest>(
    {
      creditCurrencyKey: s.string(),
      amount: s.int(),
      startsAt: s.optional(s.dateTime()),
      expiresAt: s.optionalNullable(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
