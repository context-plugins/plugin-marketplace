import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAwsDirectConnectResiliencyGroupApi = {
  OvertureServiceCreateResiliencyGroup: "OvertureService.CreateResiliencyGroup",
} as const;
export type XAmzTargetAwsDirectConnectResiliencyGroupApi =
  | (typeof XAmzTargetAwsDirectConnectResiliencyGroupApi)[keyof typeof XAmzTargetAwsDirectConnectResiliencyGroupApi]
  | (string & {});

export const xAmzTargetAwsDirectConnectResiliencyGroupApiSchema: EnumSchema<XAmzTargetAwsDirectConnectResiliencyGroupApi> =
  s.enumOf<XAmzTargetAwsDirectConnectResiliencyGroupApi>(XAmzTargetAwsDirectConnectResiliencyGroupApi);
