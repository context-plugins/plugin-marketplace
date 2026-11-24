import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget4AmazonSimpleQueueServiceQueuesApi = {
  AmazonSqsUntagQueue: "AmazonSQS.UntagQueue",
} as const;
export type XAmzTarget4AmazonSimpleQueueServiceQueuesApi =
  | (typeof XAmzTarget4AmazonSimpleQueueServiceQueuesApi)[keyof typeof XAmzTarget4AmazonSimpleQueueServiceQueuesApi]
  | (string & {});

export const xAmzTarget4AmazonSimpleQueueServiceQueuesApiSchema: EnumSchema<XAmzTarget4AmazonSimpleQueueServiceQueuesApi> =
  s.enumOf<XAmzTarget4AmazonSimpleQueueServiceQueuesApi>(XAmzTarget4AmazonSimpleQueueServiceQueuesApi);
