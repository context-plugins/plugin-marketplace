import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CustomersLabels404Error = {
  code?: string;
  message?: string;
};

export const customersLabels404ErrorSchema: Schema<CustomersLabels404Error> =
  s.object<CustomersLabels404Error>({
    code: s.optional(s.string()),
    message: s.optional(s.string()),
  });
