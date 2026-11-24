import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget3AwsStorageGatewayOperationsApi = {
  StorageGateway20130630JoinDomain: "StorageGateway_20130630.JoinDomain",
} as const;
export type XAmzTarget3AwsStorageGatewayOperationsApi =
  | (typeof XAmzTarget3AwsStorageGatewayOperationsApi)[keyof typeof XAmzTarget3AwsStorageGatewayOperationsApi]
  | (string & {});

export const xAmzTarget3AwsStorageGatewayOperationsApiSchema: EnumSchema<XAmzTarget3AwsStorageGatewayOperationsApi> =
  s.enumOf<XAmzTarget3AwsStorageGatewayOperationsApi>(XAmzTarget3AwsStorageGatewayOperationsApi);
