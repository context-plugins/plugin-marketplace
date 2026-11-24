import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type HotelOption = {
  /** Booking provider name */
  provider?: string;
  /** Price as displayed */
  price?: string;
  /** URL to book on this provider */
  link?: string;
  /** Optional note (e.g. "Includes breakfast") — omitted when not present */
  note?: string;
  /**
   * Google's `/goto` redirect for this link, in the absolute form `POST /v1/monitor/google/goto`
   * accepts. Present only when Google served the link as a redirect — the sibling link field holds
   * the destination cloro resolved it to.
   */
  redirectLink?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const hotelOptionSchema: Schema<HotelOption> = s.object<HotelOption>(
  {
    provider: s.optional(s.string()),
    price: s.optional(s.string()),
    link: s.optional(s.string()),
    note: s.optional(s.string()),
    redirectLink: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
