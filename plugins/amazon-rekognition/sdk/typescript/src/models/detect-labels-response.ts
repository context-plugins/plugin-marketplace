import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  detectLabelsImagePropertiesSchema,
  type DetectLabelsImageProperties,
} from "./detect-labels-image-properties.js";
import { labelSchema, type Label } from "./label.js";
import {
  orientationCorrectionAmazonRekognitionFacialAnalysisApiSchema,
  type OrientationCorrectionAmazonRekognitionFacialAnalysisApi,
} from "./orientation-correction-amazon-rekognition-facial-analysis-api.js";

export type DetectLabelsResponse = {
  /** An array of labels for the real-world objects detected. */
  labels?: Label[];
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
  /** Version number of the label detection model that was used to detect labels. */
  labelModelVersion?: string;
  imageProperties?: DetectLabelsImageProperties;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const detectLabelsResponseSchema: Schema<DetectLabelsResponse> = s.object<DetectLabelsResponse>(
  {
    labels: s.optional(s.array(s.lazy(() => labelSchema))),
    orientationCorrection: s.optional(
      s.lazy(() => orientationCorrectionAmazonRekognitionFacialAnalysisApiSchema),
    ),
    labelModelVersion: s.optional(s.string()),
    imageProperties: s.optional(s.lazy(() => detectLabelsImagePropertiesSchema)),
    _keysMap: {
      labels: "Labels",
      orientationCorrection: "OrientationCorrection",
      labelModelVersion: "LabelModelVersion",
      imageProperties: "ImageProperties",
    },
  },
  { additionalProperties: s.json() },
);
