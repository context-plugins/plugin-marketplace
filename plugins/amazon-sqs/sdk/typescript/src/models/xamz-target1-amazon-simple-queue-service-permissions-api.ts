import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AmazonSimpleQueueServicePermissionsApi = {
  AmazonSqsRemovePermission: "AmazonSQS.RemovePermission",
} as const;
export type XAmzTarget1AmazonSimpleQueueServicePermissionsApi =
  | (typeof XAmzTarget1AmazonSimpleQueueServicePermissionsApi)[keyof typeof XAmzTarget1AmazonSimpleQueueServicePermissionsApi]
  | (string & {});

export const xAmzTarget1AmazonSimpleQueueServicePermissionsApiSchema: EnumSchema<XAmzTarget1AmazonSimpleQueueServicePermissionsApi> =
  s.enumOf<XAmzTarget1AmazonSimpleQueueServicePermissionsApi>(
    XAmzTarget1AmazonSimpleQueueServicePermissionsApi,
  );
