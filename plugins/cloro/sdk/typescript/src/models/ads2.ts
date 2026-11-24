import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { brandInternalSchema, brandSchema, type Brand } from "./brand.js";
import { cardInternalSchema, cardSchema, type Card } from "./card.js";

export type Ads2 = {
  /** Advertiser brand information */
  brand: Brand;
  /** Array of carousel cards in the ad */
  cards: Card[];
  /**
   * OpenAI serving status for the ad. `allowed` means the ad was eligible to serve; `hidden` means
   * OpenAI filtered it (for example, an integrity check).
   */
  visibility: string;
  /**
   * The ad's slot position in OpenAI's served ad response. This reflects served order, not what was
   * shown — use `rendered` for actual exposure.
   */
  adsResponseIndex: number;
  /**
   * Whether the ad was shown as a visible card in the response. OpenAI serves several candidates
   * but the interface renders at most one; ads with `rendered: false` were served but not
   * displayed.
   */
  rendered: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const ads2Properties: s.Shape<Ads2> = {
  brand: brandInternalSchema,
  cards: s.array(s.lazy(() => cardInternalSchema)),
  visibility: s.string(),
  adsResponseIndex: s.int(),
  rendered: s.boolean(),
};

export const ads2InternalSchema: Schema<Ads2> = s.object<Ads2>(ads2Properties, {
  additionalProperties: s.json(),
});

export const ads2Schema: Schema<Ads2> = s.lazySchema(() =>
  s.object<Ads2>(
    {
      ...ads2Properties,
      brand: brandSchema,
      cards: s.array(s.lazy(() => cardSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
