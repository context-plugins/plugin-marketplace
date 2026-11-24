import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget9AmazonSimpleQueueServiceQueuesApi = {
  AmazonSqsListDeadLetterSourceQueues: "AmazonSQS.ListDeadLetterSourceQueues",
} as const;
export type XAmzTarget9AmazonSimpleQueueServiceQueuesApi =
  | (typeof XAmzTarget9AmazonSimpleQueueServiceQueuesApi)[keyof typeof XAmzTarget9AmazonSimpleQueueServiceQueuesApi]
  | (string & {});

export const xAmzTarget9AmazonSimpleQueueServiceQueuesApiSchema: EnumSchema<XAmzTarget9AmazonSimpleQueueServiceQueuesApi> =
  s.enumOf<XAmzTarget9AmazonSimpleQueueServiceQueuesApi>(XAmzTarget9AmazonSimpleQueueServiceQueuesApi);
