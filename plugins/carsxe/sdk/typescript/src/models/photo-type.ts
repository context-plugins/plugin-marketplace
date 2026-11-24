import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PhotoType = {
  Interior: "interior",
  Exterior: "exterior",
  Engine: "engine",
} as const;
export type PhotoType = (typeof PhotoType)[keyof typeof PhotoType] | (string & {});

export const photoTypeSchema: EnumSchema<PhotoType> = s.enumOf<PhotoType>(PhotoType);
