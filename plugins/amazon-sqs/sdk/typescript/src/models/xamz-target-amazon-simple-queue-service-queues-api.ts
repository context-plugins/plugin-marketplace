import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAmazonSimpleQueueServiceQueuesApi = {
  AmazonSqsCreateQueue: "AmazonSQS.CreateQueue",
} as const;
export type XAmzTargetAmazonSimpleQueueServiceQueuesApi =
  | (typeof XAmzTargetAmazonSimpleQueueServiceQueuesApi)[keyof typeof XAmzTargetAmazonSimpleQueueServiceQueuesApi]
  | (string & {});

export const xAmzTargetAmazonSimpleQueueServiceQueuesApiSchema: EnumSchema<XAmzTargetAmazonSimpleQueueServiceQueuesApi> =
  s.enumOf<XAmzTargetAmazonSimpleQueueServiceQueuesApi>(XAmzTargetAmazonSimpleQueueServiceQueuesApi);
