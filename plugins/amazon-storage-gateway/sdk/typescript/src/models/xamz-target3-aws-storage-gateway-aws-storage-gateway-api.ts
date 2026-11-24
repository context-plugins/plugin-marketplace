import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget3AwsStorageGatewayAwsStorageGatewayApi = {
  StorageGateway20130630NotifyWhenUploaded: "StorageGateway_20130630.NotifyWhenUploaded",
} as const;
export type XAmzTarget3AwsStorageGatewayAwsStorageGatewayApi =
  | (typeof XAmzTarget3AwsStorageGatewayAwsStorageGatewayApi)[keyof typeof XAmzTarget3AwsStorageGatewayAwsStorageGatewayApi]
  | (string & {});

export const xAmzTarget3AwsStorageGatewayAwsStorageGatewayApiSchema: EnumSchema<XAmzTarget3AwsStorageGatewayAwsStorageGatewayApi> =
  s.enumOf<XAmzTarget3AwsStorageGatewayAwsStorageGatewayApi>(
    XAmzTarget3AwsStorageGatewayAwsStorageGatewayApi,
  );
