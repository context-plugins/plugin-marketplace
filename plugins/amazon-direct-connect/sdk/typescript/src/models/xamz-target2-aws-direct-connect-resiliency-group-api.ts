import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AwsDirectConnectResiliencyGroupApi = {
  OvertureServiceGetResiliencyGroup: "OvertureService.GetResiliencyGroup",
} as const;
export type XAmzTarget2AwsDirectConnectResiliencyGroupApi =
  | (typeof XAmzTarget2AwsDirectConnectResiliencyGroupApi)[keyof typeof XAmzTarget2AwsDirectConnectResiliencyGroupApi]
  | (string & {});

export const xAmzTarget2AwsDirectConnectResiliencyGroupApiSchema: EnumSchema<XAmzTarget2AwsDirectConnectResiliencyGroupApi> =
  s.enumOf<XAmzTarget2AwsDirectConnectResiliencyGroupApi>(XAmzTarget2AwsDirectConnectResiliencyGroupApi);
