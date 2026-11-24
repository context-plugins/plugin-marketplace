import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * `live`: we are publishing odds for this venue and sport right now. `interrupted_24h`: we are not
 * — no rows at this instant, or the venue's feed is interrupted now; it was publishing within the
 * last 24 hours, which is why it is listed at all.
 */
export const Status2 = {
  Live: "live",
  Interrupted24H: "interrupted_24h",
} as const;
export type Status2 = (typeof Status2)[keyof typeof Status2] | (string & {});

export const status2Schema: EnumSchema<Status2> = s.enumOf<Status2>(Status2);
