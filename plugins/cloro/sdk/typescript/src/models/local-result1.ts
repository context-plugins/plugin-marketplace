import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { links1Schema, type Links1 } from "./links1.js";

export type LocalResult1 = {
  /** Position within the pack (1-indexed) */
  position: number;
  /** Business name as displayed on the SERP */
  title: string;
  /** Google entity id for the place */
  placeId?: string;
  /**
   * Google's numeric place id (CID) as a decimal string. `https://maps.google.com/?cid=<cid>` opens
   * the place. Not sent for the newer layout that most German, French, Spanish, Italian, Danish and
   * Polish SERPs use.
   */
  cid?: string;
  /** Google viewer URL for the place: the page that opens when you click the place on the SERP */
  link?: string;
  /** Average star rating (0–5) */
  rating?: number;
  /**
   * Review count as displayed by Google (e.g. "26K"). Free-form string — not normalized to a
   * number.
   */
  reviews?: string;
  /** Price band as displayed by Google (e.g. "$10–20"). Currency symbol matches the locale. */
  price?: string;
  /** Business category (e.g. "Pizza", "Plumber") */
  type?: string;
  /** Years-in-business badge, when shown (typical on service-style packs) */
  yearsInBusiness?: string;
  /** Street address or locality as displayed on the SERP */
  address?: string;
  /**
   * Phone number. Desktop gives the number as Google displays it (e.g. "(702) 777-3777"). Mobile
   * gives the number from the card's Call button (e.g. "+17027773777"). When the card does not show
   * it, it comes from the place data in the page.
   */
  phone?: string;
  /** Opening-hours text as displayed (e.g. "Open · Closes 11 PM", "Open 24 hours") */
  hours?: string;
  /** Trailing snippet — a review quote or a service-options line */
  description?: string;
  /**
   * Action links rendered on the place, typically on business/service-style packs (plumbers,
   * salons, …) and absent on restaurant packs whose places are plain buttons. Each key is present
   * only when Google rendered that button.
   */
  links?: Links1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const localResult1Properties: s.Shape<LocalResult1> = {
  position: s.float64(),
  title: s.string(),
  placeId: s.optional(s.string()),
  cid: s.optional(s.string()),
  link: s.optional(s.string()),
  rating: s.optional(s.float64()),
  reviews: s.optional(s.string()),
  price: s.optional(s.string()),
  type: s.optional(s.string()),
  yearsInBusiness: s.optional(s.string()),
  address: s.optional(s.string()),
  phone: s.optional(s.string()),
  hours: s.optional(s.string()),
  description: s.optional(s.string()),
  links: s.optional(s.lazy(() => links1Schema)),
};

export const localResult1InternalSchema: Schema<LocalResult1> = s.object<LocalResult1>(
  localResult1Properties,
  { additionalProperties: s.json() },
);

export const localResult1Schema: Schema<LocalResult1> = s.lazySchema(() =>
  s.object<LocalResult1>(
    {
      ...localResult1Properties,
      link: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
