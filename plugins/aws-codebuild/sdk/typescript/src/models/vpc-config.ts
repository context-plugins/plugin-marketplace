import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type VpcConfig = {
  /** The ID of the Amazon VPC. */
  vpcId?: string;
  /** A list of one or more subnet IDs in your Amazon VPC. */
  subnets?: string[];
  /** A list of one or more security groups IDs in your Amazon VPC. */
  securityGroupIds?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const vpcConfigSchema: Schema<VpcConfig> = s.object<VpcConfig>(
  {
    vpcId: s.optional(s.string()),
    subnets: s.optional(s.array(s.string())),
    securityGroupIds: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
