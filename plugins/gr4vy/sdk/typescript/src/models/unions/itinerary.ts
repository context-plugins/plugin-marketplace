import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { affirmItineraryOptionsSchema, type AffirmItineraryOptions } from "../affirm-itinerary-options.js";

/** Passes itinerary data to the Affirm API. */
export type Itinerary = AffirmItineraryOptions;

export const itinerarySchema: Schema<Itinerary> = s.of<Itinerary>(
  s.union([s.lazy(() => affirmItineraryOptionsSchema)]),
);
