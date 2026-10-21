import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CustomersExchanges404Error = {
  code?: string;
  message?: string;
};

export const customersExchanges404ErrorSchema: Schema<CustomersExchanges404Error> =
  s.object<CustomersExchanges404Error>({
    code: s.optional(s.string()),
    message: s.optional(s.string()),
  });
