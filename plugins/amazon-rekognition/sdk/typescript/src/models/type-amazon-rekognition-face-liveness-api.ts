import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the challenge being used for the Face Liveness session. */
export const TypeAmazonRekognitionFaceLivenessApi = {
  FaceMovementAndLightChallenge: "FaceMovementAndLightChallenge",
  FaceMovementChallenge: "FaceMovementChallenge",
} as const;
export type TypeAmazonRekognitionFaceLivenessApi =
  | (typeof TypeAmazonRekognitionFaceLivenessApi)[keyof typeof TypeAmazonRekognitionFaceLivenessApi]
  | (string & {});

export const typeAmazonRekognitionFaceLivenessApiSchema: EnumSchema<TypeAmazonRekognitionFaceLivenessApi> =
  s.enumOf<TypeAmazonRekognitionFaceLivenessApi>(TypeAmazonRekognitionFaceLivenessApi);
