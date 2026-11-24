import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget4AmazonComprehendOperationsApi = {
  Comprehend20171127DetectKeyPhrases: "Comprehend_20171127.DetectKeyPhrases",
} as const;
export type XAmzTarget4AmazonComprehendOperationsApi =
  | (typeof XAmzTarget4AmazonComprehendOperationsApi)[keyof typeof XAmzTarget4AmazonComprehendOperationsApi]
  | (string & {});

export const xAmzTarget4AmazonComprehendOperationsApiSchema: EnumSchema<XAmzTarget4AmazonComprehendOperationsApi> =
  s.enumOf<XAmzTarget4AmazonComprehendOperationsApi>(XAmzTarget4AmazonComprehendOperationsApi);
