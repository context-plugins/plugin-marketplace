import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget3AwsDirectConnectOperationsApi = {
  OvertureServiceAllocatePublicVirtualInterface: "OvertureService.AllocatePublicVirtualInterface",
} as const;
export type XAmzTarget3AwsDirectConnectOperationsApi =
  | (typeof XAmzTarget3AwsDirectConnectOperationsApi)[keyof typeof XAmzTarget3AwsDirectConnectOperationsApi]
  | (string & {});

export const xAmzTarget3AwsDirectConnectOperationsApiSchema: EnumSchema<XAmzTarget3AwsDirectConnectOperationsApi> =
  s.enumOf<XAmzTarget3AwsDirectConnectOperationsApi>(XAmzTarget3AwsDirectConnectOperationsApi);
