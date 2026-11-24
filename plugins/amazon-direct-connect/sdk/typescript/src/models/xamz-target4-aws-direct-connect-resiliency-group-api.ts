import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget4AwsDirectConnectResiliencyGroupApi = {
  OvertureServiceUpdateResiliencyGroup: "OvertureService.UpdateResiliencyGroup",
} as const;
export type XAmzTarget4AwsDirectConnectResiliencyGroupApi =
  | (typeof XAmzTarget4AwsDirectConnectResiliencyGroupApi)[keyof typeof XAmzTarget4AwsDirectConnectResiliencyGroupApi]
  | (string & {});

export const xAmzTarget4AwsDirectConnectResiliencyGroupApiSchema: EnumSchema<XAmzTarget4AwsDirectConnectResiliencyGroupApi> =
  s.enumOf<XAmzTarget4AwsDirectConnectResiliencyGroupApi>(XAmzTarget4AwsDirectConnectResiliencyGroupApi);
