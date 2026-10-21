import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Validation = {
  minLength?: number;
  maxLength?: number;
};

export const validationSchema: Schema<Validation> = s.object<Validation>({
  minLength: s.optional(s.int()),
  maxLength: s.optional(s.int()),
});
