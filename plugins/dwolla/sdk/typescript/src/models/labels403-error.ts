import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Labels403Error = {
  code?: string;
  message?: string;
};

export const labels403ErrorSchema: Schema<Labels403Error> = s.object<Labels403Error>({
  code: s.optional(s.string()),
  message: s.optional(s.string()),
});
