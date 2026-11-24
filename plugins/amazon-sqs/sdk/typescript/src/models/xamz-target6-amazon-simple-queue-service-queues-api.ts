import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget6AmazonSimpleQueueServiceQueuesApi = {
  AmazonSqsGetQueueAttributes: "AmazonSQS.GetQueueAttributes",
} as const;
export type XAmzTarget6AmazonSimpleQueueServiceQueuesApi =
  | (typeof XAmzTarget6AmazonSimpleQueueServiceQueuesApi)[keyof typeof XAmzTarget6AmazonSimpleQueueServiceQueuesApi]
  | (string & {});

export const xAmzTarget6AmazonSimpleQueueServiceQueuesApiSchema: EnumSchema<XAmzTarget6AmazonSimpleQueueServiceQueuesApi> =
  s.enumOf<XAmzTarget6AmazonSimpleQueueServiceQueuesApi>(XAmzTarget6AmazonSimpleQueueServiceQueuesApi);
