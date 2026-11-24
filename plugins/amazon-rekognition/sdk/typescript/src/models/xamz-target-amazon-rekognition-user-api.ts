import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAmazonRekognitionUserApi = {
  RekognitionServiceCreateUser: "RekognitionService.CreateUser",
} as const;
export type XAmzTargetAmazonRekognitionUserApi =
  | (typeof XAmzTargetAmazonRekognitionUserApi)[keyof typeof XAmzTargetAmazonRekognitionUserApi]
  | (string & {});

export const xAmzTargetAmazonRekognitionUserApiSchema: EnumSchema<XAmzTargetAmazonRekognitionUserApi> =
  s.enumOf<XAmzTargetAmazonRekognitionUserApi>(XAmzTargetAmazonRekognitionUserApi);
