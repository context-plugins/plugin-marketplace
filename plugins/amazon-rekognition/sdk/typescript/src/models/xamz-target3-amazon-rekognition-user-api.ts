import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget3AmazonRekognitionUserApi = {
  RekognitionServiceSearchUsers: "RekognitionService.SearchUsers",
} as const;
export type XAmzTarget3AmazonRekognitionUserApi =
  | (typeof XAmzTarget3AmazonRekognitionUserApi)[keyof typeof XAmzTarget3AmazonRekognitionUserApi]
  | (string & {});

export const xAmzTarget3AmazonRekognitionUserApiSchema: EnumSchema<XAmzTarget3AmazonRekognitionUserApi> =
  s.enumOf<XAmzTarget3AmazonRekognitionUserApi>(XAmzTarget3AmazonRekognitionUserApi);
