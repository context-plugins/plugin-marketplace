import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * If your collection is associated with a face detection model that's later than version 3.0, the
 * value of OrientationCorrection is always null and no orientation information is returned. If your
 * collection is associated with a face detection model that's version 3.0 or earlier, the following
 * applies: If the input image is in .jpeg format, it might contain exchangeable image file format
 * (Exif) metadata that includes the image's orientation. Amazon Rekognition uses this orientation
 * information to perform image correction - the bounding box coordinates are translated to
 * represent object locations
 */
export const OrientationCorrectionAmazonRekognitionFaceCollectionsApi = {
  Rotate0: "ROTATE_0",
  Rotate90: "ROTATE_90",
  Rotate180: "ROTATE_180",
  Rotate270: "ROTATE_270",
} as const;
export type OrientationCorrectionAmazonRekognitionFaceCollectionsApi =
  | (typeof OrientationCorrectionAmazonRekognitionFaceCollectionsApi)[keyof typeof OrientationCorrectionAmazonRekognitionFaceCollectionsApi]
  | (string & {});

export const orientationCorrectionAmazonRekognitionFaceCollectionsApiSchema: EnumSchema<OrientationCorrectionAmazonRekognitionFaceCollectionsApi> =
  s.enumOf<OrientationCorrectionAmazonRekognitionFaceCollectionsApi>(
    OrientationCorrectionAmazonRekognitionFaceCollectionsApi,
  );
