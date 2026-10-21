import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CustomersDocuments413Error = {
  code?: string;
  message?: string;
};

export const customersDocuments413ErrorSchema: Schema<CustomersDocuments413Error> =
  s.object<CustomersDocuments413Error>({
    code: s.optional(s.string()),
    message: s.optional(s.string()),
  });
