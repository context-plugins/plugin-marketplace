import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Customers400Error = {
  code?: string;
  message?: string;
};

export const customers400ErrorSchema: Schema<Customers400Error> = s.object<Customers400Error>({
  code: s.optional(s.string()),
  message: s.optional(s.string()),
});
