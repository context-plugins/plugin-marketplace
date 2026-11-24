import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Provides the medical specialty represented in your media. */
export const Specialty1 = {
  Primarycare: "PRIMARYCARE",
} as const;
export type Specialty1 = (typeof Specialty1)[keyof typeof Specialty1] | (string & {});

export const specialty1Schema: EnumSchema<Specialty1> = s.enumOf<Specialty1>(Specialty1);
