import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The patient's preferred pronouns that the user wants to provide as a context for clinical note
 * generation.
 */
export const Pronouns = {
  HeHim: "HE_HIM",
  SheHer: "SHE_HER",
  TheyThem: "THEY_THEM",
} as const;
export type Pronouns = (typeof Pronouns)[keyof typeof Pronouns] | (string & {});

export const pronounsSchema: EnumSchema<Pronouns> = s.enumOf<Pronouns>(Pronouns);
