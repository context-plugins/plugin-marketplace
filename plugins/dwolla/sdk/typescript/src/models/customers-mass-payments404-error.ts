import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CustomersMassPayments404Error = {
  code?: string;
  message?: string;
};

export const customersMassPayments404ErrorSchema: Schema<CustomersMassPayments404Error> =
  s.object<CustomersMassPayments404Error>({
    code: s.optional(s.string()),
    message: s.optional(s.string()),
  });
