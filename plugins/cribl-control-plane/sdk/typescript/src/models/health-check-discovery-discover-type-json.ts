import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  discoverTypeOptionsHealthCheckDiscoveryDiscoverTypeJsonSchema,
  type DiscoverTypeOptionsHealthCheckDiscoveryDiscoverTypeJson,
} from "./discover-type-options-health-check-discovery-discover-type-json.js";

export type HealthCheckDiscoveryDiscoverTypeJson = {
  /** Discriminator value. */
  discoverType?: DiscoverTypeOptionsHealthCheckDiscoveryDiscoverTypeJson;
  /**
   * Allows hard-coding the Discover result. Must be a JSON object. Works with the Discover Data
   * field.
   */
  manualDiscoverResult: string;
  /**
   * Within the response JSON, name of the field or array element to pull results from. Leave blank
   * if the result is an array of values. Sample entry: items, json: { items: [{id: 'first'},{id:
   * 'second'}] }
   */
  discoverDataField?: string;
};

export const healthCheckDiscoveryDiscoverTypeJsonSchema: Schema<HealthCheckDiscoveryDiscoverTypeJson> =
  s.object<HealthCheckDiscoveryDiscoverTypeJson>({
    discoverType: s.optional(s.lazy(() => discoverTypeOptionsHealthCheckDiscoveryDiscoverTypeJsonSchema)),
    manualDiscoverResult: s.string(),
    discoverDataField: s.optional(s.string()),
  });
