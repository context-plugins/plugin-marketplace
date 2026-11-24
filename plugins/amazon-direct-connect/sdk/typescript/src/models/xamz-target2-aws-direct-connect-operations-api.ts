import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AwsDirectConnectOperationsApi = {
  OvertureServiceAllocatePrivateVirtualInterface: "OvertureService.AllocatePrivateVirtualInterface",
} as const;
export type XAmzTarget2AwsDirectConnectOperationsApi =
  | (typeof XAmzTarget2AwsDirectConnectOperationsApi)[keyof typeof XAmzTarget2AwsDirectConnectOperationsApi]
  | (string & {});

export const xAmzTarget2AwsDirectConnectOperationsApiSchema: EnumSchema<XAmzTarget2AwsDirectConnectOperationsApi> =
  s.enumOf<XAmzTarget2AwsDirectConnectOperationsApi>(XAmzTarget2AwsDirectConnectOperationsApi);
