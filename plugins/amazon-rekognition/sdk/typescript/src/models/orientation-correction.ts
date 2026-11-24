import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Support for estimating image orientation using the the OrientationCorrection field has ceased as
 * of August 2021. Any returned values for this field included in an API response will always be
 * NULL. The orientation of the input image (counterclockwise direction). If your application
 * displays the image, you can use this value to correct the orientation. The bounding box
 * coordinates returned in CelebrityFaces and UnrecognizedFaces represent face locations before the
 * image orientation is corrected. If the input image is in .jpeg format, it might contain
 * exchangeable image (Exif) metadata that inclu
 */
export const OrientationCorrection = {
  Rotate0: "ROTATE_0",
  Rotate90: "ROTATE_90",
  Rotate180: "ROTATE_180",
  Rotate270: "ROTATE_270",
} as const;
export type OrientationCorrection =
  | (typeof OrientationCorrection)[keyof typeof OrientationCorrection]
  | (string & {});

export const orientationCorrectionSchema: EnumSchema<OrientationCorrection> =
  s.enumOf<OrientationCorrection>(OrientationCorrection);
