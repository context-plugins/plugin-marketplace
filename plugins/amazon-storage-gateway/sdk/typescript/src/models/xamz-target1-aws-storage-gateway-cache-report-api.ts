import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AwsStorageGatewayCacheReportApi = {
  StorageGateway20130630DeleteCacheReport: "StorageGateway_20130630.DeleteCacheReport",
} as const;
export type XAmzTarget1AwsStorageGatewayCacheReportApi =
  | (typeof XAmzTarget1AwsStorageGatewayCacheReportApi)[keyof typeof XAmzTarget1AwsStorageGatewayCacheReportApi]
  | (string & {});

export const xAmzTarget1AwsStorageGatewayCacheReportApiSchema: EnumSchema<XAmzTarget1AwsStorageGatewayCacheReportApi> =
  s.enumOf<XAmzTarget1AwsStorageGatewayCacheReportApi>(XAmzTarget1AwsStorageGatewayCacheReportApi);
