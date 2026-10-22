import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Option = {
  id?: string;
  label?: string;
};

export const optionSchema: Schema<Option> = s.object<Option>({
  id: s.optional(s.string()),
  label: s.optional(s.string()),
});
