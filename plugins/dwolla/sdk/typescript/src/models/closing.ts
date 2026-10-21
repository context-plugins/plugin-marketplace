import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Closing = {
  value?: string;
  currency?: string;
};

export const closingSchema: Schema<Closing> = s.object<Closing>({
  value: s.optional(s.string()),
  currency: s.optional(s.string()),
});
