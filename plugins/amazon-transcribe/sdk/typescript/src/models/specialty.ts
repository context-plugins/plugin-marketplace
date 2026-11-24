import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Describes the medical specialty represented in your media. */
export const Specialty = {
  Primarycare: "PRIMARYCARE",
} as const;
export type Specialty = (typeof Specialty)[keyof typeof Specialty] | (string & {});

export const specialtySchema: EnumSchema<Specialty> = s.enumOf<Specialty>(Specialty);
