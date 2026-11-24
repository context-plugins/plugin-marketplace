import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudLocationLocationSchema,
  type GoogleCloudLocationLocation,
} from "./google-cloud-location-location.js";

/** The response message for Locations.ListLocations. */
export type GoogleCloudLocationListLocationsResponse = {
  /** A list of locations that matches the specified filter in the request. */
  locations?: GoogleCloudLocationLocation[];
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudLocationListLocationsResponseSchema: Schema<GoogleCloudLocationListLocationsResponse> =
  s.object<GoogleCloudLocationListLocationsResponse>(
    {
      locations: s.optional(s.array(s.lazy(() => googleCloudLocationLocationSchema))),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
