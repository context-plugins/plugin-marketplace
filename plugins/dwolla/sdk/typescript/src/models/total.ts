import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Total = {
  value?: string;
  currency?: string;
};

export const totalSchema: Schema<Total> = s.object<Total>({
  value: s.optional(s.string()),
  currency: s.optional(s.string()),
});
