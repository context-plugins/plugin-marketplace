import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Discriminator value. */
export const DiscoverTypeOptionsHealthCheckDiscoveryDiscoverTypeList = {
  List: "list",
} as const;
export type DiscoverTypeOptionsHealthCheckDiscoveryDiscoverTypeList =
  | (typeof DiscoverTypeOptionsHealthCheckDiscoveryDiscoverTypeList)[keyof typeof DiscoverTypeOptionsHealthCheckDiscoveryDiscoverTypeList]
  | (string & {});

export const discoverTypeOptionsHealthCheckDiscoveryDiscoverTypeListSchema: EnumSchema<DiscoverTypeOptionsHealthCheckDiscoveryDiscoverTypeList> =
  s.enumOf<DiscoverTypeOptionsHealthCheckDiscoveryDiscoverTypeList>(
    DiscoverTypeOptionsHealthCheckDiscoveryDiscoverTypeList,
  );
