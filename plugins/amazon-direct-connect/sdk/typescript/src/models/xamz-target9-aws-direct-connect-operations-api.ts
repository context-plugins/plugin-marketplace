import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget9AwsDirectConnectOperationsApi = {
  OvertureServiceConfirmTransitVirtualInterface: "OvertureService.ConfirmTransitVirtualInterface",
} as const;
export type XAmzTarget9AwsDirectConnectOperationsApi =
  | (typeof XAmzTarget9AwsDirectConnectOperationsApi)[keyof typeof XAmzTarget9AwsDirectConnectOperationsApi]
  | (string & {});

export const xAmzTarget9AwsDirectConnectOperationsApiSchema: EnumSchema<XAmzTarget9AwsDirectConnectOperationsApi> =
  s.enumOf<XAmzTarget9AwsDirectConnectOperationsApi>(XAmzTarget9AwsDirectConnectOperationsApi);
