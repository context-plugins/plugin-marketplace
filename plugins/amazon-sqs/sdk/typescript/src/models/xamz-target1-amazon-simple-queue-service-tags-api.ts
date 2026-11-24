import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AmazonSimpleQueueServiceTagsApi = {
  AmazonSqsUntagQueue: "AmazonSQS.UntagQueue",
} as const;
export type XAmzTarget1AmazonSimpleQueueServiceTagsApi =
  | (typeof XAmzTarget1AmazonSimpleQueueServiceTagsApi)[keyof typeof XAmzTarget1AmazonSimpleQueueServiceTagsApi]
  | (string & {});

export const xAmzTarget1AmazonSimpleQueueServiceTagsApiSchema: EnumSchema<XAmzTarget1AmazonSimpleQueueServiceTagsApi> =
  s.enumOf<XAmzTarget1AmazonSimpleQueueServiceTagsApi>(XAmzTarget1AmazonSimpleQueueServiceTagsApi);
