import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget3AmazonComprehendOperationsApi = {
  Comprehend20171127DetectEntities: "Comprehend_20171127.DetectEntities",
} as const;
export type XAmzTarget3AmazonComprehendOperationsApi =
  | (typeof XAmzTarget3AmazonComprehendOperationsApi)[keyof typeof XAmzTarget3AmazonComprehendOperationsApi]
  | (string & {});

export const xAmzTarget3AmazonComprehendOperationsApiSchema: EnumSchema<XAmzTarget3AmazonComprehendOperationsApi> =
  s.enumOf<XAmzTarget3AmazonComprehendOperationsApi>(XAmzTarget3AmazonComprehendOperationsApi);
