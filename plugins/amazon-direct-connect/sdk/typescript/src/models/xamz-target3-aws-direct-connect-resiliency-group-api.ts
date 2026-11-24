import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget3AwsDirectConnectResiliencyGroupApi = {
  OvertureServiceListResiliencyGroups: "OvertureService.ListResiliencyGroups",
} as const;
export type XAmzTarget3AwsDirectConnectResiliencyGroupApi =
  | (typeof XAmzTarget3AwsDirectConnectResiliencyGroupApi)[keyof typeof XAmzTarget3AwsDirectConnectResiliencyGroupApi]
  | (string & {});

export const xAmzTarget3AwsDirectConnectResiliencyGroupApiSchema: EnumSchema<XAmzTarget3AwsDirectConnectResiliencyGroupApi> =
  s.enumOf<XAmzTarget3AwsDirectConnectResiliencyGroupApi>(XAmzTarget3AwsDirectConnectResiliencyGroupApi);
