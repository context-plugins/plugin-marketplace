import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The picture type. Currently, we only offer pictures of type "photo". */
export const Type3 = {
  Photo: "photo",
  Thumbnail: "thumbnail",
} as const;
export type Type3 = (typeof Type3)[keyof typeof Type3] | (string & {});

export const type3Schema: EnumSchema<Type3> = s.enumOf<Type3>(Type3);
