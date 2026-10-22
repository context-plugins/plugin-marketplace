import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { optionsArraySchema, type OptionsArray } from "./options-array.js";

export type DynamicOptionsParser = {
  optionsItems?: OptionsArray;
  optionsPath?: string;
};

export const dynamicOptionsParserSchema: Schema<DynamicOptionsParser> = s.object<DynamicOptionsParser>({
  optionsItems: s.optional(s.lazy(() => optionsArraySchema)),
  optionsPath: s.optional(s.string()),
});
