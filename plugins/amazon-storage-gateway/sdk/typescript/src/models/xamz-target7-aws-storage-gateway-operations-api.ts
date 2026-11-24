import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget7AwsStorageGatewayOperationsApi = {
  StorageGateway20130630RetrieveTapeRecoveryPoint: "StorageGateway_20130630.RetrieveTapeRecoveryPoint",
} as const;
export type XAmzTarget7AwsStorageGatewayOperationsApi =
  | (typeof XAmzTarget7AwsStorageGatewayOperationsApi)[keyof typeof XAmzTarget7AwsStorageGatewayOperationsApi]
  | (string & {});

export const xAmzTarget7AwsStorageGatewayOperationsApiSchema: EnumSchema<XAmzTarget7AwsStorageGatewayOperationsApi> =
  s.enumOf<XAmzTarget7AwsStorageGatewayOperationsApi>(XAmzTarget7AwsStorageGatewayOperationsApi);
