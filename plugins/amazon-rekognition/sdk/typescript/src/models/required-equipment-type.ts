import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RequiredEquipmentType = {
  FaceCover: "FACE_COVER",
  HandCover: "HAND_COVER",
  HeadCover: "HEAD_COVER",
} as const;
export type RequiredEquipmentType =
  | (typeof RequiredEquipmentType)[keyof typeof RequiredEquipmentType]
  | (string & {});

export const requiredEquipmentTypeSchema: EnumSchema<RequiredEquipmentType> =
  s.enumOf<RequiredEquipmentType>(RequiredEquipmentType);
