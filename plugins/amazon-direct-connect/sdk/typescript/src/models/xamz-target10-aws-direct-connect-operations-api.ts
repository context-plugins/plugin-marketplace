import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget10AwsDirectConnectOperationsApi = {
  OvertureServiceAssociateConnectionsToResiliencyGroup:
    "OvertureService.AssociateConnectionsToResiliencyGroup",
} as const;
export type XAmzTarget10AwsDirectConnectOperationsApi =
  | (typeof XAmzTarget10AwsDirectConnectOperationsApi)[keyof typeof XAmzTarget10AwsDirectConnectOperationsApi]
  | (string & {});

export const xAmzTarget10AwsDirectConnectOperationsApiSchema: EnumSchema<XAmzTarget10AwsDirectConnectOperationsApi> =
  s.enumOf<XAmzTarget10AwsDirectConnectOperationsApi>(XAmzTarget10AwsDirectConnectOperationsApi);
