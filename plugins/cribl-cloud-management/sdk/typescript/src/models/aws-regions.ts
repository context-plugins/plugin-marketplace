import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** AWS region where the Workspace is deployed. */
export const AwsRegions = {
  UsWest2: "us-west-2",
  UsEast1: "us-east-1",
  UsEast2: "us-east-2",
  EuCentral1: "eu-central-1",
  EuCentral2: "eu-central-2",
  EuWest2: "eu-west-2",
  ApSoutheast1: "ap-southeast-1",
  ApSoutheast2: "ap-southeast-2",
  CaCentral1: "ca-central-1",
  ApNortheast1: "ap-northeast-1",
  SaEast1: "sa-east-1",
  EuWest1: "eu-west-1",
  EuWest3: "eu-west-3",
} as const;
export type AwsRegions = (typeof AwsRegions)[keyof typeof AwsRegions] | (string & {});

export const awsRegionsSchema: EnumSchema<AwsRegions> = s.enumOf<AwsRegions>(AwsRegions);
