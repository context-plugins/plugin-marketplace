import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  healthCheckDiscoveryDiscoverTypeHttpSchema,
  type HealthCheckDiscoveryDiscoverTypeHttp,
} from "../health-check-discovery-discover-type-http.js";
import {
  healthCheckDiscoveryDiscoverTypeJsonSchema,
  type HealthCheckDiscoveryDiscoverTypeJson,
} from "../health-check-discovery-discover-type-json.js";
import {
  healthCheckDiscoveryDiscoverTypeListSchema,
  type HealthCheckDiscoveryDiscoverTypeList,
} from "../health-check-discovery-discover-type-list.js";
import {
  healthCheckDiscoveryDiscoverTypeNoneSchema,
  type HealthCheckDiscoveryDiscoverTypeNone,
} from "../health-check-discovery-discover-type-none.js";

export type BaseType11 =
  | (HealthCheckDiscoveryDiscoverTypeHttp & { discoverType: "http" })
  | (HealthCheckDiscoveryDiscoverTypeJson & { discoverType: "json" })
  | (HealthCheckDiscoveryDiscoverTypeList & { discoverType: "list" })
  | (HealthCheckDiscoveryDiscoverTypeNone & { discoverType: "none" });

export const baseType11Schema: Schema<BaseType11> = s.discriminatedUnion<BaseType11>("discoverType", {
  http: healthCheckDiscoveryDiscoverTypeHttpSchema,
  json: healthCheckDiscoveryDiscoverTypeJsonSchema,
  list: healthCheckDiscoveryDiscoverTypeListSchema,
  none: healthCheckDiscoveryDiscoverTypeNoneSchema,
});
