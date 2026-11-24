import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Atom type. */
export const Type = {
  Atom: "ATOM",
  Molecule: "MOLECULE",
  Cloud: "CLOUD",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
