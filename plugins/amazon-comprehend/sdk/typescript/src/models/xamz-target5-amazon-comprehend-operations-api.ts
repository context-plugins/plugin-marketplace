import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget5AmazonComprehendOperationsApi = {
  Comprehend20171127DetectPiiEntities: "Comprehend_20171127.DetectPiiEntities",
} as const;
export type XAmzTarget5AmazonComprehendOperationsApi =
  | (typeof XAmzTarget5AmazonComprehendOperationsApi)[keyof typeof XAmzTarget5AmazonComprehendOperationsApi]
  | (string & {});

export const xAmzTarget5AmazonComprehendOperationsApiSchema: EnumSchema<XAmzTarget5AmazonComprehendOperationsApi> =
  s.enumOf<XAmzTarget5AmazonComprehendOperationsApi>(XAmzTarget5AmazonComprehendOperationsApi);
