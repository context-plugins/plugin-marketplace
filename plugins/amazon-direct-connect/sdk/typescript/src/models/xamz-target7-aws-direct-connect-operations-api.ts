import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget7AwsDirectConnectOperationsApi = {
  OvertureServiceConfirmPrivateVirtualInterface: "OvertureService.ConfirmPrivateVirtualInterface",
} as const;
export type XAmzTarget7AwsDirectConnectOperationsApi =
  | (typeof XAmzTarget7AwsDirectConnectOperationsApi)[keyof typeof XAmzTarget7AwsDirectConnectOperationsApi]
  | (string & {});

export const xAmzTarget7AwsDirectConnectOperationsApiSchema: EnumSchema<XAmzTarget7AwsDirectConnectOperationsApi> =
  s.enumOf<XAmzTarget7AwsDirectConnectOperationsApi>(XAmzTarget7AwsDirectConnectOperationsApi);
