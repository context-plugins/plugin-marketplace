import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  restDiscoveryDiscoverTypeHttpDiscoverMethodGetSchema,
  type RestDiscoveryDiscoverTypeHttpDiscoverMethodGet,
} from "../rest-discovery-discover-type-http-discover-method-get.js";
import {
  restDiscoveryDiscoverTypeHttpDiscoverMethodOtherSchema,
  type RestDiscoveryDiscoverTypeHttpDiscoverMethodOther,
} from "../rest-discovery-discover-type-http-discover-method-other.js";
import {
  restDiscoveryDiscoverTypeHttpDiscoverMethodPostWithBodySchema,
  type RestDiscoveryDiscoverTypeHttpDiscoverMethodPostWithBody,
} from "../rest-discovery-discover-type-http-discover-method-post-with-body.js";
import {
  restDiscoveryDiscoverTypeHttpDiscoverMethodPostSchema,
  type RestDiscoveryDiscoverTypeHttpDiscoverMethodPost,
} from "../rest-discovery-discover-type-http-discover-method-post.js";

export type BaseType14 =
  | (RestDiscoveryDiscoverTypeHttpDiscoverMethodGet & { discoverMethod: "get" })
  | (RestDiscoveryDiscoverTypeHttpDiscoverMethodPost & { discoverMethod: "post" })
  | (RestDiscoveryDiscoverTypeHttpDiscoverMethodPostWithBody & { discoverMethod: "post_with_body" })
  | (RestDiscoveryDiscoverTypeHttpDiscoverMethodOther & { discoverMethod: "other" });

export const baseType14Schema: Schema<BaseType14> = s.discriminatedUnion<BaseType14>("discoverMethod", {
  get: restDiscoveryDiscoverTypeHttpDiscoverMethodGetSchema,
  post: restDiscoveryDiscoverTypeHttpDiscoverMethodPostSchema,
  post_with_body: restDiscoveryDiscoverTypeHttpDiscoverMethodPostWithBodySchema,
  other: restDiscoveryDiscoverTypeHttpDiscoverMethodOtherSchema,
});
