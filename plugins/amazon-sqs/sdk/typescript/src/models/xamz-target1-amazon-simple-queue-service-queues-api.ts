import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AmazonSimpleQueueServiceQueuesApi = {
  AmazonSqsDeleteQueue: "AmazonSQS.DeleteQueue",
} as const;
export type XAmzTarget1AmazonSimpleQueueServiceQueuesApi =
  | (typeof XAmzTarget1AmazonSimpleQueueServiceQueuesApi)[keyof typeof XAmzTarget1AmazonSimpleQueueServiceQueuesApi]
  | (string & {});

export const xAmzTarget1AmazonSimpleQueueServiceQueuesApiSchema: EnumSchema<XAmzTarget1AmazonSimpleQueueServiceQueuesApi> =
  s.enumOf<XAmzTarget1AmazonSimpleQueueServiceQueuesApi>(XAmzTarget1AmazonSimpleQueueServiceQueuesApi);
