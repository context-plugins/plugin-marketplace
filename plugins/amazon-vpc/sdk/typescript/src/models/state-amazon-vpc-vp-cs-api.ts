import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The current state of the VPC */
export const StateAmazonVpcVpCsApi = {
  Pending: "pending",
  Available: "available",
} as const;
export type StateAmazonVpcVpCsApi =
  | (typeof StateAmazonVpcVpCsApi)[keyof typeof StateAmazonVpcVpCsApi]
  | (string & {});

export const stateAmazonVpcVpCsApiSchema: EnumSchema<StateAmazonVpcVpCsApi> =
  s.enumOf<StateAmazonVpcVpCsApi>(StateAmazonVpcVpCsApi);
