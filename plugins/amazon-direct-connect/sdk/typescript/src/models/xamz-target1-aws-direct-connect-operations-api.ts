import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AwsDirectConnectOperationsApi = {
  OvertureServiceAllocateHostedConnection: "OvertureService.AllocateHostedConnection",
} as const;
export type XAmzTarget1AwsDirectConnectOperationsApi =
  | (typeof XAmzTarget1AwsDirectConnectOperationsApi)[keyof typeof XAmzTarget1AwsDirectConnectOperationsApi]
  | (string & {});

export const xAmzTarget1AwsDirectConnectOperationsApiSchema: EnumSchema<XAmzTarget1AwsDirectConnectOperationsApi> =
  s.enumOf<XAmzTarget1AwsDirectConnectOperationsApi>(XAmzTarget1AwsDirectConnectOperationsApi);
