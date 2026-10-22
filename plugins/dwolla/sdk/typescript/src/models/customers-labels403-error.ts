import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CustomersLabels403Error = {
  code?: string;
  message?: string;
};

export const customersLabels403ErrorSchema: Schema<CustomersLabels403Error> =
  s.object<CustomersLabels403Error>({
    code: s.optional(s.string()),
    message: s.optional(s.string()),
  });
