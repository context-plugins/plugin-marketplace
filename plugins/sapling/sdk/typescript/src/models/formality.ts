import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Optional register: "formal" (vous/Sie/usted) or "informal" (tu/du/tú). Omit for the model
 * default.
 */
export const Formality = {
  Formal: "formal",
  Informal: "informal",
} as const;
export type Formality = (typeof Formality)[keyof typeof Formality] | (string & {});

export const formalitySchema: EnumSchema<Formality> = s.enumOf<Formality>(Formality);
