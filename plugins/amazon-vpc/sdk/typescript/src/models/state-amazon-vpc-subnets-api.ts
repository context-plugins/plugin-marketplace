import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The current state of the subnet */
export const StateAmazonVpcSubnetsApi = {
  Pending: "pending",
  Available: "available",
} as const;
export type StateAmazonVpcSubnetsApi =
  | (typeof StateAmazonVpcSubnetsApi)[keyof typeof StateAmazonVpcSubnetsApi]
  | (string & {});

export const stateAmazonVpcSubnetsApiSchema: EnumSchema<StateAmazonVpcSubnetsApi> =
  s.enumOf<StateAmazonVpcSubnetsApi>(StateAmazonVpcSubnetsApi);
