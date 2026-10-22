import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dynamicOptionsSchema, type DynamicOptions } from "./dynamic-options.js";

export type FormVariable = {
  key?: string;
  name?: string;
  type?: string;
  description?: string;
  placeholder?: string;
  isOptional?: boolean;
  defaultValue?: Record<string, unknown>;
  allowedValues?: string[];
  dynamicOptions?: DynamicOptions;
};

export const formVariableSchema: Schema<FormVariable> = s.object<FormVariable>({
  key: s.optional(s.string()),
  name: s.optional(s.string()),
  type: s.optional(s.string()),
  description: s.optional(s.string()),
  placeholder: s.optional(s.string()),
  isOptional: s.optional(s.boolean()),
  defaultValue: s.optional(s.record(s.string(), s.unknown())),
  allowedValues: s.optional(s.array(s.string())),
  dynamicOptions: s.optional(s.lazy(() => dynamicOptionsSchema)),
});
