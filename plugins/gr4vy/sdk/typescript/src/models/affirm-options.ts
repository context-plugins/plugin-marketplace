import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { discountsSchema, type Discounts } from "./unions/discounts.js";
import { itinerarySchema, type Itinerary } from "./unions/itinerary.js";

export type AffirmOptions = {
  /** Passes additional discounts to the Affirm widget. */
  discounts?: Discounts;
  /** Passes itinerary data to the Affirm API. */
  itinerary?: Itinerary;
};

export const affirmOptionsSchema: Schema<AffirmOptions> = s.object<AffirmOptions>({
  discounts: s.optional(s.lazy(() => discountsSchema)),
  itinerary: s.optional(s.lazy(() => itinerarySchema)),
});
