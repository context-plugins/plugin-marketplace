import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAwsDirectConnectOperationsApi = {
  OvertureServiceAllocateConnectionOnInterconnect: "OvertureService.AllocateConnectionOnInterconnect",
} as const;
export type XAmzTargetAwsDirectConnectOperationsApi =
  | (typeof XAmzTargetAwsDirectConnectOperationsApi)[keyof typeof XAmzTargetAwsDirectConnectOperationsApi]
  | (string & {});

export const xAmzTargetAwsDirectConnectOperationsApiSchema: EnumSchema<XAmzTargetAwsDirectConnectOperationsApi> =
  s.enumOf<XAmzTargetAwsDirectConnectOperationsApi>(XAmzTargetAwsDirectConnectOperationsApi);
