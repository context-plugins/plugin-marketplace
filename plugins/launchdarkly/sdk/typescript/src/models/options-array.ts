import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OptionsArray = {
  label?: string;
  value?: string;
};

export const optionsArraySchema: Schema<OptionsArray> = s.object<OptionsArray>({
  label: s.optional(s.string()),
  value: s.optional(s.string()),
});
