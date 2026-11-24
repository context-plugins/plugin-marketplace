import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AmazonComprehendOperationsApi = {
  Comprehend20171127DetectDominantLanguage: "Comprehend_20171127.DetectDominantLanguage",
} as const;
export type XAmzTarget2AmazonComprehendOperationsApi =
  | (typeof XAmzTarget2AmazonComprehendOperationsApi)[keyof typeof XAmzTarget2AmazonComprehendOperationsApi]
  | (string & {});

export const xAmzTarget2AmazonComprehendOperationsApiSchema: EnumSchema<XAmzTarget2AmazonComprehendOperationsApi> =
  s.enumOf<XAmzTarget2AmazonComprehendOperationsApi>(XAmzTarget2AmazonComprehendOperationsApi);
