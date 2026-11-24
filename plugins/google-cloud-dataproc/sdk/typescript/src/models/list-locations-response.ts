import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { locationSchema, type Location } from "./location.js";

/** The response message for Locations.ListLocations. */
export type ListLocationsResponse = {
  /** A list of locations that matches the specified filter in the request. */
  locations?: Location[];
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listLocationsResponseSchema: Schema<ListLocationsResponse> = s.object<ListLocationsResponse>(
  {
    locations: s.optional(s.array(s.lazy(() => locationSchema))),
    nextPageToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
