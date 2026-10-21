import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Discriminator value. */
export const DiscoverTypeOptionsHealthCheckDiscoveryDiscoverTypeHttp = {
  Http: "http",
} as const;
export type DiscoverTypeOptionsHealthCheckDiscoveryDiscoverTypeHttp =
  | (typeof DiscoverTypeOptionsHealthCheckDiscoveryDiscoverTypeHttp)[keyof typeof DiscoverTypeOptionsHealthCheckDiscoveryDiscoverTypeHttp]
  | (string & {});

export const discoverTypeOptionsHealthCheckDiscoveryDiscoverTypeHttpSchema: EnumSchema<DiscoverTypeOptionsHealthCheckDiscoveryDiscoverTypeHttp> =
  s.enumOf<DiscoverTypeOptionsHealthCheckDiscoveryDiscoverTypeHttp>(
    DiscoverTypeOptionsHealthCheckDiscoveryDiscoverTypeHttp,
  );
