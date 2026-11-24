import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget5AwsStorageGatewayOperationsApi = {
  StorageGateway20130630RefreshCache: "StorageGateway_20130630.RefreshCache",
} as const;
export type XAmzTarget5AwsStorageGatewayOperationsApi =
  | (typeof XAmzTarget5AwsStorageGatewayOperationsApi)[keyof typeof XAmzTarget5AwsStorageGatewayOperationsApi]
  | (string & {});

export const xAmzTarget5AwsStorageGatewayOperationsApiSchema: EnumSchema<XAmzTarget5AwsStorageGatewayOperationsApi> =
  s.enumOf<XAmzTarget5AwsStorageGatewayOperationsApi>(XAmzTarget5AwsStorageGatewayOperationsApi);
