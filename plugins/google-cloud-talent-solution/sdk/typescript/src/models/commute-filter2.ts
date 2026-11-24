import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { commuteMethodSchema, type CommuteMethod } from "./commute-method.js";
import { latLng2Schema, type LatLng2 } from "./lat-lng2.js";
import { roadTrafficSchema, type RoadTraffic } from "./road-traffic.js";
import { timeOfDay1Schema, type TimeOfDay1 } from "./time-of-day1.js";

/**
 * Allows filtering jobs by commute time with different travel methods (for example, driving or
 * public transit). Note: This only works when you specify a CommuteMethod. In this case,
 * location_filters is ignored. Currently we don't support sorting by commute time.
 */
export type CommuteFilter2 = {
  /**
   * Required. The maximum travel time in seconds. The maximum allowed value is `3600s` (one hour).
   * Format is `123s`.
   */
  travelDuration?: string;
  /**
   * The departure time used to calculate traffic impact, represented as google.type.TimeOfDay in
   * local time zone. Currently traffic model is restricted to hour level resolution.
   */
  departureTime?: TimeOfDay1;
  /**
   * If `true`, jobs without street level addresses may also be returned. For city level addresses,
   * the city center is used. For state and coarser level addresses, text matching is used. If this
   * field is set to `false` or isn't specified, only jobs that include street level addresses will
   * be returned by commute search.
   */
  allowImpreciseAddresses?: boolean;
  /** Required. The method of transportation to calculate the commute time for. */
  commuteMethod?: CommuteMethod;
  /** Required. The latitude and longitude of the location to calculate the commute time from. */
  startCoordinates?: LatLng2;
  /** Specifies the traffic density to use when calculating commute time. */
  roadTraffic?: RoadTraffic;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const commuteFilter2Schema: Schema<CommuteFilter2> = s.object<CommuteFilter2>(
  {
    travelDuration: s.optional(s.string()),
    departureTime: s.optional(s.lazy(() => timeOfDay1Schema)),
    allowImpreciseAddresses: s.optional(s.boolean()),
    commuteMethod: s.optional(s.lazy(() => commuteMethodSchema)),
    startCoordinates: s.optional(s.lazy(() => latLng2Schema)),
    roadTraffic: s.optional(s.lazy(() => roadTrafficSchema)),
  },
  { additionalProperties: s.json() },
);
