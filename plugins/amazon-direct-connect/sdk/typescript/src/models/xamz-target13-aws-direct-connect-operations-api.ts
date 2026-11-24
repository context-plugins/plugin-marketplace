import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget13AwsDirectConnectOperationsApi = {
  OvertureServiceListVirtualInterfaceRoutes: "OvertureService.ListVirtualInterfaceRoutes",
} as const;
export type XAmzTarget13AwsDirectConnectOperationsApi =
  | (typeof XAmzTarget13AwsDirectConnectOperationsApi)[keyof typeof XAmzTarget13AwsDirectConnectOperationsApi]
  | (string & {});

export const xAmzTarget13AwsDirectConnectOperationsApiSchema: EnumSchema<XAmzTarget13AwsDirectConnectOperationsApi> =
  s.enumOf<XAmzTarget13AwsDirectConnectOperationsApi>(XAmzTarget13AwsDirectConnectOperationsApi);
