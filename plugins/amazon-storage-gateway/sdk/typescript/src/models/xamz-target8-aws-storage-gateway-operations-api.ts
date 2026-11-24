import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget8AwsStorageGatewayOperationsApi = {
  StorageGateway20130630ShutdownGateway: "StorageGateway_20130630.ShutdownGateway",
} as const;
export type XAmzTarget8AwsStorageGatewayOperationsApi =
  | (typeof XAmzTarget8AwsStorageGatewayOperationsApi)[keyof typeof XAmzTarget8AwsStorageGatewayOperationsApi]
  | (string & {});

export const xAmzTarget8AwsStorageGatewayOperationsApiSchema: EnumSchema<XAmzTarget8AwsStorageGatewayOperationsApi> =
  s.enumOf<XAmzTarget8AwsStorageGatewayOperationsApi>(XAmzTarget8AwsStorageGatewayOperationsApi);
