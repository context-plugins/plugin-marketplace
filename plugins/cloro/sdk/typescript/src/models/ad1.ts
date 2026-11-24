import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { oldPrice2Schema, type OldPrice2 } from "./old-price2.js";
import { price4Schema, type Price4 } from "./price4.js";
import { type2Schema, type Type2 } from "./type2.js";

export type Ad1 = {
  /** Position of the ad (1-indexed) */
  position: number;
  /** Ad title */
  title: string;
  /** Ad destination URL */
  url: string;
  /**
   * Sub-type discriminator. TEXT ads carry `domain` + `description`; SHOPPING ads carry `price` +
   * `store` (+ optional `old_price`). Always present.
   */
  type: Type2;
  /** Domain name of the advertiser (present when `type` is `TEXT`) */
  domain?: string;
  /** Ad description text (present when `type` is `TEXT`) */
  description?: string;
  /**
   * Product price (present when `type` is `SHOPPING`). `currency` and `raw` are always present;
   * `value` is omitted when the number doesn't parse, and the whole object is omitted when no
   * currency appears beside a number. `raw` carries the visible text verbatim.
   */
  price?: Price4;
  /**
   * Original price before discount (present when `type` is `SHOPPING` and the ad has sale pricing).
   * Same shape as `price`.
   */
  oldPrice?: OldPrice2;
  /** Retailer name (present when `type` is `SHOPPING`) */
  store?: string;
  /** Ad image URL (product photo for shopping ads, hero image for text ads) */
  image?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ad1Schema: Schema<Ad1> = s.object<Ad1>(
  {
    position: s.float64(),
    title: s.string(),
    url: s.string(),
    type: type2Schema,
    domain: s.optional(s.string()),
    description: s.optional(s.string()),
    price: s.optional(s.lazy(() => price4Schema)),
    oldPrice: s.optional(s.lazy(() => oldPrice2Schema)),
    store: s.optional(s.string()),
    image: s.optional(s.string()),
    _keysMap: {
      oldPrice: "old_price",
    },
  },
  { additionalProperties: s.json() },
);
