import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget4AwsStorageGatewayAwsStorageGatewayApi = {
  StorageGateway20130630RefreshCache: "StorageGateway_20130630.RefreshCache",
} as const;
export type XAmzTarget4AwsStorageGatewayAwsStorageGatewayApi =
  | (typeof XAmzTarget4AwsStorageGatewayAwsStorageGatewayApi)[keyof typeof XAmzTarget4AwsStorageGatewayAwsStorageGatewayApi]
  | (string & {});

export const xAmzTarget4AwsStorageGatewayAwsStorageGatewayApiSchema: EnumSchema<XAmzTarget4AwsStorageGatewayAwsStorageGatewayApi> =
  s.enumOf<XAmzTarget4AwsStorageGatewayAwsStorageGatewayApi>(
    XAmzTarget4AwsStorageGatewayAwsStorageGatewayApi,
  );
