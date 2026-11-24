import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { celebritySchema, type Celebrity } from "./celebrity.js";
import { comparedFaceSchema, type ComparedFace } from "./compared-face.js";
import { orientationCorrectionSchema, type OrientationCorrection } from "./orientation-correction.js";

export type RecognizeCelebritiesResponse = {
  /**
   * Details about each celebrity found in the image. Amazon Rekognition can detect a maximum of 64
   * celebrities in an image. Each celebrity object includes the following attributes: Face,
   * Confidence, Emotions, Landmarks, Pose, Quality, Smile, Id, KnownGender, MatchConfidence, Name,
   * Urls.
   */
  celebrityFaces?: Celebrity[];
  /** Details about each unrecognized face in the image. */
  unrecognizedFaces?: ComparedFace[];
  /**
   * Support for estimating image orientation using the the OrientationCorrection field has ceased
   * as of August 2021. Any returned values for this field included in an API response will always
   * be NULL. The orientation of the input image (counterclockwise direction). If your application
   * displays the image, you can use this value to correct the orientation. The bounding box
   * coordinates returned in CelebrityFaces and UnrecognizedFaces represent face locations before
   * the image orientation is corrected. If the input image is in .jpeg format, it might contain
   * exchangeable image (Exif) metadata that inclu
   */
  orientationCorrection?: OrientationCorrection;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recognizeCelebritiesResponseSchema: Schema<RecognizeCelebritiesResponse> =
  s.object<RecognizeCelebritiesResponse>(
    {
      celebrityFaces: s.optional(s.array(s.lazy(() => celebritySchema))),
      unrecognizedFaces: s.optional(s.array(s.lazy(() => comparedFaceSchema))),
      orientationCorrection: s.optional(s.lazy(() => orientationCorrectionSchema)),
      _keysMap: {
        celebrityFaces: "CelebrityFaces",
        unrecognizedFaces: "UnrecognizedFaces",
        orientationCorrection: "OrientationCorrection",
      },
    },
    { additionalProperties: s.json() },
  );
