import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget6AwsDirectConnectOperationsApi = {
  OvertureServiceConfirmCustomerAgreement: "OvertureService.ConfirmCustomerAgreement",
} as const;
export type XAmzTarget6AwsDirectConnectOperationsApi =
  | (typeof XAmzTarget6AwsDirectConnectOperationsApi)[keyof typeof XAmzTarget6AwsDirectConnectOperationsApi]
  | (string & {});

export const xAmzTarget6AwsDirectConnectOperationsApiSchema: EnumSchema<XAmzTarget6AwsDirectConnectOperationsApi> =
  s.enumOf<XAmzTarget6AwsDirectConnectOperationsApi>(XAmzTarget6AwsDirectConnectOperationsApi);
