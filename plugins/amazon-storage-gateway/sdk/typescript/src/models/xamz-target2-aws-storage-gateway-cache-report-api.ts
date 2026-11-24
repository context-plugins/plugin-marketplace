import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AwsStorageGatewayCacheReportApi = {
  StorageGateway20130630DescribeCacheReport: "StorageGateway_20130630.DescribeCacheReport",
} as const;
export type XAmzTarget2AwsStorageGatewayCacheReportApi =
  | (typeof XAmzTarget2AwsStorageGatewayCacheReportApi)[keyof typeof XAmzTarget2AwsStorageGatewayCacheReportApi]
  | (string & {});

export const xAmzTarget2AwsStorageGatewayCacheReportApiSchema: EnumSchema<XAmzTarget2AwsStorageGatewayCacheReportApi> =
  s.enumOf<XAmzTarget2AwsStorageGatewayCacheReportApi>(XAmzTarget2AwsStorageGatewayCacheReportApi);
