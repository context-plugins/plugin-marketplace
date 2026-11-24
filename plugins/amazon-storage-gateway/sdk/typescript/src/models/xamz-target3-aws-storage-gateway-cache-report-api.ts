import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget3AwsStorageGatewayCacheReportApi = {
  StorageGateway20130630ListCacheReports: "StorageGateway_20130630.ListCacheReports",
} as const;
export type XAmzTarget3AwsStorageGatewayCacheReportApi =
  | (typeof XAmzTarget3AwsStorageGatewayCacheReportApi)[keyof typeof XAmzTarget3AwsStorageGatewayCacheReportApi]
  | (string & {});

export const xAmzTarget3AwsStorageGatewayCacheReportApiSchema: EnumSchema<XAmzTarget3AwsStorageGatewayCacheReportApi> =
  s.enumOf<XAmzTarget3AwsStorageGatewayCacheReportApi>(XAmzTarget3AwsStorageGatewayCacheReportApi);
