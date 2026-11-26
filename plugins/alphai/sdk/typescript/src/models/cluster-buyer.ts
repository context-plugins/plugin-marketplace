import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reasonSchema, type Reason } from "./reason.js";
import { roleSchema, type Role } from "./role.js";

export type ClusterBuyer = {
  name: string;
  title: string;
  isOfficer: boolean;
  isDirector: boolean;
  isTenPercentOwner: boolean;
  /**
   * `independent` counts toward the cluster. `plan_like`: the buyer's fills all share an exact
   * date-and-price pair with another buyer's (an allocation, an ESPP/DRIP lot), match another
   * direct holder's lot at a round price, or the filing itself says the shares were not bought on
   * the open market (then `reason` is set). `unpriced`: no fill carries a price (units, exchanges).
   * `duplicate_of`: the same transaction another reporter already reported; `duplicate_of` names
   * that reporter.
   */
  role: Role;
  /**
   * Set on a `plan_like` buyer when the Form 4's own footnotes or remarks decided it: `placement` —
   * bought from the issuer (a PIPE, a subscription or securities purchase agreement, SPAC sponsor
   * units); `offering` — allocated in a public offering or IPO; `private` — a negotiated block from
   * another holder (a stock transfer agreement, a private transaction). Null when the price shape
   * alone decided the role. Read by the collector since 2026-09-26; earlier filings are backfilled
   * for 90 days.
   */
  reason: Reason | null;
  duplicateOf: string | null;
  fills: number;
  /** Sum of this buyer's priced fills (decimal string). */
  usd: string | null;
  firstDate: string;
  lastDate: string;
  /**
   * The `uid`s of the insider news rows fronting this buyer's filings — fetch `/api/news/{uid}/`
   * for the event.
   */
  newsUids: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const clusterBuyerSchema: Schema<ClusterBuyer> = s.object<ClusterBuyer>(
  {
    name: s.string(),
    title: s.string(),
    isOfficer: s.boolean(),
    isDirector: s.boolean(),
    isTenPercentOwner: s.boolean(),
    role: roleSchema,
    reason: s.nullable(s.lazy(() => reasonSchema)),
    duplicateOf: s.nullable(s.string()),
    fills: s.int(),
    usd: s.nullable(s.string()),
    firstDate: s.dateOnly(),
    lastDate: s.dateOnly(),
    newsUids: s.array(s.string()),
    _keysMap: {
      isOfficer: "is_officer",
      isDirector: "is_director",
      isTenPercentOwner: "is_ten_percent_owner",
      duplicateOf: "duplicate_of",
      firstDate: "first_date",
      lastDate: "last_date",
      newsUids: "news_uids",
    },
  },
  { additionalProperties: s.json() },
);
