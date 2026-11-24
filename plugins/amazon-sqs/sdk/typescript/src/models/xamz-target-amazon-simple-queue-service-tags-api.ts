import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAmazonSimpleQueueServiceTagsApi = {
  AmazonSqsTagQueue: "AmazonSQS.TagQueue",
} as const;
export type XAmzTargetAmazonSimpleQueueServiceTagsApi =
  | (typeof XAmzTargetAmazonSimpleQueueServiceTagsApi)[keyof typeof XAmzTargetAmazonSimpleQueueServiceTagsApi]
  | (string & {});

export const xAmzTargetAmazonSimpleQueueServiceTagsApiSchema: EnumSchema<XAmzTargetAmazonSimpleQueueServiceTagsApi> =
  s.enumOf<XAmzTargetAmazonSimpleQueueServiceTagsApi>(XAmzTargetAmazonSimpleQueueServiceTagsApi);
