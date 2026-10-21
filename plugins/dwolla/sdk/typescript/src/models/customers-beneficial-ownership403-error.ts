import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CustomersBeneficialOwnership403Error = {
  code?: string;
  message?: string;
};

export const customersBeneficialOwnership403ErrorSchema: Schema<CustomersBeneficialOwnership403Error> =
  s.object<CustomersBeneficialOwnership403Error>({
    code: s.optional(s.string()),
    message: s.optional(s.string()),
  });
