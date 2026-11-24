import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Optional. [Optional; Default is \"web\"] Type of report: search type, or either Discover or
 * Gnews.
 */
export const Type = {
  Web: "WEB",
  Image: "IMAGE",
  Video: "VIDEO",
  News: "NEWS",
  Discover: "DISCOVER",
  GoogleNews: "GOOGLE_NEWS",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
