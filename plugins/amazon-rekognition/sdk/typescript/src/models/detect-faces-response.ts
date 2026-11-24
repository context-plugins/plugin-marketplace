import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { faceDetailSchema, type FaceDetail } from "./face-detail.js";
import {
  orientationCorrectionAmazonRekognitionFacialAnalysisApiSchema,
  type OrientationCorrectionAmazonRekognitionFacialAnalysisApi,
} from "./orientation-correction-amazon-rekognition-facial-analysis-api.js";

export type DetectFacesResponse = {
  /** Details of each face found in the image. */
  faceDetails?: FaceDetail[];
  /**
   * The value of OrientationCorrection is always null. If the input image is in .jpeg format, it
   * might contain exchangeable image file format (Exif) metadata that includes the image's
   * orientation. Amazon Rekognition uses this orientation information to perform image correction.
   * The bounding box coordinates are translated to represent object locations after the orientation
   * information in the Exif metadata is used to correct the image orientation. Images in .png
   * format don't contain Exif metadata. Amazon Rekognition doesn’t perform image correction for
   * images in .png format and .jpeg images without
   */
  orientationCorrection?: OrientationCorrectionAmazonRekognitionFacialAnalysisApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const detectFacesResponseSchema: Schema<DetectFacesResponse> = s.object<DetectFacesResponse>(
  {
    faceDetails: s.optional(s.array(s.lazy(() => faceDetailSchema))),
    orientationCorrection: s.optional(
      s.lazy(() => orientationCorrectionAmazonRekognitionFacialAnalysisApiSchema),
    ),
    _keysMap: {
      faceDetails: "FaceDetails",
      orientationCorrection: "OrientationCorrection",
    },
  },
  { additionalProperties: s.json() },
);
