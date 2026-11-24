import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Set on a `plan_like` buyer when the Form 4's own footnotes or remarks decided it: `placement` —
 * bought from the issuer (a PIPE, a subscription or securities purchase agreement, SPAC sponsor
 * units); `offering` — allocated in a public offering or IPO; `private` — a negotiated block from
 * another holder (a stock transfer agreement, a private transaction). Null when the price shape
 * alone decided the role. Read by the collector since 2026-09-26; earlier filings are backfilled
 * for 90 days.
 */
export const Reason = {
  Placement: "placement",
  Offering: "offering",
  Private: "private",
} as const;
export type Reason = (typeof Reason)[keyof typeof Reason] | (string & {});

export const reasonSchema: EnumSchema<Reason> = s.enumOf<Reason>(Reason);
