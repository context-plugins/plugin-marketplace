import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget4AwsStorageGatewayOperationsApi = {
  StorageGateway20130630NotifyWhenUploaded: "StorageGateway_20130630.NotifyWhenUploaded",
} as const;
export type XAmzTarget4AwsStorageGatewayOperationsApi =
  | (typeof XAmzTarget4AwsStorageGatewayOperationsApi)[keyof typeof XAmzTarget4AwsStorageGatewayOperationsApi]
  | (string & {});

export const xAmzTarget4AwsStorageGatewayOperationsApiSchema: EnumSchema<XAmzTarget4AwsStorageGatewayOperationsApi> =
  s.enumOf<XAmzTarget4AwsStorageGatewayOperationsApi>(XAmzTarget4AwsStorageGatewayOperationsApi);
