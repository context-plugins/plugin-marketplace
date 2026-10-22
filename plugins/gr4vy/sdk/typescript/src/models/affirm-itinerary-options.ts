import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dateStartSchema, type DateStart } from "./unions/date-start.js";
import { displayName7Schema, type DisplayName7 } from "./unions/display-name7.js";
import { location1Schema, type Location1 } from "./unions/location1.js";
import { managementSchema, type Management } from "./unions/management.js";
import { sku1Schema, type Sku1 } from "./unions/sku1.js";
import { type491Schema, type Type491 } from "./unions/type491.js";
import { venueSchema, type Venue } from "./unions/venue.js";

export type AffirmItineraryOptions = {
  /** The type of itinerary object. */
  type?: Type491;
  /** The booking/itinerary number (if applicable). */
  sku?: Sku1;
  /** Readable description of the itinerary item. */
  displayName?: DisplayName7;
  /** The name of the venue where the event is hosted. */
  venue?: Venue;
  /** The address object that can be parsed. */
  location?: Location1;
  /** The start date of this itinerary item. */
  dateStart?: DateStart;
  /** The corporation. */
  management?: Management;
};

export const affirmItineraryOptionsSchema: Schema<AffirmItineraryOptions> = s.object<AffirmItineraryOptions>({
  type: s.optional(s.lazy(() => type491Schema)),
  sku: s.optional(s.lazy(() => sku1Schema)),
  displayName: s.optional(s.lazy(() => displayName7Schema)),
  venue: s.optional(s.lazy(() => venueSchema)),
  location: s.optional(s.lazy(() => location1Schema)),
  dateStart: s.optional(s.lazy(() => dateStartSchema)),
  management: s.optional(s.lazy(() => managementSchema)),
  _keysMap: {
    displayName: "display_name",
    dateStart: "date_start",
  },
});
