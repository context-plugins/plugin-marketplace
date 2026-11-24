import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget7AmazonComprehendOperationsApi = {
  Comprehend20171127DetectSyntax: "Comprehend_20171127.DetectSyntax",
} as const;
export type XAmzTarget7AmazonComprehendOperationsApi =
  | (typeof XAmzTarget7AmazonComprehendOperationsApi)[keyof typeof XAmzTarget7AmazonComprehendOperationsApi]
  | (string & {});

export const xAmzTarget7AmazonComprehendOperationsApiSchema: EnumSchema<XAmzTarget7AmazonComprehendOperationsApi> =
  s.enumOf<XAmzTarget7AmazonComprehendOperationsApi>(XAmzTarget7AmazonComprehendOperationsApi);
