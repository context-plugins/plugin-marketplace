import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The state of the route */
export const StateAmazonVpcRouteTablesApi = {
  Active: "active",
  Blackhole: "blackhole",
} as const;
export type StateAmazonVpcRouteTablesApi =
  | (typeof StateAmazonVpcRouteTablesApi)[keyof typeof StateAmazonVpcRouteTablesApi]
  | (string & {});

export const stateAmazonVpcRouteTablesApiSchema: EnumSchema<StateAmazonVpcRouteTablesApi> =
  s.enumOf<StateAmazonVpcRouteTablesApi>(StateAmazonVpcRouteTablesApi);
