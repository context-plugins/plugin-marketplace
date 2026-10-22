import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CustomersBeneficialOwners404Error = {
  code?: string;
  message?: string;
};

export const customersBeneficialOwners404ErrorSchema: Schema<CustomersBeneficialOwners404Error> =
  s.object<CustomersBeneficialOwners404Error>({
    code: s.optional(s.string()),
    message: s.optional(s.string()),
  });
