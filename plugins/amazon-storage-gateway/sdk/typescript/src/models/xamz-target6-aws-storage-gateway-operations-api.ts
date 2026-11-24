import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget6AwsStorageGatewayOperationsApi = {
  StorageGateway20130630RetrieveTapeArchive: "StorageGateway_20130630.RetrieveTapeArchive",
} as const;
export type XAmzTarget6AwsStorageGatewayOperationsApi =
  | (typeof XAmzTarget6AwsStorageGatewayOperationsApi)[keyof typeof XAmzTarget6AwsStorageGatewayOperationsApi]
  | (string & {});

export const xAmzTarget6AwsStorageGatewayOperationsApiSchema: EnumSchema<XAmzTarget6AwsStorageGatewayOperationsApi> =
  s.enumOf<XAmzTarget6AwsStorageGatewayOperationsApi>(XAmzTarget6AwsStorageGatewayOperationsApi);
