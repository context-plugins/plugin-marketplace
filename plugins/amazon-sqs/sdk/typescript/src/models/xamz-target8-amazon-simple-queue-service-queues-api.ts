import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget8AmazonSimpleQueueServiceQueuesApi = {
  AmazonSqsGetQueueUrl: "AmazonSQS.GetQueueUrl",
} as const;
export type XAmzTarget8AmazonSimpleQueueServiceQueuesApi =
  | (typeof XAmzTarget8AmazonSimpleQueueServiceQueuesApi)[keyof typeof XAmzTarget8AmazonSimpleQueueServiceQueuesApi]
  | (string & {});

export const xAmzTarget8AmazonSimpleQueueServiceQueuesApiSchema: EnumSchema<XAmzTarget8AmazonSimpleQueueServiceQueuesApi> =
  s.enumOf<XAmzTarget8AmazonSimpleQueueServiceQueuesApi>(XAmzTarget8AmazonSimpleQueueServiceQueuesApi);
