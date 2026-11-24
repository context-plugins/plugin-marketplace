import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget11AwsDirectConnectOperationsApi = {
  OvertureServiceDisassociateConnectionsFromResiliencyGroup:
    "OvertureService.DisassociateConnectionsFromResiliencyGroup",
} as const;
export type XAmzTarget11AwsDirectConnectOperationsApi =
  | (typeof XAmzTarget11AwsDirectConnectOperationsApi)[keyof typeof XAmzTarget11AwsDirectConnectOperationsApi]
  | (string & {});

export const xAmzTarget11AwsDirectConnectOperationsApiSchema: EnumSchema<XAmzTarget11AwsDirectConnectOperationsApi> =
  s.enumOf<XAmzTarget11AwsDirectConnectOperationsApi>(XAmzTarget11AwsDirectConnectOperationsApi);
