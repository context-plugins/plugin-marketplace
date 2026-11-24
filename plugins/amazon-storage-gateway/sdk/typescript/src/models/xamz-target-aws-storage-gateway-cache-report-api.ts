import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAwsStorageGatewayCacheReportApi = {
  StorageGateway20130630CancelCacheReport: "StorageGateway_20130630.CancelCacheReport",
} as const;
export type XAmzTargetAwsStorageGatewayCacheReportApi =
  | (typeof XAmzTargetAwsStorageGatewayCacheReportApi)[keyof typeof XAmzTargetAwsStorageGatewayCacheReportApi]
  | (string & {});

export const xAmzTargetAwsStorageGatewayCacheReportApiSchema: EnumSchema<XAmzTargetAwsStorageGatewayCacheReportApi> =
  s.enumOf<XAmzTargetAwsStorageGatewayCacheReportApi>(XAmzTargetAwsStorageGatewayCacheReportApi);
