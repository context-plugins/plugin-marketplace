import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  restDiscoveryDiscoverTypeHttpSchema,
  type RestDiscoveryDiscoverTypeHttp,
} from "../rest-discovery-discover-type-http.js";
import {
  restDiscoveryDiscoverTypeJsonSchema,
  type RestDiscoveryDiscoverTypeJson,
} from "../rest-discovery-discover-type-json.js";
import {
  restDiscoveryDiscoverTypeListSchema,
  type RestDiscoveryDiscoverTypeList,
} from "../rest-discovery-discover-type-list.js";
import {
  restDiscoveryDiscoverTypeNoneSchema,
  type RestDiscoveryDiscoverTypeNone,
} from "../rest-discovery-discover-type-none.js";

export type BaseType15 =
  | (RestDiscoveryDiscoverTypeHttp & { discoverType: "http" })
  | (RestDiscoveryDiscoverTypeJson & { discoverType: "json" })
  | (RestDiscoveryDiscoverTypeList & { discoverType: "list" })
  | (RestDiscoveryDiscoverTypeNone & { discoverType: "none" });

export const baseType15Schema: Schema<BaseType15> = s.discriminatedUnion<BaseType15>("discoverType", {
  http: restDiscoveryDiscoverTypeHttpSchema,
  json: restDiscoveryDiscoverTypeJsonSchema,
  list: restDiscoveryDiscoverTypeListSchema,
  none: restDiscoveryDiscoverTypeNoneSchema,
});
