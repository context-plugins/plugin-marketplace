import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CustomersDocuments404Error = {
  code?: string;
  message?: string;
};

export const customersDocuments404ErrorSchema: Schema<CustomersDocuments404Error> =
  s.object<CustomersDocuments404Error>({
    code: s.optional(s.string()),
    message: s.optional(s.string()),
  });
