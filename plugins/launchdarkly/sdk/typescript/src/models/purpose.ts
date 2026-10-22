import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Purpose of the flag */
export const Purpose = {
  Migration: "migration",
  Holdout: "holdout",
} as const;
export type Purpose = (typeof Purpose)[keyof typeof Purpose] | (string & {});

export const purposeSchema: EnumSchema<Purpose> = s.enumOf<Purpose>(Purpose);
