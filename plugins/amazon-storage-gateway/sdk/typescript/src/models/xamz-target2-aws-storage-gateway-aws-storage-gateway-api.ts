import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AwsStorageGatewayAwsStorageGatewayApi = {
  StorageGateway20130630JoinDomain: "StorageGateway_20130630.JoinDomain",
} as const;
export type XAmzTarget2AwsStorageGatewayAwsStorageGatewayApi =
  | (typeof XAmzTarget2AwsStorageGatewayAwsStorageGatewayApi)[keyof typeof XAmzTarget2AwsStorageGatewayAwsStorageGatewayApi]
  | (string & {});

export const xAmzTarget2AwsStorageGatewayAwsStorageGatewayApiSchema: EnumSchema<XAmzTarget2AwsStorageGatewayAwsStorageGatewayApi> =
  s.enumOf<XAmzTarget2AwsStorageGatewayAwsStorageGatewayApi>(
    XAmzTarget2AwsStorageGatewayAwsStorageGatewayApi,
  );
