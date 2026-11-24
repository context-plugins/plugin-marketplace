import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A resource that represents a Google Cloud location. */
export type GoogleCloudLocationLocation = {
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /**
   * Resource name for the location, which may vary between implementations. For example:
   * `"projects/example-project/locations/us-east1"`
   */
  name?: string;
  /**
   * Cross-service attributes for the location. For example {"cloud.googleapis.com/region":
   * "us-east1"}
   */
  labels?: Record<string, string>;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudLocationLocationSchema: Schema<GoogleCloudLocationLocation> =
  s.object<GoogleCloudLocationLocation>(
    {
      metadata: s.optional(s.record(s.string(), s.unknown())),
      displayName: s.optional(s.string()),
      name: s.optional(s.string()),
      labels: s.optional(s.record(s.string(), s.string())),
      locationId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
