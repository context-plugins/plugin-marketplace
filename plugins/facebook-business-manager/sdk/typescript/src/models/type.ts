import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of post content */
export const Type = {
  Link: "link",
  Status: "status",
  Photo: "photo",
  Video: "video",
  Offer: "offer",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
