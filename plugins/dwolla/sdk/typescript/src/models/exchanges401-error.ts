import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Exchanges401Error = {
  code?: string;
  message?: string;
};

export const exchanges401ErrorSchema: Schema<Exchanges401Error> = s.object<Exchanges401Error>({
  code: s.optional(s.string()),
  message: s.optional(s.string()),
});
