import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Customers403Error = {
  code?: string;
  message?: string;
};

export const customers403ErrorSchema: Schema<Customers403Error> = s.object<Customers403Error>({
  code: s.optional(s.string()),
  message: s.optional(s.string()),
});
