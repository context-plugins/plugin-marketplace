import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  discoverTypeOptionsHealthCheckDiscoveryDiscoverTypeJsonSchema,
  type DiscoverTypeOptionsHealthCheckDiscoveryDiscoverTypeJson,
} from "./discover-type-options-health-check-discovery-discover-type-json.js";

export type RestDiscoveryDiscoverTypeJson = {
  /** Discriminator value. */
  discoverType?: DiscoverTypeOptionsHealthCheckDiscoveryDiscoverTypeJson;
  /**
   * Allows hard-coding the Discover result. Must be a JSON object or array. Works with Discover
   * data field.
   */
  manualDiscoverResult: string;
  /**
   * Within the response JSON, the name of the field to pull results from, typically a JSON array.
   * Leave blank if the result itself is an array of values. Sample entry: items, json: { items:
   * [{id: 'first'},{id: 'second'}] }
   */
  discoverDataField?: string;
};

export const restDiscoveryDiscoverTypeJsonSchema: Schema<RestDiscoveryDiscoverTypeJson> =
  s.object<RestDiscoveryDiscoverTypeJson>({
    discoverType: s.optional(s.lazy(() => discoverTypeOptionsHealthCheckDiscoveryDiscoverTypeJsonSchema)),
    manualDiscoverResult: s.string(),
    discoverDataField: s.optional(s.string()),
  });
