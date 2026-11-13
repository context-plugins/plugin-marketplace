import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The integration type of the file (e.g. google, dropbox, box). */
export const Type1 = {
  Google: "google",
  Url: "url",
  Dropbox: "dropbox",
  Box: "box",
  Onedrive: "onedrive",
} as const;
export type Type1 = (typeof Type1)[keyof typeof Type1] | (string & {});

export const type1Schema: EnumSchema<Type1> = s.enumOf<Type1>(Type1);
