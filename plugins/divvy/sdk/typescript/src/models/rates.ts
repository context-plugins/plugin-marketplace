import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { activePromotionSchema, type ActivePromotion } from "./active-promotion.js";
import { fundingSchema, type Funding } from "./funding.js";

export type Rates = {
  /** ID of the default card account */
  defaultCardAccountId?: string;
  funding?: Funding;
  activePromotion?: ActivePromotion;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ratesSchema: Schema<Rates> = s.object<Rates>(
  {
    defaultCardAccountId: s.optional(s.string()),
    funding: s.optional(s.lazy(() => fundingSchema)),
    activePromotion: s.optional(s.lazy(() => activePromotionSchema)),
  },
  { additionalProperties: s.json() },
);
