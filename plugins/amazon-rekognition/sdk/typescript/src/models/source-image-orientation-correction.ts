import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The value of SourceImageOrientationCorrection is always null. If the input image is in .jpeg
 * format, it might contain exchangeable image file format (Exif) metadata that includes the image's
 * orientation. Amazon Rekognition uses this orientation information to perform image correction.
 * The bounding box coordinates are translated to represent object locations after the orientation
 * information in the Exif metadata is used to correct the image orientation. Images in .png format
 * don't contain Exif metadata. Amazon Rekognition doesn’t perform image correction for images in
 * .png format and .jpeg imag
 */
export const SourceImageOrientationCorrection = {
  Rotate0: "ROTATE_0",
  Rotate90: "ROTATE_90",
  Rotate180: "ROTATE_180",
  Rotate270: "ROTATE_270",
} as const;
export type SourceImageOrientationCorrection =
  | (typeof SourceImageOrientationCorrection)[keyof typeof SourceImageOrientationCorrection]
  | (string & {});

export const sourceImageOrientationCorrectionSchema: EnumSchema<SourceImageOrientationCorrection> =
  s.enumOf<SourceImageOrientationCorrection>(SourceImageOrientationCorrection);
