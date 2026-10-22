import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Customers404Error = {
  code?: string;
  message?: string;
};

export const customers404ErrorSchema: Schema<Customers404Error> = s.object<Customers404Error>({
  code: s.optional(s.string()),
  message: s.optional(s.string()),
});
