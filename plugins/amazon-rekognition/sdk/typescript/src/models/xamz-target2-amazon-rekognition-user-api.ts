import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AmazonRekognitionUserApi = {
  RekognitionServiceListUsers: "RekognitionService.ListUsers",
} as const;
export type XAmzTarget2AmazonRekognitionUserApi =
  | (typeof XAmzTarget2AmazonRekognitionUserApi)[keyof typeof XAmzTarget2AmazonRekognitionUserApi]
  | (string & {});

export const xAmzTarget2AmazonRekognitionUserApiSchema: EnumSchema<XAmzTarget2AmazonRekognitionUserApi> =
  s.enumOf<XAmzTarget2AmazonRekognitionUserApi>(XAmzTarget2AmazonRekognitionUserApi);
