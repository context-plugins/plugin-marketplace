import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AmazonComprehendOperationsApi = {
  Comprehend20171127ContainsPiiEntities: "Comprehend_20171127.ContainsPiiEntities",
} as const;
export type XAmzTarget1AmazonComprehendOperationsApi =
  | (typeof XAmzTarget1AmazonComprehendOperationsApi)[keyof typeof XAmzTarget1AmazonComprehendOperationsApi]
  | (string & {});

export const xAmzTarget1AmazonComprehendOperationsApiSchema: EnumSchema<XAmzTarget1AmazonComprehendOperationsApi> =
  s.enumOf<XAmzTarget1AmazonComprehendOperationsApi>(XAmzTarget1AmazonComprehendOperationsApi);
