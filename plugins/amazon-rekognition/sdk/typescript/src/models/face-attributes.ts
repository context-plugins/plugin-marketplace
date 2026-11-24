import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The face attributes you want returned. DEFAULT - The following subset of facial attributes are
 * returned: BoundingBox, Confidence, Pose, Quality and Landmarks. ALL - All facial attributes are
 * returned.
 */
export const FaceAttributes = {
  Default: "DEFAULT",
  All: "ALL",
} as const;
export type FaceAttributes = (typeof FaceAttributes)[keyof typeof FaceAttributes] | (string & {});

export const faceAttributesSchema: EnumSchema<FaceAttributes> = s.enumOf<FaceAttributes>(FaceAttributes);
