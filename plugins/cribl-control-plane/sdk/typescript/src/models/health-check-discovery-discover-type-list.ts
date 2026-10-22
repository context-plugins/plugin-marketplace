import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  discoverTypeOptionsHealthCheckDiscoveryDiscoverTypeListSchema,
  type DiscoverTypeOptionsHealthCheckDiscoveryDiscoverTypeList,
} from "./discover-type-options-health-check-discovery-discover-type-list.js";

export type HealthCheckDiscoveryDiscoverTypeList = {
  /** Discriminator value. */
  discoverType?: DiscoverTypeOptionsHealthCheckDiscoveryDiscoverTypeList;
  /**
   * Comma-separated list of items to return from the Discover task. Each item returned will
   * generate a collect task, and can be referenced using `${id}` in the collect URL, headers, or
   * parameters.
   */
  itemList: string[];
};

export const healthCheckDiscoveryDiscoverTypeListSchema: Schema<HealthCheckDiscoveryDiscoverTypeList> =
  s.object<HealthCheckDiscoveryDiscoverTypeList>({
    discoverType: s.optional(s.lazy(() => discoverTypeOptionsHealthCheckDiscoveryDiscoverTypeListSchema)),
    itemList: s.array(s.string()),
  });
