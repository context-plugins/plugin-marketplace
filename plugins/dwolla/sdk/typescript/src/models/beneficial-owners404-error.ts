import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BeneficialOwners404Error = {
  code?: string;
  message?: string;
};

export const beneficialOwners404ErrorSchema: Schema<BeneficialOwners404Error> =
  s.object<BeneficialOwners404Error>({
    code: s.optional(s.string()),
    message: s.optional(s.string()),
  });
