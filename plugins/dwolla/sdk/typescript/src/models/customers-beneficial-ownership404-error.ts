import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CustomersBeneficialOwnership404Error = {
  code?: string;
  message?: string;
};

export const customersBeneficialOwnership404ErrorSchema: Schema<CustomersBeneficialOwnership404Error> =
  s.object<CustomersBeneficialOwnership404Error>({
    code: s.optional(s.string()),
    message: s.optional(s.string()),
  });
