import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of text that was detected. */
export const TypeAmazonRekognitionTextDetectionApi = {
  Line: "LINE",
  Word: "WORD",
} as const;
export type TypeAmazonRekognitionTextDetectionApi =
  | (typeof TypeAmazonRekognitionTextDetectionApi)[keyof typeof TypeAmazonRekognitionTextDetectionApi]
  | (string & {});

export const typeAmazonRekognitionTextDetectionApiSchema: EnumSchema<TypeAmazonRekognitionTextDetectionApi> =
  s.enumOf<TypeAmazonRekognitionTextDetectionApi>(TypeAmazonRekognitionTextDetectionApi);
