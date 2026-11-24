import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The state of the NAT gateway */
export const StateAmazonVpcNatGatewaysApi = {
  Pending: "pending",
  Failed: "failed",
  Available: "available",
  Deleting: "deleting",
  Deleted: "deleted",
} as const;
export type StateAmazonVpcNatGatewaysApi =
  | (typeof StateAmazonVpcNatGatewaysApi)[keyof typeof StateAmazonVpcNatGatewaysApi]
  | (string & {});

export const stateAmazonVpcNatGatewaysApiSchema: EnumSchema<StateAmazonVpcNatGatewaysApi> =
  s.enumOf<StateAmazonVpcNatGatewaysApi>(StateAmazonVpcNatGatewaysApi);
