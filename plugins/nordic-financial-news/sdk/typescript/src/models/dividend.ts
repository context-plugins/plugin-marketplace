import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { kindSchema, type Kind } from "./kind.js";

/**
 * Dividend lifecycle dates. `null` for non-dividend events. `scheduled_at` follows the priority
 * ex-date > record-date > payment-date, whichever is explicitly stated.
 */
export type Dividend = {
  /** Ex-dividend date (YYYY-MM-DD). The market-event anchor: share price drops on this day. */
  exDate?: string | null;
  /** Record date (YYYY-MM-DD). Holders of record on this date receive the dividend. */
  recordDate?: string | null;
  /** Payment date (YYYY-MM-DD). When the cash is distributed to shareholders. */
  paymentDate?: string | null;
  /**
   * Declaration / announcement date (YYYY-MM-DD). Metadata only, never used as the calendar anchor.
   */
  declarationDate?: string | null;
  /**
   * Tranche type. `ordinary` for the recurring/regular dividend; `special` for an
   * extra/bonus/one-off dividend. When an issuer proposes both for the same date, they are returned
   * as two separate events.
   */
  kind?: Kind;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dividendSchema: Schema<Dividend> = s.object<Dividend>(
  {
    exDate: s.optionalNullable(s.string()),
    recordDate: s.optionalNullable(s.string()),
    paymentDate: s.optionalNullable(s.string()),
    declarationDate: s.optionalNullable(s.string()),
    kind: s.optional(s.lazy(() => kindSchema)),
    _keysMap: {
      exDate: "ex_date",
      recordDate: "record_date",
      paymentDate: "payment_date",
      declarationDate: "declaration_date",
    },
  },
  { additionalProperties: s.json() },
);
