import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Mollie applies Dutch VAT for merchants based in The Netherlands, British VAT for merchants based
 * in The United Kingdom, and shifted VAT for merchants in the European Union.
 *
 * The field can be omitted for merchants residing in other countries.
 */
export const OnboardingVatRegulation = {
  Dutch: "dutch",
  British: "british",
  Shifted: "shifted",
} as const;
export type OnboardingVatRegulation =
  | (typeof OnboardingVatRegulation)[keyof typeof OnboardingVatRegulation]
  | (string & {});

export const onboardingVatRegulationSchema: EnumSchema<OnboardingVatRegulation> =
  s.enumOf<OnboardingVatRegulation>(OnboardingVatRegulation);
