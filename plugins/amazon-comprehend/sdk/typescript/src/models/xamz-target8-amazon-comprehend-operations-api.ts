import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget8AmazonComprehendOperationsApi = {
  Comprehend20171127DetectTargetedSentiment: "Comprehend_20171127.DetectTargetedSentiment",
} as const;
export type XAmzTarget8AmazonComprehendOperationsApi =
  | (typeof XAmzTarget8AmazonComprehendOperationsApi)[keyof typeof XAmzTarget8AmazonComprehendOperationsApi]
  | (string & {});

export const xAmzTarget8AmazonComprehendOperationsApiSchema: EnumSchema<XAmzTarget8AmazonComprehendOperationsApi> =
  s.enumOf<XAmzTarget8AmazonComprehendOperationsApi>(XAmzTarget8AmazonComprehendOperationsApi);
