import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Accounts403Error = {
  code?: string;
  message?: string;
};

export const accounts403ErrorSchema: Schema<Accounts403Error> = s.object<Accounts403Error>({
  code: s.optional(s.string()),
  message: s.optional(s.string()),
});
