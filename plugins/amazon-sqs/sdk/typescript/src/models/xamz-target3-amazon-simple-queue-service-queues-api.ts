import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget3AmazonSimpleQueueServiceQueuesApi = {
  AmazonSqsTagQueue: "AmazonSQS.TagQueue",
} as const;
export type XAmzTarget3AmazonSimpleQueueServiceQueuesApi =
  | (typeof XAmzTarget3AmazonSimpleQueueServiceQueuesApi)[keyof typeof XAmzTarget3AmazonSimpleQueueServiceQueuesApi]
  | (string & {});

export const xAmzTarget3AmazonSimpleQueueServiceQueuesApiSchema: EnumSchema<XAmzTarget3AmazonSimpleQueueServiceQueuesApi> =
  s.enumOf<XAmzTarget3AmazonSimpleQueueServiceQueuesApi>(XAmzTarget3AmazonSimpleQueueServiceQueuesApi);
