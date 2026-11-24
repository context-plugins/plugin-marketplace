import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { location2Schema, type Location2 } from "./location2.js";

/** Commute information which is generated based on specified CommuteFilter. */
export type CommuteInfo1 = {
  /** Location used as the destination in the commute calculation. */
  jobLocation?: Location2;
  /**
   * The number of seconds required to travel to the job location from the query location. A
   * duration of 0 seconds indicates that the job isn't reachable within the requested duration, but
   * was returned as part of an expanded query.
   */
  travelDuration?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const commuteInfo1Schema: Schema<CommuteInfo1> = s.object<CommuteInfo1>(
  {
    jobLocation: s.optional(s.lazy(() => location2Schema)),
    travelDuration: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
