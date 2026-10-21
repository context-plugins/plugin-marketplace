import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Exchanges404Error = {
  code?: string;
  message?: string;
};

export const exchanges404ErrorSchema: Schema<Exchanges404Error> = s.object<Exchanges404Error>({
  code: s.optional(s.string()),
  message: s.optional(s.string()),
});
