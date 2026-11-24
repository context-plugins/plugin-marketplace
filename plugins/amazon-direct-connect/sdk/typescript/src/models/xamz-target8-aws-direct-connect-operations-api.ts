import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget8AwsDirectConnectOperationsApi = {
  OvertureServiceConfirmPublicVirtualInterface: "OvertureService.ConfirmPublicVirtualInterface",
} as const;
export type XAmzTarget8AwsDirectConnectOperationsApi =
  | (typeof XAmzTarget8AwsDirectConnectOperationsApi)[keyof typeof XAmzTarget8AwsDirectConnectOperationsApi]
  | (string & {});

export const xAmzTarget8AwsDirectConnectOperationsApiSchema: EnumSchema<XAmzTarget8AwsDirectConnectOperationsApi> =
  s.enumOf<XAmzTarget8AwsDirectConnectOperationsApi>(XAmzTarget8AwsDirectConnectOperationsApi);
