import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** F - female, M - male, O - other */
export const Gender = {
  F: "F",
  M: "M",
  O: "O",
} as const;
export type Gender = (typeof Gender)[keyof typeof Gender] | (string & {});

export const genderSchema: EnumSchema<Gender> = s.enumOf<Gender>(Gender);
