import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AmazonSimpleQueueServiceQueuesApi = {
  AmazonSqsListQueues: "AmazonSQS.ListQueues",
} as const;
export type XAmzTarget2AmazonSimpleQueueServiceQueuesApi =
  | (typeof XAmzTarget2AmazonSimpleQueueServiceQueuesApi)[keyof typeof XAmzTarget2AmazonSimpleQueueServiceQueuesApi]
  | (string & {});

export const xAmzTarget2AmazonSimpleQueueServiceQueuesApiSchema: EnumSchema<XAmzTarget2AmazonSimpleQueueServiceQueuesApi> =
  s.enumOf<XAmzTarget2AmazonSimpleQueueServiceQueuesApi>(XAmzTarget2AmazonSimpleQueueServiceQueuesApi);
