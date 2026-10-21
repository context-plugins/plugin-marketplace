import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  healthCheckDiscoveryDiscoverTypeHttpDiscoverMethodGetSchema,
  type HealthCheckDiscoveryDiscoverTypeHttpDiscoverMethodGet,
} from "../health-check-discovery-discover-type-http-discover-method-get.js";
import {
  healthCheckDiscoveryDiscoverTypeHttpDiscoverMethodPostWithBodySchema,
  type HealthCheckDiscoveryDiscoverTypeHttpDiscoverMethodPostWithBody,
} from "../health-check-discovery-discover-type-http-discover-method-post-with-body.js";
import {
  healthCheckDiscoveryDiscoverTypeHttpDiscoverMethodPostSchema,
  type HealthCheckDiscoveryDiscoverTypeHttpDiscoverMethodPost,
} from "../health-check-discovery-discover-type-http-discover-method-post.js";

export type BaseType10 =
  | (HealthCheckDiscoveryDiscoverTypeHttpDiscoverMethodGet & { discoverMethod: "get" })
  | (HealthCheckDiscoveryDiscoverTypeHttpDiscoverMethodPost & { discoverMethod: "post" })
  | (HealthCheckDiscoveryDiscoverTypeHttpDiscoverMethodPostWithBody & { discoverMethod: "post_with_body" });

export const baseType10Schema: Schema<BaseType10> = s.discriminatedUnion<BaseType10>("discoverMethod", {
  get: healthCheckDiscoveryDiscoverTypeHttpDiscoverMethodGetSchema,
  post: healthCheckDiscoveryDiscoverTypeHttpDiscoverMethodPostSchema,
  post_with_body: healthCheckDiscoveryDiscoverTypeHttpDiscoverMethodPostWithBodySchema,
});
