import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAmazonComprehendOperationsApi = {
  Comprehend20171127ClassifyDocument: "Comprehend_20171127.ClassifyDocument",
} as const;
export type XAmzTargetAmazonComprehendOperationsApi =
  | (typeof XAmzTargetAmazonComprehendOperationsApi)[keyof typeof XAmzTargetAmazonComprehendOperationsApi]
  | (string & {});

export const xAmzTargetAmazonComprehendOperationsApiSchema: EnumSchema<XAmzTargetAmazonComprehendOperationsApi> =
  s.enumOf<XAmzTargetAmazonComprehendOperationsApi>(XAmzTargetAmazonComprehendOperationsApi);
