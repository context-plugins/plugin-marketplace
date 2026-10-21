import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Infrastructure-as-code family that provisioned the AWS resources (absent means cloudformation).
 */
export const TemplateFamilyOptionsCriblSourceProvenance = {
  Cloudformation: "cloudformation",
  Terraform: "terraform",
} as const;
export type TemplateFamilyOptionsCriblSourceProvenance =
  | (typeof TemplateFamilyOptionsCriblSourceProvenance)[keyof typeof TemplateFamilyOptionsCriblSourceProvenance]
  | (string & {});

export const templateFamilyOptionsCriblSourceProvenanceSchema: EnumSchema<TemplateFamilyOptionsCriblSourceProvenance> =
  s.enumOf<TemplateFamilyOptionsCriblSourceProvenance>(TemplateFamilyOptionsCriblSourceProvenance);
