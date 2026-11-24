import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget9AmazonComprehendOperationsApi = {
  Comprehend20171127DetectToxicContent: "Comprehend_20171127.DetectToxicContent",
} as const;
export type XAmzTarget9AmazonComprehendOperationsApi =
  | (typeof XAmzTarget9AmazonComprehendOperationsApi)[keyof typeof XAmzTarget9AmazonComprehendOperationsApi]
  | (string & {});

export const xAmzTarget9AmazonComprehendOperationsApiSchema: EnumSchema<XAmzTarget9AmazonComprehendOperationsApi> =
  s.enumOf<XAmzTarget9AmazonComprehendOperationsApi>(XAmzTarget9AmazonComprehendOperationsApi);
