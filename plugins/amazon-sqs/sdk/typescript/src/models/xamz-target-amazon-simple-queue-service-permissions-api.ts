import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAmazonSimpleQueueServicePermissionsApi = {
  AmazonSqsAddPermission: "AmazonSQS.AddPermission",
} as const;
export type XAmzTargetAmazonSimpleQueueServicePermissionsApi =
  | (typeof XAmzTargetAmazonSimpleQueueServicePermissionsApi)[keyof typeof XAmzTargetAmazonSimpleQueueServicePermissionsApi]
  | (string & {});

export const xAmzTargetAmazonSimpleQueueServicePermissionsApiSchema: EnumSchema<XAmzTargetAmazonSimpleQueueServicePermissionsApi> =
  s.enumOf<XAmzTargetAmazonSimpleQueueServicePermissionsApi>(
    XAmzTargetAmazonSimpleQueueServicePermissionsApi,
  );
