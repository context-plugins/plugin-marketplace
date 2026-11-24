import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget14AwsDirectConnectOperationsApi = {
  OvertureServiceUpdateConnectionsBillingMode: "OvertureService.UpdateConnectionsBillingMode",
} as const;
export type XAmzTarget14AwsDirectConnectOperationsApi =
  | (typeof XAmzTarget14AwsDirectConnectOperationsApi)[keyof typeof XAmzTarget14AwsDirectConnectOperationsApi]
  | (string & {});

export const xAmzTarget14AwsDirectConnectOperationsApiSchema: EnumSchema<XAmzTarget14AwsDirectConnectOperationsApi> =
  s.enumOf<XAmzTarget14AwsDirectConnectOperationsApi>(XAmzTarget14AwsDirectConnectOperationsApi);
