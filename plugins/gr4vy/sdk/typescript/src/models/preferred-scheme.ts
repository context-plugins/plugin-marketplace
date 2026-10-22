import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PreferredScheme = {
  Bancontact: "bancontact",
  CarteBancaire: "carte-bancaire",
  Dankort: "dankort",
  Mastercard: "mastercard",
  Visa: "visa",
  EftposAustralia: "eftpos-australia",
} as const;
export type PreferredScheme = (typeof PreferredScheme)[keyof typeof PreferredScheme] | (string & {});

export const preferredSchemeSchema: EnumSchema<PreferredScheme> = s.enumOf<PreferredScheme>(PreferredScheme);
