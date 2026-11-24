import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of detected PPE. */
export const Type3 = {
  FaceCover: "FACE_COVER",
  HandCover: "HAND_COVER",
  HeadCover: "HEAD_COVER",
} as const;
export type Type3 = (typeof Type3)[keyof typeof Type3] | (string & {});

export const type3Schema: EnumSchema<Type3> = s.enumOf<Type3>(Type3);
