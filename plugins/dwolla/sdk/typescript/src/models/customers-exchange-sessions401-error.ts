import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CustomersExchangeSessions401Error = {
  code?: string;
  message?: string;
};

export const customersExchangeSessions401ErrorSchema: Schema<CustomersExchangeSessions401Error> =
  s.object<CustomersExchangeSessions401Error>({
    code: s.optional(s.string()),
    message: s.optional(s.string()),
  });
