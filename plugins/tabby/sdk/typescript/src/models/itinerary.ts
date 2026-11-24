import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Itinerary = {
  departureCity?: string;
  departureCountry?: string;
  arrivalCity?: string;
  arrivalCountry?: string;
  carrier?: string;
  /** RFC3339 e.g. 2018-10-17T07:26:33Z */
  departureDate?: Date;
  class?: string;
  /** true - if ticket can be cancelled/refunded */
  refundable?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const itinerarySchema: Schema<Itinerary> = s.object<Itinerary>(
  {
    departureCity: s.optional(s.string()),
    departureCountry: s.optional(s.string()),
    arrivalCity: s.optional(s.string()),
    arrivalCountry: s.optional(s.string()),
    carrier: s.optional(s.string()),
    departureDate: s.optional(s.dateTime()),
    class: s.optional(s.string()),
    refundable: s.optional(s.boolean()),
    _keysMap: {
      departureCity: "departure_city",
      departureCountry: "departure_country",
      arrivalCity: "arrival_city",
      arrivalCountry: "arrival_country",
      departureDate: "departure_date",
    },
  },
  { additionalProperties: s.json() },
);
