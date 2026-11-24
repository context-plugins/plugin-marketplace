import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget4AwsStorageGatewayCacheReportApi = {
  StorageGateway20130630StartCacheReport: "StorageGateway_20130630.StartCacheReport",
} as const;
export type XAmzTarget4AwsStorageGatewayCacheReportApi =
  | (typeof XAmzTarget4AwsStorageGatewayCacheReportApi)[keyof typeof XAmzTarget4AwsStorageGatewayCacheReportApi]
  | (string & {});

export const xAmzTarget4AwsStorageGatewayCacheReportApiSchema: EnumSchema<XAmzTarget4AwsStorageGatewayCacheReportApi> =
  s.enumOf<XAmzTarget4AwsStorageGatewayCacheReportApi>(XAmzTarget4AwsStorageGatewayCacheReportApi);
