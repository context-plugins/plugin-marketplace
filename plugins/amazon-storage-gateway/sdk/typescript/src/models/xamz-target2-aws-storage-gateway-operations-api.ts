import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AwsStorageGatewayOperationsApi = {
  StorageGateway20130630EvictFilesFailingUpload: "StorageGateway_20130630.EvictFilesFailingUpload",
} as const;
export type XAmzTarget2AwsStorageGatewayOperationsApi =
  | (typeof XAmzTarget2AwsStorageGatewayOperationsApi)[keyof typeof XAmzTarget2AwsStorageGatewayOperationsApi]
  | (string & {});

export const xAmzTarget2AwsStorageGatewayOperationsApiSchema: EnumSchema<XAmzTarget2AwsStorageGatewayOperationsApi> =
  s.enumOf<XAmzTarget2AwsStorageGatewayOperationsApi>(XAmzTarget2AwsStorageGatewayOperationsApi);
