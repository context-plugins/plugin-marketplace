import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { compareFacesMatchSchema, type CompareFacesMatch } from "./compare-faces-match.js";
import { comparedFaceSchema, type ComparedFace } from "./compared-face.js";
import { comparedSourceImageFaceSchema, type ComparedSourceImageFace } from "./compared-source-image-face.js";
import {
  sourceImageOrientationCorrectionSchema,
  type SourceImageOrientationCorrection,
} from "./source-image-orientation-correction.js";
import {
  targetImageOrientationCorrectionSchema,
  type TargetImageOrientationCorrection,
} from "./target-image-orientation-correction.js";

export type CompareFacesResponse = {
  sourceImageFace?: ComparedSourceImageFace;
  /**
   * An array of faces in the target image that match the source image face. Each CompareFacesMatch
   * object provides the bounding box, the confidence level that the bounding box contains a face,
   * and the similarity score for the face in the bounding box and the face in the source image.
   */
  faceMatches?: CompareFacesMatch[];
  /** An array of faces in the target image that did not match the source image face. */
  unmatchedFaces?: ComparedFace[];
  /**
   * The value of SourceImageOrientationCorrection is always null. If the input image is in .jpeg
   * format, it might contain exchangeable image file format (Exif) metadata that includes the
   * image's orientation. Amazon Rekognition uses this orientation information to perform image
   * correction. The bounding box coordinates are translated to represent object locations after the
   * orientation information in the Exif metadata is used to correct the image orientation. Images
   * in .png format don't contain Exif metadata. Amazon Rekognition doesn’t perform image correction
   * for images in .png format and .jpeg imag
   */
  sourceImageOrientationCorrection?: SourceImageOrientationCorrection;
  /**
   * The value of TargetImageOrientationCorrection is always null. If the input image is in .jpeg
   * format, it might contain exchangeable image file format (Exif) metadata that includes the
   * image's orientation. Amazon Rekognition uses this orientation information to perform image
   * correction. The bounding box coordinates are translated to represent object locations after the
   * orientation information in the Exif metadata is used to correct the image orientation. Images
   * in .png format don't contain Exif metadata. Amazon Rekognition doesn’t perform image correction
   * for images in .png format and .jpeg imag
   */
  targetImageOrientationCorrection?: TargetImageOrientationCorrection;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const compareFacesResponseSchema: Schema<CompareFacesResponse> = s.object<CompareFacesResponse>(
  {
    sourceImageFace: s.optional(s.lazy(() => comparedSourceImageFaceSchema)),
    faceMatches: s.optional(s.array(s.lazy(() => compareFacesMatchSchema))),
    unmatchedFaces: s.optional(s.array(s.lazy(() => comparedFaceSchema))),
    sourceImageOrientationCorrection: s.optional(s.lazy(() => sourceImageOrientationCorrectionSchema)),
    targetImageOrientationCorrection: s.optional(s.lazy(() => targetImageOrientationCorrectionSchema)),
    _keysMap: {
      sourceImageFace: "SourceImageFace",
      faceMatches: "FaceMatches",
      unmatchedFaces: "UnmatchedFaces",
      sourceImageOrientationCorrection: "SourceImageOrientationCorrection",
      targetImageOrientationCorrection: "TargetImageOrientationCorrection",
    },
  },
  { additionalProperties: s.json() },
);
