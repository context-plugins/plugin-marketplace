import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AwsStorageGatewayAwsStorageGatewayApi = {
  StorageGateway20130630AssignTapePool: "StorageGateway_20130630.AssignTapePool",
} as const;
export type XAmzTarget1AwsStorageGatewayAwsStorageGatewayApi =
  | (typeof XAmzTarget1AwsStorageGatewayAwsStorageGatewayApi)[keyof typeof XAmzTarget1AwsStorageGatewayAwsStorageGatewayApi]
  | (string & {});

export const xAmzTarget1AwsStorageGatewayAwsStorageGatewayApiSchema: EnumSchema<XAmzTarget1AwsStorageGatewayAwsStorageGatewayApi> =
  s.enumOf<XAmzTarget1AwsStorageGatewayAwsStorageGatewayApi>(
    XAmzTarget1AwsStorageGatewayAwsStorageGatewayApi,
  );
