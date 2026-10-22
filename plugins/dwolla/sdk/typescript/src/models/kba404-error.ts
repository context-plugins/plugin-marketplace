import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Kba404Error = {
  code?: string;
  message?: string;
};

export const kba404ErrorSchema: Schema<Kba404Error> = s.object<Kba404Error>({
  code: s.optional(s.string()),
  message: s.optional(s.string()),
});
