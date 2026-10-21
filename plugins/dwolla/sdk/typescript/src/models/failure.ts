import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Failure = {
  code?: string;
  description?: string;
};

export const failureSchema: Schema<Failure> = s.object<Failure>({
  code: s.optional(s.string()),
  description: s.optional(s.string()),
});
