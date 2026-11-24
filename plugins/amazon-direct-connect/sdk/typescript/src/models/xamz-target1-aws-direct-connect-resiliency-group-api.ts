import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AwsDirectConnectResiliencyGroupApi = {
  OvertureServiceDeleteResiliencyGroup: "OvertureService.DeleteResiliencyGroup",
} as const;
export type XAmzTarget1AwsDirectConnectResiliencyGroupApi =
  | (typeof XAmzTarget1AwsDirectConnectResiliencyGroupApi)[keyof typeof XAmzTarget1AwsDirectConnectResiliencyGroupApi]
  | (string & {});

export const xAmzTarget1AwsDirectConnectResiliencyGroupApiSchema: EnumSchema<XAmzTarget1AwsDirectConnectResiliencyGroupApi> =
  s.enumOf<XAmzTarget1AwsDirectConnectResiliencyGroupApi>(XAmzTarget1AwsDirectConnectResiliencyGroupApi);
