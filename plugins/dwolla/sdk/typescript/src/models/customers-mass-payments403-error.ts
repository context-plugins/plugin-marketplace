import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CustomersMassPayments403Error = {
  code?: string;
  message?: string;
};

export const customersMassPayments403ErrorSchema: Schema<CustomersMassPayments403Error> =
  s.object<CustomersMassPayments403Error>({
    code: s.optional(s.string()),
    message: s.optional(s.string()),
  });
