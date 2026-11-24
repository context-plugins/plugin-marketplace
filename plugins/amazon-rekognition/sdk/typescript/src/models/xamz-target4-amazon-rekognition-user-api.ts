import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget4AmazonRekognitionUserApi = {
  RekognitionServiceSearchUsersByImage: "RekognitionService.SearchUsersByImage",
} as const;
export type XAmzTarget4AmazonRekognitionUserApi =
  | (typeof XAmzTarget4AmazonRekognitionUserApi)[keyof typeof XAmzTarget4AmazonRekognitionUserApi]
  | (string & {});

export const xAmzTarget4AmazonRekognitionUserApiSchema: EnumSchema<XAmzTarget4AmazonRekognitionUserApi> =
  s.enumOf<XAmzTarget4AmazonRekognitionUserApi>(XAmzTarget4AmazonRekognitionUserApi);
