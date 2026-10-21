import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Discriminator value. */
export const DiscoverTypeOptionsHealthCheckDiscoveryDiscoverTypeJson = {
  Json: "json",
} as const;
export type DiscoverTypeOptionsHealthCheckDiscoveryDiscoverTypeJson =
  | (typeof DiscoverTypeOptionsHealthCheckDiscoveryDiscoverTypeJson)[keyof typeof DiscoverTypeOptionsHealthCheckDiscoveryDiscoverTypeJson]
  | (string & {});

export const discoverTypeOptionsHealthCheckDiscoveryDiscoverTypeJsonSchema: EnumSchema<DiscoverTypeOptionsHealthCheckDiscoveryDiscoverTypeJson> =
  s.enumOf<DiscoverTypeOptionsHealthCheckDiscoveryDiscoverTypeJson>(
    DiscoverTypeOptionsHealthCheckDiscoveryDiscoverTypeJson,
  );
