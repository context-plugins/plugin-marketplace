import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Required for travel insurance */
export type TravelDetails = {
  departureCountry: string;
  arrivalCountry: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const travelDetailsSchema: Schema<TravelDetails> = s.object<TravelDetails>(
  {
    departureCountry: s.string(),
    arrivalCountry: s.string(),
    _keysMap: {
      departureCountry: "departure_country",
      arrivalCountry: "arrival_country",
    },
  },
  { additionalProperties: s.json() },
);
