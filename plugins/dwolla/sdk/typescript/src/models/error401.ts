import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Error401 = {
  code?: string;
  message?: string;
};

export const error401Schema: Schema<Error401> = s.object<Error401>({
  code: s.optional(s.string()),
  message: s.optional(s.string()),
});
