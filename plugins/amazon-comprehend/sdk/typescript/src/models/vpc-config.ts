import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type VpcConfig = {
  /**
   * The ID number for a security group on an instance of your private VPC. Security groups on your
   * VPC function serve as a virtual firewall to control inbound and outbound traffic and provides
   * security for the resources that you’ll be accessing on the VPC. This ID number is preceded by
   * "sg-", for instance: "sg-03b388029b0a285ea". For more information, see Security Groups for your
   * VPC.
   */
  securityGroupIds: string[];
  /**
   * The ID for each subnet being used in your private VPC. This subnet is a subset of the a range
   * of IPv4 addresses used by the VPC and is specific to a given availability zone in the VPC’s
   * Region. This ID number is preceded by "subnet-", for instance: "subnet-04ccf456919e69055". For
   * more information, see VPCs and Subnets.
   */
  subnets: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const vpcConfigSchema: Schema<VpcConfig> = s.object<VpcConfig>(
  {
    securityGroupIds: s.array(s.string()),
    subnets: s.array(s.string()),
    _keysMap: {
      securityGroupIds: "SecurityGroupIds",
      subnets: "Subnets",
    },
  },
  { additionalProperties: s.json() },
);
