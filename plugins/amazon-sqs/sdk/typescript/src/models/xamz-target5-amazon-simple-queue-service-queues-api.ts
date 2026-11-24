import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget5AmazonSimpleQueueServiceQueuesApi = {
  AmazonSqsPurgeQueue: "AmazonSQS.PurgeQueue",
} as const;
export type XAmzTarget5AmazonSimpleQueueServiceQueuesApi =
  | (typeof XAmzTarget5AmazonSimpleQueueServiceQueuesApi)[keyof typeof XAmzTarget5AmazonSimpleQueueServiceQueuesApi]
  | (string & {});

export const xAmzTarget5AmazonSimpleQueueServiceQueuesApiSchema: EnumSchema<XAmzTarget5AmazonSimpleQueueServiceQueuesApi> =
  s.enumOf<XAmzTarget5AmazonSimpleQueueServiceQueuesApi>(XAmzTarget5AmazonSimpleQueueServiceQueuesApi);
