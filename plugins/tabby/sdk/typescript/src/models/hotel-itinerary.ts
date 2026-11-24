import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type HotelItinerary = {
  hotelName?: string;
  address?: string;
  hotelCity?: string;
  hotelCountry?: string;
  /** ISO 8601 date e.g. 2018-10-17 */
  startDate?: string;
  /** ISO 8601 date e.g. 2018-10-17 */
  endDate?: string;
  numberOfRooms?: number;
  class?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const hotelItinerarySchema: Schema<HotelItinerary> = s.object<HotelItinerary>(
  {
    hotelName: s.optional(s.string()),
    address: s.optional(s.string()),
    hotelCity: s.optional(s.string()),
    hotelCountry: s.optional(s.string()),
    startDate: s.optional(s.dateOnly()),
    endDate: s.optional(s.dateOnly()),
    numberOfRooms: s.optional(s.int()),
    class: s.optional(s.string()),
    _keysMap: {
      hotelName: "hotel_name",
      hotelCity: "hotel_city",
      hotelCountry: "hotel_country",
      startDate: "start_date",
      endDate: "end_date",
      numberOfRooms: "number_of_rooms",
    },
  },
  { additionalProperties: s.json() },
);
