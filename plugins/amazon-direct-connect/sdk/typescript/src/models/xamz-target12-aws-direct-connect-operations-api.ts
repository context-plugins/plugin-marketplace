import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget12AwsDirectConnectOperationsApi = {
  OvertureServiceListResiliencyGroupAssociations: "OvertureService.ListResiliencyGroupAssociations",
} as const;
export type XAmzTarget12AwsDirectConnectOperationsApi =
  | (typeof XAmzTarget12AwsDirectConnectOperationsApi)[keyof typeof XAmzTarget12AwsDirectConnectOperationsApi]
  | (string & {});

export const xAmzTarget12AwsDirectConnectOperationsApiSchema: EnumSchema<XAmzTarget12AwsDirectConnectOperationsApi> =
  s.enumOf<XAmzTarget12AwsDirectConnectOperationsApi>(XAmzTarget12AwsDirectConnectOperationsApi);
