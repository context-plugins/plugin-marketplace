import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AmazonSimpleQueueServiceTagsApi = {
  AmazonSqsListQueueTags: "AmazonSQS.ListQueueTags",
} as const;
export type XAmzTarget2AmazonSimpleQueueServiceTagsApi =
  | (typeof XAmzTarget2AmazonSimpleQueueServiceTagsApi)[keyof typeof XAmzTarget2AmazonSimpleQueueServiceTagsApi]
  | (string & {});

export const xAmzTarget2AmazonSimpleQueueServiceTagsApiSchema: EnumSchema<XAmzTarget2AmazonSimpleQueueServiceTagsApi> =
  s.enumOf<XAmzTarget2AmazonSimpleQueueServiceTagsApi>(XAmzTarget2AmazonSimpleQueueServiceTagsApi);
