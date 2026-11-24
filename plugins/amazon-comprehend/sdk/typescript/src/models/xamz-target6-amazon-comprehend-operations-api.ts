import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget6AmazonComprehendOperationsApi = {
  Comprehend20171127DetectSentiment: "Comprehend_20171127.DetectSentiment",
} as const;
export type XAmzTarget6AmazonComprehendOperationsApi =
  | (typeof XAmzTarget6AmazonComprehendOperationsApi)[keyof typeof XAmzTarget6AmazonComprehendOperationsApi]
  | (string & {});

export const xAmzTarget6AmazonComprehendOperationsApiSchema: EnumSchema<XAmzTarget6AmazonComprehendOperationsApi> =
  s.enumOf<XAmzTarget6AmazonComprehendOperationsApi>(XAmzTarget6AmazonComprehendOperationsApi);
