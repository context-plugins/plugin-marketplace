import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  discoverTypeOptionsHealthCheckDiscoveryDiscoverTypeListSchema,
  type DiscoverTypeOptionsHealthCheckDiscoveryDiscoverTypeList,
} from "./discover-type-options-health-check-discovery-discover-type-list.js";

export type RestDiscoveryDiscoverTypeList = {
  /** Discriminator value. */
  discoverType?: DiscoverTypeOptionsHealthCheckDiscoveryDiscoverTypeList;
  /**
   * Comma-separated list of items to return from the Discover task. Each item returned generates a
   * Collect task and can be referenced using `${id}` in the Collect URL, headers, or parameters.
   */
  itemList: string[];
};

export const restDiscoveryDiscoverTypeListSchema: Schema<RestDiscoveryDiscoverTypeList> =
  s.object<RestDiscoveryDiscoverTypeList>({
    discoverType: s.optional(s.lazy(() => discoverTypeOptionsHealthCheckDiscoveryDiscoverTypeListSchema)),
    itemList: s.array(s.string()),
  });
