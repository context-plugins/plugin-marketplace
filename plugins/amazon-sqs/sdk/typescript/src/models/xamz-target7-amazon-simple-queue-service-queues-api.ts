import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget7AmazonSimpleQueueServiceQueuesApi = {
  AmazonSqsSetQueueAttributes: "AmazonSQS.SetQueueAttributes",
} as const;
export type XAmzTarget7AmazonSimpleQueueServiceQueuesApi =
  | (typeof XAmzTarget7AmazonSimpleQueueServiceQueuesApi)[keyof typeof XAmzTarget7AmazonSimpleQueueServiceQueuesApi]
  | (string & {});

export const xAmzTarget7AmazonSimpleQueueServiceQueuesApiSchema: EnumSchema<XAmzTarget7AmazonSimpleQueueServiceQueuesApi> =
  s.enumOf<XAmzTarget7AmazonSimpleQueueServiceQueuesApi>(XAmzTarget7AmazonSimpleQueueServiceQueuesApi);
