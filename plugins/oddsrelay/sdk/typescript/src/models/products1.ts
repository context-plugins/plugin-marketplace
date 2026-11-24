import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { status2Schema, type Status2 } from "./status2.js";

export type Products1 = {
  /** Venue key, bookmakers then exchanges. */
  bookmaker: string;
  /** Sport key base. */
  sport: string;
  /**
   * `live`: we are publishing odds for this venue and sport right now. `interrupted_24h`: we are
   * not — no rows at this instant, or the venue's feed is interrupted now; it was publishing within
   * the last 24 hours, which is why it is listed at all.
   */
  status: Status2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const products1Schema: Schema<Products1> = s.object<Products1>(
  {
    bookmaker: s.string(),
    sport: s.string(),
    status: status2Schema,
  },
  { additionalProperties: s.json() },
);
