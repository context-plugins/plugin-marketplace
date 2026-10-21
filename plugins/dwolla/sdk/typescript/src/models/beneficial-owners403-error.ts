import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BeneficialOwners403Error = {
  code?: string;
  message?: string;
};

export const beneficialOwners403ErrorSchema: Schema<BeneficialOwners403Error> =
  s.object<BeneficialOwners403Error>({
    code: s.optional(s.string()),
    message: s.optional(s.string()),
  });
