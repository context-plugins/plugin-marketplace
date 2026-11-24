import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Lang = {
  En: "en",
  De: "de",
  Fr: "fr",
} as const;
export type Lang = (typeof Lang)[keyof typeof Lang] | (string & {});

export const langSchema: EnumSchema<Lang> = s.enumOf<Lang>(Lang);
