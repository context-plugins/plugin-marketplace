import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AmazonRekognitionUserApi = {
  RekognitionServiceDeleteUser: "RekognitionService.DeleteUser",
} as const;
export type XAmzTarget1AmazonRekognitionUserApi =
  | (typeof XAmzTarget1AmazonRekognitionUserApi)[keyof typeof XAmzTarget1AmazonRekognitionUserApi]
  | (string & {});

export const xAmzTarget1AmazonRekognitionUserApiSchema: EnumSchema<XAmzTarget1AmazonRekognitionUserApi> =
  s.enumOf<XAmzTarget1AmazonRekognitionUserApi>(XAmzTarget1AmazonRekognitionUserApi);
