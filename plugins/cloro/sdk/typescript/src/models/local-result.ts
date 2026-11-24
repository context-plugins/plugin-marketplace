import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { linksSchema, type Links } from "./links.js";

export type LocalResult = {
  /** Position within the pack (1-indexed) */
  position: number;
  /** Business name as displayed on the SERP */
  title: string;
  /** Google entity id for the place */
  placeId?: string;
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
  /** Phone number, when shown (locale-formatted) */
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
  links?: Links;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const localResultSchema: Schema<LocalResult> = s.object<LocalResult>(
  {
    position: s.float64(),
    title: s.string(),
    placeId: s.optional(s.string()),
    rating: s.optional(s.float64()),
    reviews: s.optional(s.string()),
    price: s.optional(s.string()),
    type: s.optional(s.string()),
    yearsInBusiness: s.optional(s.string()),
    address: s.optional(s.string()),
    phone: s.optional(s.string()),
    hours: s.optional(s.string()),
    description: s.optional(s.string()),
    links: s.optional(s.lazy(() => linksSchema)),
  },
  { additionalProperties: s.json() },
);
