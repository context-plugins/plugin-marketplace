import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The types of challenges that have been selected for the Face Liveness session. */
export const Type1AmazonRekognitionFaceLivenessApi = {
  FaceMovementAndLightChallenge: "FaceMovementAndLightChallenge",
  FaceMovementChallenge: "FaceMovementChallenge",
} as const;
export type Type1AmazonRekognitionFaceLivenessApi =
  | (typeof Type1AmazonRekognitionFaceLivenessApi)[keyof typeof Type1AmazonRekognitionFaceLivenessApi]
  | (string & {});

export const type1AmazonRekognitionFaceLivenessApiSchema: EnumSchema<Type1AmazonRekognitionFaceLivenessApi> =
  s.enumOf<Type1AmazonRekognitionFaceLivenessApi>(Type1AmazonRekognitionFaceLivenessApi);
