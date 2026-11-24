import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget5AwsDirectConnectOperationsApi = {
  OvertureServiceConfirmConnection: "OvertureService.ConfirmConnection",
} as const;
export type XAmzTarget5AwsDirectConnectOperationsApi =
  | (typeof XAmzTarget5AwsDirectConnectOperationsApi)[keyof typeof XAmzTarget5AwsDirectConnectOperationsApi]
  | (string & {});

export const xAmzTarget5AwsDirectConnectOperationsApiSchema: EnumSchema<XAmzTarget5AwsDirectConnectOperationsApi> =
  s.enumOf<XAmzTarget5AwsDirectConnectOperationsApi>(XAmzTarget5AwsDirectConnectOperationsApi);
