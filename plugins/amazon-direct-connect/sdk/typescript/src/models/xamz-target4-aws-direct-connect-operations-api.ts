import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget4AwsDirectConnectOperationsApi = {
  OvertureServiceAllocateTransitVirtualInterface: "OvertureService.AllocateTransitVirtualInterface",
} as const;
export type XAmzTarget4AwsDirectConnectOperationsApi =
  | (typeof XAmzTarget4AwsDirectConnectOperationsApi)[keyof typeof XAmzTarget4AwsDirectConnectOperationsApi]
  | (string & {});

export const xAmzTarget4AwsDirectConnectOperationsApiSchema: EnumSchema<XAmzTarget4AwsDirectConnectOperationsApi> =
  s.enumOf<XAmzTarget4AwsDirectConnectOperationsApi>(XAmzTarget4AwsDirectConnectOperationsApi);
